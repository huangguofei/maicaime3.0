/**
 *  author pzh
 *  day  2017-9-13
 *  我的路由配置
 */
const indexView = r => require.ensure([], () => r(require('../view/user/index')), 'Index')
const balanceView = r => require.ensure([], () => r(require('../view/user/user-balance')), 'Index')
const depositView = r => require.ensure([], () => r(require('../view/user/user-deposit')), 'Index')
const balanceDetailsView = r => require.ensure([], () => r(require('../view/user/user-balance-details')), 'Index')
const bankCardView = r => require.ensure([], () => r(require('../view/user/bankCard/index')), 'Index')
const addBankCardView = r => require.ensure([], () => r(require('../view/user/bankCard/bankCard-add')), 'Index')
const userInfoView = r => require.ensure([], () => r(require('../view/user/user-info')), 'Index') /*个人信息*/
const aboutView = r => require.ensure([], () => r(require('../view/user/user-about')), 'Index') /*关于我们*/
const setView = r => require.ensure([], () => r(require('../view/user/user-set')), 'Index') /*设置*/
/*充值成功*/
const router = [{
	name: "user.index",
	path: "/user/",
	component: indexView,
}, {
	name: "user.balance",
	path: "/user/balance",
	component: balanceView,
}, {
	name: "user.deposit",
	path: "/user/deposit",
	component: depositView,
}, {
	name: "user.balance",
	path: "/user/balanceDetails",
	component: balanceDetailsView,
}, {
	name: "user.bankCard",
	path: "/user/bankCard/",
	component: bankCardView
}, {
	name: "user.addBankCard",
	path: "/user/addBankCard/",
	component: addBankCardView
}, {
	name: "user.info",
	path: "/user/info",
	component: userInfoView
}, {
	name: "user.about",
	path: "/user/about",
	component: aboutView
}, {
	name: "user.set",
	path: "/user/set",
	component: setView
}]

export default {
	router
}