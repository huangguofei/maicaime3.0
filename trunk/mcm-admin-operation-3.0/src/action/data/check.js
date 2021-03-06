/**
 * hgf 2017年12月8日
 * 对账
 */
import { checkAPI } from "../../api/data"
export default {
	/*获取对账列表*/
	getcheckList(vm) {
		var str = JSON.stringify(vm.queryParams);
		var params = JSON.parse(str);
		for(var i in params) {
			if(!params[i])
				delete params[i];
		}
		checkAPI.checkListAPI(params, (result) => {
			vm.tableDatas = result.pageInfo.resultList;
			vm.totalCount = result.pageInfo.totalCount;
			vm.totalData=result.stats;
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