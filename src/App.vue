<template>
  <div 
    id="app" 
    :class="[
      `app`,
      `background`,
      `opacity-${opacity}`,
      `theme-${is_day ? 'day' : 'night'}`
    ].join(' ')"
  >
    <Background 
      :setOpacity="setOpacity" 
      :setIsDay="setIsDay" 
    />

    <BgPaisagem />

    <Header/>

    <main class="main">
      <Sidebar />
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script>
// import './assets/sass/main.scss'
import Header from './components/Layout/Header'
import Sidebar from './components/Layout/Sidebar'
import Footer from './components/Layout/Footer'
import Background from './components/Layout/Background  '
import BgPaisagem from './components/Layout/BgPaisagem'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    Sidebar,
    BgPaisagem,
    Background
  },
  data() {
    return {
      is_day: 1,
      opacity: 1
    }
  },
  methods: {
    setOpacity(opacity = 1){
      this.opacity = Math.round(opacity)
    },
    setIsDay(is_day = 1){
      this.is_day = is_day
    }
  }
}
</script>

