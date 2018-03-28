/**
 * author pzh 
 * day    2017-9-14
 * 公共模块接口
 */
import https from "../axios/https"
export default {
	/*上传图片*/
	upImageAPI: (...v) => {
		var apiData = cJs.apiDataReturnParams("post", "/image/upload", v);
		apiData.type = "image";
		https.commAjax(apiData);
	},
	/*商品分类*/
	categoryAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/getCategorys", v)),
	/*服务站的所有商品*/
	prodsByCategoryIdAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/getProductListByAgentId", v)),
	/*发送验证码*/
	sendCodeAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/msg/sendShortMsg", v)),
	
}