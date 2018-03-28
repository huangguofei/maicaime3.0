/**
*  author pzh
*  day  2017-9-13
*  主页路由配置
*/
const indexView = r => require.ensure([], () => r(require('../view/index/index')), 'Index')
const category = r => require.ensure([], () => r(require('../view/index/category')), 'category')
const prompt = r => require.ensure([], () => r(require('../view/index/prompt')), 'prompt')
const integral = r => require.ensure([], () => r(require('../view/index/integral')), 'integral')
const search = r => require.ensure([], () => r(require('../view/index/search')), 'search')
const searchResult = r => require.ensure([], () => r(require('../view/index/search-result')), 'searchResult')
const router = [
	{
		name : "mcm.purchaser.index.index",
		path : "/",
		component : indexView
	},
	{
		name : "index.index",
		path : "/index",
		component : indexView
	},
	{
		name : "index.category",
		path : "/category/id/:id",
		component : category
	},
	{
		name : "index.prompt",
		path : "/prompt/refId/:refId",
		component : prompt
	},
	{
		name : "index.integral",
		path : "/integral",
		component : integral
	},
	{
		name : "index.search",
		path : "/search",
		component : search
	},
	{
		name : "index.search.result",
		path : "/search/result",
		component : searchResult
	}
]

export default{
	router
}