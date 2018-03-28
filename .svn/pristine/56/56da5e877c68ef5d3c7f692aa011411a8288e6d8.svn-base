/**
 *  author hgf
 *  day  2017-12-11
 *  订单模块路由配置
 */
const index = r => require.ensure([], () => r(require('../view/order/index')), 'index')
const orderListView = r => require.ensure([], () => r(require('../view/order/orderList/index')), 'overview')
const orderDetailsView = r => require.ensure([], () => r(require('../view/order/orderDetails/index')), 'overview')
const router = [{
		name: "order.index",
		path: "/order",
		component: index,
		children: [{
			name: "order.list",
			path: "/",
			component: orderListView
		}, {
			name: "order.details",
			path: "/order/:id",
			component: orderDetailsView
		}]
		
	}

]

export default {
	router
}