/*头部广告*/
import homeAction from "action/marketing/home"
const receive_header = "receive_header"
const receive_header_ad_HQ = "receive_header_ad_HQ"
/*接收导航数据*/
const receive_nar = "receive_nar"
/*接收专区*/
const receive_feature = "receive_feature"

const state = {
	headerData : [],
	adHQData : [],
	narData : [],
	featureData : {
		scheme : 3,
		data : []
	}
}
const getters = {
	allHeaderData : state => state.headerData,
	narsData : state => state.narData,
	featureInfo : state => state.featureData,
	adHQInfo : state => state.adHQData
}
const actions = {
	getHeaderData({commit}) {
		homeAction.getHeadAdList((result) => {
			var data = [], hData =[], HQData = [];
			try{
				data = JSON.parse(result.agentAdJson);
			} catch(e) {}
			try{
				hData = JSON.parse(result.oSAdJson);
				hData.map((item)=>{
					if(item.picture) {
						HQData.push(item);
					}
				});
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
			data.map((item) => {
				item.loadingUp = false;
			});
			commit(receive_header_ad_HQ, {HQData});
			commit(receive_header, {data});
		});
	},
	async getSetCategoryNar({commit}) {
		homeAction.getCategoryNar((result) =>  {
			var checkJson = [];
			try{
				checkJson = JSON.parse(result);
			} catch(e) {}
			commit(receive_nar,{checkJson})
		});
	},
	async getSetFeatureInfo({commit}) {
		homeAction.getFeatureInfo((result) => {
			var data = {};
			try{
				data = JSON.parse(result);
			} catch(e) {}
			commit(receive_feature,{data})
		});
	}
}
const mutations = {
	[receive_header](state, {data}) {
		state.headerData = data;
	},
	[receive_nar](state, {checkJson}) {
		state.narData = checkJson;
	},
	[receive_feature](state, {data}) {
		if(!data.data) return;
		state.featureData = data;
	},
	[receive_header_ad_HQ](state, {HQData}) {
		state.adHQData = HQData;
	}
}
export default{
	state,
	getters,
	actions,
	mutations
}