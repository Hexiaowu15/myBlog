
import './styles/style.css'
import 'element-plus/dist/index.css'
import request from './utils/request'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
const app = createApp(App)

app.config.globalProperties.$request = request

app.use(createPinia())
app.use(router)
app.use(elementPlus)

app.mount('#app')
