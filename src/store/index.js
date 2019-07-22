/*包含多个数据的管理对象*/
import Vue from 'vue'
import Vuex from 'vuex'
import Topic from './modules/Topic'
import home from './modules/home'
import Expert from './modules/Expert'
import goods from './modules/goods'
import search from './modules/search'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
     Expert,
     home,
     goods,
     Topic,
     search
   }
 })
