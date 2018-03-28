/**
*  author pzh
*  day  2017-9-13
*  对账路由配置
*/
const indexView = r => require.ensure([], () => r(require('../view/checking/index')), 'Index')
const checkingDetailsView = r => require.ensure([], () => r(require('../view/checking/checking-details')), 'Index')

const router = [
	{
		name : "checking.index",
		path : "/checking",
		component : indexView
	},{
		name : "checking.details",
		path : "/checking/:id",
		component : checkingDetailsView
	}
]

export default{
	router
}