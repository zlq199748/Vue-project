<template>
  <div>
    <div class="menu-wrapper" ref="wrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) in topicNav " @click="addClass(index)" :class="{on:index==current}" >{{item.tabName}}</li>
      </ul>
    </div>
    <div class="bscroll-content">

      <ul>
        <li v-for="(item,index) in topicManual" :key="index">
          <!--结构one内容-->
          <div class="content" v-if="itemChildren.style===1" v-for=" (itemChildren,index) in item.topics":key="">
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
          <div class="content-two" v-if="itemChildren.style===2" v-for=" (itemChildren,index) in item.topics":key="index">
            <div class="content-content" v-if="itemChildren.style===2" >
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
        <!--结构two内容-->
        <!--<li v-for="(item,index) in topicManual" :key="index" >-->
          <!--<div class="content-two"  v-for=" (itemChildren,index) in item.topics":key="index">-->
            <!--<div class="content-content" v-if="itemChildren.style===2" >-->
              <!--<div class="info">-->
                <!--<div class="user-name">-->
       <!--<span class="ava">-->
         <!--<img :src="itemChildren.avatar" alt="">-->
       <!--</span>-->
                  <!--<span>{{itemChildren.nickname}}</span>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="title">{{itemChildren.title}}</div>-->
              <!--<div class="desc">{{itemChildren.subTitle}}</div>-->
              <!--<div class="u-rcount">-->
                <!--<i class="iconfont icon-sousuo"></i>-->
                <!--<span>{{itemChildren.readCount}}人看过</span>-->
              <!--</div>-->
            <!--</div>-->


            <!--<div class="u-pic">-->
              <!--<img :src="itemChildren.picUrl" alt="img">-->
            <!--</div>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
   </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from  'better-scroll'
  export default {
      data(){
         return{
           current:0,
           }
         },
      mounted(){
        this.$store.dispatch('getNav',()=>{

          this.$nextTick(()=>{
            new BScroll(this.$refs.wrapper,{
              scrollX: true,
              scrollY:false,
              freeScroll:false,
              pagination: {
                el: '.swiper-pagination',

              },
            })
            new BScroll('.bscroll-content',{
              scrollY:true,
              freeScroll:false,
              pagination: {
                el: '.swiper-pagination',
              },
            })
          })
        })
        this.$store.dispatch('getManual',()=>{
          this.$nextTick(()=>{
            new BScroll(this.$refs.wrapper,{
              scrollX: true,
              scrollY:false,
              freeScroll:false,
              pagination: {
                el: '.swiper-pagination',

              },
            })
            new BScroll('.bscroll-content',{
              scrollY:true,
              freeScroll:false,
              pagination: {
                el: '.swiper-pagination',
              },
            })
          })
        })

      },
      methods:{
        addClass(index){
          this.current=index;
        }
      },
    computed:{
        ...mapState({
          topicNav:state=>state.Topic.topicNav,
          topicManual:state=>state.Topic.topicManual
        })
       }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .menu-wrapper//导航
    width 100%
    background #ffffff
    position relative
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
    height 1000px
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