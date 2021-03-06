/**
 * hgf 2017年11月3日16:19:16
 */
import https from "../axios/https"
/*活动商品*/
export const activityGoodsAPI = {
	/*获取活动商品列表*/
	getActivityGoodsAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/feature_area/ms/applyList", v)),
	/*审核活动食材*/
	auditActivityGoodsAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/feature_area/ms/auditProd", v)),
}
/*商品素材*/
export const materialAPI = {
	/*添加*/
	addMateialAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product_template/add", v)),
	/*编辑*/
	editMateialAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product_template/edit", v)),
	/*列表*/
	mateialListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product_template/list", v)),
	/*删除*/
	delMatealAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product_template/delete", v)),
	/*模板*/
	templateAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product_template/productTemplateExcelDownLoad", v)),
	/*导入*/
	uploadTempAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product_template/upLoadProductTemplateExcel", v)),
}
/*食材商品*/
export const goodsAPI = {
	/*获取商品分类*/
	getGoodsClassAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/getCategorys", v)),
	/*获取商品列表*/
	getGoodsListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/agent-product", v)),
	/*获取商品详情*/
	getGoodsDetailsAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/agent-product-detail", v)),
	/*修改商品状态*/
	changeGoodsStatusAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/agent-product-upper-lower-del", v)),
}
/*商品概况*/
export const goodsGeneralInfoAPI = {
	/*获取商品概况*/
	getGoodsGeneralInfoAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/agent-product-summary", v)),
}