import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Login from '@/components/Login'
import System from '@/pages/System'
import Help from '@/pages/Help'
import Run from '@/pages/Run'
import Design from '@/pages/Design'
import Picture from '@/pages/Picture'
import Project from '@/pages/Project'
import userList from '@/pages/userList'
import shopList from '@/pages/shopList'
import foodList from '@/pages/foodList'
import orderList from '@/pages/orderList'
import adminList from '@/pages/adminList'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: "home",
			component: Home,
			children: [{
					path: '/',
					redirect: '/project'
				},
				{
					path: '/system',
					component: System					
				},
				{
					path: '/help',
					component: Help
				},
				{
					path: '/run',
					component: Run
				},
				{
					path: '/project',
					component: Project,
					children: [
						{
							path: '/userList',
							component: userList,
							meta: ['数据管理', '用户列表'],
						},
						{
							path: '/shopList',
							component: shopList,
							meta: ['数据管理', '商家列表'],
						},
						{
							path: '/foodList',
							component: foodList,
							meta: ['数据管理', '食品列表'],
						},
						{
							path: '/orderList',
							component: orderList,
							meta: ['数据管理', '订单列表'],
						},
						{
							path: '/adminList',
							component: adminList,
							meta: ['数据管理', '管理员列表'],
						}
					]
				},
				{
					path: '/picture',
					component: Picture
				},
				{
					path: '/design',
					component: Design
				}
			]
		},
		{
			path: '/login',
			name: "login",
			component: Login
		}
	]
})