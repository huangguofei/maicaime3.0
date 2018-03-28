/**
* author pzh 
* day    2017-10-16
* 驿站业务
*/
import {stageAPI, distributionAPI, circleAPI} from "../../api/customer"
export default{
	/*获取驿站列表*/
	getStageList(vm) {
		var paging = vm.pagings;
		stageAPI.stageListAPI(paging, (result) => {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*保存*/
	saveStageInfo(vm, info) {
		if(!info) {
			vm.$message("未找到配送商信息！");
			return false;
		}
		var _that = this,
		_success = (mes) => {
			vm.$message({
	          message: mes,
	          type: 'success'
	        });
	        vm.editInfo.dialogShow = false;
        	_that.getStageList(vm);
		}
		if(info.stationId) {
			stageAPI.editStageAPI(info,(result) => {
				_success("编辑成功");
			});
		} else {
			stageAPI.addStageAPI(info,(result) => {
				_success("添加成功");
			})
		}
	},
	deleteRow(vm, id) {
		var params = {stationId : id}, _that = this;
		stageAPI.delStageAPI(params, (result) => {
			vm.$message({
	          message: "删除成功",
	          type: 'success'
	        });
			_that.getStageList(vm);
		});
	},
	updateRowStatus(vm, row) {
		var stationId = row.stationId,
			statusId = row.statusId,
			params = {
				stationId : stationId
			};
		if(statusId == 1) {
			stageAPI.forbiddenStageAPI(params, (result) => {
				vm.$message("操作成功！");
				row.statusId = 0;
			});
		} else if(statusId == 0) {
			stageAPI.activeStageAPI(params, (result) => {
				vm.$message("操作成功！");
				row.statusId = 1;
			});
		}
	}
}