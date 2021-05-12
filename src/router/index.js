import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'
import Dashboard from "@/views/Dashboard";
import About from "@/views/About";
import Login from "@/components/Login";
import Register from "@/components/Register";
import Chat from "@/views/Chat";



Vue.use(VueRouter)

const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.isAuthenticated) {
    next()
    return
  }
  next('/dashboard')
}

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isAuthenticated) {
    next()
    return
  }
  next('/login')
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
    beforeEnter: ifAuthenticated,
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
