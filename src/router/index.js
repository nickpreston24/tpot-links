// import VueRouter from "vue-router";
import {
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    component: () => import('../views/About.vue')
  },
  {
    path: '/issues',
    component: () => import('../views/Issues.vue')
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
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../views/NotFound.vue')
  }
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
