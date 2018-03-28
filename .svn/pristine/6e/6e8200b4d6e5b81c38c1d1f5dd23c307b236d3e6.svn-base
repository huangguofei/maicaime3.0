/**
 * hgf 2017年12月11日
 * 订单
 */
import { orderAPI } from "../../api/order"
export default {
	/*获取订单列表*/
	getOrderList(vm) {
		for(var i in vm.queryParams) {
			if(!vm.queryParams[i])
				delete vm.queryParams[i];
		}
		orderAPI.orderListAPI(vm.queryParams, (result) => {
			vm.tableData = result.pageInfo.resultList;
			vm.totalCount = result.pageInfo.totalCount;
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
		var info = cJs.getCookie("MCM_AGENT_USER_INFO");
		if(info) {
			info = JSON.parse(info);
			window.location.href = "/agent/admin/order/export-order-list?token=" + info.token + params;
		}
	}
}