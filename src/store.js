import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartItems: 12,
  },
  mutations: {
    addToCart (state) {
      state.cartItems++
    },
    removeFromCart (state) {
      state.cartItems--
    },
  },
  actions: {

  }
})
