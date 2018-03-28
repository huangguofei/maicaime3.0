/**
*  author pzh
*  day  2017-9-21
*  商品模块路由配置
*/
const goodsIndex = r => require.ensure([], () => r(require('../view/goods/index')), 'goodsIndex')

const overview = r => require.ensure([], () => r(require('../view/goods/overview')), 'overview')
const materialList = r => require.ensure([], () => r(require('../view/goods/material/list')), 'materialList')
const imgUpload = r => require.ensure([], () => r(require('../view/goods/material/img-upload')), 'imgUpload')
const goodsClassView = r => require.ensure([], () => r(require('../view/goods/goodsClass/index')), 'goodsClass')
const goodsListView = r => require.ensure([], () => r(require('../view/goods/goodsList/index')), 'goodsList')
const goodsDetailsView = r => require.ensure([], () => r(require('../view/goods/goodsList/goods-details')), 'goodsList')
const router = [
	{
		name : "goods.index",
		path : "/goods",
		component : goodsIndex,
		children : [
			{
				name : "goods.overview",
				path : "/",
				component : overview
			},
			{
				name : "goods.material.list",
				path : "/material/list",
				component : materialList
			},
			{
				name : "goods.material.img.upload",
				path : "/material/img/upload",
				component : imgUpload
			},
			{
				name : "goods.goodsClass",
				path : "/material/goods/class",
				component : goodsClassView
			},
			{
				name : "goods.goodslist",
				path : "/material/goods/list",
				component : goodsListView
			},
			{
				name : "goods.goodsDetails",
				path : "/material/goods/:id",
				component : goodsDetailsView
			}
		]
	}
]

export default{
	router
}