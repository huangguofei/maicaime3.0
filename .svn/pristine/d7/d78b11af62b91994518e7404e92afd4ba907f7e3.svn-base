/**
 *  author hgf
 *  day  2017-12-08
 *  数据模块路由配置
 */
const index = r => require.ensure([], () => r(require('../view/data/index')), 'index')
const checkView = r => require.ensure([], () => r(require('../view/data/check/index')), 'overview')
const depositApplyView = r => require.ensure([], () => r(require('../view/data/depositApply/index')), 'overview')
const billList = r => require.ensure([], () => r(require('../view/data/bill/list')), 'billList')
const billDetails = r => require.ensure([], () => r(require('../view/data/bill/bill-details')), 'billList')
const goodsAnalyzeView = r => require.ensure([], () => r(require('../view/data/goodsAnalyze/index')), 'goodsAnalyze')
const integralAnalyzeView = r => require.ensure([], () => r(require('../view/data/integralAnalyze/index')), 'integralAnalyze')
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
		},{
			name : "data.bill.list",
			path : "/bill/list",
			component : billList
		},{
			name : "data.bill.details",
			path : "/bill/list/:id",
			component : billDetails
		},{
			name : "data.goodsAnalyze",
			path : "/goodsAnalyze",
			component : goodsAnalyzeView
		},{
			name : "data.integralAnalyze",
			path : "/integralAnalyze",
			component : integralAnalyzeView
		}]
	}

]

export default {
	router
}