/**
*  author pzh
*  day  2017-9-29
*  商品状态管理器
*/
import common from "actionurl/common/common"
/*查询购物车数量*/
const queryCartNum = "queryCartNum";
/*添加购物车数量*/
const addCartNum = "addCartNum"
/*减购物车数量*/
const minusCatrNum = "minusCatrNum"
/*修改购物车数量*/
const modificationCartNum = "modificationCartNum"

const state = {
	cartNum : 0
}
const getters = {
	getCartNum : state => state.cartNum,
}
const actions = {
	updateCartNum({commit}) {
	    let type = 1;
		commit(queryCartNum, type);
	}
}

const mutations = {
	[queryCartNum](state, type) {
		if(!state.cartNum || type == 1) {
			common.getCartNum(state);
		} 
	},
	[addCartNum](state) {
		++state.cartNum;
	},
	[minusCatrNum](state) {
		if(state.cartNum > 0)
			--state.cartNum;
	},
	[modificationCartNum](state, num) {
		state.cartNum = num
	}
}
export default{
	state,
	getters,
	actions,
	mutations
}