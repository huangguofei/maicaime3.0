/**
 * hgf 2017年12月8日
 * 对账
 */
import { checkAPI } from "../../api/data"
export default {
	/*获取对账列表*/
	getcheckList(vm) {
		for(var i in vm.queryParams) {
			if(!vm.queryParams[i])
				delete vm.queryParams[i];
		}
		checkAPI.checkListAPI(vm.queryParams, (result) => {
			vm.tableData = result.pageInfo.resultList;
			vm.totalCount = result.pageInfo.totalCount;
			vm.totalData=result.stats;
			vm.amount=result.amount;
			/*充值记录数据*/
			vm.tableDatas = result.pageInfo.resultList;
			vm.rechargeRecordData= result.stats;
		});
	},/*采购商充值统计数据*/
	getRechargeStatisticsAPI(vm){
		checkAPI.rechargeStatisticsAPI((result) => {
			vm.headData= result;
		});
	}
	
}