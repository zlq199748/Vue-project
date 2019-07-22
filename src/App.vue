<template>
  <div id="body">
    <router-view/>
    <Footer v-if="$route.meta.isShow"/>
  </div>
</template>
<script>
  import Footer from './components/Foooter/Footer.vue'
  export default{

    components:{
      Footer
    },
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #body
    width 100%
    height 100%


</style>