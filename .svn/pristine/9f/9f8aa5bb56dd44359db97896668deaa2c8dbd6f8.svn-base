/**
 * hgf 2017年11月3日16:21:34
 */
import { activityGoodsAPI, goodsAPI, goodsGeneralInfoAPI } from "../../api/goods"
export default {
	/*获取活动商品列表*/
	getActivityGoods(vm) {
		activityGoodsAPI.getActivityGoodsAPI(vm.pagings, (result) => {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*审核活动食材*/
	auditActivityGoods(vm, data) {
		activityGoodsAPI.auditActivityGoodsAPI(data, (result) => {
			vm.$message({
				message: '审核成功',
				type: 'success'
			});
			this.getActivityGoods(vm);
		});
	},
	/*获取商品分类*/
	getGoodsClass(vm) {
		goodsAPI.getGoodsClassAPI((result) => {
			dataClear(result);
			vm.classData = result;
			vm.copyClassData=JSON.stringify(result);
			vm.isDisabled = false;
		});

		function dataClear(data) {
			if(data.length != 0) {
				data.forEach((v, k) => {
					if(v.subCategoryList.length > 0) {
						dataClear(v.subCategoryList);
					} else {
						delete v.subCategoryList;
					}
				});
			}
		}
	},
	/*获取商品列表*/
	getGoodsList(vm) {
		for(var i in vm.queryParams) {
			if(!vm.queryParams[i])
				delete vm.queryParams[i];
		}
		goodsAPI.getGoodsListAPI(vm.queryParams, (result) => {
			vm.tableData = result.resultList;
			vm.totalCount = result.totalCount;
		});
	},
	/*获取商品详情*/
	getGoodsDetails(vm) {
		goodsAPI.getGoodsDetailsAPI({
			productSkuId: vm.productSkuId
		}, (result) => {
			vm.goodsData = result;
		});
	},
	/*获取商品详情*/
	chengeGoodsStatus(vm, data, statusTxt) {
		var _that = this;
		goodsAPI.changeGoodsStatusAPI(data, (result) => {
			if(result) {
				vm.$message({
					type: 'success',
					message: statusTxt + '成功!'
				});
				_that.getGoodsList(vm);
			} else {
				this.$message.error(statusTxt + '失败！');
			}
		});
	},
	/*商品概况*/
	getGoodsGeneralInfo(vm) {
		goodsGeneralInfoAPI.getGoodsGeneralInfoAPI((result) => {
			vm.goodsData = result;
			if(result.categoryRankList.length == 0)
				return false;
			result.categoryRankList.forEach((v, k) => {
				vm.pieData.push({name:v.categoryName,value:v.num});
			});
			vm.initChart();
		});
	}
}