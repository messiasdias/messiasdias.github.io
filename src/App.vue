<template>
  <div 
    id="app" 
    :class="[
      `app`,
      `background`,
      `opacity-${opacity}`,
      `theme-${is_day && opacity < 5 ? 'day' : 'night'}`
    ].join(' ')"
  >
    <Paisagem 
      :wind_speed="wind_speed"
      :it_is_rain="it_is_rain"
      :is_day="is_day" 
    />

    <Background
      @setWindSpeed="setWindSpeed"
      @setOpacity="setOpacity"
      @setItIsRain="setItIsRain" 
      @setIsDay="setIsDay"
      :by_location="by_location"
      :it_is_rain="it_is_rain"
      :opacity="opacity"
      :is_day="is_day"  
    />

    <Header
      @setByLocation="setByLocation"
      @setWindSpeed="setWindSpeed"
      @setOpacity="setOpacity"
      @setItIsRain="setItIsRain" 
      @setIsDay="setIsDay"
      :by_location="by_location"
      :wind_speed="wind_speed"
      :it_is_rain="it_is_rain"
      :opacity="opacity"
      :is_day="is_day"
    />

    <main class="main">
      <Sidebar />
      <RouterView />
    </main>

    <Footer />

  </div>
</template>

<script>
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'
import Background from './components/layout/Background'
import Paisagem from './components/layout/Paisagem'
import { emitter } from './assets/js/event-bus'

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Sidebar,
    Background,
    Paisagem
  },
  data() {
    return {
      is_day: true,
      opacity: 2,
      wind_speed: 10,
      it_is_rain: false,
      by_location: true,
    }
  },
  methods: {
    setOpacity(opacity = 1){
      this.opacity = Math.round(opacity)
      localStorage.setItem("opacity", JSON.stringify(this.opacity))
    },
    setIsDay(is_day = false){
      this.is_day = is_day
      localStorage.setItem("is_day", JSON.stringify(this.is_day))
    },
    setItIsRain(it_is_rain = false) {
      this.it_is_rain = it_is_rain
      localStorage.setItem("it_is_rain", JSON.stringify(this.it_is_rain))
    },
    setWindSpeed(wind_speed = 10){
      this.wind_speed = wind_speed
      localStorage.setItem("wind_speed", JSON.stringify(this.wind_speed))
    },
    setByLocation(by_location = true){
      this.by_location = by_location
      localStorage.setItem("by_location", JSON.stringify(this.by_location))
      emitter.emit('setByLocation', this.by_location)
    }
  },
  beforeMount() {
    this.is_day = JSON.parse(localStorage.getItem("is_day"))
    this.opacity = JSON.parse(localStorage.getItem("opacity"))
    this.wind_speed = JSON.parse(localStorage.getItem("wind_speed"))
    this.it_is_rain = JSON.parse(localStorage.getItem("it_is_rain"))
    this.by_location = JSON.parse(localStorage.getItem("by_location"))
  }
}
</script>