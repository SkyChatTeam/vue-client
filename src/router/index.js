import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'MainView',
      meta: {isLoggedIn: false, layout: 'DefaultLayout'},
      component: () => import(/* webpackChunkName: "common" */ '@/views/Main.vue')
    }
  ]
})

export default router
