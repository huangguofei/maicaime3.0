/**
 * author pzh 
 * day    2017-9-27
 * 分类业务接口
 */
import {promptAPI} from "apiurl/index"
export default{
	/*获取限时产品分类*/
	getCategoryList(vm) {
		var refId = vm.$route.params.refId, _that = this;
		if(!refId) {
			cJs.message("未找到活动商品分类！");
			return false;
		}
		var params = {
			monthlySpecialId : refId
		}
		promptAPI.categoryListAPI(params, (result) => {
			vm.categoryData = result;
			var first = result[0];
			if(first) {
				vm.option.categoryId = first.categoryId;
				_that.getProdList(vm);
			}
		});
	},
	/*获取产品*/
	getProdList(vm,callback) {
		var option = vm.option;
		promptAPI.propListAPI(option, (result) => {
			vm.prodData = vm.prodData.concat(result.resultList);
			option.total = result.totalCount;
			var len = result.resultList.length;
			if(len > 0) {
				option.pageNum = result.currentPage + 1;
			}
			callback ? callback(len) : vm.calculateViewHeight();
		});
	},
	/*获取活动详情*/
	getDetailInfo(vm) {
		var refId = vm.$route.params.refId;
		var params = {
			monthlySpecialId : refId
		}
		promptAPI.promptDetailInfoAPI(params, (result) => {
			vm.detailInfo = result;
			vm.loading = false;
			var state = true;
			if(result.statusId == 1) {
				vm.activityStart = result.marketingStatusId;
				if(result.marketingStatusId == 0) {
					vm.message = "距离开放时间";
					vm.countdown = result.marketingTime;
				} else if(result.marketingStatusId == 1) {
					if(result.marketingTime == -1) {
						vm.message = "距离时间";
						vm.dayStr = "活动正在进行中";
						vm.activityStart = 1;
						state = false;
					} else {
						vm.message = "距离结束时间"
						vm.countdown = result.marketingTime;
					}
				} else {
					vm.message = "活动已结束"
					vm.dayStr = vm.message;
					vm.activityStart = 0;
					state = false;
				}
			} else {
				vm.message = "活动已结束"
				vm.dayStr = vm.message;
				vm.activityStart = 0;
				state = false;
			}
			if(state) {
				vm.activityDownTime();
				clearInterval(this.clearTime);
				this.clearTime = window.setInterval(function() {
					vm.activityDownTime();
				}, 1000);
			}
			
		},(error) => {
			vm.loading = false;
		});
	}
}