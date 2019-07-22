<template>
  <!--头部-->
  <div class="page">
    <div class="page-header">
      <slot name="left"/>
      <div class="page-top" @click="goTosearch('/search')">
        <i class="iconfont icon-sousuo" ></i>
        <span>搜索商品，共21708款好物</span>
      </div>
      <slot name="right"/>
    </div>
  </div>
</template>
<script>
  export default{
    methods:{
      goTosearch(path){
        this.$router.push(path)
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .page
    position fixed
    top 0
    z-index 20
    width 100%
    background: #fff
    .page-header
      display flex
      width 100%
      button
        margin-top .25rem
        margin-left .2rem
        background-color: transparent;
        border: 1px solid transparent;  //自定义边框
        outline: none;    //消除默认点击蓝色边框效果
        line-height: .53333rem;
        border: 1px solid #b4282d;
        border-radius .10667rem
        width 1.2rem
        height .6rem
        text-align: center;
        p
          color #b4282d
          font-size .35rem
      .page-left
        margin-top .3rem
        font-size .5rem
      .page-top
        margin-left .2rem
        position relative
        margin-top .2rem
        margin-bottom .2rem
        border-radius .1rem
        width 6rem
        height .7rem
        background #ededed
        position relative
        .iconfont
          position absolute
          left .53rem
          top 0.1rem
          font-size .5rem
        span
          position absolute
          top .2rem
          left 1.2rem
          font-size .35rem
</style>