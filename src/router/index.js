import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout/layout.vue'
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";
import MainMallView from "@/views/MainMallView";

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
  },
  {
    path: '/main',
    name: 'main',
    component: MainMallView,
    children:[
      {
        path: 'MainMall',
        name: 'MainMall',
        component: MainMallView
      }
    ]
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
