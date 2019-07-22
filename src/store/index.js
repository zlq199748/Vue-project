import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
Vuex.use(Vuex)
export default new Vuex.Store({
  modules:{
     home,
  }
})
