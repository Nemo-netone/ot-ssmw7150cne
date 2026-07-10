import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
	import news from '@/views/modules/news/list'
	import huodongfenlei from '@/views/modules/huodongfenlei/list'
	import baomingxinxi from '@/views/modules/baomingxinxi/list'
	import yonghu from '@/views/modules/yonghu/list'
	import tongzhixinxi from '@/views/modules/tongzhixinxi/list'
	import huodongxinxi from '@/views/modules/huodongxinxi/list'
	import huodonggenzong from '@/views/modules/huodonggenzong/list'
	import discusshuodongxinxi from '@/views/modules/discusshuodongxinxi/list'
	import config from '@/views/modules/config/list'
	import huodongguanliyuan from '@/views/modules/huodongguanliyuan/list'
	import newstype from '@/views/modules/newstype/list'


//2.配置路由   注意：名字
export const routes = [{
	path: '/',
	name: '系统首页',
	component: Index,
	children: [{
		// 这里不设置值，是把main作为默认页面
		path: '/',
		name: '系统首页',
		component: Home,
		meta: {icon:'', title:'center', affix: true}
	}, {
		path: '/updatePassword',
		name: '修改密码',
		component: UpdatePassword,
		meta: {icon:'', title:'updatePassword'}
	}, {
		path: '/pay',
		name: '支付',
		component: pay,
		meta: {icon:'', title:'pay'}
	}, {
		path: '/center',
		name: '个人信息',
		component: center,
		meta: {icon:'', title:'center'}
	}
	,{
		path: '/news',
		name: '公告信息',
		component: news
	}
	,{
		path: '/huodongfenlei',
		name: '活动分类',
		component: huodongfenlei
	}
	,{
		path: '/baomingxinxi',
		name: '报名信息',
		component: baomingxinxi
	}
	,{
		path: '/yonghu',
		name: '用户',
		component: yonghu
	}
	,{
		path: '/tongzhixinxi',
		name: '通知信息',
		component: tongzhixinxi
	}
	,{
		path: '/huodongxinxi',
		name: '活动信息',
		component: huodongxinxi
	}
	,{
		path: '/huodonggenzong',
		name: '活动跟踪',
		component: huodonggenzong
	}
	,{
		path: '/discusshuodongxinxi',
		name: '活动信息评论',
		component: discusshuodongxinxi
	}
	,{
		path: '/config',
		name: '轮播图管理',
		component: config
	}
	,{
		path: '/huodongguanliyuan',
		name: '活动管理员',
		component: huodongguanliyuan
	}
	,{
		path: '/newstype',
		name: '公告信息分类',
		component: newstype
	}
	]
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
		meta: {icon:'', title:'login'}
	},
	{
		path: '/register',
		name: 'register',
		component: register,
		meta: {icon:'', title:'register'}
	},
	{
		path: '*',
		component: NotFound
	}
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
	mode: 'hash',
	/*hash模式改为history*/
	routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}
export default router;
