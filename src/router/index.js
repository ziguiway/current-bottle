import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/LayoutIndex.vue'),
      redirect: '/home',
      children: [
        {
          path: '/home',
          // name: 'home',
          component: () => import('@/views/home/HomeIndex.vue')
        },
        {
          path: '/message',
          // name: 'message',
          component: () => import('@/views/message/MessageIndex.vue')
        },
        {
          path: '/danamic',
          // name: 'danamic',
          component: () => import('@/views/dynamic/DynamicLayout.vue')
        },
        {
          path: '/circle',
          // name: 'circle',
          component: () => import('@/views/circle/CircleLayout.vue')
        },
        {
          path: '/my',
          // name: 'my',
          component: () => import('@/views/my/MyIndex.vue')
        }
      ]
    },
    {
      path: '/login',
      component: () => import('@/views/login/LoginIndex.vue')
    },
    {
      path: '/register',
      component: () => import('@/views/register/RegisterIndex.vue')
    }
  ]
})

export default router
