/**
 * author pzh 
 * day    2017-9-27
 * 市场业务接口
 */
import {oftenAPI} from "apiurl/often"
import publicAPI from "apiurl/public"
export default{
	/*获取分类*/
	getCategoryList(vm) {
		var _that = this;
		oftenAPI.stairCategoryAPI((result) => {
			vm.categoryData = result;
			if(result.length > 0) {
				_that.getProdListByCategory(vm, result[0].categoryId);
			} else {
				vm.load = false;
			}
		});
	},
	/*根据一级分类查询商品*/
	getProdListByCategory(vm, categoryId) {
		var params = {
			categoryId : categoryId
		}
		oftenAPI.categoryProdAPI(params, (result) => {
			var len = result.length;
			vm.load = false;
			if(len > 0) {
				for(var i = 0;i < len; i++) {
					result[i].categoryBO.check = false;
					var prods = result[i].collectProductItemBOList;
					var plen = prods.length;
					for(var n = 0;n < plen; n++) {
						prods[n].check = false;
					}
				}
				vm.categoryProd = [];
				setTimeout(() => {
					vm.categoryProd = result;
				},1);
				
			}
		}, (error) => {
			vm.load = false;
		});
	},
	/*移除清单商品*/
	delOftenProds(vm, skuIds) {
		var params = {
			productSkuId : skuIds
		}
		publicAPI.deleteOftenProdAPI(params, (result) => {
			cJs.message("删除成功！");
			var data = vm.categoryProd;
			var len = data.length;
			for(var i = 0;i < len; i++) {
				if(data[i].categoryBO.check) {
					data.splice(i, 1);
					i --;
					len --;
				} else {
					var prods = data[i].collectProductItemBOList;
					var plen = prods.length;
					for(var n = 0;n < plen; n++) {
						if(prods[n].check) {
							prods.splice(n, 1);
							n--;
							plen --;
						}
					}
				}
			}
		});
	}
}