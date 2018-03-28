/**
 * hgf 2017年12月20日
 * 商品分析
 */
import { goodsAnalyzeAPI } from "../../api/data"
export default {
	/*获取头部数据*/
	getGoodsAnalyzeHead(vm) {
		goodsAnalyzeAPI.goodsAnalyzeHeaderAPI((result) => {
			vm.goodsAnalyzeHeadData = result;
		});
	},
	/*获取商品销售数据*/
	getGoodsAnalyzeShop(vm,queryParams) {
		goodsAnalyzeAPI.goodsAnalyzeShopAPI(queryParams, (result) => {
			vm.goodsAnalyzeShopData = result;
		});
	},
	/*获取商品分类排行数据*/
	getGoodsAnalyzeClass(vm,queryParams) {
		goodsAnalyzeAPI.goodsAnalyzeClassAPI(queryParams, (result) => {
			vm.goodsAnalyzeClassData = result;
		});
	}
}