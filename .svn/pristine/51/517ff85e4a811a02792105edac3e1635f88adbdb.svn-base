/**
 * author hgf 
 * day    2017-9-25
 * 公共模块接口
 */
import https from "../axios/https"
export default {
	/*获取JSApiInfo的数据*/
	getJsApiInfoAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/api/wx/getJsApiInfo", v), "orginUrl"),
	/*获取短信验证码*/
	getCodeAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/api/common/msg/sendShortMsg", v), "orginUrl"),

}