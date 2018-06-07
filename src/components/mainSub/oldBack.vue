<template>
  <div class="oldBack">
    <div>
      <h4>市场概况</h4>
      <p>“近年来，涉密会议期间，时有微信泄密案发生，俨然成为一大“跑风口”。这些案例主要有以下3种类型。”
        案例1：违规使用微信处理涉密会议会务</p>
    </div>
    <div>
      <h4>招商政策</h4>
      <p>“近年来，涉密会议期间，时有微信泄密案发生，俨然成为一大“跑风口”。这些案例主要有以下3种类型。”
        案例1：违规使用微信处理涉密会议会务</p>
    </div>
    <div>
      <h4>主题活动</h4>
      <p>“近年来，涉密会议期间，时有微信泄密案发生，俨然成为一大“跑风口”。这些案例主要有以下3种类型。”
        案例1：违规使用微信处理涉密会议会务</p>
    </div>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'oldBack',
    data() {
      return {

      }
    },
    components: {

    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .oldBack {
    text-align: left;
    padding:0.15rem 0.3rem;
    & > div{
      padding:0.15rem 0;
      h4{
        font-size: 0.32rem;
        line-height: 0.52rem;
      }
      p{
        font-size: 0.28rem;
        line-height: 0.48rem;
        padding:0 0.3rem;
        text-indent: 2em;
      }
    }
  }

</style>
