import Vue from 'vue'
import { Auth } from 'aws-amplify'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/index')
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import('../components/auth/index')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/list'),
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    Auth.currentAuthenticatedUser()
      .then(() => {
        next()
      })
      .catch(() => {
        next({
          path: '/auth'
        })
      })
  }
  next()
})

export default router
