/**
 * hgf 2017年12月8日
 * 提现申请
 */
import { depositApplyAPI } from "../../api/data"
export default {
	/*获取对账列表*/
	getDepositApplyAPIList(vm) {
		var params = JSON.stringify(vm.queryParams);
		params = JSON.parse(params);
		for(var i in params) {
			if(!params[i])
				delete params[i];
		}
		depositApplyAPI.depositApplyListAPI(params, (result) => {
			vm.tableData = result.pageInfo.resultList;
			vm.totalCount = result.pageInfo.totalCount;
			vm.amount=result.withdrawSinglePageSummary.amount;
		});
	}
}