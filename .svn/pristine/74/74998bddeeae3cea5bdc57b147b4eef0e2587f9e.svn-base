/**
* author pzh 
* day    2017-10-16
* 商圈业务
*/
import {circleAPI,stageAPI, distributionAPI, supplierAPI} from "../../api/customer"
export default{
	/*获取驿站列表*/
	getCircleList(vm) {
		var paging = vm.pagings;
		circleAPI.circleListAPI(paging, (result) => {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*获取驿站*/
	getStageAll(vm) {
		circleAPI.allStationAPI((result) => {
			vm.stageList = result;
		});
	},
	/*获取配送商*/
	getDistrAll(vm) {
		circleAPI.allDeliveryAPI((result) => {
			vm.distrList = result;
		});
	},
	/*保存*/
	saveCircleInfo(vm, info) {
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
        	_that.getCircleList(vm);
		}
		if(info.stationCircleId) {
			circleAPI.editCircleAPI(info,(result) => {
				_success("编辑成功");
			});
		} else {
			circleAPI.addCircleAPI(info,(result) => {
				_success("添加成功");
			})
		}
	},
	deleteRow(vm, id) {
		var params = {stationCircleId : id}, _that = this;
		circleAPI.delCircleAPI(params, (result) => {
			vm.$message({
	          message: "删除成功",
	          type: 'success'
	        });
			_that.getStageList(vm);
		});
	},
	updateRowStatus(vm, row) {
		var stationCircleId = row.stationCircleId,
			statusId = row.statusId,
			params = {
				stationCircleId : stationCircleId
			};
		if(statusId == 1) {
			circleAPI.forbiddenCircleAPI(params, (result) => {
				vm.$message("操作成功！");
				row.statusId = 0;
			});
		} else if(statusId == 0) {
			circleAPI.activeCircleAPI(params, (result) => {
				vm.$message("操作成功！");
				row.statusId = 1;
			});
		}
	},
	/*获取详情信息*/
	getCirCleDetail(vm) {
		var id = vm.$route.params.id;
		if(id) {
			var params = {
				stationCircleId : id
			}
			circleAPI.circleDetailAPI(params,(result)=>{
				vm.detailInfo = result;
				vm.tableData = result.supplierBOList;
				console.log(JSON.stringify(vm.tableData));
			});
		}
	},
	/*获取所有供应商*/
	getAllSupplierInfo(vm, stationCircleId, callback) {
		var params = {};
		params.stationCircleId = stationCircleId;
		circleAPI.allSupplierAPI(params, (result) => {
			result.forEach((v,k)=>{
				v.isSelect=false;
			});
			vm.supplierData = result;
			callback ? callback() : null;
		});
	},
	/*绑定供应商*/
	bindSupplerInfo(vm,supplierIds) {
		var stationCircleId = vm.selectRowInfo.stationCircleId,
			_that = this;
		var params = {
			stationCircleId : stationCircleId,
			suppliers : supplierIds
		}
		circleAPI.circleAddSupplierAPI(params,(result)=>{
			vm.$message("操作成功！");
			_that.getCircleList(vm);
			vm.supplierDialog.dialogShow = false;
		});
	}
}