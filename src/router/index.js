import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/router/path.auth.js'

const routes = [
  {
    path: '/',
    name: 'MainView',
    meta: {isLoggedIn: false, layout: 'DefaultLayout'},
    component: () => import(/* webpackChunkName: "common" */ '@/views/Main.vue')
  }
  //라우터 추가
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach(async (to, from, next) => {
  next()
})
router.addRoute(AuthView)
export default router
