<template>
    <div class="zhang">
      <h4>组织机构</h4>
      <div class="btext">
        <p>
          理事会
        </p>
        <br>
        <p>
          <i>顾问委员会</i> <i>常务理事会</i>
        </p>
        <br>
        <p>
          会长
        </p>
        <br>
        <p>
          <i>名誉会长</i>
          <i>常务副会长</i>
          <i>执行副会长</i>
          <i>秘书长、副秘书长</i>
        </p>
        <br>
        <p>
          <i>财务部</i>
          <i>办公室</i>
          <i>事业发展部</i>
          <i>业务拓展部</i>
        </p>
        <br>
        <p>
          <i>理事单位</i>
          <i>副会长</i>
        </p>
        <br>
        <p>
          常务理事
        </p>
        <br>
        <p>
          理事
        </p>
        <br>
        <p>
          会员
        </p>
      </div>
    </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import {mapActions} from 'vuex'

  export default {
    name: 'AssociationBrief',
    data() {
      return {
        bleft: [
          {title: '协会简介', url: ''},
          {title: '协会章程', url: ''},
          {title: '组织机构', url: ''},
          {title: '专家顾问委员会', url: ''},
          {title: '理事会', url: ''}
        ]
      }
    },
    computed: {
      ...mapGetters([])
    },
    components: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .zhang {
      padding: 0.2rem;
      text-align: center;
      h4 {
        padding-left: 0.1rem;
        line-height: 0.8rem;
        font-size: 0.32rem;
        border-bottom: 1px solid #999999;
        margin-bottom: 0.2rem;
      }
      .btext{
        font-size: 0.28rem;
        line-height: 0.48rem;
        /*text-indent: 2em;*/
        padding:0 0.3rem;
        p{
          i{
            margin: 0 0.1rem;
          }
        }
      }

    }
</style>
