<!-- 订单商品 -->
<template>
	<div class="orders-prod">
		<section class="order-item" v-for="s in supplierProd">
			<header>
				<div class="con">
					<span class="s-name">{{s.supplierName}}</span>
					<a :href="'tel:'+s.supplierMobile" class="tel"></a>
				</div>
			</header>
			<div class="content">
				<div class="con-wrap">
					<ul>
						<li class="prod-item" v-for="l in s.list">
							<p class="p-img">
								<span class="num">{{l.skuQuantity}}</span>
								<img :src="l.skuImage + '?x-oss-process=style/cut-100'" @click="previewImgEvent(l.skuImage)" />
							</p>
							<p class="price" v-if="$route.params.productId">¥{{(l.extraPrice).toFixed(2)}}</p>
							<p class="price" v-else>{{(l.skuPrice).toFixed(2)}}</p>
						</li>

					</ul>
				</div>
				<i class="more" v-show="s.list.length > 5"></i>
			</div>
			<footer>
				<div class="con">
					<span v-if="!s.remark">备注信息：暂无</span>
					<p v-else>备注信息：{{s.remark}}</p>
					<button class="add-reamk" @click="message(s)">{{s.remark ? "编辑" : "添加"}}</button>
				</div>

			</footer>

		</section>
		<dialog-layer ref="dialogMessage" title="备注信息" @confirm="confirmMessage">
			<textarea class="message" v-model="mes" placeholder="填写备注信息"></textarea>
		</dialog-layer>
		<img-preview :imgSrc="previewImg" ref="preview"></img-preview>
	</div>
</template>
<script>
	import dialogLayer from "components/common/dialog-layer"
	import imgPreview from "components/common/img-preview"
	export default {
		data() {
			return {
				mes: "",
				previewImg: ""
			}
		},
		props: ["supplierProd"],
		components: {
			dialogLayer,
			imgPreview
		},
		created() {

		},
		methods: {
			message(item) {
				this.$refs.dialogMessage.show = true;
				this.supplierItem = item;
				this.mes = item.remark;
			},
			confirmMessage() {
				this.supplierItem.remark = this.mes;
				var remarkTxt = sessionStorage.getItem("orderRemarkData");
				var orderRemarkData = [];
				if(remarkTxt) {
					orderRemarkData = JSON.parse(remarkTxt);
				}
				orderRemarkData.push({
					id: this.supplierItem.supplierId,
					text: this.mes
				});
				sessionStorage.setItem("orderRemarkData", JSON.stringify(orderRemarkData));
			},
			previewImgEvent(src) {
				this.previewImg = src;
				this.$refs.preview.show = true;
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.orders-prod {
		.order-item {
			.pxrem(margin-top, 20);
			background: #FFF;
			header {
				.pxrem(height, 91);
				.pxrem(line-height, 91);
				.pxrem(font-size, 28);
				.prem(-4, 20);
				padding: @prem;
				position: relative;
				.con {
					color: #666666;
					position: relative;
				}
				.con:after {
					content: "";
					position: absolute;
					left: 0;
					.pxrem(top, 23.5);
					.pxrem(width, 40);
					.pxrem(height, 40);
					background: url(../../images/market_details_store.png) no-repeat;
					background-size: cover;
				}
				.s-name {
					.pxrem(padding-left, 48);
				}
				.tel {
					position: absolute;
					right: 0;
					.pxrem(width, 48);
					.pxrem(height, 48);
					background: url(../../images/market_details_tele.png) no-repeat;
					background-size: 100% auto;
					.pxrem(top, 18.5);
				}
			}
			.content {
				background: #F8F8F8;
				.pxrem(height, 210);
				.prem(-4, 20);
				padding: @prem;
				position: relative;
				.con-wrap {
					width: 100%;
					height: 100%;
					overflow-x: auto;
					overflow-y: hidden;
				}
				ul {
					width: 5000px;
				}
				.more {
					display: inline-block;
					position: absolute;
					top: 0;
					right: 0;
					.pxrem(width, 39);
					.pxrem(height, 170);
					.pxrem(margin-top, 18);
					background: #F8F8F8 url(../../images/home_jifen_arrow.png) no-repeat -0.06*@rem 1.2*@rem ;
					background-size: 0.5*@rem auto;
				}
				.prod-item {
					.pxrem(width, 120);
					.pxrem(height, 170);
					.pxrem(margin-top, 20);
					text-align: center;
					float: left;
					.pxrem(margin-right, 13);
					.p-img {
						border: 1px solid #EBEBEB;
						width: 100%;
						.pxrem(height, 120);
						position: relative;
						img {
							width: 100%;
							height: 100%;
						}
						.num {
							position: absolute;
							.pxrem(right, -15);
							.pxrem(top, -20);
							display: inline-block;
							background: #F9AB0C;
							color: #FFF;
							.pxrem(font-size, 20);
							.pxrem(border-radius, 100);
							.prem(-4, 5);
							padding: @prem;
						}
					}
					.price {
						color: @p-p-c;
						.pxrem(font-size, 28);
						.pxrem(margin-top, 6);
					}
				}
				.prod-item:last-child {
					.pxrem(padding-right, 50);
				}
			}
			footer {
				.pxrem(height, 91);
				.pxrem(line-height, 91);
				.pxrem(font-size, 28);
				.prem(-4, 20);
				padding: @prem;
				position: relative;
				p {
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					.pxrem(padding-right, 120);
				}
				.add-reamk {
					position: absolute;
					top: 0;
					.pxrem(right, 20);
					border: 1px solid @btn-e-color;
					background: #FFF;
					.pxrem(height, 52);
					.pxrem(width, 110);
					.pxrem(font-size, 32);
					.pxrem(border-radius, 8);
					.pxrem(margin-top, 18);
				}
			}
		}
		.message {
			border: 1px solid #eee;
			width: 100%;
			.pxrem(height, 120);
			/*.prem(5, -4);
			padding:@prem;
			.pxrem(text-indent, 5);*/
			.pxrem(font-size, 26);
		}
	}
</style>