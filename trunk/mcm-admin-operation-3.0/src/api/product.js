/**
* author pzh 
* day    2017-9-14
* 商品模块接口
*/
import https from "../axios/https"
/*商品分类接口*/
export const categoryAPI = {
	/*获取商品分类列表*/
	categoryListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/list", v)),
	/*添加商品分类*/
	addCategoryAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/add", v)),
	/*所有一级分类*/
	allParentCategoryAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/selectAllParentCategory", v)),
	/*根据一级分类的id查询出其所属的所有二级分类*/
	selectSubCategoryAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/selectSubCategory", v)),
	/*删除商品分类*/
	deleteCategoryAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/deleteById", v)),
	/*编辑商品分类*/
	editCategoryAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/edit", v)),
	/*树状商品分类*/
	treeCategoryAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/category/hierarchyList", v)),
}

/*商品素材*/
export const materialAPI = {
	/*添加*/
	addMateialAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/add", v)),
	/*编辑*/
	editMateialAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/edit", v)),
	/*列表*/
	mateialListAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/list", v)),
	/*删除*/
	delMatealAPI : (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/product/delete", v)),
}