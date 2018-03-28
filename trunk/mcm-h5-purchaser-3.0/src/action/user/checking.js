/**
 * author hgf
 * day    2017-11-23
 * 个人中心对账接口
 */
import { checkingAPI } from "apiurl/user"
export default {
	/*获取对账列表*/
	getCheckingList(vm) {
		checkingAPI.checkingListAPI({
			beginDate: vm.Time.sTime,
			endDate: vm.Time.eTime
		}, (result) => {
			vm.checkingList = result.orderList;
			vm.amount=result.sumAmount;
		});
	}
}