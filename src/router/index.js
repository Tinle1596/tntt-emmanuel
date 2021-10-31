import Vue from 'vue'
import VueRouter from 'vue-router'
import { getUserState } from '../firebase'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: {requiresUnauth: true}    
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/Logout.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/Admin.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/bulletinboard',
    name: 'bulletinboard',
    component: () => import('../views/bulletinboard/BulletinBoard.vue'),
    meta: {requiresAuth: true}
  },  
  {
    path: '/bulletinboard/bulletin/edit/:id',
    name: 'editbulletin',
    component: () => import('../components/bulletin/editbulletin.vue'),
    meta: {requiresAuth: true}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/leaders',
    name: 'Leaders', 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "leaders" */ '../views/Leaders.vue'),
    meta: {requiresAuth: true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async(to, from, next) => {
  const isAuth = await getUserState();  
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record =>record.meta.requiresUnauth)

  if(requiresAuth && !isAuth) next('/login')
  else if (requiresUnauth && isAuth) next('/')
  else next()
})

export default router
