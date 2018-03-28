/**
 * hgf 2017年12月8日
 * 数据模块
 */
import https from "../axios/https"
/*对账信息*/
export const checkAPI = {
	/*获取对账列表*/
	checkListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/trade/generalList", v)),
	/*采购商充值统计数据*/
	rechargeStatisticsAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/trade/rechargeStats", v)),

}
/*提现申请*/
export const depositApplyAPI = {
	/*获取提现申请列表*/
	depositApplyListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/withdraw/list", v)),

}

/*账单列表*/
export const billAPI = {
	/*账单列表*/
	billListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/bill/list", v)),
	/*详情*/
	billDetailAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/bill/recordList", v)),
	/*账单头部信息*/
	billHeadAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/bill/info", v)),
}
/*商品分析*/
export const goodsAnalyzeAPI = {
	/*头部信息*/
	goodsAnalyzeHeaderAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/agent-product-analysis-top", v)),
	/*商品销售排行信息*/
	goodsAnalyzeShopAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/agent-product-analysis-prod-rank", v)),
	/*商品分类排行信息*/
	goodsAnalyzeClassAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/agent-product-analysis-category-rank", v)),
}