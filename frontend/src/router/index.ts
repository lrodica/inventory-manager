import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '@/services/session.service'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/LoginView.vue'),
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/DashboardView.vue'),
      meta: { requiresAuth: true }
    }
  ],
})

router.beforeEach((to, from, next) => {
  const authRequired = to.meta.requiresAuth

  if (authRequired && !isAuthenticated()) {
    next({ name: 'Login' })
    return
  }

  next()
})

export default router