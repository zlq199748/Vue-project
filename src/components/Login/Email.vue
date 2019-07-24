<template>
  <!--头部-->
  <div style="background:#ffffff;">
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

      <div class="more-input">
        <input type="tel" v-model="mailbox" @blur="eMail" placeholder="邮箱账号">
        <input type="password" @blur="pswd" v-model="password"  placeholder="密码">
        <a href="javascript:;">注册账号</a>
        <a href="javascript:;">忘记密码</a>
      </div>
      <div class="btnWrap">
        <div class="btn1">
          <mt-button type="danger" size="large" class="button" @click="register('/')">登录</mt-button>
          <mt-button type="danger" plain size="large" class="button" @click="activeShow(1)">其他登录方式</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  export default{

    data(){
      return{
        mailbox:'',
        password:''

      }
    },

    props:{
      activeShow:Function
    },
    methods:{
      eMail(){
        let reg=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        if (!reg.test(this.mailbox)){
          Toast({
            message: '邮箱格式错误！',
            iconClass: 'icon icon-success'
          });
        }

      },

      pswd(){
        let pwd=/^\w+$/
        if (!pwd.test(this.password)){
          Toast({
            message: '只能输入数字！',
            iconClass: 'icon icon-success'
          });
        }
      },

      register(path){
        let reg=/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
        let pwd=/^\w+$/
        if (this.mailbox==''){
          Toast({
            message: '邮箱不能为空！',
            iconClass: 'icon icon-success'
          });
        }else if (!reg.test(this.mailbox)){
          Toast({
            message: '邮箱格式错误！',
            iconClass: 'icon icon-success'
          });
        }else if (this.password==''){
          Toast({
            message: '密码不能为空！',
            iconClass: 'icon icon-success'
          });
        }else if (!pwd.test(this.phone)){
          Toast({
            message: '只能输入数字！',
            iconClass: 'icon icon-success'
          });
        }else{
          Toast({
            message: '登录成功！',
            iconClass: 'icon icon-success'
          });
          this.$router.replace(path)
        }
      },




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
    background #fffff
    a
      width: 100px;
      height: 20px;
      padding-left: 1rem;
      margin-left: -50px;
      margin-right: 455px;
      font-size: 0.35rem;
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
        margin-top .3rem
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
