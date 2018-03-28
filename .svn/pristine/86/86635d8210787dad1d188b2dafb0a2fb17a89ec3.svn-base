/**
 * author pzh
 * day    2017-9-27
 * 购物车业务
 */
 import {cartAPI} from "apiurl/often"
 export default{
 		/*获取购物车列表*/
 		getCartList(vm, callback) {
 			var _that = this;
 			cartAPI.cartListAPI((result) => {
 				vm.cartData = result;
 				_that.getCartProdPrice(vm);
 				callback ? callback() : null;
 			});
 		},
 		/*商品数量更新*/
 		cartProdNumUptate(prod) {
 			if(!prod) {
 				cJs.message("数量修改异常");
 			}
 			var params = {
 				cartId : prod.cartId,
 				num : prod.skuQuantity
 			};
 			cartAPI.updateCartNumAPI(params, (result) => {});
 		},
 		/*获取购物车商品价格*/
 		getCartProdPrice(vm) {
 			cartAPI.cartProdPriceAPI((result) => {
 				vm.prodsPrice = result;
 			});
 		}
 		
 }
