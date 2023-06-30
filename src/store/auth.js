import {defineStore} from 'pinia'
import axUser from '@/api/client/user'

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      isLoggedIn: false,
      user: {
        userId: '',
        email: '',
        nickname: '',
        profileUrl: '@/assets/img/user_icon.png'
      }
    }
  },
  actions: {
    logout() {
      this.isLoggedIn = false
      this.user = {
        userId: '',
        email: '',
        nickname: '',
        profileUrl: '@/assets/img/user_icon.png'
      }
      sessionStorage.removeItem('accesstoken')
      localStorage.removeItem('accesstoken')
    },
    login(data) {
      this.user = data
      this.isLoggedIn = true
    },
    isUserNotLoggedIn() {
      return (
        sessionStorage.getItem('accesstoken') === null &&
        localStorage.getItem('accesstoken') === null &&
        this.user.userId === ''
      )
    }
  }
})

export {useAuthStore}
