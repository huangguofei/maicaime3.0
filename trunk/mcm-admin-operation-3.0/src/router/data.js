/**
 *  author hgf
 *  day  2017-12-08
 *  数据模块路由配置
 */
const index = r => require.ensure([], () => r(require('../view/data/index')), 'index')
const checkView = r => require.ensure([], () => r(require('../view/data/check/index')), 'overview')
const depositApplyView = r => require.ensure([], () => r(require('../view/data/depositApply/index')), 'overview')
const depositApplyDetailsView = r => require.ensure([], () => r(require('../view/data/depositApply/deposit-details')), 'overview')
const billList = r => require.ensure([], () => r(require('../view/data/bill/list')), 'billList')
const billDetails = r => require.ensure([], () => r(require('../view/data/bill/bill-details')), 'billList')
const rechargeRecordView = r => require.ensure([], () => r(require('../view/data/rechargeStatistics/index')), 'rechargeStatistics')
const router = [{
		name: "data.index",
		path: "/data",
		component: index,
		children: [{
			name: "data.check",
			path: "/",
			component: checkView
		}, {
			name: "data.depositApply",
			path: "/depositApply",
			component: depositApplyView
		}, {
			name: "data.depositApply.details",
			path: "/depositApply/:id",
			component: depositApplyDetailsView
		},{
			name : "data.bill",
			path : "/bill/list",
			component : billList
		},{
			name : "data.bill.details",
			path : "/bill/list/:id",
			component : billDetails
		},{
			name : "data.rechargeRecord",
			path : "/rechargeStatistics",
			component : rechargeRecordView
		}]
	}

]

export default {
	router
}