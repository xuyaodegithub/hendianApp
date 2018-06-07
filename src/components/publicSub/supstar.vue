<template>
  <div>
    <div class="auction flex" v-for="(item,index) in msg.item" :key="index">
      <div class="title flex">
        <h4 class="over">{{item.title}}</h4>
        <p class="pactive">{{item.content}}</p>
        <p>{{item.time}}</p>
      </div>
      <div class="img">
        <img :src="item.imgUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    name: 'supstarCard',
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .auction {
    padding:0.15rem 0;
    text-align: left;
    justify-content: space-between;
    border-bottom: 1px solid #999999;
    .title {
      /*border-bottom: 1px solid #999999;*/
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      -o-flex-direction: column;
      flex-direction: column;
      justify-content: space-between;
      width:55%;
      h4 {
        font-size: 0.32rem;
        line-height: 0.48rem;
      }
      p {
        font-size: 0.28rem;
        line-height: 0.48rem;
      }
      p.pactive{
        /*white-space: initial;*/
        overflow: hidden;
        /*text-overflow: ellipsis;*/
        /*display: -webkit-box;*/
        /*-webkit-line-clamp: 3;*/
        /*-moz-line-clamp: 3;*/
        /*-ms-line-clamp: 3;*/
        /*-o-line-clamp: 3;*/
        /*-webkit-box-orient: vertical;*/
        line-height: 0.42rem;
        padding-left: 0.15rem;
        max-height:1.26rem;
      }
    p.pactive:after{
      content:"...";
      font-weight:bold;
      position:absolute;
      bottom:0;
      right:0;
      padding:0 20px 1px 45px;
      background:url(http://newimg88.b0.upaiyun.com/newimg88/2014/09/ellipsis_bg.png) repeat-y;
      }
    }
    .img{
      img {
        display: block;
        width:3rem;
        height:2rem;
      }
    }

  }

</style>
