<template>
  <div>
    <div class="menu-wrapper" ref="wrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) in topicNav " @click="addClass(index)" :class="{on:index==current}" >{{item.tabName}}</li>
      </ul>
    </div>
    <div class="bscroll-content" ref="bscrollContent">
      <ul v-if="topicManual.length>0">
        <li v-for="(item,index) in topicManual" :key="index">
          <!--结构one内容-->
          <div class="content" v-if="itemChildren.style===1 && item.topics" v-for=" (itemChildren,index) in item.topics":key="">
          <div class="topic-List" v-if="itemChildren.style===1">
            <div class="topic-ListTop">
         <span>
           <img :src="itemChildren.avatar" alt="img">
         </span>
              <span class="xuan">{{itemChildren.nickname}}</span>
            </div>
            <div class="speak">{{itemChildren.title}}</div>
          </div>
          <div class="picture">
            <img :src="itemChildren.picUrl" alt="img">
          </div>
          <div class="icon">
            <i class="iconfont icon-sousuo"></i>
            <span>{{itemChildren.readCount}}看过</span>
          </div>
        </div>
          <div class="content-two" v-if="itemChildren.style===2&& item.topics" v-for=" (itemChildren,index) in item.topics":key="index">
            <div class="content-content">
              <div class="info">
                <div class="user-name">
       <span class="ava">
         <img :src="itemChildren.avatar" alt="">
       </span>
                  <span>{{itemChildren.nickname}}</span>
                </div>
              </div>
              <div class="title">{{itemChildren.title}}</div>
              <div class="desc">{{itemChildren.subTitle}}</div>
              <div class="u-rcount">
                <i class="iconfont icon-sousuo"></i>
                <span>{{itemChildren.readCount}}人看过</span>
              </div>
            </div>


            <div class="u-pic">
              <img  :src="itemChildren.picUrl" alt="img">
            </div>
          </div>
        </li>
      </ul>

      <ul v-else>
        <li>
          <img  class="loading" src="../../../src/common/images/giphy.gif" alt="loading" >
        </li>
      </ul>

   </div>
  </div>
</template>
<script>
  import {reqTopicManual} from '../../api'
  import { Loadmore, Tabbar } from 'mint-ui'
  import {mapState} from 'vuex'
  import BScroll from  'better-scroll'
 /* let wrapper = document.querySelector('.bscroll-content')
  let scroll = new BScroll(wrapper, {})*/
  export default {
      data(){
         return{

           current:0,
           topicManual:[],//内容
           arr:[],
           number:{
             pages:1,//页数
             pageSize:2//评论数
           }

           }
         },

     async mounted(){
            //内容请求
            const result =await reqTopicManual(this.number.pages)
            if (result.code*1===200){
              const data=result.data
              this.topicManual=data
            }

            this.nva= new BScroll(this.$refs.wrapper,{
              scrollX: true,
              scrollY:false,
              freeScroll:false,

            pagination: {
               el: '.swiper-pagination',

             },
           })
            this.content= new BScroll(this.$refs.bscrollContent,{
              scrollY:true,
              freeScroll:false,
              pullDownRefresh: {
                threshold: 50,
                probeType: 3
              },
              pullUpLoad: {
                threshold: 744
              },
              pagination: {
                el: '.swiper-pagination',
           },
          })

            this.content.on('pullingDown',async()=>{
              //内容请求
              const result =await reqTopicManual(this.number.pages)
              if (result.code*1===200){
                const data=result.data
                this.topicManual=data
              }
              this.$nextTick(() => {
                this.content.refresh() // DOM 结构发生变化后，重新初始化BScroll
              })
              this.content.finishPullDown() // 下拉刷新动作完成后调用此方法告诉BScroll完成一次下拉动作
            })
            this.content.on('pullingUp',async()=>{
              //内容请求
              this.number.pages++
              const result =await reqTopicManual(this.number.pages)
              if (result.code*1===200){
                const data=result.data


//                 this.arr= this.topicManual.concat(data)//会生成新数组
                this.topicManual.push(...data)

              }
              this.$nextTick(() => {
                this.content.refresh() // DOM 结构发生变化后，重新初始化BScroll
              })
              this.content.finishPullUp() // 上拉加载动作完成后调用此方法告诉BScroll完成一次上拉动作
            })
            this.$store.dispatch('getNav')
        },
      methods:{

        addClass(index){
          this.current=index;
        }
      },


    watch:{

      topicManual(){
          this.$nextTick(()=>{
            if(this.nav){
              this.nav.refresh()
            }else{
              this.nav= new BScroll('.bscroll-content',{
                scrollY:true,
                freeScroll:false,
                pagination: {
                  el: '.swiper-pagination',
                },
              })
            }

          })
      },
      topicNav(){
        this.$nextTick(()=>{
          if(this.content){
            this.content.refresh()
          }else{
            this.content= new BScroll(this.$refs.wrapper,{
              scrollX: true,
              scrollY:false,
              freeScroll:false,
              pagination: {
                el: '.swiper-pagination',

              },
            })
          }

        })
      }
    },






      computed:{
        ...mapState({
          topicNav:state=>state.Topic.topicNav,
          isLoading:state=>state.Topic.isLoading
        })
       },

     }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .menu-wrapper//导航
    width 100%
    background #ffffff
    position fixed
    top 1.1rem
    z-index 3
    overflow: hidden
    white-space: nowrap
    height 1rem
    ul
      width 930px
      .menu-item
        display: inline-block
        margin-bottom  .3rem
        padding: 0 .25rem;
        line-height: .9rem;
        font-size: .4rem;
        color: #333;
        text-align: center
        &.on
          color: #b4282d
          border-bottom  .55rem solid
    .icon
      z-index 40
      position absolute
      left 8.7rem
      right 0
      bottom 0
      top 5px
      width: 1.33333rem;
      height: .7rem;
      text-align: center;
      background: #fff
      .iconfont
        font-size .9rem
  .bscroll-content
    margin-top 2rem
    height 200px
    .loading
      width: 100%
      height 1100px

    .content
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      box-sizing: border-box;
      padding: .36rem .3rem;
      .topic-List
        width 100%
        .topic-ListTop
          width 100%
          .xuan
            width 28px
            height 17px
            margin-left  .2rem
            margin-bottom -.2rem
        span

          width 50px
          height 50px
          font-size .4rem
         img
          vertical-align middle
          border-radius 50%
          width 60px
          height 60px
        .speak
          line-height 50px
          margin .3rem 0rem .3rem
          font-size: .47rem;
          color: #333;
          overflow: hidden;
      .picture
        img
          border-radius 10px
          width 100%
      .icon
        .iconfont
          font-size .4rem
        span
          color #999
          margin-left .15rem
          font-size .35rem
    .content-two
      justify-content: space-between;
      display flex
      width: 100%;
      background: #fff;
      margin: .2rem 0;
      box-sizing: border-box;
      padding: .36rem .3rem;
      .content-content
        width 400px
        height 100%
        .info
          width 100%
          .user-name
            span
              margin-left  .2rem
              font-size .4rem;
            .ava
              img
                vertical-align middle
                border-radius 50%
                width 60px
                height 60px
        .title
          line-height 50px
          margin .3rem 0rem .3rem
          font-size: .47rem;
          color: #333;
          overflow: hidden;

        .desc
          font-size .4rem
          color: #7f7f7f
        .u-rcount
          .iconfont
            font-size .4rem
          span
            margin-left .15rem
            color #999
            font-size .35rem
      .u-pic
        float right
        width 272px
        img
          width  272px
          height  272px







</style>