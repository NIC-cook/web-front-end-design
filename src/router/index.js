import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../layout/layout.vue'
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";
import MainMallView from "@/views/MainMallView";
import ShoppingCart from "@/views/ShoppingCart";
import userHomeView from "@/views/userHomeView";
import SellerRegister from "@/views/SellerRegister";
import SellerRegister_admin from "@/views/SellerRegister_admin";

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
      },
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: layout,
    children:[
      {
        path: 'user',
        name: 'user',
        component: userHomeView
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: layout,
    children:[
      {
        path: 'SellerRegister',
        name: 'SellerRegister',
        component: SellerRegister
      }
    ]
  },
  {
    path: '/home',
    name: 'home',
    component: layout,
    children:[
      {
        path: 'SellerRegister_admin',
        name: 'SellerRegister_admin',
        component: SellerRegister_admin
      }
    ]
  },
  {
    path: '/main',
    name: 'main',
    component: MainMallView,
  },
  {
    path: '/ShoppingCart',
    name: 'ShoppingCart',
    component: ShoppingCart,
  },
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
