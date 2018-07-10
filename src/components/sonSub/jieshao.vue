<template>
    <div class="zhang">
      <h4>协会简介</h4>
      <div class="btext">
        <p>
          东阳横店收藏家协会是经东阳市民政局批准成立的社团组织，由我国著名企业家，横店集团创始人、横店文化产业奠基人、横店共创共有共富共享工作委员会主席徐文荣先生，响应中央建设文化强国，让文物“活”起来号召发起创办，并亲任会长。协会以“交流互鉴，合作共赢”为宗旨，依托横店圆明新园和横店影视城平台，力主在横店创建全国最大的古玩艺术品集散中心，打造集收藏、鉴定、评估、拍卖、交易、出口、培训、金融化平台为一体的功能完善的古玩艺术品产业体系
        </p>
        <p>
          多年来，徐文荣主席出于对中国优秀传统文化的挚爱，对保护文化遗产的强烈责任，以及对文物收藏界的现状，提出许多振聋发聩的意见，是全国民藏领域的一面旗帐，推动收藏文化繁荣的中坚力量。
        </p>
        <p>
          “广大中小收藏者联合起来！”面对全国数千万中小收藏者散漫无组织，“捧着金饭碗要饭吃”的窘境，徐文荣决意搭建收藏家协会这个平台，共同发声，同步构建完整的产业体系，协力帮助广大收藏家推销藏品，使他们脱贫致富，做好这项全国数千万中小收藏家的伟大的扶贫工程！
        </p>
        <p>
          在此，号召广大收藏家和收藏爱好者积极参与到横店这个平台，凝心聚力，共同推动我国收藏文化的大发展大繁荣！
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
      text-align: left;
      h4 {
        padding-left: 0.1rem;
        line-height: 0.8rem;
        font-size: 0.32rem;
        border-bottom: 1px solid #999999;
        margin-bottom: 20px;
      }
      .btext{
        font-size: 0.28rem;
        line-height: 0.48rem;
        text-indent: 2em;
        padding:0 0.3rem;
      }
    }
</style>
