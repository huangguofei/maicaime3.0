 import publicAPI from "apiurl/public"
 export default{
	/*余额支付*/
	payByBalance(vm, orderStatusId) {
		if(vm.orderId == 0) {
			cJs.message("订单异常");
			return false;
		}
		var params = {
			orderId : vm.orderId
		}
		publicAPI.payByBalance(params, (result) => {
			cJs.message("支付成功！");
			if(orderStatusId && (orderStatusId == 40 || orderStatusId == 50)){
				vm.$router.push({
					name : "order.success"
				});
			} else {
				vm.$router.push({
					name : "often.orders.success"
				});
			}
			
		});
	},
	/*货到付款*/
	delayedPayment(vm) {
		if(vm.orderId == 0) {
			cJs.message("订单异常");
			return false;
		}
		var params = {
			orderId : vm.orderId
		}
		publicAPI.delayedPaymentAPI(params, (result) => {
			vm.$router.push({
				name : "often.orders.success"
			});
		});
	},
	/*积分订单支付*/
	payByIntegral(vm) {
		if(vm.orderId == 0) {
			cJs.message("订单异常");
			return false;
		}
		var params = {
			orderId : vm.orderId
		}
		publicAPI.payByIntegralAPI(params, (result) => {
			cJs.message("支付成功！");
			vm.$router.push({
				name : "often.orders.success"
			});
		});
	},
	/*上传图片*/
	upFileImage(vm, params) {
		publicAPI.upImageAPI(params, (result)=> {
				vm.loading = false;
				vm.uploadSuccess(result);
		});
	},
	/*加入清单*/
	addProdOften(productSkuId, callback) {
		var params = {
			productSkuId : productSkuId
		}
		publicAPI.addProdOftenAPI(params, (result) => {
			callback();
		});
	},
	/*移除单个商品清单*/
	removeSingleProdOften(productSkuId, callback) {
		var params = {
			productSkuId : productSkuId
		}
		publicAPI.deleteOftenProdAPI(params, (result) => {
			callback();
		});
	},
	/*获取购物车数量*/
	getCartNum(vm) {
		publicAPI.shoppingCartNumAPI((result) => {
			vm.cartNum = result;
		});
	},
	/*加入购物车*/
	addCartByProd(vm, productSkuId, num, callback) {
		var params = {
			productSkuId : productSkuId,
			num : num
		};
		publicAPI.addProdCartAPI(params, (result) => {
			callback ? callback(result) : "";
		},(error) => {
			vm.prodNum = vm.cacheNum;
			vm ? vm.$store.dispatch("updateCartNum") : "";
		});
	},
	/*活动商品*/
	addPromptCartByProd(vm, specialProductId, num) {
		var params = {
			specialProductId : specialProductId,
			num : num
		};
		publicAPI.addShopCatrAPI(params, (result) => {
		},(error)=>{
			vm ? vm.$store.dispatch("updateCartNum") : "";
		});
	},
	/*获取余额*/
	getBalanceInfo(vm) {
		var params = {walletType : 0}
		publicAPI.balanceOrIntegralAPI(params, (result) => {
			vm.balance = result.amount;
			vm.statusId = result.statusId;
		});
	},
	/*微信支付参数*/
	getWeixinParams(vm) {
		var params = {
			amount : vm.amount,
			specialOfferId : vm.specialOfferId
		}
		publicAPI.getWeixinParamsAPI(params, (result) => {
			if(result) {
				cJs.weixinPay(result, () => {
					vm.$router.push({
						name : "user.recharge.success"
					});
				}, () => {
					cJs.message("取消支付!");
				}, () => {
					cJs.message("支付失败!");
				});
			}
		});
	},
	/*支付宝参数*/
	getAlipayParams(vm) {
		var params = {
			amount : vm.amount,
			specialOfferId : vm.specialOfferId
		}
		publicAPI.getAlipayParamsAPI(params, (result) => {
			if(result) {
				document.write(result);
			}
		});
	},
	/*已开放的区域*/
	getOpenAgents(vm, callback) {
		publicAPI.openAreaAPI((result)=>{
			vm.agentList = result;
			callback && callback();
		});
	}
	
}