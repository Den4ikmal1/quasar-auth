import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import auth from './auth'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user,
    auth
  }
})

export default store
