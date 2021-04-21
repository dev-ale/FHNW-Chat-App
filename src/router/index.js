import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from "@/views/Dashboard";
import About from "@/views/About";
import Login from "@/components/Login";
import Register from "@/components/Register";


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
