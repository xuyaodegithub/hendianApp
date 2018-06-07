<template>
  <div class="registered">
    <mt-field label="会员单位" placeholder="请输入内容" v-model="company"></mt-field>
    <mt-field label="联系人" placeholder="请输入内容"  v-model="username"></mt-field>
    <mt-field label="联系方式" placeholder="请输入内容" type="number" v-model="phone" ></mt-field>
    <div>
      <img :src="imgurl" alt="">
      <p>请用支付宝扫二维码缴纳会费</p>
      <p>注意：转账时请备注电话号码以及单位信息</p>
    </div>
    <mt-button type="primary" size="small" @click.native="handleClick">提交注册</mt-button>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'registered',
    data() {
      return {
        company:'',
        username:'',
        phone:'',
        imgurl:'static/sssss.jpg'
      }
    },
    components: {

    },
    methods: {
      handleClick(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .registered {
    text-align: left;
    padding:0.15rem 0.3rem;
    img{
      display: block;
      width:3rem;
      height:3rem;
      margin:0 auto;
      margin-top: 0.4rem;
    }
    p{
      text-align: center;
      font-size: 0.28rem;
      line-height: 0.52rem;
      &:last-child{
        color: #E51C23;
      }
    }
    .mint-button--small{
      display: block;
      width:30%;
      margin: 0  auto;
      margin-top: 1rem;
    }
  }

</style>
