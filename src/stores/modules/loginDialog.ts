import { defineStore } from 'pinia'
import { login, signup } from '@/api/index'
import type { loginParams, signupParams } from '@/api/interface'
import { ElMessage } from 'element-plus'
import { setToken } from '@/utils/token'
export const useLoginDialogStore = defineStore('loginDialog', {
  state: () => ({
    visible: false,
    time: 0
  }),
  actions: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    async setTimer(time: number) {
      this.time = time
      const timer = setInterval(() => {
        this.time--
        if (this.time <= 0) {
          clearInterval(timer)
          this.time = 0 // 确保时间不出现负值
        }
      }, 1000)
    },
    async login(query: loginParams) {
      try {
        const res = await login(query)
        if (res.code === 200) {
          this.hide()
          ElMessage.success('登录成功')
          console.log(res);
          setToken(res.data.token)
        } else {
          ElMessage.error(res.message)
        }
      } catch (error) {
        ElMessage.error(error as string)
      }
    },
    async signup(query: signupParams) {
      try {
        const res = await signup(query)
        if (res.code === 200) {
          this.hide()
          ElMessage.success('注册成功')
        } else {
          ElMessage.error(res.message)
        }
      } catch (error) {
        console.log(error)
        ElMessage.error(error as string)
      }
    }
  }
})
