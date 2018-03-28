/**
* author pzh 
* day    2017-10-31
* 券业务
*/
import {couponAPI} from "apiurl/marketing"
export default{
	/*保存券信息*/
	saveCouponInfo(vm, info) {
		var _that = this,
		_success = (mes) => {
			vm.$message({
	          message: mes,
	          type: 'success'
	        });
			vm.$router.push({
				name : "marketing.coupon.index"
			});
		}
		if(info.id) {
			/*couponAPI.launchCouponAPI(info,(result) => {
				_success("编辑成功");
			});*/
		} else {
			let params = JSON.stringify(info);
			params = JSON.parse(params);
			if(params.startDate == "") {
				delete params.startDate;
				delete params.endDate;
			}
			if(params.startTime == "") {
				delete params.startTime;
				delete params.endTime;
			}
			couponAPI.launchCouponAPI(params,(result) => {
				_success("添加成功");
			})
		}
	},
	/*获取所有券*/
	getCouponList(vm) {
		var paging = vm.pagings;
		couponAPI.allCouponListAPI(paging,(result) => {
			vm.couponList = result.resultList;
			vm.totalCount = result.totalCount;
		})
	}
	
}