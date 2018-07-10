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
        <v-video :seachmsg="whichList.list" v-on:to-parents="toDetial" :type="type"></v-video>
      </div>
    </div>
    <div class="showAlert" @click="removeVideo()" v-if="videoResult.type"></div>
    <div v-if="videoResult.type" class="videoDiv">
      <video id="playVideo" :src="videoResult.url" controls :poster="videoResult.imgUrl" ref="video" width="100%"
             height="100%" autoplay>
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
  import vVideo from '../publicSub/videosCard.vue'

  export default {
    name: 'videos',
    data() {
      return {
        page: 1,
        rows: 10,
        activekey: 0,
        type: 1,
        msg: false,
        videoResult: {
          type: false,
          url: '',
          imgUrl: ''
        },
        imgName: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527616250063&di=885fb868e9301e429fc4e5d5b31f16e7&imgtype=0&src=http%3A%2F%2Fpic.bestb2b.com%2Ff28a0d5b1a0f7141572a4b4837073181.jpg',
        tapBtn: [
          {title: '横店风采', url: ''},
          {title: '横店影视城', url: ''},
          {title: '横店圆明园', url: ''},
          {title: '协会主题活动', url: ''},
        ],
        toUrl: 'http://ol-quan2017.oss-cn-shanghai.aliyuncs.com/14c241e1d3c20784a4bce926f62deb9f687e1315',
      }
    },
    computed: {
      ...mapGetters([
        'videosHengResult','videosMovieResult','videosYuanResult','videosactiveResult'
      ]),
      whichList(){
        if(this.type===1){
          return this.videosHengResult
        }else if(this.type===2){
          return this.videosMovieResult
        }else if(this.type===3){
          return this.videosYuanResult
        }else{
          return this.videosactiveResult
        }
      }
    },
    components: {
      vVideo
    },
    mounted(){
      this.getVideoList()
    },
    activated(){
      this.$store.commit('SET_LOADING',1)
    },
    methods: {
      ...mapActions([
        'videosSeachActions'
      ]),
      chanegContent(item, key) {
        this.$store.commit('SET_LOADING',1)
        this.activekey = key
        this.type=key+1
        this.getVideoList()
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
      removeVideo() {
        this.videoResult.type = false
      },
      getVideoList() {
        let data1 = {
          page: this.page,
          limit: this.rows,
          type: this.type
        }
        this.videosSeachActions(data1)
      },
      toDetial(val) {
        this.videoResult.url = val.url
        this.videoResult.type = val.type
        this.videoResult.imgUrl = val.imgUrl
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

  .showAlert {
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #000000;
    opacity: 0.5;
    top: 0;
  }

  .videoDiv {
    position: fixed;
    height: 4rem;
    width:100%;
    top: 50%;
    margin-top: -2rem;
  }
</style>
