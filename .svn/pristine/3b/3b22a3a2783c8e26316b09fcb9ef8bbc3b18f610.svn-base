/**
 * hgf 2017年11月1日17:12:29
 */
import https from "../axios/https"
/*选择站点*/
export const selectAPI = {
	/*选择站点*/
	selectStationAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/user/auditSwitch", v)),
	/*登录*/
	loginAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/user/login", v)),
	/*注销*/
	logoutAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/user/logout", v)),
	/*找回密码*/
	findPswAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/user/forgetPwd", v)),
}