/**
 * author hgf
 * day    2017-11-8
 * 个人中心接口
 */
import { orderAPI, userAPI } from "apiurl/user"
import login from "apiurl/login"
export default {
	/*获取订单数量*/
	getOrderNum(vm) {
		orderAPI.orderNumAPI((result) => {
			vm.orderNum.pay = result.unPayCount;
			vm.orderNum.receive = result.unShippingCount;
			vm.orderNum.finish = result.finishedCount;
			vm.orderNum.my = result.allCount;
		});
	},
	/*退出登录*/
	logout(vm) {
		login.logoutAPI((result) => {
			cJs.message("退出成功");
			cJs.setCookie("p-user-info", "");
			vm.$router.push({
				name: "login.index"
			});
		});
	},
	/*获取个信息*/
	getUserInfo(vm) {
		var sessionData = sessionStorage.getItem("purchaser-userData");
		if(sessionData) {
			sessionData = JSON.parse(sessionData);
			vm.userInfo = sessionData;
		}
		userAPI.userAPI((result) => {
			//存入缓存
			sessionStorage.setItem("purchaser-userData", JSON.stringify(result));
			vm.userInfo = result;
		});
	},
	/*个人详情信息*/
	getUserDetailInfo(vm) {
		userAPI.userDetailAPI((result) => {
			vm.detailInfo = result;
		});
	}
}