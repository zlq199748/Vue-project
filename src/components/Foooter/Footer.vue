<template>
  <!--底部导航-->
   <footer class="footer-base">
     <a href="javascript:;" class="footer-item" :class="{on:$route.path==='/'}" @click="goTo('/')">
       <i class="iconfont icon-shouye"></i>
       <span class="text">首页</span>
     </a>
     <a href="javascript:;" class="footer-item" :class="{on:$route.path==='/goods'}" @click="goTo('/goods')">
       <i class="iconfont icon-fenlei"></i>
       <span class="text">分类</span>
     </a>
     <a href="javascript:;" class="footer-item" :class="{on:$route.path==='/category/topic'}" @click="goTo('/category/topic')">
       <i class="iconfont icon-wupin"></i>
       <span class="text">识物</span>
     </a>
     <a href="javascript:;" class="footer-item" :class="{on:$route.path==='/individual'}" @click="goTo('/individual')">
       <i class="iconfont icon-gouwuche"></i>
       <span class="text">购物车</span>
     </a>
     <a href="javascript:;" class="footer-item" :class="{on:$route.path==='/shoppingCar'}" @click="goTo('/shoppingCar')">
       <i class="iconfont icon-geren"></i>
       <span class="text">个人</span>
     </a>
   </footer>
</template>
<script>
  export default{
      methods:{
        goTo(path){
          this.$router.replace(path)
        }
      }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
   .footer-base
     width: 100%
     background: #fff
     position fixed
     bottom 0
     display flex
     justify-content space-between
     .footer-item
       padding 0 .5rem
       display flex
       flex-direction column
       align-items center
       &.on
         color #b4282d
       .text
         margin-top: .1rem
         margin-bottom .17rem
         color: #666
         font-size: .32rem
       .iconfont
         margin-top .17rem
         font-size .55rem




</style>