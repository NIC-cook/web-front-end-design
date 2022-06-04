import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout/layout.vue'
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'home',
    component: layout,
    children:[
      {
        path: 'admin',
        name: 'admin',
        component: HomeView
      }
    ]
  }
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
