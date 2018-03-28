/**
 * author hgf
 * day    2017-11-8
 * 我的优惠券接口
 */
import { couponAPI } from "apiurl/user"
export default {
	/*获取优惠券列表*/
	getCouponList(vm) {
		if(vm.isSelect) {
			couponAPI.userUsableCouponAPI((result) => {
				console.log(result);
				var le = result.length;
				if(le > 0)
					while(le--) {
						if(result[le].coupon.preconditionAmount >vm.selectPrice) {
							result.splice(le, 1);
						}
					}
				var selectCoupon=localStorage.getItem("couponData");
				if(selectCoupon){
					selectCoupon=JSON.parse(selectCoupon);
					result.forEach((v,k)=>{
						v.coupon.isSelect=false;
						if(v.userCouponId==selectCoupon[0].couponId){
							v.coupon.isSelect=true;
						}
					});
				}
				vm.couponData = result;
			});
		} else {
			couponAPI.userCouponAPI((result) => {
				vm.couponData = result.resultList;
			});
		}
	},
	getOverCouponList(vm){
		couponAPI.userOverCouponAPI((result) => {
			vm.couponData = result.resultList;
		});
	}

}