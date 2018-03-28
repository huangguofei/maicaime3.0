/**
*  author pzh
*  day  2017-9-29
*  食材模块状态管理器
*/
/*分类管理*/
const writeCategoryList = "writeCategoryList";
const state = {
	categoryList : []
}
const getters = {
	getCategoryList(state) {
		return state;
	}
}
const actions = {
	setCategoryList(context,  {data}) {
		context.commit(writeCategoryData, {data});
	}
}

const mutations = {
	[writeCategoryList](state, {data}) {
		state.categoryList = data;
	}
}
export default{
	state,
	getters,
	actions,
	mutations
}