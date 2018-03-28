<template>
	<page-layer :narData="narData" classs="back-color">
		<div class="goods-details padding">
			<div class="item padding">
				<h3 class="title">商品参数</h3>
				<div class="content">
					<p class=""><span>商品名称：{{goodsData.skuName}}</span><span>销售单位：{{goodsData.skuUnit}}</span><span>商品分类：{{goodsData.categoryName}}</span></p>
					<p class=""><span>商品状态：{{goodsData.skuStatusText}}</span><span>审核状态：{{goodsData.auditStatusText}}</span><span>添加时间：{{goodsData.timeCreated}}</span></p>
					<p class=""><span>&#12288;&#12288;备注：{{goodsData.remark}}</span></p>
				</div>
			</div>
			<div class="item padding">
				<h3 class="title">商品价格</h3>
				<div class="content">
					<p class=""><span>建议零售价：¥{{goodsData.skuPrice}}</span></p>
					<p class=""><span>&#12288;&#12288;&#12288;原价：{{goodsData.originPrice}}</span></p>
					<p class=""><span>&#12288;&#12288;活动价：{{goodsData.promotionPrice}}</span></p>
				</div>
			</div>
			<div class="item padding">
				<h3 class="title">商品图片</h3>
				<div class="content">
					<div class="img-box">
						<img :src="goodsData.skuImage" />
						<p>主图</p>
					</div>
					<!--<div class="img-box hide">
						<img src="../../../../dist/static/img/Group-err.7576de2.png" />
						<p>副图</p>
					</div>-->
				</div>
			</div>
		</div>
	</page-layer>
</template>

<script>
	import pageLayer from "components/common/page-layer"
	import server from "action/goods/goods"
	export default {
		data() {
			return {
				narData: [{
					name: "商品详情",
					router: "goods.goodsDetails"
				}],
				productSkuId: this.$route.params.id,
				goodsData: ''
			}
		},
		created() {
			server.getGoodsDetails(this);
		},
		methods: {

		},
		components: {
			pageLayer
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.goods-details {
		.item {
			height: 200px;
			.clearfix();
			border-bottom: 1px solid #e0e0e0;
			.title {
				height: 200px;
				float: left;
				font-size: 24px;
				width: 200px;
			}
			.content {
				.clearfix();
				p {
					font-size: 16px;
					color: #343434;
					line-height: 40px;
					span {
						display: inline-block;
						width: 25%;
					}
				}
				.img-box {
					float: left;
					margin-right: 20px;
					img {
						width: 100px;
						height: auto;
						border-radius: 5px;
						border: 1px solid #F4F4F4;
					}
					p {
						text-align: center;
					}
				}
			}
		}
	}
</style>