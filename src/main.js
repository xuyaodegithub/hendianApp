// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/reset.css'
import './assets/public.css'
import axios from 'axios'
import $ from 'jquery'
import store from './store'
Vue.prototype.$http=axios
Vue.use(MintUI)

Vue.config.productionTip = false
//时间过滤器
Vue.filter('changeTime',function(val){
  if(val){
    let data=new Date(val)
    let year=data.getFullYear()
    let month=data.getMonth()+1
    let day= data.getDate()
    let hour= data.getHours()
    let min=data.getMinutes()
    let sec=data.getSeconds()
    if(month.length<2){
      month='0'+month
    }
    //console.log(year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec)
    // return year+'-'+month+'-'+day+' '+hour+':'+min+':'+sec
    if(month<10){
      month='0'+month
    }
    if(day<10){
      day='0'+day
    }
    if(hour<10){
      hour='0'+hour
    }
    if(min<10){
      min='0'+min
    }
    if(sec<10){
      sec='0'+sec
    }
    return year+'-'+month+'-'+day /*+' '+hour+':'+min+':'+sec*/
  }else{
    return ''
  }
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  $,
  store,
  router,
  components: { App },
  template: '<App/>'
})
