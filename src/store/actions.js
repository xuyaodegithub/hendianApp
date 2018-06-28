import axios from 'axios'
import { Base64 } from 'js-base64';
axios.defaults.baseURL = 'http://116.62.79.0'
axios.defaults.timeout = 10000
axios.defaults.headers['content-type']='application/json'
import { Toast } from 'mint-ui';
import qs from 'qs';
//import * as types from './type';
//import { Loading } from 'element-ui';
import api from './api'


const actions = {
//弹框修改属性
  popoverAlert(context, where, event) {
    context.commit('changeAlert', where)
  },
  saveFormGet(context, funUrl) {
    // axios.defaults.baseURL = context.state.editor.axiosUrl;
    axios({
      method: 'get',
      url: funUrl[0],
      dataType: 'JSON',
      params: context.state.editor[funUrl[2]]
    })
      .then(function (res) {
        console.log(res)
        if (res.data.code==0) {
        context.commit(funUrl[1],res)
        } else {
          Toast({
            message: res.data.msg,
            position: 'bottom',
            duration: 3000
          });
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  saveFormGetDD(context, funUrl) {
    // axios.defaults.baseURL = context.state.editor.axiosUrl;
    axios({
      method: 'get',
      url: funUrl[0],
      dataType: 'JSON',
      params: context.state.editor[funUrl[2]]
    })
      .then(function (res) {
        console.log(res)
        if (res.data.code==0) {
          Toast({
            message: '提交成功',
            iconClass: 'icon iconfont icon-chenggong'
          });
        } else {
          Toast({
            message: res.data.msg,
            iconClass: 'icon iconfont icon-shibai'
          });
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  },
  //政策法规
  oneNewsActions(context, data) {
    if (data.type === 1) {
      context.commit('SET_ONE_NEWS', data)
      context.dispatch('saveFormGet', ['/picture_server/api/news', 'GET_ONE_NEWS', 'oneNewsMM'])
    } else if (data.type === 2) {
      context.commit('SET_TWO_NEWS', data)
      context.dispatch('saveFormGet', ['/picture_server/api/news', 'GET_TWO_NEWS', 'twoNewsMM'])
    } else {
      context.commit('SET_THREE_NEWS', data)
      context.dispatch('saveFormGet', ['/picture_server/api/news', 'GET_THREE_NEWS', 'threeNewsMM'])
    }
  },
  //艺术文库
  artsBookActions(context, data) {
    context.commit('SET_ARTS_BOOK', data)
    context.dispatch('saveFormGet', ['/picture_server/api/arts', 'GET_ARTS_BOOK', 'artsBookMM'])
  },
  //各种详情//艺术文库详情
  someDetailActions(context, data) {
    context.commit('SET_SOME_DETAIL', data)
    context.dispatch('saveFormGet', ['/picture_server/api/artsInfo', 'GET_SOME_DETAIL', 'someDetail'])
  },
  //拍卖查询
  auctionsProductActions(context, data) {
    if(data.type===1){
      context.commit('SET_AUCTIONS_PRODUCT_B', data)
      context.dispatch('saveFormGet', ['/picture_server/api/auctions', 'GET_AUCTIONS_PRODUCT_B', 'auctionsProductbefoeMM'])
    }else if (data.type===2){
      context.commit('SET_AUCTIONS_PRODUCT_N', data)
      context.dispatch('saveFormGet', ['/picture_server/api/auctions', 'GET_AUCTIONS_PRODUCT_N', 'auctionsProductnowMM'])
    }else {
      context.commit('SET_AUCTIONS_PRODUCT_A', data)
      context.dispatch('saveFormGet', ['/picture_server/api/auctions', 'GET_AUCTIONS_PRODUCT_A', 'auctionsProductagoMM'])
    }

  },
  //拍卖详情
  auctionsDetialActions(context, data) {
    context.commit('SET_SOME_DETAIL', data)
    context.dispatch('saveFormGet', ['/picture_server/api/auctionsInfo', 'GET_SOME_DETAIL', 'someDetail'])
  },
  //名家风采
  superpersonsActions(context, data) {
    context.commit('SET_SUPER_PERSONS', data)
    context.dispatch('saveFormGet', ['/picture_server/api/persons', 'GET_SUPER_PERSONS', 'superpersonsMM'])
  },
  //名家风采详情
  auctionsDetialActions(context, data) {
    context.commit('SET_SOME_DETAIL', data)
    context.dispatch('saveFormGet', ['/picture_server/api/personsInfo', 'GET_SOME_DETAIL', 'someDetail'])
  },
  //视频
  videosSeachActions(context, data) {
    if(data.type===1){
      context.commit('SET_VIDEOS_SEACH', data)
      context.dispatch('saveFormGet', ['/picture_server/api/videos', 'GET_VIDEOS_SEACH1', 'videosSeachMM'])
    }else if(data.type===2){
      context.commit('SET_AUCTIONS_PRODUCT_B', data)
      context.dispatch('saveFormGet', ['/picture_server/api/videos', 'GET_VIDEOS_SEACH2', 'auctionsProductbefoeMM'])
    }else if(data.type===3){
      context.commit('SET_AUCTIONS_PRODUCT_N', data)
      context.dispatch('saveFormGet', ['/picture_server/api/videos', 'GET_VIDEOS_SEACH3', 'auctionsProductnowMM'])
    }else{
      context.commit('SET_AUCTIONS_PRODUCT_A', data)
      context.dispatch('saveFormGet', ['/picture_server/api/videos', 'GET_VIDEOS_SEACH4', 'auctionsProductagoMM'])
    }

  },
  //视频详情
  videosDetialActions(context, data) {
    context.commit('SET_SOME_DETAIL', data)
    context.dispatch('saveFormGet', ['/picture_server/api/videosInfo', 'GET_VIDEO_DETIAL', 'someDetail'])
  },
  //首页数据
  indexDataActions(context, data) {
    // context.commit('SET_SOME_DETAIL', data)
    context.dispatch('saveFormGet', ['/picture_server/api/homepage', 'GET_INDEX_DATA', ''])
  },
  //加入我们
  joinusAction(context,data){
    context.commit('SET_JOIN_US',data)
    context.dispatch('saveFormGetDD',['/picture_server/api/addCompanys','','joinusMM'])
  },
  //seach
  seachWordsActions(context,data){
    context.commit('SET_SEACH_WORDS',data)
    context.dispatch('saveFormGet',['/picture_server/api/search','GET_SEACH_WORDS','seachWordsMM'])
  }
}

export default actions
