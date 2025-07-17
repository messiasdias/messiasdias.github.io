<template>
    <!-- #0a0a23 #87ceeb rgb(59, 64, 81) -->
    <svg 
        width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg" style="position: fixed; top: 0; left: 0; z-index: -1; background: transparent"
    >
        <defs>
            <line id="raindrop" x1="0" y1="0" x2="0" y2="2" stroke="white" stroke-width="0.3" />
        </defs>

        <!-- Gotas de chuva -->
        <g v-if="it_is_rain" >
            <use v-for="gota in gotas" :key="gota" :x="getXValue()" :y="getXValue()" href="#raindrop" > 
                <animate :dur="getDurValue(gota)" attributeName="y" from="0" to="100" repeatCount="indefinite" begin="0s" />
            </use>
        </g>

    </svg>
</template>

<script>
import axios from 'axios'
import { emitter } from './../../assets/js/event-bus'
export default {
    name: "background-comp",
    props: {
        it_is_rain: {
            type: Boolean,
            default: false,
        },
        is_day: {
            type: Boolean,
            default: () => {}
        },
        opacity: {
            type: Number,
            default: 1
        },
        by_location: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            meteo: null,
            gotas: [...Array(100).keys()]
        }
    },
    methods: {
        getXValue(){
            return parseInt(Math.random() * 100)
        },
        getDurValue(index = 0){
            return `${(index/(this.meteo?.current?.wind_speed_10m || 10))/10}s`
        },
        getMeteoUrl(lat, lng){
            const options = 'rain,wind_speed_10m,relative_humidity_2m,temperature_2m,is_day,cloud_cover'
            return `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=${options}`//&hourly=${options}`
        },
        getCoordenates(callback = () => {}) {
            if ('geolocation' in navigator) {
                navigator.geolocation.getCurrentPosition(
                    (position) => callback(position.coords.latitude, position.coords.longitude),
                    (error) => {
                        console.debug(`Error getCoordenates(${error.code}): ${error.message}`)
                        this.getMeteoDate() //Busca localização até encontrar
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    }
                );
            } else {
                console.debug("Geolocation is not supported by this browser.");
            }
        },
        getMeteoDate() {
            this.getCoordenates((lat, lng) => {
                axios
                    .get(this.getMeteoUrl(lat, lng))
                    .then((resp) => {
                        this.meteo = resp.data
                        const rain = this.meteo.current.rain > 0
                        const day = this.meteo.current.is_day == 1
                        const opct = day & !rain ? (Math.round(this.meteo.current.cloud_cover/10) - 2) : 7
                        this.$emit('setOpacity', opct)
                        this.$emit('setIsDay', day)
                        this.$emit('setItIsRain', rain)
                        this.$emit('setWindSpeed',this.meteo.current.wind_speed_10m)
                    })
            })
        }
    },
    mounted(){
        emitter.on('setByLocation', this.getMeteoDate)
        if(this.by_location) {this.getMeteoDate()}
    }
}

</script>