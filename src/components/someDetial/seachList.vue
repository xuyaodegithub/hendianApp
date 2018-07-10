<template>
      <div class="card">
        <!--<div class="rTop">-->
          <!--<h4>{{title}}</h4>-->
          <!--<span class="cu" @click="toMove()">更多</span>-->
        <!--</div>-->
        <div v-if="seachWordsResult.list.length===0 || !seachWordsResult.list" style="padding: 1rem 0;font-size: 0.32rem;text-align: center;">
          暂无数据......
        </div>
        <ul v-else>
      <!--    <li v-for="(item,index) in seachWordsResult.list"  v-if="leftData.length===5" style="width: 190px;padding: 5px;" class="cu fiveTe" :class="{activeFive : index===4}" @click="toDetial(item)">
            <img :src="item.titleImg" alt="" style="display: block;width: 100%;height: 190px;">
            <p>{{item.title}}</p>
          </li>
         <li v-for="(item,index) in seachWordsResult.list" v-if="leftData.length===6" style="width: 190px;padding: 5px;" class="cu" :class="{addmar :index!==5}" @click="toDetial(item)">
            <img :src="item.titleImg" alt="" style="display: block;width: 100%;height: 190px;">
            <p>{{item.title}}</p>
          </li>-->
          <li v-for="(item,index) in seachWordsResult.list" class="cu teimg" @click="toDetial(item)">
            <img :src="item.titleImg" alt="" style="display: block;width: 100%;">
            <p>{{item.title}}</p>
          </li>
        </ul>
        <!--<div class="block" v-if="leftData.length>6 && leftData.block">
          <el-pagination
            small
            :pager-count="5"
            @size-change="handleSizeChangeNews"
            @current-change="handleCurrentChangeNews"
            :current-page="currentPage5"
            :page-sizes="[10, 20, 30, 40]"
            :page-size="Newsrows"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400">
          </el-pagination>
        </div>-->
      </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  export default {
    name: 'card',
    props:['leftData','title','type'],
    data() {
      return {
        currentPage5:1,
        Newsrows:10,
        /*leftData: [
          {title: '瓷器', titlename: ''}, {title: '玉器', titlename: ''}, {title: '字画', titlename: ''},
          {title: '金属器', titlename: ''}, {title: '杂项', titlename: ''},
        ]*/
      }
    },
    computed: {
      ...mapGetters([
        'seachWordsResult'
      ])
    },
    components: {},
    methods:{
      handleSizeChangeNews(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChangeNews(val) {
        console.log(`当前页: ${val}`);
      },
      toDetial(item){
        this.$router.push('/newsDetail')
        this.$store.commit('ARTS_DETIALS_CHANGE', item.content)
      },
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .card {
      padding: 0.2rem;
      /*border: 1px solid #999999;*/
      ul {
        /*display: -webkit-box;*/
        /*display: -moz-box;*/
        /*display: -ms-flexbox;*/
        /*display: -webkit-flex;*/
        /*display: flex;*/
        padding: 0.2rem 0.1rem;
        li {
          width: 100%;
          margin-bottom: 0.15rem;
          /*height: 190px;*/
          /*margin-right: 20px;*/
          img{
            display: block;
            width:100%;
          }
          p{
           margin-top: 0.15rem;
            text-align: center;
            font-size: 0.28rem;
            line-height:0.48rem;
          }
        }
      }
    }
</style>
