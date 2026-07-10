import VueRouter from 'vue-router'
//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import Storeup from '../pages/storeup/list'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import payList from '../pages/pay'

import yonghuList from '../pages/yonghu/list'
import yonghuDetail from '../pages/yonghu/detail'
import yonghuAdd from '../pages/yonghu/add'
import huodongguanliyuanList from '../pages/huodongguanliyuan/list'
import huodongguanliyuanDetail from '../pages/huodongguanliyuan/detail'
import huodongguanliyuanAdd from '../pages/huodongguanliyuan/add'
import huodongfenleiList from '../pages/huodongfenlei/list'
import huodongfenleiDetail from '../pages/huodongfenlei/detail'
import huodongfenleiAdd from '../pages/huodongfenlei/add'
import huodongxinxiList from '../pages/huodongxinxi/list'
import huodongxinxiDetail from '../pages/huodongxinxi/detail'
import huodongxinxiAdd from '../pages/huodongxinxi/add'
import baomingxinxiList from '../pages/baomingxinxi/list'
import baomingxinxiDetail from '../pages/baomingxinxi/detail'
import baomingxinxiAdd from '../pages/baomingxinxi/add'
import huodonggenzongList from '../pages/huodonggenzong/list'
import huodonggenzongDetail from '../pages/huodonggenzong/detail'
import huodonggenzongAdd from '../pages/huodonggenzong/add'
import tongzhixinxiList from '../pages/tongzhixinxi/list'
import tongzhixinxiDetail from '../pages/tongzhixinxi/detail'
import tongzhixinxiAdd from '../pages/tongzhixinxi/add'
import newstypeList from '../pages/newstype/list'
import newstypeDetail from '../pages/newstype/detail'
import newstypeAdd from '../pages/newstype/add'
import discusshuodongxinxiList from '../pages/discusshuodongxinxi/list'
import discusshuodongxinxiDetail from '../pages/discusshuodongxinxi/detail'
import discusshuodongxinxiAdd from '../pages/discusshuodongxinxi/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'pay',
					component: payList,
				},
				{
					path: 'storeup',
					component: Storeup
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'yonghu',
					component: yonghuList
				},
				{
					path: 'yonghuDetail',
					component: yonghuDetail
				},
				{
					path: 'yonghuAdd',
					component: yonghuAdd
				},
				{
					path: 'huodongguanliyuan',
					component: huodongguanliyuanList
				},
				{
					path: 'huodongguanliyuanDetail',
					component: huodongguanliyuanDetail
				},
				{
					path: 'huodongguanliyuanAdd',
					component: huodongguanliyuanAdd
				},
				{
					path: 'huodongfenlei',
					component: huodongfenleiList
				},
				{
					path: 'huodongfenleiDetail',
					component: huodongfenleiDetail
				},
				{
					path: 'huodongfenleiAdd',
					component: huodongfenleiAdd
				},
				{
					path: 'huodongxinxi',
					component: huodongxinxiList
				},
				{
					path: 'huodongxinxiDetail',
					component: huodongxinxiDetail
				},
				{
					path: 'huodongxinxiAdd',
					component: huodongxinxiAdd
				},
				{
					path: 'baomingxinxi',
					component: baomingxinxiList
				},
				{
					path: 'baomingxinxiDetail',
					component: baomingxinxiDetail
				},
				{
					path: 'baomingxinxiAdd',
					component: baomingxinxiAdd
				},
				{
					path: 'huodonggenzong',
					component: huodonggenzongList
				},
				{
					path: 'huodonggenzongDetail',
					component: huodonggenzongDetail
				},
				{
					path: 'huodonggenzongAdd',
					component: huodonggenzongAdd
				},
				{
					path: 'tongzhixinxi',
					component: tongzhixinxiList
				},
				{
					path: 'tongzhixinxiDetail',
					component: tongzhixinxiDetail
				},
				{
					path: 'tongzhixinxiAdd',
					component: tongzhixinxiAdd
				},
				{
					path: 'newstype',
					component: newstypeList
				},
				{
					path: 'newstypeDetail',
					component: newstypeDetail
				},
				{
					path: 'newstypeAdd',
					component: newstypeAdd
				},
				{
					path: 'discusshuodongxinxi',
					component: discusshuodongxinxiList
				},
				{
					path: 'discusshuodongxinxiDetail',
					component: discusshuodongxinxiDetail
				},
				{
					path: 'discusshuodongxinxiAdd',
					component: discusshuodongxinxiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
