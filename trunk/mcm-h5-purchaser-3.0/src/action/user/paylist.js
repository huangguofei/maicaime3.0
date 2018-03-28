/**
 * author hgf
 * day    2017-11-8
 * 个人中心流水明细接口
 */
import {integralAPI} from "apiurl/user"
 export default{
 		/*获取余额内容*/
 		getPayInfo(vm) {
 			integralAPI.userIntegralAPI({walletType:0},(result) => {
 				vm.integralData = result;
 				vm.initTime(result.creationTime);
 			});
 		},/*获取流水记录内容*/
 		getPayList(vm, callback) {
 			var option = vm.option;
 			integralAPI.userIntegralListAPI(option,(result) => {
 				vm.payListData = vm.payListData.concat(result.resultList);
 				option.total = result.totalCount;
				var len = result.resultList.length;
				if(len > 0) {
					option.pageNum = result.currentPage + 1;
				}
				callback ? callback(len) : "";
 			});
 		},
 		/*获取总额*/
 		getAmount(vm) {
 			var params = {
 				walletType : 0
 			}
 			integralAPI.recordSumAmountAPI(params, (result)=> {
 				vm.amount = result;
 			});
 		}
 		
 }
