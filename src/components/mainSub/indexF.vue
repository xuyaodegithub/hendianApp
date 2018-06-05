<template>
  <div class="index">
    <div class="swipe">
      <mt-swipe :auto="3000" :speed="200">
        <mt-swipe-item v-for="(item,index) in images" :key="index">
          <img :src="item" alt="" class="swiperImg">
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <v-card :msg="supstar"></v-card>
    <v-card :msg="artStore"></v-card>
    <v-card :msg="nowProduct"></v-card>
    <vTellscard :msg="newsTell"></vTellscard>
    <v-news :msg="newsList"></v-news>
  </div>
</template>

<script>
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
        supstar:{
          title:'名家风采',
          item:[
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
          ]
        },
        artStore:{
          title:'艺术文库',
          item:[
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
          ]
        },
        nowProduct:{
          title:'当前拍品',
          item:[
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
            {imgUrl:'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',toUrl:''},
          ]
        },
        newsTell:{
          title:'通知公告',
          item:[
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''},
            {title:'考古发掘品移交管考古发掘品移交管考古发掘品移交管考古发掘品移交管',time:'06-12',toUrl:''}
          ]
        },
        newsList:{
          title:'新闻动态',
          item:[
            {title:'习近平总书记调研视察东阳市横店收藏家协会',time:'06-12',toUrl:'',imgUrl:'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'},
            {title:'习近平总书记调研视察东阳市横店收藏家协会',time:'06-12',toUrl:'',imgUrl:'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'},
            {title:'习近平总书记调研视察东阳市横店收藏家协会',time:'06-12',toUrl:'',imgUrl:'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'},
            {title:'习近平总书记调研视察东阳市横店收藏家协会',time:'06-12',toUrl:'',imgUrl:'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'},
            {title:'习近平总书记调研视察东阳市横店收藏家协会',time:'06-12',toUrl:'',imgUrl:'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'}
          ]
        },
      }
    },
    components:{
      vCard,vTellscard,vNews
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
