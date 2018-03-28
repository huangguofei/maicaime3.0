/**
*  author pzh
*  day  2017-9-13
*  市场路由配置
*/
const indexView = r => require.ensure([], () => r(require('../view/market/index')), 'Index')
const detailView = r => require.ensure([], () => r(require('../view/market/detail')), 'detailView')

const router = [
	{
		name : "market.index",
		path : "/market/",
		component : indexView
	},
	{
		name : "market.detail",
		path : "/market/detail",
		component : detailView
	}
]

export default{
	router
}