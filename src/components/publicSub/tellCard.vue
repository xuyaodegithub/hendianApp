<template>
  <div class="card">
    <div class="title flex">
      <h4>{{msg.title}}</h4>
      <span>更多</span>
    </div>
    <ul>
      <li v-for="(item,index) in msg.item" :key="index" class="flex">
        <p class="over">{{item.title}}</p>
        <p>{{item.time}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    name: 'tellCard',
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .card {
    text-align: left;
    padding:0.15rem 0;
    /*border-bottom: 1px solid #999999;*/
    margin-bottom: 0.1rem;
    .title{
      font-size: 0.32rem;
      line-height: 0.56rem;
      justify-content: space-between;
      padding:0 0.2rem;
      border-bottom: 1px solid #999999;
      /*margin-bottom: 0.1rem;*/
    }
    ul{
      width:100%;
      overflow-x: auto;
      white-space: nowrap;
      li{
        padding:0 0.15rem;
        border-bottom: 1px solid #999999;
        justify-content: space-between;
        font-size: 0.28rem;
        line-height: 0.48rem;
        p:first-child{
          width:70%;
        }
        p:last-child{
          flex:1;
          text-align: right;
        }
      }
    }
  }

</style>
