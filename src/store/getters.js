const getters = {
//弹框属性输出
  popoverAlive: state => {
    return state.page.popoverAlive
  },
  //政策
  oneNewsResult: state => {
    return state.page.oneNewsResult
  },
  //通知公告
  twoNewsResult: state => {
    return state.page.twoNewsResult
  },
  //新闻动态
  threeNewsResult: state => {
    return state.page.threeNewsResult
  },
  //  //艺术文库
  artsBookResult: state => {
    return state.page.artsBookResult
  },
//  //各种详情
  someDetailResult: state => {
    return state.page.someDetailResult
  },
//  //拍卖查询
  auctionsProductbefoeResult: state => {
    return state.page.auctionsProductbefoeResult
  },
//  //拍卖查询
  auctionsProductnowResult: state => {
    return state.page.auctionsProductnowResult
  },
//  //拍卖查询
  auctionsProductagoResult: state => {
    return state.page.auctionsProductagoResult
  },
//  //名家风采
  superpersonsResult: state => {
    return state.page.superpersonsResult
  },
//  //视频1
  videosHengResult: state => {
    return state.page.videosHengResult
  },
  //视频2
  videosMovieResult: state => {
    return state.page.videosMovieResult
  },
  //视频3
  videosYuanResult: state => {
    return state.page.videosYuanResult
  },
  //视频4
  videosactiveResult: state => {
    return state.page.videosactiveResult
  },
  //视频详情
  videosDetialResult: state => {
    return state.page.videosDetialResult
  },
  //首页数据
  indexDataResult: state => {
    return state.page.indexDataResult
  },
  //seach
  seachWordsResult : state=> {
    return state.page.seachWordsResult
  },
  //名家风采详情
  supDetialsResult: state => {
    return state.page.supDetialsResult
  },
  //新闻详情
  newsDetialsResult: state => {
    return state.page.newsDetialsResult
  },
  //艺术文库详情
  artsDetialsResult: state => {
    return state.page.artsDetialsResult
  },
  loading: state => {
    return state.page.loading
  }
}

export default getters
