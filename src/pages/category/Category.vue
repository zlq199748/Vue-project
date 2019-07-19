<template>
  <!--头部-->
  <div>
    <div class="page-two">
      <div class="page-header-two">
        <i class="iconfont icon-shouye" @click="goTohome('/') "></i>
        <router-link to="/category/topic" >发现</router-link>
        <router-link to="/category/expert">甄选家</router-link>
        <i class="iconfont icon-sousuo" ></i>
        <i class="iconfont icon-gouwuche"></i>
      </div>
    </div>
  <router-view/>
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
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .router-link-active
    color #b4282d
    font-size .7rem
  .page-two
    width 100%
    background: #fff
    display flex
    border-bottom: .01rem solid #000000;
    .page-header-two
      display flex
      justify-content space-between
      padding  .4rem .2rem .4rem .2rem
      width 100%
      .iconfont
        font-size .66rem

</style>