<!-- 流水信息 -->
<template>
	<page-layers>
		<el-container class="header" v-if="goodsAnalyzeHeadData">
			<el-aside class="aside padding bk-white">
				<div class="head">
					<div class="img-box pull-left">
						<img src="../../../images/order-icon.png" />
					</div>
					<h1 class="title pull-left">商品分析</h1>
				</div>
				<div class="con">
					<p class="til">总商品数</p>
					<h4 class="n num">{{goodsAnalyzeHeadData.totalNum}}</h4>
				</div>
			</el-aside>
			<el-main class="main padding bk-white">
				<el-row>
					<el-col :span="8" class="item">
						<p class="til">待在售商品数</p>
						<p class="n number">{{goodsAnalyzeHeadData.notSellingNum}}</p>
					</el-col>
					<el-col :span="8" class="item">
						<p class="til">食材商品数</p>
						<p class="n number">{{goodsAnalyzeHeadData.sellingNum}}</p>
					</el-col>
					<el-col :span="8" class="item">
						<p class="til">商品总销售件数</p>
						<p class="n number">{{goodsAnalyzeHeadData.soldTotalNum}}</p>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
		<div class="content bk-white padding ten">
			<top-title :num="10" @navSearch="navSearchShop"></top-title>
			<div class="ranking-list padding">
				<div class="top-list padding">
					<top-item v-for="(v,k) in goodsAnalyzeShopData" :itemData="v" :itemType="'ten'" :index="k"></top-item>
				</div>
			</div>
		</div>
		<div class="content bk-white padding three">
			<top-title :num="3" @navSearch="navSearchClass"></top-title>
			<div class="ranking-list padding">
				<div class="top-list padding">
					<top-item v-for="(v,k) in goodsAnalyzeClassData" :itemData="v" :itemType="'three'" :index="k"></top-item>

				</div>
			</div>
		</div>
	</page-layers>
</template>
<script>
	import SETTINGAREA from "action/data/goodsAnalyze"
	import pageLayers from "components/common/page-layers"
	import topTitle from "components/data/top-title"
	import topItem from "components/data/top-item"
	export default {
		data() {
			return {
				goodsAnalyzeHeadData:"",
				goodsAnalyzeShopData:[],
				goodsAnalyzeClassData:[],
			}
		},
		created() {
			SETTINGAREA.getGoodsAnalyzeHead(this);
			this.navSearchShop();
			this.navSearchClass();
		},
		components: {
			pageLayers,
			topTitle,
			topItem
		},
		methods: {
			navSearchShop(index) {
				if(!index){
					var index=4;
				}
				SETTINGAREA.getGoodsAnalyzeShop(this,{dateType:index});
			},navSearchClass(index) {
				if(!index){
					var index=4;
				}
				SETTINGAREA.getGoodsAnalyzeClass(this,{dateType:index});
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.header {
		height: 200px;
		.aside {
			border: 1px solid #DFDFDF;
			.head {
				.clearfix();
				height: 50px;
				line-height: 50px;
				border-bottom: 1px solid #F4F4F4;
				padding-bottom: 10px;
				.img-box {
					width: 50px;
					height: 50px;
					text-align: center;
					border-radius: 25px;
					background: @color-main;
					img {
						margin-top: 10px;
					}
				}
				.title {
					font-size: 16px;
					margin-left: 10px;
				}
			}
			.con {
				text-align: center;
				padding-top: 30px;
				.num {
					color: #F98A0C;
				}
			}
		}
		.n {
			font-size: 30px;
		}
		.til {
			font-size: 14px;
			color: #737373;
		}
		.main {
			border: 1px solid #DFDFDF;
			margin-left: 20px;
			box-sizing: border-box;
			height: 200px;
			&>div {
				height: 100%;
			}
			.item {
				height: 100%;
				text-align: center;
				padding-top: 40px;
				border-left: 1px solid #DFDFDF;
			}
			.item:first-child {
				border: 0;
			}
			.number {
				color: #343434;
			}
		}
	}
	
	.content {
		margin-top: 10px;
		.ranking-list {
			.top-list {
				background: #f7f7f7;
				display: flex;
				height: 400px;
				align-content: space-between;
				padding: 16px 100px;
			}
		}
	}
	
	.ten {
		.top-list {
			flex-direction: column;
			flex-wrap: wrap;
		}
	}
	
	.three {
		margin-bottom: 50px;
		.ranking-list {
			.top-list {
				flex-direction: row;
				flex-wrap: wrap;
				height: 80px;
			}
		}
	}
</style>