import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import city from './city'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    user,
    city
  }
})
