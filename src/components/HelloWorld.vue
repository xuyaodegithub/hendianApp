<template>
  <div class="hello">
    <div class="head flex">
      <h4>横店收藏家协会</h4>
      <div class="Hright border-r flex">
        <i class="icon iconfont icon-unie036"></i>
        <form action="javascript:return true;">
          <input type="search" placeholder="请输入内容" class="seachI" @keyup="seachList($event)" v-model="isInput"
                 ref="oinput">
        </form>
      </div>
    </div>
    <div class="navList">
      <ul class="flexx">
        <li v-for="(item,index) in msg" :key="index" :class="{active : colorNum===index}"
            @click="changeRouter(item,index)">
          {{item.title}}
        </li>
      </ul>
    </div>
    <transition name="bounce">
      <keep-alive>
        <router-view class="child-view"/>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import {Base64} from 'js-base64';

  export default {
    name: 'HelloWorld',
    data() {
      return {
        isInput: '',
        msg: [
          {title: '首页', urlRoute: '/'},
          {title: '协会简介', urlRoute: '/Association'},
          {title: '加入协会', urlRoute: '/registered'},
          {title: '艺术文库', urlRoute: '/artStore'},
          {title: '名家风采', urlRoute: '/superstar'},
          {title: '拍卖', urlRoute: '/auction'},
          {title: '视频', urlRoute: '/videos'},
          {title: '古玩市场', urlRoute: '/oldBack'},
          {title: '鉴定与评估', urlRoute: '/evaluation'},
          {title: '新闻动态', urlRoute: '/newsStatus'},
          {title: '通知公告', urlRoute: '/tellAsk'},
          {title: '联系我们', urlRoute: '/concasUs'},
        ],
        activeKey: 0
      }
    },
    computed: {
      colorNum() {
        if (this.$route.path === '/') {
          return 0
        } else if (this.$route.path === '/Association') {
          return 1
        } else if (this.$route.path === '/registered') {
          return 2
        } else if (this.$route.path === '/artStore') {
          return 3
        } else if (this.$route.path === '/superstar') {
          return 4
        } else if (this.$route.path === '/auction') {
          return 5
        } else if (this.$route.path === '/videos') {
          return 6
        } else if (this.$route.path === '/oldBack') {
          return 7
        } else if (this.$route.path === '/evaluation') {
          return 8
        } else if (this.$route.path === '/newsStatus') {
          return 9
        } else if (this.$route.path === '/tellAsk') {
          return 10
        } else if (this.$route.path === '/concasUs') {
          return 11
        } else {

        }
      }
    },
    methods: {
      ...mapActions([
        'seachWordsActions'
      ]),
      changeRouter(val, key) {
        this.$router.push(val.urlRoute)
      },
      seachList(ev) {
        let evl = ev || window.event
        let data = {
          keyword: Base64.encode(this.isInput)
        }
        if (evl.keyCode == 13) {
          this.$refs.oinput.blur()
          this.seachWordsActions(data)
          this.$router.push('/seachList')
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .bounce-enter-active {
    /*animation: bounce-in2 .5s linear;*/
    transform: translateX(100%);
  }

  .bounce-leave-active {
    /*animation: bounce-in .5s linear;*/
    transform: translateX(-100%);
  }

  .child-view {
    transition: all .3s linear;
    /*padding-bottom: 53px;*/

  }

  .head {
    padding: 0.15rem 0.3rem;
    line-height: 0.52rem;
    font-size: 0.32rem;
    border-bottom: 1px solid #999999;
    h4 {
      margin-right: 0.2rem;
      font-size: 0.36rem;
    }
    .seachI {
      border: none;
      background: none;
      width: 80%;
    }
    .Hright {
      background: rgba(229, 229, 229, 1);
      padding: 0 0.15rem;
      flex: 1;
      text-align: left;
      i {
        font-size: 0.32rem;
        margin-right: 0.15rem;
      }
    }
  }

  .navList {
    font-size: 0.32rem;
    padding: 0.15rem;
  }

  .flexx {
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    text-align: left;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
  }

  li {
    display: inline-block;
    line-height: 0.42rem;
    margin-right: 0.3rem;
    width: auto;
  }

  li:last-child {
    margin-right: 0;
  }

  li.active {
    color: #bd2c00;
    border-bottom: 1px solid #bd2c00;
  }
</style>
