/**
* author pzh 
* day    2017-12-27
* 设置模块接口
*/
import https from "httpurl/https"
export const registerLimit = {
	/*通用端详情*/
	commDetailAPI :  (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/register-limit/get-default", v)),
	/*通用端保存*/
	saveCommAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/register-limit/save-default", v)),
	/*单个手机添加*/
	addMobileNumAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/register-limit/add", v)),
	/*单个手机编辑*/
	editMobileNumAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/register-limit/edit", v)),
	/*单个手机删除*/
	delMobileNumAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/register-limit/del", v)),
	/*单个手机列表*/
	mobileNumListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/register-limit/list", v)),
}