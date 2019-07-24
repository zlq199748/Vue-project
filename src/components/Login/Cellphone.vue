<template>
  <!--头部-->
  <div style="background:#ffffff;height: 100%">
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
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="img">
      </div>
      <div class="more-input">
        <input type="text" v-model="phone" @blur="lose" placeholder="请输入手机号" >
        <input type="text" v-model="code" @blur="note" maxlength="6" placeholder="请输入短信验证码">
        <button type="button" :disabled="disabled" @click="verification" class="buttoncode">{{btntxt}}</button>
      </div>
      <div class="btnWrap">
        <div class="btn1">
          <mt-button type="danger" size="large" @click="sendcode('/')" class="button" >登录</mt-button>
          <mt-button type="danger" plain size="large" class="button" @click="activeShow(1)" >其他登录方式</mt-button>
          <p>注册账号></p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { Toast } from 'mint-ui';
  export default{
    props:{
      activeShow:Function
    },
    data(){
      return{
        code:'',
        phone:'',
        disabled:false,
        time:0,
        btntxt:"获取验证码",
      }
    },
    methods:{
      note(){
        let regcode= 6 && /^.{6}$/;
        if (!regcode.test(this.code)){
          Toast({
            message: '验证格式有误！',
            iconClass: 'icon icon-success'
          });
        }
      },
      lose(){
        let reg=11 && /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        if (!reg.test(this.phone)){
          Toast({
            message: '手机号格式有误！',
            iconClass: 'icon icon-success'
          });
        }

      },

      //验证手机号码登录部分
      sendcode(path){
        let reg=11 && /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
        let regcode= 6 && /^.{6}$/;
        if(this.phone==''){
          Toast({
            message: '请输入手机号码！',
            iconClass: 'icon icon-success'
          });
        }else if(!reg.test(this.phone)){
          Toast({
            message: '手机号码格式不正确！',
            iconClass: 'icon icon-success',
          });
        }else if (this.code==''){
          Toast({
            message: '请获取验证码！',
            iconClass: 'icon icon-success',
          });
        }else if (!regcode.test(this.code)){
          Toast({
            message: '验证码不正确！',
            iconClass: 'icon icon-success',
          });
        }else{
          Toast({
            message: '登录成功！',
            iconClass: 'icon icon-success',
          });
          this.$router.replace(path)
        }

      },

      verification(){
        let reg=11 && /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;

        if (this.phone==''){
          Toast({
            message: '请输入手机号获取验证码！',
            iconClass: 'icon icon-success',
          });
        }else if (!reg.test(this.phone)){
          Toast({
            message: '手机号码格式不正确！',
            iconClass: 'icon icon-success',
          });
        }else {
          this.time=20;
          this.disabled=true;
          this.timer();
        }
      },
      timer() {
        if (this.time > 0) {
          this.time--;
          this.btntxt=this.time+"s后重新获取";
          setTimeout(this.timer, 1000);
        } else{
          this.time=0;
          this.btntxt="获取验证码";
          this.disabled=false;
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

  .mint-toast
    width 350px
    height: 100px
    .mint-toast-text
      font-size .4rem
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
        left: 70%
        top -110px
        font-size 25px
        width 200px
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
        p
          padding-left  40%
          font-size .42rem
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


</style>
