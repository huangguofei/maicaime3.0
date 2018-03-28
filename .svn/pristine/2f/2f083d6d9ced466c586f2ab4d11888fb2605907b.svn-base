/**
* author pzh 
* day    2017-10-31
* 主页管理业务
*/
import {homeAPI} from "apiurl/marketing"
export default{
	/*保存广告*/
	saveAdInfo(vm, adData) {
		homeAPI.saveAdAPI(adData, (result) => {
			vm.$message("保存成功");
		});
	},
	/*获取广告信息*/
	getAdInfo(callback) {
		homeAPI.adListAPI((result) => {
			callback(result);
		});
	}
}