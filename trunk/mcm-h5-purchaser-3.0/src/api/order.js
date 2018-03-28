/**
 * author hgf 
 * day    2017-9-27
 * 订单模块接口
 */
import https from "httpurl/https"
export default {
	/*获取订单列表*/
	orderAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/getOrderList", v)),
	/*获取订单详情*/
	orderDetailsAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getOrderInfo", v)),
	/*获取待付款订单详情*/
	orderNoPayDetailsAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getUnpayOrderInfo", v)),
	/*确认收货*/
	orderConfirmReceiptAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/confirmReceipt", v)),
	/*批量收货*/
	orderAllConfirmReceiptAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/batchConfirmReceipt", v)),
	/*取消订单*/
	orderCancelAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/cancelOrder", v)),
	/*获取订单食材列表*/
	orderFoodAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getProductList", v)),

}