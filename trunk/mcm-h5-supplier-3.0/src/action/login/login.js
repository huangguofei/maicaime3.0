/**
 * author hgf 
 * day    2017-9-25
 * 登录注册
 */
import serverAPI from "apiurl/login"
import publicApi from "apiurl/public"
export default {
	/*获取站点列表数据*/
	getCityData(vm) {
		publicApi.provicesAPI((result) => {
			vm.info = result;
		});
	},
	login(vm, data) {
		var _that = this;
		serverAPI.loginAPI(data, (result) => {
			vm.shopList = result.merchantBOList;
			cJs.message("登录成功！");
			if(result.merchantBOList.length > 1) {
				cJs.delCookie("supplier-user-info");
				vm.isSelectShop = true;
			} else {
				_that.writeUserInfoCookie(result);
				setTimeout(function() {
					vm.$router.push({
						name: "order.index.new"
					});
				}, 1);
			}
		});
	},
	register(vm) {
		serverAPI.registerAPI(vm.registerData, (result) => {
			cJs.message("注册成功！");
			vm.$router.push({
				name: "login.register.success"
			});
		});
	},
	selectShop(vm, id) {
		var params = {},
			_that = this;
		params = vm.userInfo;
		params.merchantId = id;
		serverAPI.loginAPI(params, (result) => {
			_that.writeUserInfoCookie(result);
			setTimeout(function() {
				vm.$router.push({
					name: "order.index.new"
				});
			}, 1);
		});
	},
	/*获取验证码*/
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
		cJs.delCookie("supplier-user-info");
		cJs.setCookie("supplier-user-info", "");
		cJs.setCookie("supplier-user-info", JSON.stringify(userInfo));
	},
	verifyMobile(vm, callback) {
		publicApi.verifyMobileAPI({
			mobile: vm.mobile,
			merchantType : 300,
			smsType: 0
		}, (result) => {
			vm.isDisabled = false;
			vm.$parent.$parent.nextDisabled  = false;
			if(result) {
				vm.isDisabled = true;
				return false;
			}
			callback && callback();
		},(error) => {
			vm.$parent.$parent.nextDisabled = true;
		});
	}

}