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
		if(vm.option.status == 20) { /*获取待打包订单列表数据*/
			serverAPI.orderPackAPI(vm.option, (result) => {
				_orderData(result);
				vm.isLoad = true;
			}, (error) => {
				vm.isLoad = true;
			});
		} else {
			serverAPI.orderAPI(vm.option, (result) => {
				_orderData(result);
				vm.isLoad = true;
			}, (error) => {
				vm.isLoad = true;
			});
		}

		function _orderData(result) {
			var option = vm.option;
			var orderStatus =  option.status instanceof Array ? option.status.toString() : option.status;
			if(orderStatus == vm.orderType) {
				vm.$store.commit("CONCAT_ORDER_LIST", result.resultList);
			} else {
				vm.$store.commit("UPDATE_ORDER_LIST", result.resultList);
			}
			vm.$store.commit("SELECT_ORDER_TYPE", orderStatus);
			vm.currentPage = result.currentPage;
			vm.totalPage = result.totalPage;
			var len = result.resultList.length;
			if(len > 0) {
				vm.option.pageNum = result.currentPage + 1;
				vm.$store.commit("RECORD_THAT_PAGE", option.pageNum);
			}
			callback ? callback(len) : "";
		}
	},
	/*获取订单详情*/
	getOrderDetails(vm) {
		serverAPI.orderDetailsAPI({
			deliveryOrderId: vm.orderId
		}, (result) => {
			result.list.forEach((val, key) => {
				val.isSelect = true;
			});
			vm.orderData = result;

		});
	},
	/*确认送达*/
	orderConfirmGoto(vm, status) {
		var sendData = {
			deliveryTaskOrderId: vm.orderId
		}
		if(status != "all") {
			var arryStr = "";
			if(status == "") {
				arryStr = _getData();
				if(!arryStr) {
					cJs.message("请选择至少一家");
					return false;
				}
			} else {
				arryStr = status;
			}
			sendData.subOrderIds = arryStr;
		}
		serverAPI.orderConfirmGotoAPI(sendData, (result) => {
			vm.$emit("offPage");
			vm.$router.push({
				name: "order.index.obligation"
			});
			cJs.message("确认成功！");
		});

		function _getData() {
			var jsonStr = "";
			vm.shopData.forEach((val, index) => {
				if(val.isSelect) {
					jsonStr += val.subOrderId + ","
				}
				//jsonStr.push(val.subOrderId)
			});
			if(jsonStr) {
				jsonStr = jsonStr.substring(0, jsonStr.length - 1);
			}
			return jsonStr;
		}
	},
	/*关联二维码*/
	bingCodeOrder(vm, dOrderId, codeVal) {
		var params = {
			deliveryOrderId: dOrderId,
			qrCodeId: codeVal
		}
		serverAPI.associatedQrCodeAPI(params, (result) => {
			cJs.message("关联成功");
			vm.orderData.qrCodeId = codeVal;
			vm.dialogShow = false;
		});
	}

}