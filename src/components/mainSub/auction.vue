<template>
  <div class="auction">
    <ul class="aucHeader flex">
      <li v-for="(item,index) in tapBtn" :key="index" :class="{active : activekey===index}" @click="changeSome(item,index)">
        {{item.title}}
      </li>
    </ul>
    <div>
      <vpaimai :msg="whichList.list" :type="type"></vpaimai>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import vpaimai from '../publicSub/paimai.vue'
  export default {
    name: 'auction',
    data() {
      return {
        activekey: 0,
        type:1,
        page:1,
        rows:15,
        tapBtn:[
          {title:'拍品预告',url:''},
          {title:'当前拍品',url:''},
          {title:'往期拍卖',url:''},
        ],
      }
    },
    components:{
      vpaimai
    },
    computed: {
      ...mapGetters([
        'auctionsProductbefoeResult','auctionsProductnowResult','auctionsProductagoResult'
      ]),
      whichList(){
        if(this.type===1){
          return this.auctionsProductbefoeResult
        }else if(this.type===2){
          return this.auctionsProductnowResult
        }else{
          return this.auctionsProductagoResult
        }
      }
    },
    mounted(){
      this.getListfff()
    },
    activated(){
      this.$store.commit('SET_LOADING',1)
    },
    methods: {
      ...mapActions([
        'auctionsProductActions'
      ]),
      changeSome(item, key) {
        this.$store.commit('SET_LOADING',1)
        this.activekey = key
        this.type=key+1
        this.page=1
        this.rows=15
        this.getListfff()
      },
      getListfff(){
        let data={
          page:this.page,
          limit:this.rows,
          type:this.type
        }
        this.auctionsProductActions(data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 .auction{
   padding:0.1rem 0.2rem;
   font-size: 0.28rem;
   line-height: 0.46rem;
   .aucHeader{
     margin-bottom: 0.15rem;
   }
   .aucHeader li{
     margin-right: 0.3rem;
     &.active {
       color: #bd2c00;
       border-bottom: 1px solid #bd2c00;
     }
   }
 }

</style>
