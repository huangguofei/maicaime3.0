/**
 * author pzh
 * day    2017-9-27
 * 购物车业务
 */
import { ordersAPI } from "apiurl/often"
import publicAPI from "apiurl/public"
import { couponAPI } from "apiurl/user"
export default {
	/*获取订单信息*/
	getOrdersInfo(vm) {
		ordersAPI.cartToOrderDataAPI((result) => {
			if(result.list.length == 0) {
				cJs.message("该订单已提交！");
				setTimeout(() => {
					vm.$router.push({
						name: "order.index.obligation"
					});
				}, 1000);
				return false;
			}
			vm.addressInfo = result.address;
			result.list.forEach((item) => {
				item.remark = "";
			});
			var remarkTxt = sessionStorage.getItem("orderRemarkData");
			var orderRemarkData = [];
			if(remarkTxt) {
				orderRemarkData = JSON.parse(remarkTxt);
				result.list.forEach((v, k) => {
					orderRemarkData.forEach((n,m)=>{
						if(v.supplierId==n.id){
							v.remark=n.text;
						}
					});
				});
			}
			vm.supplierProd = result.list;
		});
	},
	/*提交订单信息*/
	saveOrdersInfo(vm) {
		var params = {},
			_that = this;
		params.addressId = vm.addressInfo.addressId;
		params.invoiceType = 1;
		params.device = cJs.verifyFacility();
		params.deliveryWay = 100;
		params.stockoutType = 1;
		params.userCouponId = vm.couponId;
		/*params.list = [];*/
		var len = vm.supplierProd.length,
			list = "";
		var times = _that.switchDevTime(vm.timeVal);
		params.deliveryStartTime = times.startDate;
		params.deliveryEndTime = times.endDate;
		var remarks = {};
		for(var i = 0; i < len; i++) {
			var supplierId = vm.supplierProd[i].supplierId;
			/*params.list["'" + supplierId + "'"] = vm.supplierProd[i].remark;*/
			remarks[supplierId] = vm.supplierProd[i].remark;
		}
		params.remarks = JSON.stringify(remarks);
		ordersAPI.cartSubmitOrderAPI(params, (result) => {
			vm.totalAmount = result.totalAmount;
			vm.orderId = result.orderId;
			vm.payShow = true;
			/*订单号写入localStorage*/
			localStorage.setItem("orderId", result.orderId);
			/*清除选中优惠券信息*/
			localStorage.removeItem("couponData");
			/*清除选中的配送时间段*/
			sessionStorage.removeItem("deliveryTime");
			/*更新购物车数量*/
			vm.$store.dispatch("updateCartNum");
			/*清楚备注信息*/
			sessionStorage.removeItem("orderRemarkData");
		});
	},
	/*获取积分商品订单信息*/
	getIntegralOrderInfo(vm) {
		var params = {
			productSkuId: vm.$route.params.productId
		}
		ordersAPI.integralInitOrderDataAPI(params, (result) => {
			vm.addressInfo = result.address;
			result.list.forEach((item) => {
				item.remark = "";
			});
			vm.supplierProd = result.list;
			/*取第一个商品*/
			var first = result.list[0];
			if(first) {
				vm.firstIntegralProd.extraPrice = first.list[0].extraPrice;
				vm.firstIntegralProd.integralPrice = first.list[0].integralPrice;
			}
		});
	},
	/*积分商品下单*/
	saveIntegralOrdersInfo(vm) {
		var params = {
			addressId: vm.addressInfo.addressId,
			invoiceType: 1,
			productSkuId: vm.$route.params.productId
		}
		var times = this.switchDevTime(vm.timeVal);
		params.deliveryStartTime = times.startDate;
		params.deliveryEndTime = times.endDate;
		params.device = cJs.verifyFacility();
		params.mark = vm.supplierProd[0].remark;
		ordersAPI.integralSubmitOrderAPI(params, (result) => {
			vm.totalAmount = result.totalAmount;
			vm.orderId = result.orderId;
			vm.payShow = true;
			vm.$store.dispatch("updateCartNum");
		});
	},
	/*获取可用券列表*/
	getCouponList(vm) {
		if(localStorage.getItem("couponData"))
			return false;
		couponAPI.userUsableCouponAPI((result) => {
			var couponNum = 0;
			result.forEach((v, k) => {
				if(v.coupon.preconditionAmount <= vm.subPrice)
					couponNum++;
			});
			if(couponNum == 0) {
				vm.couponText = "无可用";
			} else
				vm.couponText = couponNum + "张优惠券可使用";
		});
	},
	/*获取配送时间*/
	getDevTime(vm) {
		ordersAPI.timeSectionAPI((result) => {
			result.forEach((item) => {
				item.past = false;
			});
			vm.devTimes = result;
		});
	},
	/*转换真实配送时间*/
	switchDevTime(times) {
		var st = times.sTime,
			et = times.eTime,
			sType = times.sType,
			eType = times.eType,
			thatDate = new Date();
		var thatD = thatDate.getFullYear() + "-" + (thatDate.getMonth() + 1) + "-" + thatDate.getDate();
		var tJson = {},
			tom = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
		var tomD = tom.getFullYear() + "-" + (tom.getMonth() + 1) + "-" + tom.getDate();
		if(sType == 0) {
			tJson.startDate = thatD + " " + st + ":00";
		} else {
			tJson.startDate = tomD + " " + st + ":00";
		}
		if(eType == 0) {
			tJson.endDate = thatD + " " + et + ":00";
		} else {
			tJson.endDate = tomD + " " + et + ":00";
		}
		return tJson;

	}
}