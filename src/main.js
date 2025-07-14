import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import icon from './assets/js/icons'
import './assets/js/sw'
import './assets/css/app.css'

createApp(App)
  .use(store)
  .use(router)
  .component('font-awesome-icon', icon)
  .mount('#app')
