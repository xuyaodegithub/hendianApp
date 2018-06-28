<template>
  <div class="card">
    <div class="title flex">
      <h4>{{title}}</h4>
      <span @click="toMove()">更多</span>
    </div>
    <ul>
      <li v-for="(item,index) in msg" :key="index" class="flex"  @click="todetial(item)">
        <p class="over">{{item.title}}</p>
        <p>{{item.publishTime | changeTime}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ['msg','title'],
    name: 'tellCard',
    data() {
      return {

      }
    },
    methods:{
      todetial(item){
        this.$router.push('/newsDetail')
        this.$store.commit('ARTS_DETIALS_CHANGE',item.content)
      },
      toMove(){
        this.$router.push('/tellAsk')
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
        padding:0.1rem 0.15rem;
        border-bottom: 1px solid #999999;
        justify-content: space-between;
        font-size: 0.28rem;
        line-height: 0.48rem;
        p:first-child{
          width:60%;
        }
        p:last-child{
          flex:1;
          text-align: right;
        }
      }
    }
  }

</style>
