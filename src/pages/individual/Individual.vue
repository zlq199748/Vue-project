<template>
  <div class="page-three">
    <div class="page-header-two">
      <span>购物车</span>
      <span class="draw">领劵</span>
    </div>
    <div class="order-information">
      <ul class="order-information-ul">
        <li>
          <i></i>
          <span>30天无忧退货</span>
        </li>
        <li>
          <i></i>
          <span>48小时快速退款</span>
        </li>
        <li>
          <i></i>
          <span>满88元免邮费</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <span>去添加点什么吧</span>
      <button>登录</button>
    </div>
  </div>
</template>
<script>
  export default{}

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .page-three
    width 100%
    height: 1.17333rem
    background: #fff
    padding: 0 .4rem
    line-height: 1.17333rem
    box-sizing border-box
    .page-header-two
      .draw
        float: right
        font-size .4rem
        color #b4282d
        margin-right .6rem
    .order-information
      .order-information-ul
        position: relative
        display: flex
        width 100%
        height .93333rem
        background #eee
        justify-content space-between
        li
          display: flex;

          align-items center
          span
            font-size: .32rem
         

    .content
      position: absolute;
      top: -.66667rem;
      right: 0;
      bottom: 0;
      left: 0;
      height: 4rem;
      margin: auto;
      background-image url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png)
      width: 3.30667rem
      height: 3.30667rem;
      background-repeat: no-repeat;
      span
        margin-bottom: .66667rem;
        line-height: 1;
        font-size: .37333rem;
        color: #999;
        margin-left .9rem
        position absolute
        left -0.5rem
        top  3rem
      button
        width 1rem
        height 1rem
        position absolute
        left -1rem
        right .7rem
        top  4rem
        margin: auto;
        width: 6.4rem;
        height: 1.22667rem;
        font-size: .4rem;
        line-height: 1.22667rem;
        color: #fff;
        background-color: #b4282d;
        border-radius: .04rem;
</style>