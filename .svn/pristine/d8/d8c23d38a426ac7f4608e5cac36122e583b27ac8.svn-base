/**
* author pzh 
* day    2017-11-1
* 主页 业务接口
*/
import {homeAPI} from "../../api/marketing"
import publicAPI from "../../api/public"
export default{
	/*保存头部广告*/
	saveAdInfo(vm, info) {
		var _that = this;
		homeAPI.addAdvertisingAPI(info,(result) => {
			_that._success(vm,"添加成功");
		})
	},
	/*获取头部广告*/
	getHeadAdList(callback) {
		homeAPI.adListAPI((result) => {
			callback(result);
		})
	},
	/*获取商品一级分类*/
	getCategoryLevel(vm) {
		var params = {
			level : 1
		}
		publicAPI.categoryAPI(params, (result)=>{
			result.map((item)=>{
				item.check = false;
				vm.narsData.map((nar)=>{
					if(item.categoryId == nar.categoryId) {
						item.check = true;
					}
				})
			});
			vm.categoryList = result;
		});
	},
	/*获取已设置分类*/
	getCategoryNar(callback) {
		homeAPI.categoryNarListAPI((result) => {
			callback(result);
		})
	},
	/*保存导航*/
	saveCategoryNar(vm, info) {
		var _that = this;
		homeAPI.addCategoryNarAPI(info,(result) => {
			_that._success(vm,"添加成功");
		})
	},
	/*获取特色专区*/
	getFeatureList(vm) {
		homeAPI.featureAreaList((result) => {
			vm.featureList = result;
		});
	},
	/*保存特色专区*/
	saveFeatureInfo(vm, info) {
		var _that = this;
		homeAPI.addFeatureAreaAPI(info,(result) => {
			_that._success(vm,"添加成功");
		})
	},
	/*获取专区信息*/
	getFeatureInfo(callback) {
		homeAPI.setFeatureInfoAPI((result) => {
			callback(result);
		})
	},
	/*获取所有分类*/
	getCategoryAllList(vm) {
		publicAPI.categoryAPI((result)=>{
			var jsonStr = JSON.stringify(result);
			jsonStr = jsonStr.replace(/,"subCategoryList":\[]/g,"");
			vm.categoryList = JSON.parse(jsonStr);
		});
	},
	/*获取商品*/
	getProdByCategoryId(vm, subCategoryId) {
		var params = {
			subCategoryId : subCategoryId
		}
		publicAPI.prodsByCategoryIdAPI(params, (result) => {
			vm.prodTable = result;
		})
	},
	_success(vm, mes) {
		vm.$message({
          message: mes,
          type: 'success'
        });
	}
}