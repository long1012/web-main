import { defineStore } from 'pinia'
import AjaxAuthService from '@/service/api/auth'
import { ILoginParams } from '@/service/api/model/authModel'
import { useRouter } from 'vue-router'
const router = useRouter()

const LOGIN_INIT = 'LOGIN_INIT'
const LOGIN_OUT = 'LOGIN_OUT'

export const useMainStore = defineStore({
  id: 'main',
  state: (): any => ({
    token: '',
    userInfo: ''
  }),
  // getters
  getters: {},
  actions: {
    [LOGIN_INIT](params: ILoginParams) {
      return new Promise((resolve, reject) => {
        AjaxAuthService.login(params)
          .then((res) => {
            this.token = 'token123'
            this.userInfo = { name: '张三' }
            router.push({ path: '/layout', query: { loginStatus: 'true' } })
            resolve('')
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
