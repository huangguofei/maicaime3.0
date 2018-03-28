/**
* author pzh 
* day    2017-9-14
* 商品分类业务
*/
import {categoryAPI} from "../../api/product"
export default{
	/*获取商品分类列表*/
	getCategoryList(vm){
		categoryAPI.treeCategoryAPI((result) => {
			vm.treeData = result;
			vm.copyTreeData=JSON.stringify(result);
		});
	},
	/*保存商品分类信息*/
	saveCategoryInfo(vm, info) {
		if(!info) {
			vm.$message("未找到分类信息！");
			return false;
		}
		var _that = this,
		_success = (mes) => {
			vm.$message({
	          message: mes,
	          type: 'success'
	        });
	        vm.editInfo.dialogShow = false;
			_that.getCategoryList(vm);
		}
		if(info.categoryId) {
			categoryAPI.editCategoryAPI(info,(result) => {
				_success("编辑成功");
			});
		} else {
			categoryAPI.addCategoryAPI(info,(result) => {
				_success("添加成功");
			})
		}
	},
	/*删除商品分类*/
	deleteCategoryRow(vm, id, callback) {
		var params = {categoryId : id};
		categoryAPI.deleteCategoryAPI(params, (result) => {
			vm.$message({
	          message: "删除成功",
	          type: 'success'
	        });
	        callback();
		});
	}
}