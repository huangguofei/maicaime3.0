/**
* author pzh 
* day    2017-9-21
* 区域业务
*/
import {areaAPI} from "../../api/setting"
export default{
	/*获取区域列表*/
	getAreaList(vm) {
		var queryParams = vm.queryParams;
		areaAPI.queryRegionAPI(queryParams, (result) => {
			vm.tableData = result.resultList;
			vm.areaData=result.resultList;//充值记录查询区域
			vm.totalCount = result.totalCount;
			vm.isSelect=false;
		});
	},
	/*保存区域信息*/
	saveAreaInfo(vm, info) {
		if(!info) {
			vm.$message("未找到区域信息！");
			return false;
		}
		var _that = this,
		_success = (mes) => {
			vm.$message({
	          message: mes,
	          type: 'success'
	        });
	        vm.editInfo.dialogShow = false;
        	_that.getAreaList(vm);
		}
		if(info.regionId) {
			areaAPI.editReginAPI(info,(result) => {
				_success("编辑成功");
			});
		} else {
			areaAPI.addRegionAPI(info,(result) => {
				_success("添加成功");
			})
		}
	},
	/*删除区域*/
	deleteAreaRow(vm, id) {
		var params = {regionId : id}, _that = this;
		areaAPI.deleteRegionAPI(params, (result) => {
			vm.$message({
	          message: "删除成功",
	          type: 'success'
	        });
			_that.getAreaList(vm);
		});
	},
	/*获取所有区域*/
	getAllAreaInfo(vm) {
		var params = {
			pageSize : 99999
		}
		areaAPI.queryRegionAPI(params,(result) => {
			vm.areaData = result.resultList;
		});
	}
}