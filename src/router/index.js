import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../components/page/Login"
import Header from "../components/common/Header"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/header',
    name: 'header',
    component: Header
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
