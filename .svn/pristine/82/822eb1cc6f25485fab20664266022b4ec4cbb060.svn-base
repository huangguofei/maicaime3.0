/**
 * author pzh
 * day    2017-9-29
 * 公共业务接口
 */
 import publicAPI from "apiurl/public"
 export default{
 		upFileImage(vm, params, callback) {
 			publicAPI.upImageAPI(params, (result)=> {
 					callback ? callback(result) : null;
 			});
 		},
 		/*已开放的区域*/
		getOpenAgents(vm) {
			publicAPI.openAreaAPI((result)=>{
				vm.agentList = result;
			});
		}
 }