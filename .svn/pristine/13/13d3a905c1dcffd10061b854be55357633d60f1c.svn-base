/**
* author hgf
* day    2018-01-18
* 区域列表
*/
import {areaAPI} from "../../api/setting"
export default{
	/*获取区域列表*/
	getAreaList(vm) {
		areaAPI.queryRegionAPI({pageSize:99999}, (result) => {
			vm.areaData=result.resultList;
			vm.isSelect=false;
		});
	}
}