<template>
  <!--头部-->
  <div style="background:#ffffff;height: 100%">
    <div class="page-two">
      <div class="page-header-two">
        <i class="iconfont icon-shouye" @click="goTohome('/') "></i>
        <span>网易严选</span>
        <i class="iconfont icon-sousuo" ></i>
        <i class="iconfont icon-gouwuche" @click="goToshop('/individual')"></i>
      </div>
    </div>

    <div class="content">
      <div class="login-top">
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>

      <div class="more-input">
        <input type="tel" maxlength="11" placeholder="请输入手机号">
        <input type="tel" maxlength="6" placeholder="请输入短信验证码">
        <button class="buttoncode">获取验证码</button>
      </div>
      <div class="btnWrap">
        <div class="btn1">
          <mt-button type="danger" size="large" class="button" >登录</mt-button>
          <mt-button type="danger" plain size="large" class="button" >其他登录方式</mt-button>
          <p>注册账号></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default{

    data(){
      return{
      }
    },
    methods:{
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
    background: #fffff
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
  .content
    .more-input
      .buttoncode
        border-radius 10px
        position relative
        left: 80%
        top -110px
        font-size 25px
        width 150px
        height 60px
        border: 1px solid transparent;  //自定义边框
        outline: none;    //消除默认点击蓝色边框效果
      margin-top .4rem
      input
        outline: none;
        margin-bottom .3rem
        margin-left .3rem
        font-size .4rem
        width 100%
        height 100px
        border-bottom 1px solid #7e8c8d
    .login-top
      text-align: center;
      padding-top: .8rem;
      padding-bottom: 2.13333rem
      img
        width: 3rem;
        height: 1rem
    .btnWrap
      .btn1
        position relative
        .button
          margin-left .3rem
          margin-bottom .5rem
          width 700px
          height 90px
        .iconfont
          position absolute
          left 2.9rem
          top .6rem
      .btn2
        position relative
        .iconfont
          position absolute
          left 2.9rem
          top -1.6rem
          color #FF3333
      p
        padding-left  40%
        margin-bottom 5rem
        font-size .42rem

</style>
