/**
 * author hgf 
 * day    2017-9-27
 * 订单模块接口
 */
import https from "httpurl/https"
export default {
	/*获取订单列表*/
	orderAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/getOrderList", v)),
	/*获取待打包订单列表*/
	orderPackAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getUnPackedOrderList", v)),
	/*获取订单详情*/
	orderDetailsAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getOrderInfo", v)),
	/*确认订单*/
	orderConfirmReceiptAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/confirmOrder", v)),
	/*确认送达*/
	orderConfirmGotoAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/confirmTheDelivery", v)),
	/*关联二维码*/
	associatedQrCodeAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/associatedQrCode", v)),
}