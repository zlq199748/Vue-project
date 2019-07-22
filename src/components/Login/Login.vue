<template>
  <!--头部-->
  <div style="background:#F2F5F4;height: 100%">
    <div class="page-two">
      <div class="page-header-two">
        <i class="iconfont icon-shouye" @click="goTohome('/') "></i>
        <span>网易严选</span>
        <i class="iconfont icon-sousuo" @click="gosousuo('/search')"></i>
        <i class="iconfont icon-gouwuche" @click="goToshop('/individual')"></i>
      </div>
    </div>
    <div class="content">
      <div class="login-top">
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="btnWrap">
        <div class="btn1">
          <i class="iconfont icon-44"></i>
          <mt-button type="danger" size="large" class="button" @click="activeShow(2)">手机号码登录</mt-button>
          <mt-button type="danger" plain size="large" class="button" @click="activeShow(3)">邮箱账号登录</mt-button>
        </div>
        <div class="btn2">
          <i class="iconfont icon-youxiang"></i>
        </div>
        <p>手机号快捷注册 ></p>
      </div>
    </div>
    <div class="applicable">
      <span><i class="iconfont icon-weixin"></i>微信</span>
      <span class="qq"><i class="iconfont icon-qq"></i>QQ</span>
      <span><i class="iconfont icon-weibo"></i>微博</span>
    </div>
  </div>
</template>
<script>
  import Cellphone from './Cellphone.vue'
  import Email from './Email.vue'
  export default{
    components:{
        Cellphone,
        Email
      },
    data(){
      return{
      }
    },
    props:{
      activeShow:Function
    },
    methods:{
      gosousuo(path){
        this.$router.push(path)
      },
      goTohome(path){
        this.$router.push(path)
      },
      goToshop(path){
        this.$router.push(path)
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .iconfont
    z-index 60
    font-size .5rem
  .page-two
    z-index 2
    position relative
    width 100%
    background: #fff
    display flex
    border-bottom: .01rem solid #000000;
    .page-header-two
      span
        margin-left 1.7rem
        font-size .6rem
      display flex
      justify-content space-between
      padding  .4rem .2rem .4rem .2rem
      width 100%
      .iconfont
        font-size .66rem

  .content
    .login-top
      text-align: center;
      padding-top: 2.13333rem;
      padding-bottom: 2.13333rem
      img
        width: 3.57333rem;
        height: 1.2rem
    .btnWrap
      .btn1
        position relative
        .button
          margin-left .3rem
          margin-bottom .4rem
          width 700px
          height 90px
        .iconfont
          position absolute
          left 2.9rem
          top .34rem
      .btn2
        position relative
        .iconfont
          position absolute
          left 2.9rem
          top -1.2rem
          color #FF3333
      p
        padding-left  35%
        font-size .42rem
  .applicable
    span
      color #7f7f7f
      font-size .3rem
      margin-left 1.7rem
      margin-top 4rem
      vertical-align middle
      text-align: left
      width 100%
</style>
