/**
 * author pzh
 * day    2017-9-29
 * 公共业务接口
 */
 import publicAPI from "apiurl/public"
 export default{
	/*获取JSApiInfo*/
	getJsApiInfo(params, callback) {
		publicAPI.getJsApiInfoAPI(params, (result) => {
			callback(result);
		});
	}
 }