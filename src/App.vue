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
    <Paisagem :wind_speed="wind_speed" :is_day="is_day" />
    <Background
      :setWindSpeed="setWindSpeed"
      :setOpacity="setOpacity" 
      :setIsDay="setIsDay" 
    />

    <Header/>
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
      is_day: 1,
      opacity: 1,
      wind_speed: 10
    }
  },
  methods: {
    setOpacity(opacity = 1){
      this.opacity = Math.round(opacity)
    },
    setIsDay(is_day = false){
      this.is_day = is_day
    },
    setWindSpeed(wind_speed = 10){
      this.wind_speed = wind_speed
    } 
  }
}
</script>