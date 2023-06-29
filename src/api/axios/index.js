'use strict'

import axios from 'axios'
// import store from '@/store'
// import {deCrypted} from '@/utils/cryptJs'

const _axios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: false,
  timeout: 10000
})

_axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    let accessToken = sessionStorage.getItem('accesstoken') || localStorage.getItem('accesstoken')

    if (accessToken != null) {
      config.headers.Authorization = 'Bearer ' + accessToken
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  (response) => {
    if (response.headers['reMakeAccessToken']) {
      localStorage.setItem('accessToken', response.headers['reMakeAccessToken'])
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.headers['reMakeAccessToken']}`
    }
    // if (response.data.code === '110') {
    //   store.dispatch('logout')
    //   window.location.href = '/login'
    // }
    // response.data = deCrypted(JSON.stringify(response.data))
    return response
  },
  async (error) => {
    const {
      config,
      response: {status, data}
    } = error
    const originalRequest = config
    // console.log('er--------', data)

    if (status === 401 && data.code === 'T004') {
      return new Promise((resolve) => {
        // adminAuthAx.refreshToken((flag, accessToken) => {
        //   if (flag) {
        //     originalRequest.headers.Authorization = 'Bearer ' + accessToken
        //     resolve(axios(originalRequest))
        //   } else {
        //     // store.dispatch('logout')
        //     // router.replace({name: 'Login1'})
        //     return Promise.reject(new Error('로그인이 만료 되었습니다.1'))
        //   }
        // })
      })
    } else {
      return Promise.resolve(data)
      // await store.dispatch('logout')
      // return Promise.reject(new Error('통신에 오류가 있습니다.'))
    }
  }
)

export default _axios
