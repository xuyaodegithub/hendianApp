<template>
  <div class="artStore">
    <ul class="aucHeader flex">
      <li v-for="(item,index) in tapBtn" :key="index" :class="{active : activekey===index}"
          @click="changeType(item,index)">
        {{item.title}}
      </li>
    </ul>
    <div>
      <v-auction :msg="artsBookResult.list" :type="type"></v-auction>
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
        type:'',
        currentPage4: 1,
        rows: 15,
        tapBtn: [
          {title: '全部', url: ''},
          {title: '瓷器', url: ''},
          {title: '玉器', url: ''},
          {title: '字画', url: ''},
          {title: '金属器', url: ''},
          {title: '杂项', url: ''},
        ],
      }
    },
    components: {
      vAuction
    },
    computed:{
      ...mapGetters([
        'artsBookResult'
      ])
    },
    mounted(){
      this.$store.commit('SET_LOADING',1)
      this.getsomeLsit()
    },
    activated(){
      this.$store.commit('SET_LOADING',1)
    },
    methods: {
      ...mapActions([
        'artsBookActions'
      ]),
      changeType(val, key) {
        this.$store.commit('SET_LOADING',1)
        this.activekey = key
        this.currentPage4 = 1
        this.rows = 15
        if(key>0){
          this.type=key
        }else{
          this.type=''
        }
        this.getsomeLsit()
      },
      getsomeLsit() {
        let data = {
          "page": this.currentPage4,
          "limit": this.rows,
          "type": this.type
        }
        this.artsBookActions(data)
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
