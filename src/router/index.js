import { createRouter,createWebHashHistory } from "vue-router";
import home from '@/views/home.vue';
import layout from '@/layout/index.vue'

const routes = [
  {
    path:'/',
    component: layout
  },
  {
    path:'/title',
    component:()=>import('@/views/title.vue')
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router