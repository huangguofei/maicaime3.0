/**
* author pzh 
* day    2017-10-16
* 配送商业务
*/
import {distributionAPI} from "../../api/customer"
export default{
	/*获取配送商列表*/
	getDistrList(vm) {
		var paging = vm.pagings;
		distributionAPI.distrListAPI(paging, (result) => {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*保存*/
	saveDistrInfo(vm, info) {
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
	        vm.$refs.distrInfo.dialogShow = false;
        	_that.getDistrList(vm);
		}
		if(info.deliveryDealerId) {
			distributionAPI.editDistrAPI(info,(result) => {
				_success("编辑成功");
			});
		} else {
			distributionAPI.addDistrAPI(info,(result) => {
				_success("添加成功");
			})
		}
	},
	deleteRow(vm, id) {
		var params = {deliveryDealerId : id}, _that = this;
		distributionAPI.delDistrAPI(params, (result) => {
			vm.$message({
	          message: "删除成功",
	          type: 'success'
	        });
			_that.getDistrList(vm);
		});
	},
	updateRowStatus(vm, row) {
		var deliveryDealerId = row.deliveryDealerId,
			statusId = row.statusId,
			params = {
				deliveryDealerId : deliveryDealerId
			};
		if(statusId == 1) {
			distributionAPI.forbiddenDistrAPI(params, (result) => {
				vm.$message("操作成功！");
				row.statusId = 0;
			});
		} else if(statusId == 0) {
			distributionAPI.activeDistrAPI(params, (result) => {
				vm.$message("操作成功！");
				row.statusId = 1;
			});
		}
	}
}