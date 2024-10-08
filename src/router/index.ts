import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/token'
import { useLoginDialogStore } from "@/stores/modules/loginDialog"
import layout from '@/layout/index.vue'

const whiteList = ['/index']

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: layout,
      children: [
        {
          path: '/index',
          name: 'index',
          component: () => import('@/views/index/index.vue')
        },
        {
          path: '/noteDetail',
          name: 'noteDetail',
          component: () => import('@/views/noteDetail/index.vue')
        },
        {
          path: '/publish',
          name: 'publish',
          component: () => import('@/views/publish/index.vue')
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  const loginDialogStore = useLoginDialogStore()
  if (!whiteList.includes(to.path)) {
    if (getToken()) {
      next()
    } else {
      loginDialogStore.show()
      next({ name: 'index' })
    }
  } else {
    next()
  }
})
export default router
