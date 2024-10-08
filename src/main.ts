
import './styles/style.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'
import pinia from '@/stores/index'
import directives from  '@/directive/index'

import App from './App.vue'
import router from './router'
import elementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 全局注册组件
import blogIcon from './components/blogIcon/index.vue'
import loginDialog from './components/loginDialog/index.vue'
const app = createApp(App)

// 遍历 ElementPlusIconsVue 中的所有图标组件并注册到应用中
for(const [key,compoent] of Object.entries(ElementPlusIconsVue)){
  app.component(key,compoent)
}
app.component('bIcon', blogIcon)
app.component('loginDialog', loginDialog)


// 注册全局指令
app.use(router).use(directives).use(elementPlus).use(pinia).mount('#app')