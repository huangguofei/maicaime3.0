/*限时抢购*/
const receiveFormData = "receiveFormData"
const state = {
	formData : {}
}
const getters = {
	formData : state => state.formData,
}
const actions = {
	restoreFormData({commit}) {
		var data = {
			specialName : "",
			monthlySpeciaType : 0,
			frequencyType : 1,
			ruleContent : "",
			startDate : "",
			endDate : "",
			startTime : "",
			endTime : "",
			jsonLimits : '[{"limitLevel":20,"limitType":10,"ruleType":1}]'
		}
		commit(receiveFormData, {data});
	}
}
const mutations = {
	["receiveFormData"](state, {data}) {
		state.formData = data;
	}
}
export default{
	state,
	getters,
	actions,
	mutations
}