/**
*  author pzh
*  day  2017-9-13
*  常用清单路由配置
*/
const indexView = r => require.ensure([], () => r(require('../view/often/index')), 'Index')
const cartView = r => require.ensure([], () => r(require('../view/often/cart')), 'cartView')
const ordersView = r => require.ensure([], () => r(require('../view/often/orders')), 'ordersView')
const successView = r => require.ensure([], () => r(require('../view/often/orders-success')), 'successView')
const ofterSuccessView = r => require.ensure([], () => r(require('../view/often/ofter-success')), 'successView')
const goodsDetailsView = r => require.ensure([], () => r(require('../view/often/goods-details')), 'successView')
const router = [
	{
		name : "mcm.purchaser.often.index",
		path : "/often/",
		component : indexView
	},
	{
		name : "often.cart",
		path : "/often/cart",
		component : cartView
	},
	{
		name : "often.orders",
		path : "/often/orders",
		component : ordersView
	},
	{
		name : "often.orders.integral",
		path : "/often/orders/productId/:productId",
		component : ordersView
	},
	{
		name : "often.orders.success",
		path : "/often/orders/success",
		component : successView
	},
	{
		name : "often.ofter.success",
		path : "/often/success",
		component : ofterSuccessView
	},
	{
		name : "often.orders.details",
		path : "/often/orders/:id",
		component : goodsDetailsView
	}
]

export default{
	router
}