/**
*  author pzh
*  day  2017-9-27
*  报价路由配置
*/
const indexView = r => require.ensure([], () => r(require('../view/checking/index')), 'Index')

const router = [
	{
		name : "checking.index",
		path : "/checking/",
		component : indexView
	}
]

export default{
	router
}