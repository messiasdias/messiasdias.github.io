//"vue": "^2.6.11",
//"vue-router": "^3.3.4"
import Vue from 'vue'
import VueRouter from 'vue-router' 


//Routes
import Home from './components/pages/Home.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: Home }
]

Vue.use(VueRouter)
export default new VueRouter({ routes })