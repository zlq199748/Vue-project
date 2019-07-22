/*此文件是发现的状态模块*/
import {RECEIVE_TOPICMANUAL,RECEIVE_TOPICNAV} from '../mutation-types'
import {reqTopicNav,reqTopicManual} from '../../api'

const state={
  TopicNav:[],//导航
  TopicManual:[]//内容
}
const mutations ={
  [RECEIVE_TOPICNAV](state,data){

    state.TopicNav=data
  },

  [RECEIVE_TOPICMANUAL](state,data){
    state.TopicManual=data
  }

}

const actions ={
  //导航请求
  async getNav({commit}){
    const result =await reqTopicNav()
    if (result.code*1===200){
      commit(RECEIVE_TOPICNAV,result.data)
    }
  },
  //内容请求
  async getManual({commit}){
    const result =await reqTopicManual()
    if (result.code*1===200){

      commit(RECEIVE_TOPICMANUAL,result.data)
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



