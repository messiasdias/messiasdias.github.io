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
        <g v-if="meteo.current.rain" >
            <use v-for="gota in gotas" :key="gota" :x="getXValue()" :y="getXValue()" href="#raindrop" > 
                <animate :dur="getDurValue(gota)" attributeName="y" from="0" to="100" repeatCount="indefinite" begin="0s" />
            </use>
        </g>
    </svg>
</template>

<script>
import axios from 'axios'
export default {
    //-8.0131188,-35.0152703
    // https://api.open-meteo.com/v1/forecast?latitude=-8.0131188&longitude=-35.0152703&current=rain,wind_speed_10m,relative_humidity_2m,temperature_2m,is_day,cloud_cover&hourly=rain,wind_speed_10m,relative_humidity_2m,temperature_2m,is_day,cloud_cover
    props: {
        velVento: {
            type: Number,
            default: 100
        },
        intensity: {
            type: Number,
            default: 100
        },
        setOpacity: {
            type: Function,
            default: () => {}
        },
        setIsDay: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            latitude: 0,  //temp
            longitude: 0, //temp
            gotas: [...Array(100).keys()],
            meteo: null
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
                        console.warn(`Error getCoordenates(${error.code}): ${error.message}`)
                        callback(-8.0131188,-35.0152703) //temp
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0
                    }
                );
                } else {
                    console.warn("Geolocation is not supported by this browser.");
                }
        },
        getMeteoDate() {
            // this.getCoordenates((lat, lng) => {
            //     this.latitude = lat || 0
            //     this.longitude = lng || 0
                axios
                    .get(this.getMeteoUrl(-8.0131188,-35.0152703))//lat, lng))
                    .then((resp) => {
                        this.meteo = resp.data
                        const opacity = !this.meteo.current.is_day ? (this.meteo.current.cloud_cover/10) : 9
                        this.setIsDay((this.meteo.current.is_day || opacity < 7))
                        this.setOpacity(opacity)
                    })

            // })
        }
    },
    mounted(){
        this.getMeteoDate()
    }
}

</script>