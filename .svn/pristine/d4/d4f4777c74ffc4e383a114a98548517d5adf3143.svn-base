/**
 * author hgf 
 * day    2017-9-25
 * 登录注册
 */
import serverAPI from "apiurl/login"
import publicApi from "apiurl/public"
export default {
	/*获取深市区*/
	getCityData(vm) {
		publicApi.provicesAPI((result) => {
			vm.info = result;
			//			console.log(vm.info)
		});
	},
	login(vm, data) {
		var _that = this;
		serverAPI.loginAPI(data, (result) => {
			/*微信授权*/
			if(result.redirectUrl) {
				_that.writeUserInfoCookie(result);
				window.location.href = result.redirectUrl;
				return true;
			} else {
				cJs.message("登录成功！");
				/*清除选中优惠券信息*/
				localStorage.removeItem("couponData");
				/*清除选中的配送时间段*/
				sessionStorage.removeItem("deliveryTime");
				if(result.merchantBOList.length > 1) {
					cJs.delCookie("purchaser-user-info");
					vm.shopList = result.merchantBOList;
					vm.isSelectShop = true;
				} else {
					_that.writeUserInfoCookie(result);
					setTimeout(function() {
						vm.$router.push({
							name: "index.index"
						});
					}, 1);
				}
			}

		});
	},
	register(vm) {
		var regionId = cJs.getCookie("REGION_ID");
		if(regionId) {
			vm.registerData.regionId = regionId;
		}
		serverAPI.registerAPI(vm.registerData, (result) => {
			cJs.message("注册成功");
			if(regionId) {
				cJs.delCookie("REGION_ID");
				vm.$router.push({
					name: "login.index"
				});
			} else {
				vm.$router.push({
					name: "login.register.success"
				});
			}

		});
	},
	selectShop(vm, id) {
		var params = {},
			_that = this;
		params = vm.userInfo;
		params.merchantId = id;
		serverAPI.loginAPI(params, (result) => {
			_that.writeUserInfoCookie(result);
			if(result.redirectUrl) {
				window.location.href = result.redirectUrl;
			} else {
				setTimeout(function() {
					vm.$router.push({
						name: "index.index"
					});
				}, 1);
			}

		});
	},
	getCode(vm, callback) {
		publicApi.getCodeAPI({
			mobile: vm.mobile,
			smsType: 0
		}, (result) => {
			vm.isDisabled = false;
			if(result.hasRegister)
				vm.isDisabled = true;
			callback(result);
		});
	},
	writeUserInfoCookie(result) {
		var userInfo = {
			userName: result.userName,
			mobile: result.mobile,
			token: result.token
		}
		cJs.delCookie("purchaser-user-info");
		cJs.setCookie("purchaser-user-info", "");
		cJs.setCookie("purchaser-user-info", JSON.stringify(userInfo));
	},
	verifyMobile(vm, callback) {
		publicApi.verifyMobileAPI({
			mobile: vm.mobile,
			merchantType : 200,
			smsType: 0
		}, (result) => {
			vm.isDisabled = false;
			vm.$parent.$parent.nextDisabled = false;
			if(result.userId) {
				vm.isDisabled = true;
			} 
			callback && callback(result);
		},(error)=>{
			vm.$parent.$parent.nextDisabled = true;
		});
	},
	/*获取默认地区*/
	getDefaultMerchant(vm, regionId) {
		var params = {
			regionId : regionId
		};
		serverAPI.merchantInfoAPI(params, (result) => {
			if(result) {
				vm.locationData.areaId = result.areaId;
				vm.locationData.areaName = result.provinceName + result.cityName + result.areaName;
			}
		});
	}
}