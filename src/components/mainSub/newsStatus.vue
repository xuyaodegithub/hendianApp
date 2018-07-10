<template>
  <div class="news" v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="10"
       infinite-scroll-immediate-check="false" v-if=" threeNewsResult.list.length>0">
   <!-- <div class="title flex">
      <h4>{{title}}</h4>
    </div>-->
    <ul>
      <li v-for="(item,index) in threeNewsResult.list" :key="index" class="flex" @click="toDetial(item)">
        <div class="nleft flex">
          <p class="activeP">{{item.title}}</p>
          <p>{{item.publishTime | changeTime}}</p>
        </div>
        <div class="nright">
          <img :src="item.titleImg" alt="">
        </div>
      </li>
    </ul>
    <div v-if="!loading" style="font-size: 0.28rem;text-align: center;line-height: 0.8rem">
      上拉加载更多...
    </div>
    <div v-if="loading" style="font-size: 0.28rem;text-align: center;line-height: 0.8rem">已经到底啦~0~</div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  export default {
    name: 'newstatus',
    data() {
      return {
        page:1,
        rows:15,
        type:3
      }
    },
    computed:{
      ...mapGetters([
        'threeNewsResult','loading'
      ]),
    },
    activated(){
      this.$store.commit('SET_LOADING',1)
    },
    mounted(){
      this.getNewsList()
    },
    methods:{
      ...mapActions([
        'oneNewsActions'
      ]),
      toDetial(val){
        this.$router.push('/newsDetail')
        this.$store.commit('ARTS_DETIALS_CHANGE',val.content)
      },
      getNewsList(){
        let data = {
          "page": this.page,
          "limit": this.rows,
          "type": this.type
        }
        this.oneNewsActions(data)
      },
      loadMore() {
        this.rows += 15
        let _self = this
        _self.getNewsList()
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
