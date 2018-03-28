/**
* author pzh 
* day    2017-9-21
* 供应商业务
*/
import {supplierAPI, categoryAPI} from "../../api/customer"
export default{
	/*供应商详情*/
	getSupplierDefault(vm) {
		var params = {
			supplierId : vm.supplierId
		}
		supplierAPI.supplierDetailAPI(params, (result) => {
			vm.detailInfo = result;
		});
	},
	/*获取商品分类列表*/
	getCatergoryList(vm) {
		var params = {supplierId : vm.supplierId};
		var paging = vm.pagings;
		params.pageSize = paging.size;
		params.pageNum = paging.current;
		categoryAPI.categoryListAPI(params, (result) => {
			vm.tableData = result.resultList;
			paging.total = result.totalCount;
		});
	},
	/*获取总部商品分类*/
	getAllProdCatrgory(vm) {
		categoryAPI.supplierCategoryListAPI((result) => {
			var cateStr = JSON.stringify(result);
			cateStr = cateStr.replace(/,"subCategoryList":\[]/g,"");
			try{
				var ary = JSON.parse(cateStr);
				ary.map((item) => {
					if(!item.subCategoryList) {
						item.disabled = true;
					}
				});
				vm.allCategory = ary;
			}catch(e) {}
			
		});
	},
	/*保存分类*/
	saveCategoryInfo(vm, info) {
		var _that = this,
		_success = (mes) => {
			vm.$message({
	          message: mes,
	          type: 'success'
	        });
			_that.getCatergoryList(vm);
			vm.dialogVisible = false;
		}
		if(info.relationId) {
			categoryAPI.editCategoryAPI(info,(result) => {
				_success("编辑成功");
			});
		} else {
			categoryAPI.addCategoryAPI(info,(result) => {
				_success("添加成功");
			})
		}
	},
	deleteRow(vm, id) {
		var params = {relationId : id}, _that = this;
		categoryAPI.delCategoryAPI(params, (result) => {
			vm.$message({
	          message: "删除成功",
	          type: 'success'
	        });
			_that.getCatergoryList(vm);
		});
	},
}