import { createApp } from 'vue'
import App from './App.vue'

import './styles/style.css'

import router from './router'

import {createPinia} from 'pinia'
const pinia = createPinia()

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

for(const [key,compoent] of Object.entries(ElementPlusIconsVue)){
  app.component(key,compoent)
}

app.use(router).use(pinia).use(ElementPlus)


app.mount('#app')
