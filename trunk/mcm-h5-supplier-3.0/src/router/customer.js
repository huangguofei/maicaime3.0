/**
*  author pzh
*  day  2017-9-27
*  客户路由配置
*/
const indexView = r => require.ensure([], () => r(require('../view/customer/index')), 'Index')
const clientDetailsView = r => require.ensure([], () => r(require('../view/customer/client-details')), 'Index')

const router = [
	{
		name : "customer.index",
		path : "/customer/",
		component : indexView
	},{
		name : "customer.details",
		path : "/customer/:id",
		component : clientDetailsView
	}
]

export default{
	router
}