/*此文件是发现的状态模块*/
import {RECEIVE_INIT,RECEIVE_SEARCH} from '../mutation-types'
import {reqInit,reqSearch} from '../../api'

const state={
  totals:{},//提示数据内容
  itemtotal:{}//搜索

}
const mutations ={
[RECEIVE_INIT](state,data){
  state.totals=data
},
 [RECEIVE_SEARCH](state){

 }
}

const actions ={
  //提示数据内容
  async searchContent({commit}){
     const  result = await reqInit()
    console.log(result,'-------提示内容的请求');
    if (result.code*1===200){
      commit(RECEIVE_INIT,result.data)
    }
  },
  async searchAbout({commit}){
     const result =await reqSearch()
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



