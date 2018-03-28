<template>
	<div class="item padding" :class="{ten:itemType=='ten'}">
		<img v-if="index==0" class="index-icon index-img pull-left" src="../../images/mine_rank_1@2x.png" />
		<img v-else-if="index==1" class="index-icon index-img pull-left" src="../../images/mine_rank_2@2x.png" />
		<img v-else-if="index==2" class="index-icon index-img pull-left" src="../../images/mine_rank_3@2x.png" />
		<span v-else class="index-icon index-txt pull-left">{{index+1}}</span>
		<img class="pull-left goods-img" :src="itemData.prodImage" />
		<div class="goods-info pull-left">
			<p class="goods-name">{{itemData.prodName}}</p>
			<span v-if="itemType=='ten'" class="price">菜品金额：¥{{itemData.totalAmount}}</span>
			<span v-else class="price">销售总量：{{itemData.soldNum}}</span>
		</div>
		<span v-show="itemType=='ten'" class="num">{{itemData.totalNum}}<span class="nuits">件</span></span>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		created() {},
		props: ["itemData", 'itemType', 'index']
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.item {
		.clearfix();
		display: flex;
		justify-content: center;
		align-items: center;
		width: 30%;
		height: 45px;
		.index-icon {
			width: 30px;
		}
		.index-img {
			height: 36px;
		}
		.index-txt {
			height: 30px;
			border-radius: 15px;
			text-align: center;
			color: #fff;
			background: @color-main;
			font-size: 16px;
			line-height: 30px;
		}
		.goods-img {
			width: 46px;
			height: 46px;
			border-radius: 23px;
			margin: 0 10px;
		}
		.goods-info {
			width: 70%;
			.goods-name {
				font-size: 16px;
			}
			.price {
				font-size: 12px;
				color: #999;
			}
		}
		.num {
			color: #4a4a4a;
			font-size: 24px;
			.nuits {
				font-size: 14px;
			}
		}
	}
	
	.ten {
		width: 40%;
		align-items: center;
		border-bottom: 1px solid #e5e5e5;
	}
	.ten:nth-child(5n){
		border-bottom: 0;
	}
</style>