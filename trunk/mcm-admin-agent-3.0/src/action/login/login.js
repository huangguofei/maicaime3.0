/**
 * hgf 2017年11月1日17:18:53
 */
import { selectAPI } from "../../api/login"
import publicAPI from "../../api/public"
export default {
	/*选择站点*/
	selectStation(vm, data) {
		selectAPI.selectStationAPI(data, (result) => {
			vm.saveCookie(result);
			vm.$router.push({
				name: "index.index"
			});
		});
	},
	/*登录*/
	login(vm, data) {
		selectAPI.loginAPI(data, (result) => {
			vm.loading = false;
			if(!result.agentId) {
				vm.verifyDialog(result);
			} else {
				vm.saveCookie(result);
				vm.$router.push({
					name: "index.index"
				});
			}
		});
	},
	/*退出登录*/
	logout(vm) {
		selectAPI.logoutAPI((result) => {
			if(result) {
				cJs.setCookie("MCM_AGENT_USER_INFO", "");
				vm.$router.push({
					name: "login"
				});
			}
		});
	},
	/*发送验证码*/
	sendCode(vm, callback) {
		publicAPI.sendCodeAPI({
			mobile: vm.forgetFrom.userName,
			smsType: 1,
		}, (result) => {
			if(result) {
				callback(result);
				vm.$message({
					message: '验证码已发送！',
					type: 'success'
				});
			}
		});
	},
	/*找回密码*/
	findPsw(vm) {
		selectAPI.findPswAPI({
			mobile: vm.forgetFrom.userName,
			verificationCode: vm.forgetFrom.code,
			newPwd: vm.forgetFrom.password,
		}, (result) => {
			if(result) {
				vm.isShowFindPsw=true;
				vm.$message({
					message: '找回密码成功！',
					type: 'success'
				});
			}
		});
	}
}