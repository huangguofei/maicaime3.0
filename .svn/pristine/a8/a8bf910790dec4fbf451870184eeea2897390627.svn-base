/**
 * author pzh 
 * day    2017-9-27
 * 分类业务接口
 */
import {categoryAPI} from "apiurl/index"
export default{
	/*获取二级分类*/
	getSubCateById(vm) {
		var id = vm.$route.params.id, _that = this;
		if(!id) {
			cJs.message("未找到食材分类！");
			return false;
		}
		var params = {
			parentCategoryId : id
		}
		categoryAPI.prodListAPI(params,(result) => {
			vm.categoryData = result;
			var first = result[0];
			if(first) {
				vm.option.subCategoryId = first.categoryId;
				_that.getProdsById(vm);
			}
		});
	},
	/*根据分类Id取商品*/
	getProdsById(vm, callback) {
		var option = vm.option;
		categoryAPI.prodsByCategoryIdAPI(option,(result) => {
			vm.prodData = vm.prodData.concat(result.resultList);
			option.total = result.totalCount;
			var len = result.resultList.length;
			if(len > 0) {
				option.pageNum = result.currentPage + 1;
			}
			callback ? callback(len) : "";
		})
	}
}