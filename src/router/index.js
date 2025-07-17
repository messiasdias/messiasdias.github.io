import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Projects from '../views/Projects.vue'
import Feedback from '../views/Feedback.vue'
import Curriculum from '../views/Curriculum.vue'

const routes = [
  //Example with lazy-loaded
  // {
  //   path: '/page',
  //   name: 'page',
  //   // route level code-splitting
  //   // this generates a separate chunk (page.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "page" */ '../views/About.vue')
  // }
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/feedback',
    name: 'feedback',
    component: Feedback
  },
  {
    path: '/curriculum',
    name: 'curriculum',
    component: Curriculum
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'dash',
  routes
})

export default router
