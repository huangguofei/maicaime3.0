/**
*  author pzh
*  day  2017-9-13
*  主页路由配置
*/
const indexView = r => require.ensure([], () => r(require('../view/index/index')), 'Index')

const router = [
	{
		name : "index.index",
		path : "/",
		component : indexView
	}
]

export default{
	router
}