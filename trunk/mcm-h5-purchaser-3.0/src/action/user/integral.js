/**
 * author hgf
 * day    2017-11-8
 * 个人中心积分接口
 */
import {integralAPI} from "apiurl/user"
 export default{
 		/*获取积分内容*/
 		getIntegral(vm) {
 			integralAPI.userIntegralAPI({walletType:1},(result) => {
 				vm.integralData = result;
 				
 			});
 		},/*获取积分记录内容*/
 		getIntegralList(vm, callback) {
 			var option = vm.option;
 			integralAPI.userIntegralListAPI(option,(result) => {
 				vm.integralListData = vm.integralListData.concat(result.resultList);
 				option.total = result.totalCount;
				var len = result.resultList.length;
				if(len > 0) {
					option.pageNum = result.currentPage + 1;
				}
				callback ? callback(len) : "";
 			});
 		},
 		
 }
