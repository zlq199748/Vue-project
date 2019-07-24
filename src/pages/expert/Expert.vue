<template>
 <div style="margin-top: 1.5rem;overflow: hidden">
   <!--滑动容器-->
   <div class="bscroll-container">
   <ul style="height: 2500px">
     <li>
         <!--轮播图-->
         <div class="swiper-container">
           <div class="swiper-wrapper">
             <div class="swiper-slide">
               <img src="https://yanxuan.nosdn.127.net/2dde0ddaa2b9033730d282793a0cc04c.jpg?imageView&quality=75&thumbnail=670x371" alt="">
             </div>
             <div class="swiper-slide">
               <img src="https://yanxuan.nosdn.127.net/4c7dea0d162b3dd3fb87dfe34829bb90.jpg?imageView&quality=75&thumbnail=670x371" alt="">
             </div>
           </div>
           <!-- 如果需要分页器 -->
           <div class="swiper-pagination"></div>
         </div>
         <!--建议征集-->
         <div class="top">
           <h3 class="title">
             <span>建议征集</span>
             <i class="iconfont icon-sousuo"></i>
           </h3>
           <p class="desc">告诉我们，你的好物标准</p>
         </div>
         <!--建议内容-->
         <div class="middle">
           <div class="wraper">
             <div class="m-lazyload">
               <img src="https://yanxuan.nosdn.127.net/fdcfa17b26d048eacb4ea087bb678345.jpg?imageView&quality=75&thumbnail=272x200" alt="">
             </div>
           </div>
           <!--需要交互-->
           <div class="baseInfo">
             <div class="acttite" >
               <h3 class="name">你希望严选推出哪些方便菜肴呢？</h3>
             </div>
             <div class="counts">
               <div class="count">
                 <i class="iconfont icon-sousuo"></i>
                 <span>0</span>
                 <span>条建议</span>
               </div>
               <div class="count">
                 <i class="iconfont icon-sousuo"></i>
                 <span >205</span>
                 <span >人看过</span>
               </div>
             </div>
           </div>
         </div>
         <!--我要建议-->
         <div class="ft">
           <div class="descdetail">如果我们推出方便菜肴，你会希望有哪些口味呢？比如酸甜口味、香辣口味、咖喱口味或者其他口味；希望推出1人份还是多人份？希望是加热即食还是可以简单烹饪？你对严选的方便菜肴还有哪些期待呢？快来说说吧 </div>
           <div class="advicebtn">我要建议</div>
         </div>
     </li>
   </ul>
   </div>
 </div>
</template>
<script>
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
  import BScroll from  'better-scroll'
  import {mapState} from 'vuex'
  export default{


    mounted(){

      this.$nextTick(()=>{
        new Swiper('.swiper-container', {
//    direction: 'vertical', // 垂直切换选项
          loop: true// 循环模式选项
        })
       new BScroll('.bscroll-container',{
          scrollY:true,
          freeScroll:false,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    },
    updated(){

    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .bscroll-container
    width: 100%;
    height 1500px
    overflow: hidden;
    background: #fff;
    text-align: center;
    .top
      padding: .45333rem 0
      p
        font-size: .32rem;
        color: #7F7F7F;
        line-height: 1;
      .title
        font-size: .42667rem;
        color: #333;
        margin-bottom: .16rem;
        line-height: 1;
        font-family: PingFangSC-Regular;
    .middle
      background #f4f4f4
      display: table;
      width: 9.2rem;
      height: 3.30667rem;
      margin-left .2rem
      padding: .32rem 0 .32rem .32rem;
      .wraper
        float: left;
        width: 3.62667rem;
        height: 2.66667rem;
        .m-lazyload
          width: 100%;
          img
            width 100%
            height 70%
      .baseInfo
        display: table-cell;
        vertical-align: middle;
        padding: 0 0 0 .26667rem;
        border-radius: 0 0 .10667rem .10667rem;
        border-top: none;
        .acttite
          width: 100%;
          line-height: .74667rem;
          margin-bottom: .18667rem;
          text-align: left;
          .name
            display: inline-block;
            width: 4.61333rem;
            line-height: .64rem;
            font-family: PingFangSC-Regular;
            font-size: .42667rem;
            color: #333;
        .counts
          text-align: left;
          .count
            display: inline-block;
            margin-right: .42667rem;
            font-size: .32rem;
            color: #7F7F7F
            .iconfont
              width: .42667rem;
              height: .36rem;
              margin-right: .09333rem;
              margin-bottom: .04rem;
            span
              font-size: .32rem;
              color: #7F7F7F;

    .ft
      .descdetail
        height 100%
        margin-top: .42667rem;
        text-align: left;
        font-family: PingFangSC-Light;
        font-size: .32rem;
        color: #7F7F7F;
        line-height: .49rem;
      .advicebtn
        margin-left .3rem
        position: relative;
        margin-top: .65rem;
        width: 9.2rem;
        height: 1.17333rem;
        line-height: 1.17333rem;
        text-align: center;
        background: #FFF;
        border 1px solid #000
        font-size: .37333rem;
        color: #333;

    .swiper-container
      img
        display block
        margin-left auto
        margin-right auto

</style>