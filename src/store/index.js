import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountId:0
  },
  getters: {
  },
  mutations: {
    updateId(state,value){
      state.accountId=value;
      console.log(state.accountId)
    }

  },
  actions: {
  },
  modules: {
  },

})
