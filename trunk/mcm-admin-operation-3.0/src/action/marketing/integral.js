/**
* author hgf 
* day    2017-11-9
* 积分
*/
import {integralAPI} from "apiurl/marketing"
export default{
	/*获取列表*/
	getIntegralList(vm) {
		var paging = vm.pagings;
		integralAPI.integralListAPI(paging, (result) => {
			vm.tableData=result.resultList;
			vm.totalCount=result.totalCount;
		});
	},
	
}