/**
 *  author hgf
 *  day  2017-10-12
 *  订单路由配置
 */
const indexView = r => require.ensure([], () => r(require('../view/order/index')), 'Index')
const detail = r => require.ensure([], () => r(require('../view/order/detail')), 'detail')
const order_new_View = r => require.ensure([], () => r(require('components/order/order-new')), 'Index')
const order_obligation_View = r => require.ensure([], () => r(require('components/order/order-obligation')), 'Index')
const order_waitreceiving_View = r => require.ensure([], () => r(require('components/order/order-waitreceiving')), 'Index')
const router = [{
		name: "order.index",
		path: "/order/",
		component: indexView,
		children: [{
			name: "order.index.new",
			path: "new",
			component: order_new_View
		}, {
			name: "order.index.obligation",
			path: "obligation",
			component: order_obligation_View
		}, {
			name: "order.index.waitreceiving",
			path: "waitreceiving",
			component: order_waitreceiving_View
		}]
	},
	{
		name: "order.detail",
		path: "/order/detail",
		component: detail
	}
]

export default {
	router
}