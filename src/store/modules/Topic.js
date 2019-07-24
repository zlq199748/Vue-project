/*此文件是发现的状态模块*/
import {RECEIVE_TOPICMANUAL,RECEIVE_TOPICNAV} from '../mutation-types'
import {reqTopicNav} from '../../api'

const state={
   topicNav:[],//导航
}
const mutations ={
 [RECEIVE_TOPICNAV](state,data){

   state.topicNav=data
 },

}

const actions ={
  //导航请求
    async getNav({commit}){
      const result =await reqTopicNav()

      if (result.code*1===200){
        commit(RECEIVE_TOPICNAV,result.data)
      }
    },

 }
const getters={

}

export default {
  state,
  mutations,
  actions,
  getters
}



