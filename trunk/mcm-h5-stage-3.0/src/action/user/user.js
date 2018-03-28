/**
 * author hgf
 * day    2017-11-22
 * 个人中心接口
 */
import {userAPI } from "apiurl/user"
export default {
	/*退出登录*/
	logout(vm) {
		userAPI.logoutAPI((result) => {
			cJs.message("退出成功");
			cJs.setCookie("stage-user-info", "");
			vm.$router.push({
				name: "login.index"
			});
		});
	},/*获取个信息*/
	getUserInfo(vm) {
		var sessionData = sessionStorage.getItem("stage-userData");
		if(sessionData) {
			sessionData = JSON.parse(sessionData);
			vm.userInfo = sessionData;
		}
		userAPI.userAPI((result) => {
			sessionStorage.setItem("stage-userData",JSON.stringify(result));
			vm.userInfo=result;
		});
	},
	/*个人详情信息*/
	getUserDetailInfo(vm) {
		userAPI.userDetailAPI((result) => {
			vm.detailInfo = result;
		});
	}

}