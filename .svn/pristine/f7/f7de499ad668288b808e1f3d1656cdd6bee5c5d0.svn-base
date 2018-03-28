/**
 * hgf 2017年12月11日
 * 订单模块
 */
import https from "../axios/https"
/*订单信息*/
export const orderAPI = {
	/*获取订单列表*/
	orderListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getOrderList", v)),
	/*获取订单详情*/
	orderDetailsAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/order/getOrderInfo", v)),
	/*导出excel*/
	exportOrderAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/order/export-order-list", v)),
}