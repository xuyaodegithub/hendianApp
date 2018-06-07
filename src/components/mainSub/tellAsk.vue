<template>
  <div class="tellAsk ">
      <ul v-infinite-scroll="loadMore"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10">
        <li v-for="(item,index) in newsTell.item" :key="index"  class="flex">
          <p class="over">{{item.title}}</p>
          <p>{{item.time}}</p>
        </li>
        <li v-if="!loading">
          加载中...
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
        loading:false,
        imgurl: 'static/sssss.jpg',
        num:0,
        newsTell:{
          title:'通知公告',
          item:[
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''}
          ]
        },
        list:[
          {title:'1111111111111111',time:'06-12',toUrl:''},
          {title:'2222222222222222222',time:'06-12',toUrl:''},
          {title:'333333333333333333',time:'06-12',toUrl:''},
          {title:'444444444444444444',time:'06-12',toUrl:''},
          {title:'5555555555555555555',time:'06-12',toUrl:''},
        ]
      }
    },
    components: {},
    methods: {
      loadMore() {
        let _self=this
        this.num++
//        this.loading = true;
        setTimeout(() => {
          if(_self.num>=6){
            _self.loading=true
          }else{
            _self.newsTell.item=_self.newsTell.item.concat(_self.list)
          }
        }, 1000);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tellAsk{
  padding:0.3rem 0 0 0;
  font-size:0.32rem;
  line-height: 0.56rem;
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
