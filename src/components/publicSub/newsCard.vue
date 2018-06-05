<template>
  <div class="news">
    <div class="title flex">
      <h4>{{msg.title}}</h4>
    </div>
    <ul>
      <li v-for="(item,index) in msg.item" :key="index" class="flex">
       <div class="nleft">
         <p>{{item.title}}</p>
         <p>{{item.time}}</p>
       </div>
        <div class="nright">
          <img :src="item.imgUrl" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    name: 'news',
    data() {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news{
  text-align: left;
  .title{
    padding:0 0.15rem;
    border-bottom: 1px solid #999999;
    h4{
      font-size: 0.32rem;
      line-height: 0.48rem;
    }
  }
  .flex{
    justify-content: space-between;
    font-size: 0.28rem;
    line-height: 0.50rem;
    padding:0 0.15rem;
    border-bottom: 1px solid #999999;
    margin-bottom: 0.15rem;
    .nleft{
      width:60%;
      margin-right: 0.4rem;
    }
    .nright{
      width:2.8rem;
      img{
        display: block;
        width:100%;
        height:1.4rem;
      }
    }
  }
}

</style>
