<template>
  <div class="auction">
    <ul class="aucHeader flex">
      <li v-for="(item,index) in tapBtn" :key="index">
        {{item.title}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  export default {
    name: 'auction',
    data() {
      return {
        tapBtn:[
          {title:'拍品预告',url:''},
          {title:'当前拍品',url:''},
          {title:'往期拍卖',url:''},
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

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .auction{
   padding:0.1rem 0.2rem;
   font-size: 0.28rem;
   line-height: 0.46rem;
   .aucHeader li{
     margin-right: 0.3rem;
   }
 }

</style>
