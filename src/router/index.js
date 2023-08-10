import { createRouter, createWebHistory } from 'vue-router'
import TestPage from '../views/TestPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TestPage
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
