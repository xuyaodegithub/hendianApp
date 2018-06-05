import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
import servers from './modules/modules'

Vue.use(Vuex)
const store = new Vuex.Store({
  //strict: process.env.NODE_ENV !== 'production',发布环境不应打开严格模式，减少性能消耗
  namespaced: true,//命名空间模块
  state,
  mutations,
  actions,
  getters,
  modules: {
    servers : servers,
  }
})

export default store
