<template>
  <div v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="10"
       infinite-scroll-immediate-check="false" v-if=" msg.length>0">
    <div class="auction flex" v-for="(item,index) in msg" :key="index" @click="toDetial(item)">
      <div class="title flex">
        <h4 class="over">{{item.title}}</h4>
        <!--<p class="pactive">{{item.content}}</p>-->
        <p>{{item.publishTime | changeTime}}</p>
      </div>
      <div class="img">
        <img :src="item.titleImg" alt="">
      </div>
    </div>
    <div v-if="!loading" style="font-size: 0.28rem;text-align: center;line-height: 0.8rem">
      上拉加载更多...
    </div>
    <div v-if="loading" style="font-size: 0.28rem;text-align: center;line-height: 0.8rem">已经到底啦~0~</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    props: ['msg'],
    name: 'supstarCard',
    data() {
      return {
        page:1,
        rows:15
      }
    },
    computed:{
      ...mapGetters([
        'superpersonsResult','loading'
      ])
    },
    methods:{
      ...mapActions([
        'superpersonsActions'
      ]),
      loadMore() {
        this.rows += 15
        let _self = this
        _self.getsupList()
      },
      getsupList(){
        let data={
          page:this.page,
          limit:this.rows
        }
        this.superpersonsActions(data)
      },
      toDetial(item){
        this.$router.push('/newsDetail')
        this.$store.commit('ARTS_DETIALS_CHANGE',item.content)
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
