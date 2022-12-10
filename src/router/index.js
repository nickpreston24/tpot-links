// import VueRouter from "vue-router";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/issues',
    name: 'Issues',
    component: () => import('../views/Issues.vue')
  },
  {
    name: 'Admin',
    path: '/admin',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/sandbox',
    name: 'Sandbox',
    component: () => import('../views/Sandbox.vue')
  },
  {
    path: '/signin',
    name: 'Sign In',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
  // {
  //   path: '/.*',
  //   name: 'Refreshed', // I'm using this to handle refreshed pages not rendering, e.g. /issues, refresh, 404.  Better to send them home
  //   component: Home
  // }
]
const router = createRouter({
  //  Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
        // , offset: { x: 0, y: 100 }
      }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
