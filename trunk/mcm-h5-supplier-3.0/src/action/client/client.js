/**
 * author hgf
 * day    2017-11-23
 * 客户业务
 */
import { clientAPI } from "apiurl/client"
export default { /*获取客户列表*/
	getClientList(vm) {
		clientAPI.clientListAPI({
			merchantName: vm.searchTxt
		}, (result) => {
			vm.clientList = result;
		});
	},
	/*获取客户详情*/
	getClientDetails(vm) {
		clientAPI.clientDetailsAPI({
			purchaserId: vm.clientId
		}, (result) => {
			vm.userInfo = result;
		});
	}
}