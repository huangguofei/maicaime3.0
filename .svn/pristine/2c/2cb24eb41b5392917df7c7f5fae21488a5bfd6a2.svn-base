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
const discountCoupon = r => require.ensure([], () => r(require('../view/marketing/coupon/index')), 'discountsCoupon')/*优惠券*/
const search = r => require.ensure([], () => r(require('../view/marketing/search/index')), 'search')/*热门搜索*/
const integral = r => require.ensure([], () => r(require('../view/marketing/integral/index')), 'integral')/*积分商城*/
/*编辑器*/
const editor = r => require.ensure([], () => r(require('../view/marketing/editor/index')), 'editor')
const editorHome = r => require.ensure([], () => r(require('../view/marketing/editor/home')), 'editorHome')
const activityGoods = r => require.ensure([], () => r(require('../view/marketing/feature/activityGoods')), 'activityGoods')
const joinGoods = r => require.ensure([], () => r(require('../view/marketing/feature/joinGoods')), 'joinGoods')
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
			{/*特色专区*/
				name : "marketing.feature.theme",
				path : "/marketing/feature/theme",
				component : featureTheme
			},
			{/*优惠活动*/
				name : "marketing.activity.index",
				path : "/marketing/activity/index",
				component : discountsActivity
			},{/*优惠券*/
				name : "marketing.coupon.index",
				path : "/marketing/coupon/index",
				component : discountCoupon
			},{/*积分商城*/
				name : "marketing.integral.index",
				path : "/marketing/integral/index",
				component : integral
			},{/*热门搜索*/
				name : "marketing.search.index",
				path : "/marketing/search/index",
				component : search
			},
			{
				name : "marketing.editor",
				path : "/marketing/editor/index/type/:type",
				component : editor
			},
			{
				name : "marketing.editor.home",
				path : "/marketing/editor/home",
				component : editorHome
			},
			{
				name : "marketing.feature.activityGoods",
				path : "/marketing/feature/activityGoods/",
				component : activityGoods
			},{
				name : "marketing.feature.joinGoods",
				path : "/marketing/feature/join_goods/fid/:fid",
				component : joinGoods
			}
		]
	}
	
]

export default{
	router
}