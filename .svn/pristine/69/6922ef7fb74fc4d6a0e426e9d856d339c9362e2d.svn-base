/**
 *  author pzh
 *  day  2017-9-13
 *  订单模块路由配置
 */
const indexView = r => require.ensure([], () => r(require('../view/order/index')), 'Index')
const order_all_View = r => require.ensure([], () => r(require('components/order/order-all')), 'Index')
const order_obligation_View = r => require.ensure([], () => r(require('components/order/order-obligation')), 'Index')
const order_waitreceiving_View = r => require.ensure([], () => r(require('components/order/order-waitreceiving')), 'Index')
const order_accomplish_View = r => require.ensure([], () => r(require('components/order/order-accomplish')), 'Index')
const order_datails_View = r => require.ensure([], () => r(require('../view/order/order-details')), 'deteils')
const order_success_View = r => require.ensure([], () => r(require('../view/order/order-success')), 'Index')
const order_evaluate_View = r => require.ensure([], () => r(require('../view/evaluate/evaluate')), 'Index')
const order_evaluate_result_View = r => require.ensure([], () => r(require('../view/evaluate/evaluate-result')), 'Index')

const router = [{
		name: "mcm.order.index",
		path: "/order/",
		component: indexView,
		children: [{
			name: "order.index.all",
			path: "1",
			component: order_all_View
		}, {
			name: "order.index.obligation",
			path: "2",
			component: order_obligation_View
		}, {
			name: "order.index.waitreceiving",
			path: "3",
			component: order_waitreceiving_View
		}, {
			name: "order.index.accomplish",
			path: "4",
			component: order_accomplish_View
		}]
	},
	{
		name: "order.detail",
		path: "/order/detail/:id",
		component: order_datails_View

	},{
		name: "order.success",
		path: "/order/success",
		component: order_success_View
	},{
		name: "order.evaluate",
		path: "/order/evaluate",
		component: order_evaluate_View
	},{
		name: "order.evaluate.result",
		path: "/order/evaluate/result",
		component: order_evaluate_result_View
	}
]

export default {
	router
}