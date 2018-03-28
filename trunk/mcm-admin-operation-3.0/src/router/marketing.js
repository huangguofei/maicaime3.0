/**
*  author pzh
*  day  2017-10-17
*  营销模块路由配置
*/
const index = r => require.ensure([], () => r(require('../view/marketing/index')), 'index')
const overview = r => require.ensure([], () => r(require('../view/marketing/overview')), 'overview')
const featureList = r => require.ensure([], () => r(require('../view/marketing/feature/list')), 'featureList')
const featureTheme = r => require.ensure([], () => r(require('../view/marketing/feature/theme')), 'featureTheme')/*特色专区*/
const discountsActivity = r => require.ensure([], () => r(require('../view/marketing/activity/index')), 'discountsActivity')/*优惠活动*/
const discountsActivityNew = r => require.ensure([], () => r(require('../view/marketing/activity/new-activity')), 'discountsActivity')/*新增优惠活动*/
const discountCoupon = r => require.ensure([], () => r(require('../view/marketing/coupon/index')), 'discountsCoupon')/*优惠券*/
const discountCouponNew = r => require.ensure([], () => r(require('../view/marketing/coupon/new-coupon')), 'discountsCoupon')/*新增优惠券*/
const integralView = r => require.ensure([], () => r(require('../view/marketing/integral/index')), 'integral')/*积分*/
/*编辑器*/
const editor = r => require.ensure([], () => r(require('../view/marketing/editor/index')), 'editor')
const editorHome = r => require.ensure([], () => r(require('../view/marketing/editor/home')), 'editorHome')
const router = [
	{
		name : "marketing.index",
		path : "/marketing",
		component : index,
		children : [
			{
				name : "marketing.overview",
				path : "/",
				component : overview
			},
			{
				name : "marketing.feature.list",
				path : "/marketing/feature/list",
				component : featureList
			},
			{
				name : "marketing.feature.theme",
				path : "/marketing/feature/theme",
				component : featureTheme
			},
			{/*优惠活动*/
				name : "marketing.activity.index",
				path : "/marketing/activity/index",
				component : discountsActivity
			},
			{/*新增优惠活动*/
				name : "marketing.activity.new",
				path : "/marketing/activity/new",
				component : discountsActivityNew
			},{/*优惠券*/
				name : "marketing.coupon.index",
				path : "/marketing/coupon/index",
				component : discountCoupon
			},{/*新增优惠券*/
				name : "marketing.coupon.new",
				path : "/marketing/coupon/new",
				component : discountCouponNew
			},{/*积分*/
				name : "marketing.integral",
				path : "/marketing/integral",
				component : integralView
			},
			{
				name : "marketing.editor",
				path : "/marketing/editor/index",
				component : editor
			},
			{
				name : "marketing.editor.home",
				path : "/marketing/editor/home",
				component : editorHome
			}
		]
	}
	
]

export default{
	router
}