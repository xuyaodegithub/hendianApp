import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: "HelloWorld" */ '@/components/HelloWorld'),
      children: [
        {
          path: '',
          name: '首页',
          component: () => import(/* webpackChunkName: "indexF" */ '@/components/mainSub/indexF')
        },
        {
          path: '/auction',
          name: '拍卖',
          component: () => import(/* webpackChunkName: "auction" */ '@/components/mainSub/auction')
        },
        {
          path: '/videos',
          name: '视频',
          component: () => import(/* webpackChunkName: "videos" */ '@/components/mainSub/videos')
        },
        {
          path: '/artStore',
          name: '艺术文库',
          component: () => import(/* webpackChunkName: "artStore" */ '@/components/mainSub/artStore')
        },
        {
          path: '/superstar',
          name: '名家风采',
          component: () => import(/* webpackChunkName: "superstar" */ '@/components/mainSub/superstar')
        },
        {
          path: '/Association',
          name: '协会简介',
          component: () => import(/* webpackChunkName: "Association" */ '@/components/mainSub/Association')
        },
        {
          path: '/oldBack',
          name: '古玩市场',
          component: () => import(/* webpackChunkName: "Association" */ '@/components/mainSub/oldBack')
        },
        {
          path: '/evaluation',
          name: '鉴定与评估',
          component: () => import(/* webpackChunkName: "Association" */ '@/components/mainSub/evaluation')
        },
        {
          path: '/registered',
          name: '会员注册',
          component: () => import(/* webpackChunkName: "Association" */ '@/components/mainSub/registered')
        },
        {
          path: '/concasUs',
          name: '联系我们',
          component: () => import(/* webpackChunkName: "Association" */ '@/components/mainSub/concasUs')
        },
        {
          path: '/tellAsk',
          name: '通知公告',
          component: () => import(/* webpackChunkName: "Association" */ '@/components/mainSub/tellAsk')
        },
      ]
    },
    {
      path:'/newsDetail',
      name:'新闻详情',
      component: () => import(/* webpackChunkName: "newsDetail" */ '@/components/someDetial/newsDetail')
    }
  ]
})
router.beforeEach((to,from,next)=> {
  document.title=to.name
  next()
})

export default router
