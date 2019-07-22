<template>
  <!--头部-->
  <div class="bai">
    <Header>
     <span class="page-left" slot="left">网易严选</span>
     <button slot="right"><p slot="right">登录</p></button>
    </Header>
   <!--容器-->
    <div class="maskishow">
    <!--遮罩层-->
      <div class="maskshow" v-show="mask" @click="masktoshow">
       <div class="tabWarap showActive">
       <div class="tabAlter">全部频道</div>
       <div class="moreCate">
         <div class="cateTag cateTag-active">推荐</div>
         <div class="cateTag">居家生活</div>
         <div class="cateTag">服饰鞋包</div>
         <div class="cateTag">美食酒水</div>
         <div class="cateTag">个人护理</div>
         <div class="cateTag">母婴亲子</div>
         <div class="cateTag">运动旅行</div>
         <div class="cateTag">数码家电</div>
         <div class="cateTag">全球特色</div>
       </div>
     </div>
      </div>
    <!--导航-->
    <div class="menu-wrapper" ref="wrapper">
      <ul>
        <li class="menu-item" v-for="(item,index) in liList " @click="addClass(index)" :class="{on:index==current}" >{{item.title}}</li>
      </ul>
      <span class="icon" @click="masktoshow">
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
          <li class="content-li">
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="img">
              <span>新品首发</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="img">
              <span>新品首发</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="img">
              <span>新品首发</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="img">
              <span>新品首发</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="img">
              <span>新品首发</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="img">
              <span>新品首发</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="img">
              <span>新品首发</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="https://yanxuan.nosdn.127.net/2415a74cea7d3f080c2dcaa791884572.png" alt="img">
              <span>新品首发</span>
            </a>
          </li>
        </ul>
        <img src="https://yanxuan.nosdn.127.net/9e2248500f961bfe0e872027776b1e79.gif" alt="">
      </div>
      <!--广告-->
      <div class="content-one">
        <div class="content-z">
          <a href="javascript:;" class="content-y">
           <span>几元就买到小幸福</span>
           <span>珍惜噬手可得的小幸福</span>
          <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="img">
          <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
        </a>
        </div>
        <div class="content-z">
          <a href="javascript:;" class="content-y">
            <span>几元就买到小幸福</span>
            <span>珍惜噬手可得的小幸福</span>
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="img">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </a>
        </div>
        <div class="content-z">
          <a href="javascript:;" class="content-y">
            <span>几元就买到小幸福</span>
            <span>珍惜噬手可得的小幸福</span>
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="img">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </a>
        </div>
        <div class="content-z">
          <a href="javascript:;" class="content-y">
            <span>几元就买到小幸福</span>
            <span>珍惜噬手可得的小幸福</span>
            <img src="https://yanxuan.nosdn.127.net/1eecf74b769af3ed4c7817aeb5d6bb2b.png?imageView&thumbnail=150x150&quality=75" alt="img">
            <img src="https://yanxuan.nosdn.127.net/f8ab1da43385ce39549272c1571f6397.png?imageView&thumbnail=150x150&quality=75" alt="">
          </a>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
  import BScroll from  'better-scroll'
  import Swiper from 'swiper'
  import "swiper/dist/css/swiper.min.css"
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
          ],
          mask:false,
          onshow:true,

        }
      },
    methods:{
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
      new Swiper('.swiper-container', {
//    direction: 'vertical', // 垂直切换选项
        loop: true// 循环模式选项
      })

        new BScroll(this.$refs.wrapper,{
          scrollX: true,
          scrollY:false,
          freeScroll:false,
          pagination: {
            el: '.swiper-pagination',

          },
        })
      }
     }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.bai
  /*头部导航轮播*/
  .maskishow//容器
    position relative
    .order-information
      position absolute
      left 0
      border-bottom 0
      top 6rem
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
      z-index 1232
      overflow: hidden
      white-space: nowrap
      height 1rem
      margin .15rem .15rem .15rem .15rem
      ul
        width 1400px
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

    .swiper-container//轮播图
      img
        width 100%
      position absolute
      top 1rem
      left 0
      right 0

    .maskshow //遮罩层
      position: fixed;
      z-index: 20;
      background: rgba(0,0,0,.5);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      .tabWarap
        margin-top 1.05rem
        z-index 10
        background-color #FFFFFF
        .tabAlter
          font-size .45rem
          margin-left .2rem
          margin-top .rem
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
          .cateTag-active
            border: 1px solid #b4282d;
            color: #b4282d;

  .content
    width 100%
    background #ffffff
    position absolute
    top 6.8rem
    img
      width 100%
    .content-ul
      float left
      li
        text-align center
        margin .47rem .47rem .7rem .47rem
        width: 1.46667rem
        height: 1.46667rem
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