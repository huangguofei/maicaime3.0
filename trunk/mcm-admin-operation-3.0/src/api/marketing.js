/**
* author pzh 
* day    2017-10-31
* 营销模块接口
*/
import https from "../axios/https"

/*优惠券*/
export const couponAPI = {
	/*发行新的券*/
	launchCouponAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/coupon/launchCoupon", v)),
	/*获取所有的券列表*/
	allCouponListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/coupon/list", v)),
}

/*优惠活动*/
export const activityAPI = {
	/*发起优惠活动*/
	launchSpecialOfferAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/special_offer/launchSpecialOffer", v)),
	/*获取优惠活动列表*/
	allActivityListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/special_offer/list", v)),
	/*获取有效的券*/
	validCouponListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/coupon/listValidCoupon", v)),
	/*上下架活动*/
	activityChangeStatusAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/special_offer/changeStatus", v)),

}

/*主页管理*/
export const homeAPI = {
	/*保存广告*/
	saveAdAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/ad/addAd", v)),
	/*广告列表*/
	adListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/ad/detail", v)),
}
/*积分*/
export const integralAPI={
	/*积分列表*/
	integralListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/integral/getHasOpenedIntegralMallList", v)),
}

