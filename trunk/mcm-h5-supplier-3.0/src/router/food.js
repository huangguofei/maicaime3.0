/*
*  author pzh
*  day  2017-9-27
*  食材路由配置
*/
const indexView = r => require.ensure([], () => r(require('../view/food/index')), 'Index')
const addView = r => require.ensure([], () => r(require('../view/food/add-food')), 'addView')

const router = [
	{
		name : "food.index2",
		path : "/",
		component : indexView
	},
	{
		name : "food.index",
		path : "/food/",
		component : indexView
	},
	{
		name : "food.add",
		path : "/food/add",
		component : addView
	}
]

export default{
	router
}