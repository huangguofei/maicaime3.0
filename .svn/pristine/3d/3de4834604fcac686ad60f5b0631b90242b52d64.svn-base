/**
 * author pzh
 * day    2017-9-29
 * 食材模块接口
 */
 import https from "httpurl/https"
 export const foodAPI = {
 	/*分类*/
	categoryAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/catogory/supplierCategory", v)),
	/*分类商品*/
	categoryProdAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/list", v)),
	/*添加食材*/
	addProductAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/add", v)),
	/*食材报价*/
	offerProductAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/offer", v)),
	/*商品素材搜索*/
	suggestAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/search/product-template", v)),
	/*商品上下架删除*/
	prodStatusAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/upper-lower-del", v)),
	/*单个商品*/
	prodByIdAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/get-prod-by-id", v)),
	/*编辑*/
	editorProdAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/edit-prod", v)),
 }