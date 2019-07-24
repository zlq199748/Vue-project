<template>
  <!--头部-->
  <div>
    <div class="page-two">
      <div class="page-header-two">
        <i class="iconfont icon-shouye" @click="goTohome('/') "></i>
        <keep-alive>
        <router-link to="/category/topic" >发现</router-link>
        </keep-alive>
       <keep-alive>
        <router-link to="/category/expert">甄选家</router-link>
       </keep-alive>
        <i class="iconfont icon-sousuo" @click="goTosearch('/search')" ></i>
        <i class="iconfont icon-gouwuche" @click="goToshop('/individual')"></i>
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
      goTosearch(path){
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
  .router-link-active
    color #b4282d
    font-size .6rem
  .page-two
    z-index 2
    position fixed
    top 0rem
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