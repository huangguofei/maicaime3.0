/**
 *  author pzh
 *  day  2017-9-13
 *  我的模块路由配置
 */
const indexView = r => require.ensure([], () => r(require('../view/user/index')), 'Index')
const activitiesListView = r => require.ensure([], () => r(require('../view/user/activity/user-activitiesList')), 'Index')
const activitiesAddView = r => require.ensure([], () => r(require('../view/user/activity/user-activitiesAdd')), 'Index')
const editFoodView = r => require.ensure([], () => r(require('../view/user/activity/user-editfood')), 'Index')
const activitiesFoodView = r => require.ensure([], () => r(require('../view/user/activity/user-activities-food')), 'Index')
const userInfoView = r => require.ensure([], () => r(require('../view/user/user-info')), 'Index')
const salesSummaryView = r => require.ensure([], () => r(require('../view/user/user-sales-summary')), 'Index')
const salesRankView = r => require.ensure([], () => r(require('../view/user/salesRank/index')), 'Index')
const timeSearchView = r => require.ensure([], () => r(require('../view/user/user-timeSearch')), 'Index')
const depositView = r => require.ensure([], () => r(require('../view/user/deposit/user-deposit')), 'Index')
const depositListView = r => require.ensure([], () => r(require('../view/user/deposit/user-deposit-list')), 'Index')
const depositDetailsView = r => require.ensure([], () => r(require('../view/user/deposit/user-deposit-details')), 'Index')
const balanceView = r => require.ensure([], () => r(require('../view/user/balance/index')), 'Index')
const balanceDetailsView = r => require.ensure([], () => r(require('../view/user/balance/user-balance-details')), 'Index')
const statisticAnalysisView = r => require.ensure([], () => r(require('../view/user/statisticAnalysis/index')), 'Index')
const statisticResultView = r => require.ensure([], () => r(require('../view/user/statisticAnalysis/statisticResult')), 'Index')
const bankCardView = r => require.ensure([], () => r(require('../view/user/bankCard/index')), 'Index')
const addBankCardView = r => require.ensure([], () => r(require('../view/user/bankCard/bankCard-add')), 'Index')
const aboutView = r => require.ensure([], () => r(require('../view/user/user-about')), 'Index') /*关于我们*/
const setView = r => require.ensure([], () => r(require('../view/user/user-set')), 'Index') /*设置*/
const router = [{
	name: "user.index",
	path: "/user/",
	component: indexView
}, {
	name: "user.activitiesList",
	path: "/activitiesList/",
	component: activitiesListView
}, {
	name: "user.activitiesAdd",
	path: "/activitiesAdd/",
	component: activitiesAddView
}, {
	name: "user.editFood",
	path: "/editFood/",
	component: editFoodView
}, {
	name: "user.activitiesFood",
	path: "/activitiesFood/",
	component: activitiesFoodView
}, {
	name: "user.info",
	path: "/user/info/",
	component: userInfoView
}, {
	name: "user.salesSummary",
	path: "/user/salesSummary/",
	component: salesSummaryView
}, {
	name: "user.salesRank",
	path: "/user/salesRank/",
	component: salesRankView
}, {
	name: "user.salesTimeSearch",
	path: "/user/salesTimeSearch/",
	component: timeSearchView
}, {
	name: "user.deposit",
	path: "/user/deposit/",
	component: depositView
}, {
	name: "user.depositList",
	path: "/user/depositList/",
	component: depositListView
}, {
	name: "user.depositDetails",
	path: "/user/deposit/:id",
	component: depositDetailsView
}, {
	name: "user.balance",
	path: "/user/balance/",
	component: balanceView
}, {
	name: "user.balanceDetails",
	path: "/user/balance/:id",
	component: balanceDetailsView
}, {
	name: "user.statisticAnalysis",
	path: "/user/statisticAnalysis/",
	component: statisticAnalysisView
}, {
	name: "user.statisticResult",
	path: "/user/statisticResult/",
	component: statisticResultView
}, {
	name: "user.bankCard",
	path: "/user/bankCard/",
	component: bankCardView
}, {
	name: "user.addBankCard",
	path: "/user/addBankCard/",
	component: addBankCardView
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