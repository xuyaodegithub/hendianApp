const mutations = {
  changeAlert(state, where) {
    state.page.popoverAlive.openOrClose = !state.page.popoverAlive.openOrClose;
    if (typeof where == "object") {
      state.page.popoverAlive.title = where[0];
    } else if (typeof where == "string") {
      state.page.popoverAlive.title = where;
    }
    if (typeof where == "object" && where.length >= 2) {
      state.page.popoverAlive.SSSnum = where[1];
    }
  },
  //政策
  SET_ONE_NEWS(state, data) {
    state.editor.oneNewsMM.type = data.type
    state.editor.oneNewsMM.page = data.page
    state.editor.oneNewsMM.limit = data.limit
  },
  GET_ONE_NEWS(state, res) {
    state.page.oneNewsResult = res.data
  },
  //通知公告
  SET_TWO_NEWS(state, data) {
    state.editor.twoNewsMM.type = data.type
    state.editor.twoNewsMM.page = data.page
    state.editor.twoNewsMM.limit = data.limit
  },
  GET_TWO_NEWS(state, res) {
    if(res.data.list.length===state.page.twoNewsResult.list.length) {
      state.page.loading = true
      state.page.twoNewsResult = res.data
    }else{
      state.page.twoNewsResult = res.data
    }
  },
  //新闻动态
  SET_THREE_NEWS(state, data) {
    state.editor.threeNewsMM.type = data.type
    state.editor.threeNewsMM.page = data.page
    state.editor.threeNewsMM.limit = data.limit
  },
  GET_THREE_NEWS(state, res) {
    if(res.data.list.length===state.page.threeNewsResult.list.length) {
      state.page.loading = true
      state.page.threeNewsResult = res.data
    }else{
      state.page.threeNewsResult = res.data
    }
  },
  //艺术文库
  SET_ARTS_BOOK(state, data) {
    state.editor.artsBookMM.page = data.page
    state.editor.artsBookMM.limit = data.limit
    state.editor.artsBookMM.type = data.type
  },
  GET_ARTS_BOOK(state, res) {
    if(res.data.list.length===state.page.artsBookResult.list.length) {
      state.page.loading = true
      state.page.artsBookResult = res.data
    }else{
      state.page.artsBookResult = res.data
    }
  },
  //各种详情
  SET_SOME_DETAIL(state, data) {
    state.editor.someDetail.id = data.id
  },
  GET_SOME_DETAIL(state, res) {
    state.page.someDetailResult = res.data
  },
  //拍卖查询qian
  SET_AUCTIONS_PRODUCT_B(state, data) {
    state.editor.auctionsProductbefoeMM.page=data.page
    state.editor.auctionsProductbefoeMM.limit=data.limit
    state.editor.auctionsProductbefoeMM.type=data.type
  },
  GET_AUCTIONS_PRODUCT_B(state, res) {
    if(res.data.list.length===state.page.auctionsProductbefoeResult.list.length) {
      state.page.loading = true
      state.page.auctionsProductbefoeResult = res.data
    }else{
      state.page.auctionsProductbefoeResult = res.data
    }
  },
  //拍卖查询中
  SET_AUCTIONS_PRODUCT_N(state, data) {
    state.editor.auctionsProductnowMM.page=data.page
    state.editor.auctionsProductnowMM.limit=data.limit
    state.editor.auctionsProductnowMM.type=data.type
  },
  GET_AUCTIONS_PRODUCT_N(state, res) {
    if(res.data.list.length===state.page.auctionsProductnowResult.list.length) {
      state.page.loading = true
      state.page.auctionsProductnowResult = res.data
    }else{
      state.page.auctionsProductnowResult = res.data
    }
  },
  //拍卖查询往期
  SET_AUCTIONS_PRODUCT_A(state, data) {
    state.editor.auctionsProductagoMM.page=data.page
    state.editor.auctionsProductagoMM.limit=data.limit
    state.editor.auctionsProductagoMM.type=data.type
  },
  GET_AUCTIONS_PRODUCT_A(state, res) {
    if(res.data.list.length===state.page.auctionsProductagoResult.list.length) {
      state.page.loading = true
      state.page.auctionsProductagoResult = res.data
    }else{
      state.page.auctionsProductagoResult = res.data
    }
  },
  //名家风采
  SET_SUPER_PERSONS(state, data) {
    state.editor.superpersonsMM.page = data.page
    state.editor.superpersonsMM.limit = data.limit
  },
  GET_SUPER_PERSONS(state, res) {
    if(res.data.list.length=== state.page.superpersonsResult.list.length) {
      state.page.loading = true
      state.page.superpersonsResult = res.data
    }else{
      state.page.superpersonsResult = res.data
    }
  },
  //视频
  SET_VIDEOS_SEACH(state, data) {
    state.editor.videosSeachMM.page = data.page
    state.editor.videosSeachMM.limit = data.limit
    state.editor.videosSeachMM.type = data.type
  },
  GET_VIDEOS_SEACH1(state, res) {
    if(res.data.list.length=== state.page.videosHengResult.list.length) {
      state.page.loading = true
      state.page.videosHengResult=res.data
    }else{
      state.page.videosHengResult=res.data
    }
  },
  GET_VIDEOS_SEACH2(state, res) {
    if(res.data.list.length=== state.page.videosMovieResult.list.length) {
      state.page.loading = true
      state.page.videosMovieResult=res.data
    }else{
      state.page.videosMovieResult=res.data
    }
  },
  GET_VIDEOS_SEACH3(state, res) {
    if(res.data.list.length=== state.page.videosYuanResult.list.length) {
      state.page.loading = true
      state.page.videosYuanResult=res.data
    }else{
      state.page.videosYuanResult=res.data
    }
  },
  GET_VIDEOS_SEACH4(state, res) {
    if(res.data.list.length=== state.page.videosactiveResult.list.length) {
      state.page.loading = true
      state.page.videosactiveResult=res.data
    }else{
      state.page.videosactiveResult=res.data
    }
  },
  //视频详情
  GET_VIDEO_DETIAL(state,res){
    state.page.videosDetialResult=res.data
  },
  //首页数据
  GET_INDEX_DATA(state,res){
    state.page.indexDataResult=res.data
  },
  //加入我们
  SET_JOIN_US(state,data){
    state.editor.joinusMM.name=data.name
    state.editor.joinusMM.address=data.address
    state.editor.joinusMM.cardNo=data.cardNo
    state.editor.joinusMM.company=data.company
    state.editor.joinusMM.job=data.job
    state.editor.joinusMM.mobile=data.mobile
    state.editor.joinusMM.loginName=data.loginName
    state.editor.joinusMM.passwork=data.passwork
    state.editor.joinusMM.introducer=data.introducer
    state.editor.joinusMM.promotersPhone=data.promotersPhone
    state.editor.joinusMM.promoters=data.promoters
    state.editor.joinusMM.category=data.category
  },
  //seach
  SET_SEACH_WORDS(state,data){
    state.editor.seachWordsMM.keyword=data.keyword
  },
  GET_SEACH_WORDS(state,res){
    state.page.seachWordsResult=res.data
  },
  //名家风采详情
  SUP_DETIALS_CHANGE(state,data){
    state.page.supDetialsResult=data
  },
  //新闻详情
  NEWS_DETIALS_CHANGE(state,data){
    state.page.newsDetialsResult=data
  },
  //艺术文库详情
  ARTS_DETIALS_CHANGE(state,data){
    state.page.artsDetialsResult=data
  },
  //loading
  SET_LOADING(state,data){
    state.page.loading=false
  }
}



export default mutations
