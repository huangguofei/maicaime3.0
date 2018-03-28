/**
*  author pzh
*  day  2017-9-14
*  商品模块路由配置
*/
const index = r => require.ensure([], () => r(require('../view/product/index')), 'index')
const overview = r => require.ensure([], () => r(require('../view/product/overview')), 'overview')
const categoryList = r => require.ensure([], () => r(require('../view/product/category/list')), 'categoryList')
const materialList = r => require.ensure([], () => r(require('../view/product/material/list')), 'materialList')

const router = [
	{
		name : "product.index",
		path : "/product",
		component : index,
		children : [
			{
				name : "product.overview",
				path : "/",
				component : overview
			},
			{
				name : "product.category.list",
				path : "/product/category/list",
				component : categoryList
			},
			{
				name : "product.material.list",
				path : "/material/list",
				component : materialList
			}
		]
	}
]

export default{
	router
}