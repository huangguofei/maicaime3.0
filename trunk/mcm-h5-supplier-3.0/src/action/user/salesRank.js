/**
 * author hgf
 * day    2017-12-06
 * 银行卡接口
 */
import { salesBankAPI } from "apiurl/user"
export default{
	/*菜品排行*/
	getProdRandData(vm, callback) {
		var option = vm.option;
		salesBankAPI.prodRankAPI(option, (result) => {
			vm.listData = vm.listData.concat(result.resultList);
			/*option.total = result.totalCount;*/
			var len = result.resultList.length;
			if(len > 0) {
				option.pageNum = result.currentPage + 1;
			}
			callback ? callback(len) : "";
		});
	},
	/*客户排行*/
	getCustRankData(vm, callback) {
		var option = vm.option;
		salesBankAPI.custRankAPI(option, (result) => {
			vm.listData = vm.listData.concat(result.resultList);
			/*option.total = result.totalCount;*/
			var len = result.resultList.length;
			if(len > 0) {
				option.pageNum = result.currentPage + 1;
			}
			callback ? callback(len) : "";
		});
	},
}