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
	/*确认订单*/
	orderConfirmReceiptAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/confirmThePickup", v)),
	/*确认送达*/
	orderConfirmDeliveryAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/confirmTheDelivery", v)),
	/*扫描二维码获取订单id*/
	getOrderIdAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/api/qr_code/dynamic/get", v),"orginUrl"),
}