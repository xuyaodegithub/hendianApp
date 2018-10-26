<template>
  <div class="news">
    <!--<div>{{busVal}}</div>-->
    <div class="title flex">
      <h4>{{title}}</h4>
    </div>
    <ul>
      <li v-for="(item,index) in msg" :key="index" class="flex" @click="toDetial(item)">
       <div class="nleft flex">
         <p class="activeP">{{item.title}}</p>
         <p>{{item.publishTime | changeTime}}</p>
       </div>
        <div class="nright">
          <img :src="item.titleImg" alt="">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Bus from '../units/bus.js'
  export default {
    props: ['msg','title'],
    name: 'news',
    data() {
      return {
        busVal:''
      }
    },
    mounted(){
      Bus.$on('msg',(e)=>{
        this.busVal=e
      })

    },
    methods:{
      toDetial(val){
        this.$router.push('/newsDetail')
        this.$store.commit('ARTS_DETIALS_CHANGE',val.content)
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
  li.flex{
    justify-content: space-between;
    font-size: 0.28rem;
    line-height: 0.50rem;
    padding:0.15rem;
    border-bottom: 1px solid #999999;
    margin-bottom: 0.15rem;
    .nleft.flex{
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      -o-flex-direction: column;
      flex-direction: column;
      justify-content: space-between;
      width:55%;
      .activeP{
        white-space: initial;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp:2;
        -webkit-box-orient: vertical;
        line-height: 0.46rem;
        margin-bottom: 0.2rem;
      }
    }
    .nright{
      width:2.8rem;
      img{
        display: block;
        width:100%;
        height:2rem;
      }
    }
  }
}

</style>
