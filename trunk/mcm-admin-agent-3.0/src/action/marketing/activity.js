/**
 * hgf 2017年11月1日09:32:02
 */
import {activityAPI} from "../../api/marketing"
export default{
	/*获取活动列表*/
	getActivityList(vm) {
		var paging = vm.pagings;
		activityAPI.activityListAPI(paging, (result) => {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	}
}