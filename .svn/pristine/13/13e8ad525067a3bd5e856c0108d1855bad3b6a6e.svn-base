/**
 * hgf 2017年12月8日
 * 提现申请
 */
import { depositApplyAPI } from "../../api/data"
export default {
	/*获取提现列表*/
	getDepositApplyAPIList(vm) {
		var str = JSON.stringify(vm.queryParams);
		var params = JSON.parse(str);
		for(var i in params) {
			if(!params[i])
				delete params[i];
		}
		depositApplyAPI.depositApplyListAPI(params, (result) => {
			vm.tableDatas = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*审批*/
	depositApplyChange(vm,data) {
		depositApplyAPI.depositApplyChangeAPI(data, (result) => {
			if(result) {
				vm.$message({
					message: '操作成功！',
					type: 'success'
				});
				this.getDepositApplyAPIList(vm);
			}
		});
	},
	/*财务备注*/
	depositApplyRemark(vm,data) {
		depositApplyAPI.depositApplyRemarkAPI(data, (result) => {
			if(result) {
				vm.$message({
					message: '操作成功！',
					type: 'success'
				});
				this.getDepositApplyAPIList(vm);
			}
		});
	},/*财务备注*/
	depositApplyDetails(vm) {
		depositApplyAPI.depositApplyDetailsAPI({withdrawRecordId:vm.withdrawRecordId}, (result) => {
			vm.depositData=result;
		});
	}
}