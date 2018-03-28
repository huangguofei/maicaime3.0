/**
 * author pzh 
 * day    2017-11-8
 * 积分业务接口
 */
import {integralAPI} from "apiurl/index"
import publicAPI from "apiurl/public"
export default{
	/*余额*/
	getBalanceInfo(vm) {
		var params = {
			walletType : 1
		}
		publicAPI.balanceOrIntegralAPI(params, (result) => {
			vm.balance = result.amount;
		});
	},
	/*商品列表*/
	getProdList(vm, callback) {
		var option = vm.option;
		integralAPI.prodListAPI(option, (result) => {
			vm.load = false;
			if(result == "206") {
				vm.message = "服务站还未开通积分商城";
				return false;
			}
			vm.prodList = vm.prodList.concat(result.resultList);
			option.total = result.totalCount;
			var len = result.resultList.length;
			if(len > 0) {
				option.pageNum = result.currentPage + 1;
			}
			callback ? callback(len) : "";
		}, (error) => {
			vm.load = false;
		});
	}
}