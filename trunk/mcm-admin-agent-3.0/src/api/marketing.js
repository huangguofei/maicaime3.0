/**
 * hgf 2017年11月1日09:29:22
 */
import https from "../axios/https"
/*优惠活动*/
export const activityAPI = {
	/*获取活动列表*/
	activityListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/special_offer/list", v)),
	
}
/*优惠券*/
export const ticketAPI = {
	/*获取活动列表*/
	ticketListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/coupon/list", v)),
} 
/*热门搜索*/
export const searchAPI = {
	/*获取搜索列表*/
	searchListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/keyword/list", v)),
	/*新增搜索*/
	searchNewAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/keyword/add", v)),
	/*编辑搜索*/
	searchEditAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/keyword/edit", v)),
	/*删除搜索*/
	searchDeleteAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/keyword/del", v)),
}
/*积分商城*/
export const integralAPI = {
	/*获取积分列表*/
	integralListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/integral/getIntegralMallProdList", v)),
	/*新增积分*/
	integralAddAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/integral/addProd2IntegralMall", v)),
	/*编辑积分*/
	integralEditAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/keyword/edit", v)),
	/*删除积分*/
	integralDeleteAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/keyword/del", v)),
	/*开通积分商城*/
	integralOpenAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/integral/openIntegralMall", v)),
	/*供应商下面的商品*/
	getSupplierProductAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/getProductBySupplierId", v)),
}

/*特色专区*/
export const featureAPI = {
	/*特色专区发起限时特价/新品上市类活动*/
	mothlySpecialAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/feature_area/addMothlySpecial", v)),
	/*列表*/
	featureAreaListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/feature_area/getFeatureAreaList", v)),
	/*活动上下架*/
	featureStatusEditAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/feature_area/ms/changeStatus", v)),
	/*获取活动详情*/
	detailAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/feature_area/ms/details", v)),
}

/*主页管理*/
export const homeAPI = {
	/*添加广告*/
	addAdvertisingAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/home/addAd", v)),
	/*广告列表*/
	adListAPI :  (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/home/adList", v)),
	/*添加商品快捷导航*/
	addCategoryNarAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/home/addCategory", v)),
	/*商品快捷导航列表*/
	categoryNarListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/home/categoryList", v)),
	/*获取特色专区列表*/
	featureAreaList : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/feature_area/list", v)),
	/*添加特色专区*/
	addFeatureAreaAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/home/addFeatureArea", v)),
	/*获取已设置的专区*/
	setFeatureInfoAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/home/featureAreaList", v)),
	
}