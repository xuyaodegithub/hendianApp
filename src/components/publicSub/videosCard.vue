<template>
  <div v-infinite-scroll="loadMore"
       infinite-scroll-disabled="loading"
       infinite-scroll-distance="10"
       infinite-scroll-immediate-check="false">
    <div class="auction flex" v-for="(item,index) in seachmsg" :key="index" @click="toDetail(item,index)">
      <div class="title flex">
        <h4 class="over">{{item.title}}</h4>
        <p>{{item.publishTime | changeTime}}</p>
      </div>
      <div class="img">
        <img :src="item.titleImg" alt="">
      </div>
    </div>
    <div v-if="!loading  && seachmsg.length>0" style="font-size: 0.28rem;text-align: center;line-height: 0.8rem">
      上拉加载更多...
    </div>
    <div v-if="loading" style="font-size: 0.28rem;text-align: center;line-height: 0.8rem">已经到底啦~0~</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    props: ['seachmsg', 'type'],
    name: 'pamai',
    data() {
      return {
        currentPage4: 1,
        rows: 10,
      }
    },
    computed: {
      ...mapGetters([
        'loading', 'videosHengResult', 'videosMovieResult', 'videosYuanResult', 'videosactiveResult'
      ])
    },
    watch: {
      type: function (newVal, oldVal) {
        this.currentPage4 = 1
        this.rows = 10
      }
    },
    methods: {
      ...mapActions([
        'videosSeachActions'
      ]),
      toDetail(item, key) {
        let data = {
          type: true,
          url: item.videoUrl,
          imgUrl: item.titleImg
        }
        this.$emit('to-parents', data)
      },
      loadMore() {
        this.rows += 10
        let _self = this
        _self.getsomeLsit()
//        setTimeout(function(){
//          _self.getsomeLsit()
//        },2000)
//        let _self=this
//        this.num++
////        this.loading = true;
//        setTimeout(() => {
//          if(_self.num>=6){
//            _self.loading=true
//          }else{
//            _self.newsTell.item=_self.newsTell.item.concat(_self.list)
//          }
//        }, 1000);
      },
      getsomeLsit() {
        let data = {
          "page": this.currentPage4,
          "limit": this.rows,
          "type": this.type
        }
        this.videosSeachActions(data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .auction {
    padding: 0.15rem 0;
    text-align: left;
    justify-content: space-between;
    border-bottom: 1px solid #999999;
    .title {
      padding: 0.15rem;
      /*border-bottom: 1px solid #999999;*/
      -webkit-flex-direction: column;
      -moz-flex-direction: column;
      -ms-flex-direction: column;
      -o-flex-direction: column;
      flex-direction: column;
      justify-content: space-between;
      width: 55%;
      h4 {
        font-size: 0.32rem;
        line-height: 0.48rem;
      }
      p {
        font-size: 0.28rem;
        line-height: 0.48rem;
      }
    }
    .img {
      img {
        display: block;
        width: 3rem;
        height: 2rem;
      }
    }

  }

</style>
