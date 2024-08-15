
import './styles/style.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 全局注册组件
import blogIcon from './components/blogIcon/index.vue'

const app = createApp(App)

for(const [key,compoent] of Object.entries(ElementPlusIconsVue)){
  app.component(key,compoent)
}

app.use(createPinia())
app.use(router)
app.use(elementPlus)

app.component('bIcon', blogIcon)

app.mount('#app')
