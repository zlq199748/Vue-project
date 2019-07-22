/*此文件是分类的状态模块*/
import {RECEIVE_CATEGORY} from '../mutation-types'
import {reqCategoryData} from '../../api'

const state={
  category:{}
}
const mutations ={
 [RECEIVE_CATEGORY](state,data){
     state.category=data
 }
}

const actions ={
  async getCategory({commit},callback){
     const result =await reqCategoryData()
     if (result.code===0){
       commit(RECEIVE_CATEGORY,result.data)
       callback()
     }
   }
}
const getters={}

export default {
  state,
  mutations,
  actions,
  getters
}


