<template>
  <div class="Association">
       <ul class="flex">
         <li v-for="(item,index) in bleft" :class="{active : activekey===index}" @click="changeCom(item,index)">
           {{item.title}}
         </li>
       </ul>
    <keep-alive>
      <component :is="title"></component>
    </keep-alive>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { mapActions } from 'vuex'
  import vJian from '../sonSub/jieshao.vue'
  import vZhange from '../sonSub/zhangcheng.vue'
  export default {
    name: 'Association',
    data() {
      return {
        title:'vJian',
        bleft: [
          {title: '协会简介', url: 'vJian'},
          {title: '协会章程', url: 'vZhange'},
          {title: '组织机构', url: 'vJian'},
          {title: '专家顾问委员会', url: 'vZhange'},
          {title: '理事会', url: 'vJian'}
        ],
        activekey:0
      }
    },
    components:{
      vJian,vZhange
    },
    methods:{
      changeCom(item,key){
        this.activekey=key
        this.title=item.url
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.Association{
  padding:0.15rem;
  ul{
    width:100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    font-size: 0.28rem;
    line-height: 0.48rem;
    margin-bottom: 0.3rem;
    li{
      width:auto;
      margin-right: 0.2rem;
      &.active{
        color: #bd2c00;
        border-bottom: 1px solid #bd2c00;
      }
    }
  }
}

</style>
