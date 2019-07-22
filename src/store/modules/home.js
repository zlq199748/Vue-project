/*此文件是home的状态模块*/
import {RECEIVE_HOMEDATA} from '../mutation-types'
import {homeData} from '../../api'

const state={
  homeData:{}
}
const mutations ={
    [RECEIVE_HOMEDATA](state,data){
          state.homeData=data
    }
  }

const actions ={
   async getHome({commit},callback){
       const result =await homeData()
      if (result.code===0){

        commit(RECEIVE_HOMEDATA,result.data)
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

