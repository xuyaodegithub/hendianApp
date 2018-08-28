<template>
  <div class="tellAsk ">
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
          infinite-scroll-immediate-check="false" v-if=" twoNewsResult.list.length>0">
        <li v-for="(item,index) in twoNewsResult.list" :key="index"  class="flex" @click="toDetial(item)">
          <p class="over">{{item.title}}</p>
          <p>{{item.publishTime | changeTime}}</p>
        </li>
        <li v-if="!loading">
          上拉加载更多...
        </li>
      </ul>
    <div  v-if="loading">已经到底啦~0~</div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'tellAsk',
    data() {
      return {
        page:1,
        rows:15,
        type:2
      }
    },
    components: {},
    computed:{
      ...mapGetters([
        'loading','twoNewsResult'
      ]),
    },
    activated(){
      this.$store.commit('SET_LOADING',1)
    },
    mounted(){
      this.getNewsList()
    },
    methods: {
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
.tellAsk{
  padding:0.3rem 0 0 0;
  font-size:0.32rem;
  line-height: 0.8rem;
  li:last-child{
    text-align: center;
  }
.flex{
  justify-content: space-between;
  border-bottom: 1px solid #999999;
  p:first-child{
    width:60%;
    padding:0 0.2rem;
  }
  p:last-child{
    text-align: right;
    padding:0 0.2rem;
  }
}

}

</style>
