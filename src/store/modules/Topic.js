/*此文件是发现的状态模块*/
import {RECEIVE_TOPICMANUAL,RECEIVE_TOPICNAV} from '../mutation-types'
import {reqTopicNav,reqTopicManual} from '../../api'

const state={
   topicNav:[],//导航
   topicManual:[]//内容
}
const mutations ={
 [RECEIVE_TOPICNAV](state,data){

   state.topicNav=data
 },

  [RECEIVE_TOPICMANUAL](state,data){
    state.topicManual=data
  }

}

const actions ={
  //导航请求
    async getNav({commit},callback){
      const result =await reqTopicNav()
      console.log(result);

      if (result.code*1===200){
        commit(RECEIVE_TOPICNAV,result.data)
        callback()
      }
    },
  //内容请求
    async getManual({commit},callback){
      const result =await reqTopicManual()
      console.log(result);
      if (result.code*1===200){
        commit(RECEIVE_TOPICMANUAL,result.data)
        callback()
      }
    }
 }
const getters={

}

export default {
  state,
  mutations,
  actions,
  getters
}



