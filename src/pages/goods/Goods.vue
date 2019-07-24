<template>
<div>
  <div class="nav" v-if="category.categoryL1List">
    <Header style="padding-left: 2rem;"/>

    <section class="leftNav">
      <div class="left-name">
        <ul>
          <li class="menu-item" v-for="(item,index) in category.categoryL1List ":key="index"  @click="addClass(index)":class="{on:index==current}" >{{item.name}}</li>
        </ul>
      </div>
    </section>
    <section class="rightNav">
      <div class="right-name">
      <ul class="rightNav-img">
        <div class="rightNav-top">
          <img :src="category.categoryL1List[current].wapBannerUrl" alt="img">
        </div>
        <li v-for="(item) in category.categoryL1List[current].subCateList " :key="item.id"><img :src="item.wapBannerUrl" alt="">
          <span>{{item.name}}</span>
        </li>
      </ul>
      </div>
    </section>
  </div>
</div>
</template>
<script>
   import {mapState} from 'vuex'
  import BScroll from  'better-scroll'
  export default{

    data(){
      return{
        current:0,

      }
      },

      methods:{
        addClass(index){
          this.current=index;
        }
      },

      mounted(){
      this.$store.dispatch('getCategory',()=>{
        this.$nextTick(()=>{
          new BScroll('.left-name',{
            scrollY:true,
            pagination: {
              el: '.swiper-pagination',
            },
          })
          new BScroll('.right-name',{
            scrollY:true,
            pagination: {
              el: '.swiper-pagination',

            },
          })
        })
      })


    },
    computed:{
      ...mapState({
        category:state=>state.goods.category
      })
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .nav
    width 100%
    background #ffffff
    height 100%
    .leftNav
      height 2000px
      position fixed
      top 20px
      .left-name
        margin-top 1rem
        height 600px
        ul
          margin-top 1.5rem
          width 300px
          height 700px
        li
          font-size .4rem
          margin .8rem .8rem .8rem .4rem
          &.on
            color #FF0000
    .rightNav
      height 100%
      width 550px
      .right-name
        width 550px
        height 200px
        position absolute
        top 1.5rem
        left 30%
        .rightNav-img
          width 100%
          height 400px
          li
            margin-top .65rem
            margin-left .3rem
            width: 144px
            height: 144px
            float left
            img
              width 144px
              height 144px
            span
              font-size .3rem
          .rightNav-top
            img
              display block
              margin-right .5rem
              width  500px
              height 192px











</style>