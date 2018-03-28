/**
 * author hgf 
 * day    2017-9-25
 * 公共模块接口
 */
import https from "../axios/https"
export default {
	/*获取所有省市县数据*/
	provicesAPI: (...v) => https.commAjax({
		method: "post",
		url: "/area/getProvices",
		success: v[0],
		error: v[1]
	}),
	/*上传图片*/
	upImageAPI: (...v) => {
		var apiData = cJs.apiDataReturnParams("post", "/image/upload", v);
		apiData.type = "image";
		https.commAjax(apiData);
	},
	/*获取短信验证码*/
	getCodeAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/api/common/msg/sendShortMsg", v), "orginUrl"),
	/*已开放的服务区域*/
	openAreaAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/api/common/area/getOpenedArea", v), "orginUrl"),
	/*验证手机号是否被注册*/
	verifyMobileAPI:(...v) => https.commAjax(cJs.apiDataReturnParams("post", "/api/common/has-register", v),"orginUrl"),
}