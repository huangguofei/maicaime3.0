/*头部广告*/
import homeAction from "actionurl/marketing/home"
const receive_header = "receive_header"
const receive_ad = "receive_ad"

const state = {
	headerData : [],
	adData : []
}
const getters = {
	allHeaderData : state => state.headerData,
	adAllData : state => state.adData
}
const actions = {
	async getHeaderData({commit}) {
		homeAction.getAdInfo((result) => {
			var data = [];
			try{
				data = JSON.parse(result);
			} catch(e) {}
			if(data.length <= 0) {
				data = [
					{
						picture : "",
						action : {type : "none",url : "",content : ""}
					},
					{
						picture : "",
						action : {type : "none",url : "",content : ""}
					},
					{
						picture : "",
						action : {type : "none",url : "",content : ""}
					}
				]
			}
			var adsData = [];
			data.map((item) => {
				if(item.picture) {
					adsData.push(item);
				}
			});
			commit(receive_ad,{adsData});
			commit(receive_header, {data});
		});
	}
	
}
const mutations = {
	[receive_header](state, {data}) {
		state.headerData = data;
	},
	[receive_ad](state, {adsData}){
		state.adData = adsData;
	}
	
}
export default{
	state,
	getters,
	actions,
	mutations
}