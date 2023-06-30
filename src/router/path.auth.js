
const routes = {
  path: '/auth',
  name: 'Auth',
  //                              js 파일을 나눠줌
  component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/Main.vue'),
  children: [
    {
      path: 'login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "auth" */ '@/views/auth/Login.vue'),
      meta: {isLoggedIn: false, layout: 'NoneLayout'}
    }
  ]
}

export default routes
