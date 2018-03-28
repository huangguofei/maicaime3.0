/**
 * author hgf 
 * day    2017-9-27
 * 订单
 */
import serverAPI from "apiurl/order"
import cityApi from "apiurl/public"
export default {
	/*获取订单列表数据*/
	getOrderListData(vm, callback) {
		var option = vm.option;
		if(vm.searchMode == "food") {
			serverAPI.orderDeliveryAPI(option, (result) => {
				_orderData(result);
				vm.isLoad = true;
			}, (error) => {
				vm.isLoad = true;
			});
		} else {
			serverAPI.orderAPI(option, (result) => {
				_orderData(result);
				vm.isLoad = true;
			}, (error) => {
				vm.isLoad = true;
			});
		}

		function _orderData(result) {
			var orderStatus = "";
			if(option.orderStatusId) {
				orderStatus = option.orderStatusId instanceof Array ? option.orderStatusId.toString() : option.orderStatusId;
			} else {
				orderStatus = vm.orderStatusId;
			}
			if(orderStatus == vm.orderType) {
				vm.$store.commit("CONCAT_ORDER_LIST", result.resultList);
			} else {
				vm.$store.commit("UPDATE_ORDER_LIST", result.resultList);
			}
			vm.$store.commit("SELECT_ORDER_TYPE", orderStatus);
			/*if(vm.searchMode == "food") {
				vm.prodList = vm.prodList.concat(_select(result.resultList));
			} else {
				vm.orderList = vm.orderList.concat(_select(result.resultList));
			}
*/
			option.total = result.totalCount;
			var len = result.resultList.length;
			if(len > 0) {
				option.pageNum = result.currentPage + 1;
				vm.$store.commit("RECORD_THAT_PAGE", option.pageNum);
			}
			callback ? callback(len) : "";
		}

		function _select(data) {
			data.forEach((val, key) => {
				val.isSelect = false;
				val.isShow = false;
				if(val.items) {
					val.msg = "(还有" + (val.items.length - 2) + "家餐馆)";
				}
			});
			return data;
		}
	},
	/*获取订单详情*/
	getOrderDetails(vm) {
		serverAPI.orderDetailsAPI({
			orderId: vm.orderId
		}, (result) => {
			vm.orderDetailsInfo = result;
		});
	},
	/*修改订单*/
	orderEdit(vm,data) {
		serverAPI.orderEditAPI(data, (result) => {
			if(result){
				vm.$router.go(0);
				cJs.message("修改成功！");
			}
		});
	},
	/*确认订单*/
	orderConfirm(vm) {
		serverAPI.orderConfirmReceiptAPI({
			orderId: vm.orderId
		}, (result) => {
			cJs.message("确认成功！");
			vm.$router.push({
				name: "order.index.obligation"
			});
		});
	}

}