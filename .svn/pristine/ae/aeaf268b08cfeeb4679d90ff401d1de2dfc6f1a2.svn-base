/**
 * author pzh 
 * day    2017-12-27
 * 设置注册限制数业务
 */
import {registerLimit} from "apiurl/setting"
export default{
	/*获取通用详情*/
	getDetailInfo(vm) {
		registerLimit.commDetailAPI((result) => {
			vm.form = result;
		});
	},
	/*保存通用*/
	saveCommNum(vm) {
		var form = vm.form;
		registerLimit.saveCommAPI(form, (result) => {
			vm.$message("保存成功!");
		});
	},
	/*获取单个手机列表*/
	getLimitByMobileList(vm) {
		var params = vm.pagings;
		registerLimit.mobileNumListAPI(params,(result)=> {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*保存单个手机限制信息*/
	saveMobileLimitInfo(vm) {
		var form = vm.form, _that = this;
		if(form.id) {
			registerLimit.editMobileNumAPI(form, (result) => {
				vm.$message("编辑成功！");
				vm.dialogShow = false;
				_that.getLimitByMobileList(vm);
			});
		} else {
			registerLimit.addMobileNumAPI(form, (result) => {
				vm.$message("添加成功！");
				vm.dialogShow = false;
				_that.getLimitByMobileList(vm);
			});
		}
	},
	/*删除*/
	delLimitRow(vm, id) {
		var params = {
			id : id
		}, _that = this;
		registerLimit.delMobileNumAPI(params, (result)=>{
			vm.$message("删除成功！");
			_that.getLimitByMobileList(vm);
		});
	}
}