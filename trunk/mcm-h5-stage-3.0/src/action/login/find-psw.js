/**
 * author hgf 
 * day    2017-12-04
 * 找回密码
 */
import serverAPI from "apiurl/login"
import publicApi from "apiurl/public"
export default {
	/*获取验证码*/
	getCode(vm, callback) {
		publicApi.getCodeAPI({
			mobile: vm.mobile,
			smsType: 2
		}, (result) => {
			vm.isDisabled = false;
			if(result.hasRegister)
				vm.isDisabled = true;
			callback(result);
		});
	},/*获取验证码*/
	findPsw(vm) {
		serverAPI.findPswAPI({
			mobile: vm.mobile,
			verificationCode:vm.verificationCode,
			newPwd:vm.newPwd
		}, (result) => {
			if(result){
				cJs.message("找回成功");
				setTimeout(()=>{
					vm.$router.push({
						path:"/login/"
					});
				},1000);
			}
		});
	},
}