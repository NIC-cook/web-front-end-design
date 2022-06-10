import Vue from 'vue'
import Vuex from 'vuex'
import {forEach} from "core-js/stable/dom-collections";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountId:0,
    cart:[
    ],

  },
  getters: {
  },
  mutations: {
    updateId(state,value){
      state.accountId=value;
      console.log(state.accountId)
    },
    updatecart(state,value){
      let goods= {

            goodsName:0,
            goodsId:10010,
            goodsCount:1,
      }
      goods.goodsName=value;
      goods.goodsCount="1.5$";
      goods.goodsId=Math.floor((Math.random()*100)+1);
      state.cart.push(goods);
      //console.log(state.cart);
    },
    deletecart(state,value){
      let cartx=[];
      for(let i=0;i<state.cart.length;i++){
        for (let j=0;j<value.length;j++){
          if(state.cart[i]==value[j]){
            state.cart.splice(i,1);
          }
        }
      }
    }

  },
  actions: {
  },
  modules: {
  },

})
