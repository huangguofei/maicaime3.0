/**
* author pzh 
* day    2017-9-21
* 设置模块接口
*/
import https from "../axios/https"
/*区域*/
export const areaAPI = {
	/*添加区域*/
	addRegionAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/region/add", v)),
	/*区域列表*/
	queryRegionAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/region/list", v)),
	/*删除区域*/
	deleteRegionAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/region/delete", v)),
	/*编辑区域*/
	editReginAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/region/edit", v)),
}
/*配送时间*/
export const deliveryTimeAPI = {
	/*配送时间列表*/
	queryDeliveryTimeAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/deliveryTimeSection/list", v)),
	/*设置默认时间*/
	setDedaultTimeAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/deliveryTimeSection/setDefaultTime", v)),
	/*编辑配送时间*/
	editDelTimeInfoAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/deliveryTimeSection/edit", v)),
	/*删除操作*/
	delleteDelTimeAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/deliveryTimeSection/delete", v)),
	/*禁用*/
	forbiddenDelTimeAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/deliveryTimeSection/forbidden", v)),
	/*启用*/
	activeDelTimeAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/deliveryTimeSection/active", v)),
	/*添加配送时间*/
	addDelTimeAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/deliveryTimeSection/add", v)),
}