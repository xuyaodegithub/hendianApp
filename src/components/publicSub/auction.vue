<template>
  <div>
    <div class="auction flex" v-for="(item,index) in msg.item" :key="index">
      <div class="title flex">
        <h4 class="over">{{item.title}}</h4>
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
    name: 'auction',
    data() {
      return {}
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
      padding:0.15rem;
      /*border-bottom: 1px solid #999999;*/
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      -o-flex-direction: column;
      flex-direction: column;
      justify-content: space-between;
      h4 {
        font-size: 0.32rem;
        line-height: 0.48rem;
      }
      p {
        font-size: 0.28rem;
        line-height: 0.48rem;
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
