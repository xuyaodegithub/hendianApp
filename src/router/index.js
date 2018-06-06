import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld'),
      children: [
        {
          path: '',
          name: '首页',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/mainSub/indexF')
        },
        {
          path: '/auction',
          name: '拍卖',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/mainSub/auction')
        },
        {
          path: '/videos',
          name: '视频',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/mainSub/videos')
        },
        {
          path: '/artStore',
          name: '艺术文库',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/mainSub/artStore')
        },
        {
          path: '/superstar',
          name: '名家风采',
          component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/mainSub/superstar')
        },
      ]
    },
  ]
})
