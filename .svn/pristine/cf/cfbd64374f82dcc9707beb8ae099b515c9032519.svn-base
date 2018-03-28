/**
 *  author pzh
 *  day  2017-12-21
 *  地址管理模块路由配置
 */
 const editView = r => require.ensure([], () => r(require('../view/addr/edit')), 'editView')

 const indexView = r => require.ensure([], () => r(require('../view/addr/index')), 'indexView')
 const router = [
	{
		name: "addr.edit",
		path: "/addr/edit",
		component: editView
	},{
		name: "addr.index",
		path: "/addr/index",
		component: indexView
	}
]

export default {
	router
}