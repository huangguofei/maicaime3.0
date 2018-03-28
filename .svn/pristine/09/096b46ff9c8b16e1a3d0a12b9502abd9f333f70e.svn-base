/**
 * author pzh
 * day    2017-11-2
 * 地址模块接口
 */
 import https from "httpurl/https"
 export const addrAPI = {
 	/*获取商户地址*/
 	agentAreaAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/address/address-name", v)),
 	/*地址列表*/
 	addrListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/address/list", v)),
 	/*添加*/
 	addAddrAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/address/add", v)),
 	/*设置为默认*/
 	defaultAddrAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/address/set-default", v)),
 	/*编辑*/
 	editAddrAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/address/edit", v)),
 	/*详情*/
 	addrDetailAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/address/get-address-by-id", v)),
 }