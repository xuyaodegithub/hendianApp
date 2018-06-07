<template>
  <div>
    <div class="videos">
      <ul class="aucHeader flex">
        <li v-for="(item,index) in tapBtn" :key="index" :class="{active : activekey===index}"
            @click="chanegContent(item,index)">
          {{item.title}}
        </li>
      </ul>
      <div>
        <v-auction :msg="newsList"></v-auction>
      </div>
    </div>
    <div class="showAlert" @click="removeVideo()" v-if="videoResult.type"></div>
    <div v-if="videoResult.type" class="videoDiv">
      <video id="playVideo" :src="videoResult.url" controls :poster="imgName" ref="video" width="100%" height="100%" autoplay>
        <source :src="videoResult.url" type="video/mp4">
        <source :src="videoResult.url" type="video/ogg">
        <source :src="videoResult.url" type="video/webm">
        您的浏览器不支持 video 标签。
      </video>
    </div>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vAuction from '../publicSub/auction.vue'

  export default {
    name: 'videos',
    data() {
      return {
        trueOfalse: true,
        activekey: 0,
        msg: false,
        imgName: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
        tapBtn: [
          {title: '横店风采', url: ''},
          {title: '横店影视城', url: ''},
          {title: '横店圆明园', url: ''},
          {title: '协会主题活动', url: ''},
        ],
        toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
        newsList: {
          title: '新闻动态',
          type: 3,
          item: [
            {
              title: '习近平总书记调研视察东阳市横店收藏家协会',
              time: '06-12',
              toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
              imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'
            },
            {
              title: '习近平总书记调研视察东阳市横店收藏家协会',
              time: '06-12',
              toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
              imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'
            },
            {
              title: '习近平总书记调研视察东阳市横店收藏家协会',
              time: '06-12',
              toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
              imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'
            },
            {
              title: '习近平总书记调研视察东阳市横店收藏家协会',
              time: '06-12',
              toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
              imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'
            },
            {
              title: '习近平总书记调研视察东阳市横店收藏家协会',
              time: '06-12',
              toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
              imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'
            },
            {
              title: '习近平总书记调研视察东阳市横店收藏家协会',
              time: '06-12',
              toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
              imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'
            },
            {
              title: '习近平总书记调研视察东阳市横店收藏家协会',
              time: '06-12',
              toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
              imgUrl: 'https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg'
            }
          ]
        },
      }
    },
    computed: {
      ...mapGetters([
        'videoResult'
      ])
    },
    components: {
      vAuction
    },
    methods: {
      chanegContent(item, key) {
        this.activekey = key
      },
      play() {
        this.trueOfalse = true
      },
      toplay() {
        if (this.msg) {
          this.$refs.video.pause()
          this.msg = false
        } else {
          this.$refs.video.play()
          this.msg = true
        }
        // this.$refs.video.oncanplay=alert("Can start playing video");
      },
      removeVideo(){
        this.$store.commit('SET_VIDEO_URL')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .videos {
    padding: 0.1rem 0.2rem;
    font-size: 0.28rem;
    line-height: 0.46rem;
    .aucHeader {
      margin-bottom: 0.15rem;
    }
    .aucHeader li {
      width: auto;
      margin-right: 0.3rem;
      &.active {
        color: #bd2c00;
        border-bottom: 1px solid #bd2c00;
      }
    }
  }
  .showAlert{
    position: fixed;
    width:100%;
    height:100%;
    background-color: #000000;
    opacity: 0.5;
    top:0;
  }
  .videoDiv {
    position: fixed;
    height: 4rem;
    top: 50%;
   margin-top: -2rem;
  }
</style>
