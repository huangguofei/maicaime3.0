/**
 * hgf 2017年11月6日18:03:51
 */
import { integralAPI } from "../../api/marketing"
import { supplierAPI } from "../../api/customer"
export default {
	/*获取积分列表*/
	getIntegralList(vm) {
		var paging = vm.pagings;
		integralAPI.integralListAPI(paging, (result) => {
			if(result == "206") { //是否是首次开通
				vm.open();
				return;
			}
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*新增积分*/
	integralAdd(vm) {
		integralAPI.integralAddAPI(vm.form, (result) => {
			vm.$message({
				message: '添加成功！',
				type: 'success'
			});
			vm.updata();
			vm.editDialogInfo.showDialog = false;
		});
	},
	/*开通积分商城*/
	openIntegral(vm) {
		integralAPI.integralOpenAPI((result) => {
			vm.$message({
				message: '恭喜你，成功开通积分商城',
				type: 'success'
			});
			this.getIntegralList(vm);
		});
	},
	/*获取供应商列表*/
	getSupplierList(vm) {
		var paging = vm.pagings1;
		var params = {};
		params.pageNum = paging.current;
		params.pageSize = paging.size;
		supplierAPI.supplierListAPI(params, (result) => {
			vm.supplierData = result.resultList;
			paging.total = result.totalCount;
		});
	},
	/*获取供应商下面的商品*/
	getProductList(vm) {
		var paging = vm.pagings2;
		var params = {};
		params.pageNum = paging.current;
		params.pageSize = paging.size;
		params.supplierId = vm.form.supplierId;
		integralAPI.getSupplierProductAPI(params, (result) => {
			vm.productData = result;
			paging.total = result.totalCount;
		});
	}
}