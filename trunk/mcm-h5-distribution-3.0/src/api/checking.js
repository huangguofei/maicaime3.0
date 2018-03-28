/**
 * author hgf 
 * day    2017-11-23
 * 对账模块接口
 */
import https from "../axios/https"
export default {
	/*获取对账列表数据*/
 	getCheckingListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/bill/list", v)),
 	/*获取对账详情数据*/
 	getCheckingDetailsAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/bill/detail", v)),
}