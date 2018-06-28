<template>
  <div class="index">
    <div class="swipe">
      <mt-swipe :auto="3000" :speed="200">
        <mt-swipe-item v-for="(item,index) in indexDataResult.obj.bigPictureList" :key="index">
          <img :src="item.titleImg" alt="" class="swiperImg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <v-card :msg="indexDataResult.obj.personList" title="名家风采" :type="1"></v-card>
    <v-card :msg="indexDataResult.obj.miscellaneousList" title="艺术文库" :type="2"></v-card>
    <v-card :msg="indexDataResult.obj.auctionList" title="当前拍品" :type="3"></v-card>
    <vTellscard :msg="indexDataResult.obj.noticeList" title="通知公告"></vTellscard>
    <v-news :msg="indexDataResult.obj.newList" title="新闻动态"></v-news>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import { mapGetters } from 'vuex'
  import vCard from '../publicSub/card.vue'
  import vTellscard from '../publicSub/tellCard.vue'
  import vNews from '../publicSub/newsCard.vue'
  export default {
    name: 'index',
    data() {
      return {
        images: [
          'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
          'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg',
          'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'//'static/safe0.png','static/yue.png'
        ],
      }
    },
    components:{
      vCard,vTellscard,vNews
    },
    computed:{
      ...mapGetters([
        'indexDataResult'
      ]),
    },
    mounted(){
      this.indexDataActions()
    },
    activated(){
      this.$store.commit('SET_LOADING',1)
    },
    methods:{
      ...mapActions([
        'indexDataActions'
      ]),
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .index {
    .swipe{
      height:4rem;
      .swiperImg{
        display: block;
        width:100%;
        height:100%;
      }
    }

  }

</style>
