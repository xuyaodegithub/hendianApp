<template>
  <div class="artStore">
    <ul class="aucHeader flex">
      <li v-for="(item,index) in tapBtn" :key="index" :class="{active : activekey===index}"
          @click="changeSome(item,index)">
        {{item.title}}
      </li>
    </ul>
    <div>
      <v-auction :msg="newsList"></v-auction>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vAuction from '../publicSub/auction.vue'

  export default {
    name: 'artStore',
    data() {
      return {
        activekey: 0,
        tapBtn: [
          {title: '全部', url: ''},
          {title: '瓷器', url: ''},
          {title: '玉器', url: ''},
          {title: '字画', url: ''},
          {title: '金属器', url: ''},
          {title: '杂项', url: ''},
        ],
        newsList: {
          title: '新闻动态',
          type: 2,
          item: [
            {
              title: '习近平总书记',
              time: '2018-06-12',
              toUrl: '',
              imgUrl: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            },
            {
              title: '习近平总书记',
              time: '2018-06-12',
              toUrl: '',
              imgUrl: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            },
            {
              title: '习近平总书记',
              time: '2018-06-12',
              toUrl: '',
              imgUrl: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            },
            {
              title: '习近平总书记',
              time: '2018-06-12',
              toUrl: '',
              imgUrl: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            },
            {
              title: '习近平总书记',
              time: '2018-06-12',
              toUrl: '',
              imgUrl: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            },
            {
              title: '习近平总书记',
              time: '2018-06-12',
              toUrl: '',
              imgUrl: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            },
            {
              title: '习近平总书记',
              time: '2018-06-12',
              toUrl: '',
              imgUrl: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            },
            {
              title: '习近平总书记',
              time: '2018-06-12',
              toUrl: '',
              imgUrl: 'https://o3e85j0cv.qnssl.com/hot-chocolate-1068703__340.jpg'
            }
          ]
        },
      }
    },
    components: {
      vAuction
    },
    methods: {
      changeSome(item, key) {
        this.activekey = key
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .artStore {
    padding: 0.1rem 0.2rem;
    font-size: 0.28rem;
    line-height: 0.46rem;
    .aucHeader {
      margin-bottom: 0.15rem;
    }
    .aucHeader li {
      margin-right: 0.3rem;
      &.active {
        color: #bd2c00;
        border-bottom: 1px solid #bd2c00;
      }
    }
  }

</style>
