<template>
  <!--头部-->
  <div class="bai" v-if="homeData.kingKongModule">
    <Header>
     <span class="page-left" slot="left" style="font-size: 35px;margin-left: .3rem">网易严选</span>
     <button slot="right"><p slot="right" @click="logindeng('/loginhome')">登录</p></button>
    </Header>
   <!--容器-->
    <div class="maskishow">
    <!--遮罩层-->
      <div class="maskshow" v-show="mask" @click="masktoshow">
       <div class="tabWarap showActive">
       <div class="tabAlter">全部频道</div>
       <div class="moreCate">
         <div class="cateTag" :class="{on:index===current}" v-for="(item,index) in liList" @click="addclick(index)">{{item.title}}</div>
       </div>
     </div>
      </div>
    <!--导航-->
    <div class="menu-wrapper" ref="wrapper">
      <ul>
        <li ref="lis" class="menu-item" v-for="(item,index) in liList " @click="addClass(index)" :class="{on:index==current}" >{{item.title}}</li>
      </ul>
      <span class="icon" @click="masktoshow" :class="{active:mask}">
        <i class="iconfont icon-jiantou" v-if="!mask"></i>
        <i class="iconfont active icon-xiangshangjiantou" v-else="mask"></i>
      </span>
    </div>
    <!--轮播图-->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/542cc7564cffd33478c689c2380a9f91.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/a9827ac1ad9c54b31cda1debf38c3414.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
        <div class="swiper-slide"><img src="https://yanxuan.nosdn.127.net/5d8d67832db5757f2941c3cfe0ffd558.jpg?imageView&quality=75&thumbnail=750x0" alt=""></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
      <!--快递-->
      <div class="order-information">
        <ul class="order-information-ul">
          <li>
            <i></i>
            <span>网易自营品牌</span>
          </li>
          <li>
            <i></i>
            <span>30天无忧退货</span>
          </li>
          <li>
            <i></i>
            <span>48小时快速退狂</span>
          </li>
        </ul>
      </div>
      <!--内容区域-->
      <div class="content">
        <ul class="content-ul">
          <li class="content-li" v-for="(item,index) in homeData.kingKongModule.kingKongList":key="index">
            <a href="javascript:;">
              <img :src="item.picUrl" alt="img">
              <p>{{item.text}}</p>
            </a>
          </li>
        </ul>
        <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
      </div>
      <!--广告-->
      <div class="content-one">
        <ul>
          <li v-for="(item,index) in homeData.sceneLightShoppingGuideModule":key="index">
          <div class="content-z">
            <a href="javascript:;" class="content-y">
              <span>{{item.styleItem.title}}</span>
              <span>{{item.styleItem.desc}}</span>
              <img v-for="(pic,index) in item.styleItem.picUrlList" :key="index" :src="pic" alt="img">
            </a>
          </div>
        </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
  import BScroll from  'better-scroll'
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
  import {mapState}from 'vuex'
  export default{

    data(){
      return{
          current:0,
          liList:[
            {title:'推荐'},
            {title:'居家生活'},
            {title:'服饰鞋包'},
            {title:'美食酒水'},
            {title:'个人清洁'},
            {title:'母婴亲子'},
            {title:'运动旅行'},
            {title:'数码家电'},
            {title:'计生用品'},
          ],
          mask:false,
          onshow:true,

        }
      },
    methods:{
      addclick(index){
        this.current=index
      },

      logindeng(path){
         this.$router.push(path)
      },
    masktoshow(){
        this.mask=!this.mask
     },
      onisShow(){
        this.onshow=!this.onshow
      },
      addClass(index){
        this.current=index;
      }
    },

    mounted(){
      this.$store.dispatch('getHome',()=>{
         this.$nextTick(()=>{
           new Swiper('.swiper-container', {
             autoplay:true,//自动轮播
             pagination: {
               el: '.swiper-pagination',

             },
//    direction: 'vertical', // 垂直切换选项
             loop: true,// 循环模式选项
           })
          this.scroll= new BScroll(this.$refs.wrapper,{
             scrollX: true,
             scrollY:false,
             freeScroll:false,

           })

         })
      })

      },
    updated(){
      this.$nextTick(()=>{

        this.scroll.scrollToElement(this.$refs.lis[this.current],200)//指定li的index
      })
    },

    computed:{
      ...mapState({
        homeData:state=>state.home.homeData
         
         })
       }
      }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.bai
  background-color: #f4f4f4;
  /*头部导航轮播*/
  .maskishow//容器
    position relative
    .order-information
      position absolute
      left 0
      border-bottom 0
      top 7rem
      z-index 12
      .order-information-ul
        display: flex
        width 100%
        height .93333rem
        background #ffffff
        li
          margin-left .31rem
          display: flex;
          margin-right .96rem
          align-items center
          span
            text-align center
            font-size: .32rem
    .menu-wrapper//导航
      position fixed
      top .96rem
      left 0rem
      z-index 13
      width 100%
      background #ffffff
      overflow: hidden
      white-space: nowrap
      height 1rem
      margin .15rem .15rem .15rem 0rem
      ul
        width 1600px
        .menu-item
          display: inline-block
          margin-bottom  .3rem
          padding: 0 .25rem;
          line-height: .9rem;
          font-size: .45rem;
          color: #333;
          text-align: center
          &.on
            color: #b4282d
            border-bottom  .05rem solid
      .icon
        position absolute
        left 8.5rem
        right 0
        bottom 0
        top 5px
        z-index 100
        width: 1.5555rem;
        height: .7rem;
        text-align: center;
        background: #fff
        &.active
          transition 1s
          transform rotate(180deg)
        .iconfont
          font-size .9rem

    .swiper-container//轮播图
      margin-top 1.1rem
      img
        width 100%
      position absolute
      top 1rem
      left 0
      right 0
    .maskshow //遮罩层
      position: fixed;
      z-index: 15;
      background: rgba(0,0,0,.5);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .tabWarap
        position absolute
        margin-top 1.05rem
        z-index 10
        background-color #FFFFFF
        .tabAlter
          font-size .45rem
          margin-left .4rem
          margin-top .2rem
        .moreCate
          padding-top: .7rem;
          overflow: hidden
          .cateTag
            font-size .3rem
            width: 2rem;
            height: .74667rem;
            line-height: .74667rem;
            text-align: center;
            float: left;
            margin-bottom: .53333rem;
            margin-left: .4rem;
            background: #FAFAFA;
            border: 1px solid #CCC;
            border-radius: .05333rem
            &.on
              color: #b4282d
              border 1px solid

  .content
    width 100%
    background #ffffff
    position absolute
    top 6.9rem
    p
      width 2rem
      height 1rem
      font-size .35rem
      margin-left .1rem
    img
      width 100%
    .content-ul
      float left
      li
        text-align center
        margin .47rem .47rem .7rem .47rem
        width: 1.36667rem
        height: 1.36667rem
        float left
        img
          width: 1.46667rem
          height: 1.46667rem
        span
          font-size .35rem
  .content-one
    width 100%
    position absolute
    top 14rem
    overflow: hidden;
    background: #fff;
    margin-bottom: .26667rem;
    .content-y
      background #F5F5F5
      display: block;
      width: 4.57333rem;
      height: 3.52rem;
      float: left;
      margin: .05333rem 0 0 .1rem;
      padding: .26667rem 0 0 .26667rem;
      border-radius: .05333rem;
      span
        display block
        padding-left: .13333rem;
        font-size: .42667rem;
        font-family: PingFangSC-Medium;
      img
        display block
        width: 2rem;
        height: 2rem;
        float: left;
        margin-right: .05333rem;



</style>