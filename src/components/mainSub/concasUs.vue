<template>
  <div class="concasUs flex">
    <div>
      <h4>联系人：</h4>
      <p>慈琴琴：&nbsp&nbsp 18767926188</p>
      <p>赵启洪：&nbsp&nbsp 15325915070</p>
      <p>地址：&nbsp&nbsp 横店古名居小南门</p>
    </div>
    <div style="margin-top: 0.2rem;">
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
        imgurl: 'static/ewmll.jpg'
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
  text-align: left;
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
