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
          component: () => import(/* webpackChunkName: "oldBack" */ '@/components/mainSub/oldBack')
        },
        {
          path: '/evaluation',
          name: '鉴定与评估',
          component: () => import(/* webpackChunkName: "evaluation" */ '@/components/mainSub/evaluation')
        },
        {
          path: '/registered',
          name: '会员注册',
          component: () => import(/* webpackChunkName: "registered" */ '@/components/mainSub/registered')
        },
        {
          path: '/concasUs',
          name: '联系我们',
          component: () => import(/* webpackChunkName: "concasUs" */ '@/components/mainSub/concasUs')
        },
        {
          path: '/tellAsk',
          name: '通知公告',
          component: () => import(/* webpackChunkName: "tellAsk" */ '@/components/mainSub/tellAsk')
        },
        {
          path: '/newsStatus',
          name: '新闻动态',
          component: () => import(/* webpackChunkName: "newsStatus" */ '@/components/mainSub/newsStatus')
        },
      ]
    },
    {
      path:'/newsDetail',
      name:'详情',
      component: () => import(/* webpackChunkName: "newsDetail" */ '@/components/someDetial/newsDetail')
    },
    {
      path:'/seachList',
      name:'搜索',
      component: () => import(/* webpackChunkName: "newsDetail" */ '@/components/someDetial/seachList')
    }
  ],
  scrollBehavior (to, from, savedPosition) {//路由切换时滚轮位置//scrollBehavior 方法接收 to 和 from 路由对象。第三个参数 savedPosition 当且仅当 popstate 导航 (通过浏览器的 前进/后退 按钮触发) 时才可用。
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else if(to.name==='详情'){
      return { x: 0, y:0 }
    }else{
      // return { x: 0, y:0 }
    }
  }
})
router.beforeEach((to,from,next)=> {
  document.title=to.name
  next()
})

export default router
