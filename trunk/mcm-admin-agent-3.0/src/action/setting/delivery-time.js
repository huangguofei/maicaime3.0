/**
* author pzh 
* day    2017-10-13
* 配送时间业务
*/
import {deliveryTimeAPI} from "../../api/setting"
export default{
	/*配送时间列表*/
	getDelTimeList(vm) {
		deliveryTimeAPI.queryDeliveryTimeAPI((result) => {
			vm.tableData = result;
		});
	},
	/*保存配送时间*/
	saveDelTimeInfo(vm, info) {
		var params = info;
		var _that = this,
		_success = (mes) => {
			vm.$message({
	          message: mes,
	          type: 'success'
	        });
	        vm.editInfo.dialogShow = false;
        	_that.getDelTimeList(vm);
		}
		if(params.id) {
			deliveryTimeAPI.editDelTimeInfoAPI(info,(result) => {
				_success("编辑成功");
			});
		} else {
			deliveryTimeAPI.addDelTimeAPI(info,(result) => {
				_success("添加成功");
			});
		}
	},
	/*删除*/
	deleteDelTimeRow(vm, id) {
		var params = {
			id : id
		}, _that = this;
		deliveryTimeAPI.delleteDelTimeAPI(params,(result) => {
			vm.$message({
	          message: "删除成功",
	          type: 'success'
	        });
        	_that.getDelTimeList(vm);
		});
	},
	/*禁用启用*/
	updateStatus(vm, row) {
		var	statusId = row.status,
			params = {
				id : row.id
			};
		if(statusId == 1) {
			deliveryTimeAPI.forbiddenDelTimeAPI(params, (result) => {
				vm.$message("操作成功！");
				row.status = 0;
			});
		} else if(statusId == 0) {
			deliveryTimeAPI.activeDelTimeAPI(params, (result) => {
				vm.$message("操作成功！");
				row.status = 1;
			});
		}
	}
}