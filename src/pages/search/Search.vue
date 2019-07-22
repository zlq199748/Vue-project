<template>
<div class="warp" v-if="totals.defaultKeyword">
  <div class="header">
    <i class="iconfont icon-sousuo"></i>
    <input class="input" @keyup="grabble" ref="searchInput" v-model="val" :placeholder="totals.defaultKeyword.keyword" maxlength="20" >
    <span class="icon">
    <i class="iconfont icon-cuowu" v-show="val" @click="mistake(val)"></i>
    </span>
    <span class="cancel" @click="cancel">取消</span>
  </div>

  <div class="content">
    <span v-if="!val">热门搜索</span>
  </div>
  <div class="footer" >
    <div class="default" v-if="!val">
    <ul>
      <li v-for="(item,index) in totals.hotKeywordVOList " :key="index">
        <a>{{item.keyword}}</a>
    </li>
    </ul>
    </div>
    <div class="seek" v-if="val">
    <ul>
      <li v-for="(item,index) in searchdata" :key="index">
        <p>{{item}}</p>
      </li>
    </ul>
    </div>
  </div>
</div>
</template>
<script>
  import {mapState} from 'vuex'
  import {reqSearch} from '../../api'
  export default{

    data(){
      return{
        val:'',
        searchdata:[]
        }
      },
    methods:{
      //点击清空输入
      mistake(val){
        this.val=''
      },
      //取消跳转
      cancel(){
        this.$router.back()
      },
      //实时发送请求
      async grabble(){
        const result = await reqSearch(this.val)
        if (result.code*1===200){
          this.searchdata = result.data
        }
      }
    },

    mounted(){
      this.$store.dispatch('searchContent')
    },
    computed:{
      ...mapState({

        totals:state=>state.search.totals//提示内容数据
      })
    },

//    watch: {
//      inputVal(curVal, oldVal) {
//        // 实现input连续输入，只发一次请求
//        clearTimeout(this.timeout);
//        this.timeout = setTimeout(() => {
//          this.getListPOI(curVal);
//        }, 300);
//      }
//    }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .warp
    overflow hidden
    width 100%
    height 100%
    background-color #ffffff
    .header
      margin-top .3rem
      margin-left .2rem
      width 700px
      height 60px
      background-color #f4f4f4
      border-radius: 4px;
      .iconfont
        font-size .45rem
        margin-left .3rem
        margin-right .2rem
      .input
        width 480px
        outline:none
        font-size .4rem
        background-color #f4f4f4
        margin-top .12rem
      .icon
        .iconfont
          margin-top .2rem
          background-color #f4f4f4
      .cancel
        font-size .38rem
    .content
      margin-top .2rem
      margin-left .2rem
      width 150px
      height 70px
      span
        font-size .4rem
        color #9999999

    .footer
      width 100%
      height 100%
      ul
        li
          line-height: .61333rem;
          border  1px solid #999;
          display inline-block
          margin-right .2rem
          margin-top .2rem
          margin-left .2rem
          a
            margin .2rem .2rem .2rem .2rem
            width 100%
            height 100%
            font-size .35rem
            color: #333;










</style>