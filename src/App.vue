<template>
  <div id="body">
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
  import Footer from './components/Foooter/Footer.vue'
  import {home} from './api'
  export default{
     /*async mounted(){
        const result=  await home()
       console.log(result);
      },*/
    components:{
      Footer
    }

  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  #body
    width 100%
    height 100%
    background-color: #f4f4f4;

</style>