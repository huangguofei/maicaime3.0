<!-- 推荐食材 -->
<template>
 <div class="referrals-prod">
 	<ul>
 		<li class="p-item" v-for="p in prodList">
 			<div class="con">
 				<div class="p-img">
 					<img :src="p.skuImage + '?x-oss-process=style/cut-100'" />
 				</div>
 				<div class="info">
 					<p class="name">
	 					{{p.skuName}}
	 				</p>
	 				<p class="price">¥{{(p.price * 1).toFixed(2)}}</p>
	 				<!-- <span class="orgin-price" v-show="p.skuPrice > 0">¥{{(p.skuPrice * 1).toFixed(2)}}</span> -->
	 				
 				</div>
 				<add-cart :row="p" :num="p.skuQuantity" class="cart" @changeProdNum="changeProdNum"></add-cart>
 				<!-- <span class="cart-wrap">
					<i class="add c-i" @click="addCart(p)"></i> 
				</span> -->
 			</div>
 		</li>
 	</ul>
 </div>
</template>
<script>
	import commonAction from "actionurl/common/common"
	import addCart from "components/common/add-cart"
	export default{
		props : ["prodList"],
		components : {
			addCart
		},
		methods : {
			addCart(prod) {
				prod.skuQuantity ? prod.skuQuantity ++ : prod.skuQuantity = 1;
				var skuId = prod.productSkuId, _that = this;
				commonAction.addCartByProd(this, skuId, prod.skuQuantity, function(result) {
					cJs.message("添加成功");
					_that.$store.commit("modificationCartNum", result);
				});
			},
			changeProdNum(row, num) {
				row.skuQuantity = num;
			}
		}
	}
</script>
<style lang="less" scoped>
@import "../../common/less/config.less";
	.referrals-prod{
		.pxrem(margin-top,20);
		&:after{
			.clearFloat;
		}
		.p-item{
			width:33.2%;
			border:1px solid #e5e5e5;
			float:left;
			&:nth-child(1n){
				border-left:0;
			}
			&:nth-child(3n){
				border-right:0;
				margin-left:-1px;
			}
			&:nth-child(4),
			&:nth-child(5),
			&:nth-child(6){
				margin-top:-1px;
			}
			
			.con{
				position: relative;
				.prem(10);
				padding:@prem;
				.p-img{
					.pxrem(height, 160);
					.pxrem(margin-top, 20);
					text-align: center;
					img{
						max-height:100%;
						max-width: 100%;
						.pxrem(font-size, 27);
					}
				}
				.info{
					position: relative;
				}
				.name{
					white-space: nowrap;
					overflow: hidden;
				}
				.price{
					.pxrem(font-size, 27);
				}
				.or-price{
					.pxrem(font-size, 20);
				}
				.cart-wrap{
					position: absolute;
					z-index:1;
					.pxrem(right, 10);
					.pxrem(bottom, 10);
					display: inline-block;
					.pxrem(height, 49);
					.c-i{
						float:left;
						display: inline-block;
						.pxrem(width, 48);
						.pxrem(height, 47);
						border-radius: 50%;
						margin-top:0.5px;
					}
					.add{
						background: url(../../images/market_plus.png) no-repeat;
						background-size: cover;
					}
				}
				.cart-active{
					border:1px solid #EEEEEE;
					.pxrem(border-radius,80);
				}
			}
		}
	}
</style>