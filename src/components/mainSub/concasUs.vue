<template>
  <div class="concasUs flex">
    <div>
      <p>浙江省东阳市横店镇231号</p>
      <p>tel：0579-86642183</p>
    </div>
    <div>
      <img :src="imgurl" alt="">
      <p>用微信扫一扫</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'concasUs',
    data() {
      return {
        imgurl: 'static/sssss.jpg'
      }
    },
    components: {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.concasUs{
  padding:0.15rem 0.3rem;
  font-size: 0.28rem;
  line-height: 0.52rem;
  & > div:first-child{
    width:60%;
    margin-top: 0.5rem;
  }
  img{
    display: block;
    width:2rem;
    height:2rem;
  }
}

</style>
