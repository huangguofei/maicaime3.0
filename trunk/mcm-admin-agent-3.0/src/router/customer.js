/**
*  author pzh
*  day  2017-9-21
*  客户模块路由配置
*/
const index = r => require.ensure([], () => r(require('../view/customer/index')), 'index')
const overview = r => require.ensure([], () => r(require('../view/customer/overview')), 'overview')
const purchaserList = r => require.ensure([], () => r(require('../view/customer/purchaser/list')), 'purchaserList')
/*充值记录*/
const rechargeRecordList = r => require.ensure([], () => r(require('../view/customer/purchaser/recharge-record')), 'purchaserList')
/*供应商列表*/
const supplierList = r => require.ensure([], () => r(require('../view/customer/supplier/list')), 'supplierList')
/*驿站*/
const stageList = r => require.ensure([], () => r(require('../view/customer/stage/list')), 'stageList')
/*配送商*/
const distributionList = r => require.ensure([], () => r(require('../view/customer/distribution/list')), 'distributionList')
/*商圈*/
const circleList = r => require.ensure([], () => r(require('../view/customer/circle/list')), 'circleList')
const circleDetail = r => require.ensure([], () => r(require('../view/customer/circle/detail')), 'circleDetail')

/*供应商分类*/
const supplierCategory = r => require.ensure([], () => r(require('../view/customer/supplier/category')), 'supplierCategory')
const router = [
	{
		name : "customer.index",
		path : "/customer",
		component : index,
		children : [
			{
				name : "customer.overview",
				path : "/",
				component : overview
			},
			{
				name : "customer.purchaser.list",
				path : "/customer/purchaser/list",
				component : purchaserList
			},
			{
				name : "customer.purchaser.rechargeRecord",
				path : "/customer/purchaser/rechargeRecord",
				component : rechargeRecordList
			},
			{
				name : "customer.supplier.list",
				path : "/customer/supplier/list",
				component : supplierList
			},
			{
				name : "customer.supplier.catrgory",
				path : "/customer/supplier/catrgory",
				component : supplierCategory
			},
			{
				name : "customer.stage.list",
				path : "/customer/stage/list",
				component : stageList
			},
			{
				name : "customer.distribution.list",
				path : "/customer/distribution/list",
				component : distributionList
			},
			{
				name : "customer.circle.list",
				path : "/customer/circle/list",
				component : circleList
			},
			{
				name : "customer.circle.detail",
				path : "/customer/circle/detail/id/:id",
				component : circleDetail,
			}
		]
	}
	
]

export default{
	router
}