 /**
 * author hgf 
 * day    2017-9-25
 * 公共模块接口
 */
import https from "../axios/https"
export default {
	/*获取所有省市县数据*/
	provicesAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/area/getProvices", v)),
	/*使用余额支付订单*/
	payByBalance : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/pay/payByBalance", v)),
	/*用积分支付积分订单*/
	payByIntegralAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/pay/payByIntegral", v)),
	/*添加食材到购物车*/
	addProdCartAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/market/add2ShoppingCart", v)),
	/*购物车数量*/
	shoppingCartNumAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/shoppingcart/shoppingCartNum", v)),
	/*上传图片*/
	upImageAPI : (...v) => {
		var apiData = cJs.apiDataReturnParams("post", "/image/upload", v);
		apiData.type = "image";
		https.commAjax(apiData);
	},
	/*二级分类*/
	hierarchyListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/hierarchyList", v)),
	/*添加商品到采购清单*/
	addProdOftenAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/collect/add", v)),
	/*移除采购清单*/
	deleteOftenProdAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/collect/delete", v)),
	/*活动商品添加至购物车*/
 	addShopCatrAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/ms/add2ShoppingCart", v)),	
 	/*余额及收支明细*/
 	balanceAndTradeAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/wallet/balanceAndTradeRecordList", v)),	
 	/*积分和余额*/
 	balanceOrIntegralAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/wallet/balance", v)),	
 	/*微信支付-支付参数*/
 	getWeixinParamsAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/weixinPay/getRechargeParameters", v)),
 	/*支付宝-支付参数*/
 	getAlipayParamsAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/alipay/getRechargeParameters", v)),
 	/*货到付款*/
 	delayedPaymentAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/pay/payOrderByDelayedPayment", v)),
 	/*获取短信验证码*/
	getCodeAPI:(...v) => https.commAjax(cJs.apiDataReturnParams("post", "/api/common/msg/sendShortMsg", v),"orginUrl"),
	/*已开放的服务区域*/
	openAreaAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/api/common/area/getOpenedArea", v), "orginUrl"),
	/*验证手机号是否被注册*/
	verifyMobileAPI:(...v) => https.commAjax(cJs.apiDataReturnParams("post", "/api/common/has-register", v),"orginUrl"),
}