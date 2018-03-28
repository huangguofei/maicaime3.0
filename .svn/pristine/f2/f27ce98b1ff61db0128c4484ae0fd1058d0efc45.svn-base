/**
 * hgf 2017年12月11日
 * 订单
 */
import { orderAPI } from "../../api/order"
export default {
	/*获取订单列表*/
	getOrderList(vm) {
		var str = JSON.stringify(vm.queryParams);
		var params = JSON.parse(str);
		for(var i in params) {
			if(!params[i])
				delete params[i];
		}
		orderAPI.orderListAPI(params, (result) => {
			vm.tableDatas = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*获取订单详情*/
	getOrderDetails(vm) {
		orderAPI.orderDetailsAPI({
			orderId: vm.orderId
		}, (result) => {
			vm.orderData = result;

		});
	},
	/*下载订单excel*/
	doweloadOrderExcel(vm) {
		var params = "", query = vm.queryParams;
		for(var k in query) {
			if(query[k] && k != "pageSize" && k != "pageNum")
				params += "&" + k + "=" +query[k];
		}
		var info = cJs.getCookie("mcm-operation-user-info");
		if(info) {
			info = JSON.parse(info);
			window.location.href = "/operation/admin/order/export-order-list?token=" + info.token + params;
		}
	}
}