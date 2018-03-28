/**
 * author hgf 
 * day    2017-11-22
 * 个人中心模块接口
 */
import https from "httpurl/https"

/*获取个人信息*/
export const userAPI = {
	/*个人信息*/
	userAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/user/deliveryDealerOwnInfo", v)),
	/*退出登录*/
	logoutAPI:(...v) => https.commAjax(cJs.apiDataReturnParams("post", "/user/logout", v)),
	/*个人详情信息*/
	userDetailAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/user/detail", v)),
}
