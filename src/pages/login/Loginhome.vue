<template>
  <div style="height: 100%;overflow: hidden;background-color: white" >
    <Email v-if="isShow===3" :activeShow="activeShow"/>
    <Cellphone v-if="isShow===2" :activeShow="activeShow"/>
    <Login v-if="isShow===1" :activeShow="activeShow"/>
  </div>

</template>
<script>
  import Cellphone from '../../components/Login/Cellphone.vue'
  import Email from '../../components/Login/Email.vue'
  import Login from '../../components/Login/Login.vue'
  export default{
    components:{
      Cellphone,
      Login,
      Email

    },
    data(){
      return{
        isShow:1//初始默认值
      }
    },
    methods:{
      activeShow(index){
        this.isShow = index //接收数据
      }
    }
  }

</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>