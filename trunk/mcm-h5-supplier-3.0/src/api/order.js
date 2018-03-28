/**
 * author hgf 
 * day    2017-9-27
 * 订单模块接口
 */
import https from "httpurl/https"
export default {
	/*获取订单列表*/
	orderAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getOrderList", v)),
	/*获取待送货订单列表*/
	orderDeliveryAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getProductList", v)),
	/*获取订单详情*/
	orderDetailsAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getOrderInfo", v)),
	/*修改订单*/
	orderEditAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/updateOrderProd", v)),
	/*确认订单*/
	orderConfirmReceiptAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/confirmOrder", v)),
}