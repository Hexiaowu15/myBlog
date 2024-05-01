import { createRouter,createWebHashHistory } from "vue-router";
import home from '@/views/home.vue';

const routes = [
  {
    path:'/',
    component: home
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