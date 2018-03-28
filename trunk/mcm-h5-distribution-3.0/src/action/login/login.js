/**
 * author hgf 
 * day    2017-9-25
 * 登录注册
 */
import serverAPI from "apiurl/login"
import cityApi from "apiurl/public"
export default {
	/*获取站点列表数据*/
	getCityData(vm) {
		cityApi.provicesAPI((result) => {
			vm.info = result;
		});
	},
	login(vm,data) {
		var _that = this;
		cJs.delCookie("distribution-user-info");
		serverAPI.loginAPI(data,(result) => {
			if(result.merchantBOList.length > 1) {
				cJs.setCookie("distribution-user-info", "");
				vm.shopList = result.merchantBOList;
				vm.isSelectShop = true;
			} else {
				_that.writeUserInfoCookie(result);
				setTimeout(function() {
					window.location.href="/order/new#/order/new"
				},1);
				
			}
			/*vm.$router.push({name : "order.index.new"});*/
		});
	},
	register(vm){
		serverAPI.registerAPI(vm.registerData,(result)=>{
			vm.$router.push({name : "login.index"});
		});
	},
	selectShop(vm, id) {
		var params = {}, _that = this;
		params = vm.userInfo;
		params.merchantId = id;
		serverAPI.loginAPI(params, (result) => {
			/*vm.$router.push({name : "order.index.new"});*/
			_that.writeUserInfoCookie(result);
			window.location.href="/order/new#/order/new"
		});
	},
	writeUserInfoCookie(result) {
		var userInfo = {
			userName: result.userName,
			mobile: result.mobile,
			token: result.token
		}
		cJs.setCookie("distribution-user-info", "");
		cJs.setCookie("distribution-user-info", JSON.stringify(userInfo));
	}

}