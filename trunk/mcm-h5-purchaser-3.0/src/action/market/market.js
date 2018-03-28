/**
 * author pzh 
 * day    2017-9-27
 * 市场业务接口
 */
import {marketAPI} from "apiurl/market"
import publicAPI from "apiurl/public"
 export default{
 		/*获取购市场分类*/
 		getCategoryList(vm) {
 			var _that = this;
 			var info = localStorage["market-category-info"];
 			if(info) {
 				try{
	 				vm.categoryData = JSON.parse(info);
	 			}catch(e){} 
 			}
 			publicAPI.hierarchyListAPI((result) => {
 				vm.categoryData = result;
 				localStorage["market-category-info"] = JSON.stringify(result);
 				if(result[0]) {
 					var categoryId = result[0].categoryId;
 					vm.option.categoryId = categoryId
 					/*var params = {
 						categoryId : categoryId
 					}*/
 					_that.getProdList(vm);
 				}
 				
 			});
 		},
 		/*获取市场分类商品*/
 		getProdList(vm, callback) {
 			var option = vm.option;
 			marketAPI.prodListAPI(option, (result) => {
 				vm.load = false;
 				vm.prodData = vm.prodData.concat(result.resultList);
 				option.total = result.totalCount;
				var len = result.resultList.length;
				if(len > 0) {
					option.pageNum = result.currentPage + 1;
				}
				callback ? callback(len) : "";
 			},(error) => {
 				vm.load = false;
 			});
 		},
 }
