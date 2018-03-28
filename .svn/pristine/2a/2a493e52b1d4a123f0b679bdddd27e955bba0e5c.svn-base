/**
 * author pzh 
 * day    2017-9-27
 * 首页业务接口
 */
import {indexAPI} from "apiurl/index"
 export default{
 	/*主页数据*/
 	getHomeData(vm) {
 		var _returnJson = (result) => {
 			var home = result.homeAdBO;
 			var HQ = [];
 			try{
 				HQ = JSON.parse(home.oSAdJson);
 				HQ.map((item) => {
	 				if(item.picture) {
	 					vm.notData = false;
	 					vm.adHQ.push(item);
	 				}
	 			});
 			}catch (e){}
 			try{
 				var agent = JSON.parse(home.agentAdJson);
 				agent.map((item) => {
	 				if(item.picture) {
	 					vm.notData = false;
	 					vm.adList.push(item);
	 				}
	 			});
 			}catch(e) {}
 			try{
 				vm.narList = JSON.parse(result.categoryJson);
 			}catch(e) {}
			try{
 				vm.featureData = JSON.parse(result.featureAreaJson);
 			}catch(e) {}
 		}
 		var homeData = {};
 		try{
 			homeData = JSON.parse(localStorage.homeData);
 			_returnJson(homeData);
 		}catch(e) {}
 		indexAPI.homeDataAPI((result) => {
 			var str = JSON.stringify(result);
 			if(localStorage.homeData != str) {
 				localStorage.homeData = str;
 				_returnJson(result);
 			}
		}); 
 		
 	},
 	/*获取首页食材*/
 	getHomeProds(vm) {
 		indexAPI.homeProdAPI((result) => {
 			vm.prodList = result
		});
 	}
 }