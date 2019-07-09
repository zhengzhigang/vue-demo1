import Vue from 'vue'
import App from './App.vue'

import router from './router'
import axios from 'axios'
import Vuex from 'vuex'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    count: 0
  },
  mutations: {
    addCount (state, arg) {
      state.count++;
    },
    minusCount (state, arg) {
      state.count--;
    }
  },
  actions: {
    addCount ({commit}, arg) {
      commit('addCount');
    },
    minusCount ({commit}, arg) {
      commit('minusCount');
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
