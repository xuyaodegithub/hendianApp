<template>
  <div class="vSupstar">
    <!--<ul class="aucHeader flex">-->
      <!--<li v-for="(item,index) in tapBtn" :key="index" :class="{active : activekey===index}"-->
          <!--@click="changeSome(item,index)">-->
        <!--{{item.title}}-->
      <!--</li>-->
    <!--</ul>-->
    <div>
      <v-supstar :msg="superpersonsResult.list"></v-supstar>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import vSupstar from '../publicSub/supstar.vue'

  export default {
    name: 'supstar',
    data() {
      return {
        activekey: 0,
        page:1,
        rows:15
      }
    },
    computed:{
      ...mapGetters([
        'superpersonsResult','loading'
      ])
    },
    components: {
      vSupstar
    },
    mounted(){
      this.$store.commit('SET_LOADING',1)
      this.getsupList()
    },
    activated(){
      this.$store.commit('SET_LOADING',1)
    },
    methods: {
      ...mapActions([
        'superpersonsActions'
      ]),
      getsupList(){
        let data={
          page:this.page,
          limit:this.rows
        }
        this.superpersonsActions(data)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .vSupstar {
    padding: 0.2rem 0.2rem;
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
