/**
* author pzh 
* day    2017-9-21
* 素材业务
*/
import { materialAPI } from "../../api/goods"
import publicAPI from "../../api/public"
export default {
	/*获取素材列表*/
	getMateialList(vm) {
		materialAPI.mateialListAPI(vm.pagings, (result) => {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*获取总部商品分类*/
	getAllProdCatrgory(vm) {
		publicAPI.categoryAPI((result) => {
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
	saveMaterialInfo(vm, info) {
		var _that = this,
		_success = (mes) => {
			vm.$message({
	          message: mes,
	          type: 'success'
	        });
			_that.getMateialList(vm);
			vm.editInfo.dialogShow = false;
		}
		if(info.prodTempplateId) {
			materialAPI.editMateialAPI(info,(result) => {
				_success("编辑成功");
			});
		} else {
			materialAPI.addMateialAPI(info,(result) => {
				_success("添加成功");
			})
		}
	},
	deleteRow(vm, id) {
		var params = {prodTempplateId : id}, _that = this;
		materialAPI.delMatealAPI(params, (result) => {
			vm.$message({
	          message: "删除成功",
	          type: 'success'
	        });
			_that.getMateialList(vm);
		});
	},
	/*下载*/
	downloadTemp(vm) {
		materialAPI.templateAPI((result)=> {
			window.location.href = result;
		});
	}
}