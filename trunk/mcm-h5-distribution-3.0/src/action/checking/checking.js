/**
 * author hgf
 * day    2017-11-23
 * 对账模块
 */
import checkingAPI from "apiurl/checking"
export default {
	/*获取列表*/
	getCheckingList(vm) {
		checkingAPI.getCheckingListAPI(vm.options, (result) => {
			vm.checkingList = result.resultList;
		});
	},
	/*获取详情*/
	getCheckingDetails(vm) {
		checkingAPI.getCheckingDetailsAPI({
			billId: vm.checkingId
		}, (result) => {
			vm.checkingList = result.billRecordBOList;
			vm.checkingData = result.billBO;
		});
	},
}