/**
* author pzh 
* day    2017-9-14
* 服务站模块接口
*/
import https from "httpurl/https"
export default{
	/*添加服务站*/
	addAgentAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/agent/add", v)),
	/*服务站列表*/
	agentListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/agent/list", v)),
//	修改服务站
	editAgentAPI:(...v)=>https.commAjax(cJs.apiDataReturnParams("post", "/agent/edit", v)),
}