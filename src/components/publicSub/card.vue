<template>
  <div class="card">
    <div class="title flex">
      <h4>{{title}}</h4>
      <span @click="toMove()">更多</span>
    </div>
    <ul>
      <li v-for="(item,index) in msg" :key="index" @click="toDetial(item)">
        <img :src="item.titleImg" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['msg','title','type'],
    name: 'card',
    data() {
      return {
        images: [
          'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
          'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'//'static/safe0.png','static/yue.png'
        ]
      }
    },
    methods:{
      toDetial(item){
        this.$router.push('/newsDetail')
        this.$store.commit('ARTS_DETIALS_CHANGE',item.content)
      },
      toMove(){
        if(this.type===2){
          this.$router.push('/artStore')
        }else if(this.type===1){
          this.$router.push('/superstar')
        }else{
           this.$router.push('/auction')
        }
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
    /*margin-bottom: 0.1rem;*/
    .title{
      font-size: 0.32rem;
      line-height: 0.56rem;
      justify-content: space-between;
      padding:0 0.2rem;
      border-bottom: 1px solid #999999;
      margin-bottom: 0.1rem;
    }
    ul{
      width:100%;
      overflow-x: auto;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      padding:0 0.15rem;
      li{
        display: inline-block;
        width:1.5rem;
        height:1.5rem;
        margin-right: 0.2rem;
        img{
          display: block;
          width:100%;
          height:100%;
        }
      }
    }
  }

</style>
