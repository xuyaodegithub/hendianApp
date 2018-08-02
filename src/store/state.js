const state = {
  editor: {
    //政策法规
    oneNewsMM: {
      page: '',
      limit: '',
      type: ''
    },
    //通知公告
    twoNewsMM: {
      page: '',
      limit: '',
      type: ''
    },
    //新闻动态
    threeNewsMM: {
      page: '',
      limit: '',
      type: ''
    },
    //艺术文库
    artsBookMM: {
      page: '',
      limit: '',
      type: ''
    },
    //  //各种详情
    someDetail: {
      id: ''
    },
    //拍卖查询前
    auctionsProductbefoeMM: {
      page: '',
      limit: '',
      type: ''
    },
    //拍卖查询中
    auctionsProductnowMM: {
      page: '',
      limit: '',
      type: ''
    },
    //拍卖查询往期
    auctionsProductagoMM: {
      page: '',
      limit: '',
      type: ''
    },
    //名家风采
    superpersonsMM: {
      page: '',
      limit: '',
    },
    //视频
    videosSeachMM: {
      page: '',
      limit: '',
      type: ''
    },
    //加入我们
    joinusMM: {
      name: '',
      cardNo: '',
      company: '',
      mobile: '',
      address: '',
      job: '',
      loginName:'',
      passwork:'',
      promoters:'',
      promotersPhone:'',
      introducer:'',
      category:''
    },
    //搜索
    seachWordsMM: {
      keyword: ''
    }
  },
  page: {
    loading:false,
    result: 123456,
    //弹框属性
    popoverAlive: {
      openOrClose: false,
      title: '',
      SSSnum: ''
    },
    //政策法规
    oneNewsResult: '',
    //通知公告
    twoNewsResult: {
      list:[]
    },
    //新闻动态
    threeNewsResult: {
      list:[]
    },
    //艺术文库
    artsBookResult: {list:[]},
    //  //各种详情
    someDetailResult: '',
    //拍卖查询前
    auctionsProductbefoeResult: {
      list: []
    },
    //拍卖查询中
    auctionsProductnowResult: {
      list: []
    },
    //拍卖查询往期
    auctionsProductagoResult: {
      list: []
    },
    //名家风采
    superpersonsResult: {list:[]},
    //视频
    videosHengResult: {
      list: []
    },
    videosMovieResult: {
      list: []
    },
    videosYuanResult: {
      list: []
    },
    videosactiveResult: {
      list: []
    },
    //视频详情
    videosDetialResult: '',
    //首页数据
    indexDataResult: {
      obj: {
        personList: [],
        auctionList: []
      }
    },
    seachWordsResult: {
      list: []
    },
    //名家风采详情
    supDetialsResult: '',
    //新闻详情
    newsDetialsResult: '',
    //艺术文库详情
    artsDetialsResult: '',

  }
}

export default state
