/**
*  author pzh
*  day  2017-12-22
*  订单状态管理器
*/
/*更新订单列表*/
const updateOrderList = "UPDATE_ORDER_LIST"
/*合并订单列表*/
const concatOrderList = "CONCAT_ORDER_LIST"
/*记录最后一次滚动位置*/
const recordLastScrollTop = "RECORD_LAST_SCROLL_TOP"
/*选中的订单类型*/
const selectOrderType = "SELECT_ORDER_TYPE"
/*当前分页数*/
const recordThatPage = "RECORD_THAT_PAGE"
/*还原state初始值*/
const restoreStateInitVal = "RESTORE_STATE_INIT_VAL"
const state = {
	list : [],
	/*滚动位置*/
	top : 0,
	/*订单类型*/
	type : 0,
	/*当前页面*/
	page : 0
}
const getters = {
	orderList : state => state.list,
	scrollTop : state => state.top,
	orderType : state => state.type,
	pageNum : state => state.page
}
const actions = {
	
}
const mutations = {
	[updateOrderList](state, data) {
		state.list = data;
	},
	[concatOrderList](state, data) {
		state.list = state.list.concat(data);
	},
	[recordLastScrollTop](state, num) {
		state.top = num;
	},
	[selectOrderType](state, val) {
		state.type = val;
	},
	[recordThatPage](state, val) {
		state.page = val;
	},
	[restoreStateInitVal](state) {
		state.top = 0;
		state.type = 0;
		state.page = 1;
	}
}

export default{
	state,
	getters,
	actions,
	mutations
}