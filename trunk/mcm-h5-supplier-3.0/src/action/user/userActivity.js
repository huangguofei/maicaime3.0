/**
 * author hgf 
 * day    2017-11-02
 * 个人中心活动模块接口
 */
import { activitiesAPI } from "apiurl/user"
export default {
	/*获取活动列表*/
	getActivityKindList(vm) {
		activitiesAPI.getActivitiesKindListAPI((result) => {
			vm.activityList = result;
		});
	},
	/*获取活动详情*/
	getActivityDeails(vm) {
		activitiesAPI.getActivitiesDetailsAPI({
			monthlySpecialId: vm.activityId
		}, (result) => {
			vm.activityData = result;
		});
	},
	/*添加食材(暂未加库存)*/
	postActivityFood(vm) {
		var params = {
			monthlySpecialId: vm.activityId,
			productSkuId: vm.foodData.productSkuId,
			promotionPrice: vm.price,
			minPurchaseQuantity: 0,
		};
		if(vm.ruleShow) {
			params.limitedRules = JSON.stringify(vm.limitedRules);
		} else {
			delete params.limitedRules;
		}
		activitiesAPI.joinActivityAPI(params, (result) => {
			vm.$router.push({
				path: "/activitiesAdd/",
				query: {
					id: vm.activityId
				}
			})
		});
	},
	/*下架产品*/
	removeShop(vm,data) {
		activitiesAPI.removeShopAPI(data,(result) => {
			if(result){
				cJs.message((data.status==1?"上架":"下架")+"成功");
				this.getActivityDeails(vm);
			}
		});
	}
}