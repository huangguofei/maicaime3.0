<!-- 商品概况 -->
<template>
	<page-layers>
		<el-container class="header" v-if="goodsData">
			<el-aside class="aside padding bk-white">
				<div class="head">
					<div class="img-box pull-left">
						<img src="../../images/goods-icon.png" />
					</div>
					<h1 class="title pull-left">商品概况</h1>
				</div>
				<div class="con">
					<p class="til">商品总数</p>
					<h4 class="n num">{{goodsData.totalNum}}</h4>
				</div>
			</el-aside>
			<el-main class="main padding bk-white">
				<el-row>
					<el-col :span="8" class="item">
						<p class="til">在线商品数</p>
						<p class="n number">{{goodsData.integralNum}}</p>
					</el-col>
					<el-col :span="8" class="item">
						<p class="til">食材商品数</p>
						<p class="n number">{{goodsData.sellingNum}}</p>
					</el-col>
					<el-col :span="8" class="item">
						<p class="til">商品总销售件数</p>
						<p class="n number">{{goodsData.soldTotalNum}}</p>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
		<div class="contents bk-white padding">
			<div class="head">
				<div class="img-box pull-left">
					<img src="../../images/charts-icon.png" />
				</div>
				<h1 class="title pull-left">商品分析</h1>
			</div>
			<div class="chart-box">
				<chart-box ref="pie" :pieData="pieData"></chart-box>
			</div>
		</div>
		<div class="help bk-white padding">
			<h3 class="title">帮助中心</h3>
			<div class="main">
				<div class="item">
					<h3>1、什么是食材商品？</h3>
					<p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。 阿尔伯特·爱因斯坦，如果你无法简洁的表达你的想法，那只说明你还不够了解它。 阿尔伯特·爱因斯坦如果你无法简洁的表达你的想法，那只说明你还不够了解它。 阿尔伯特·爱因斯坦</p>
				</div>
				<div class="item">
					<h3>2、除了食材商品以外还有其他什么</h3>
					<p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p>
				</div>
			</div>
		</div>
	</page-layers>
</template>
<script>
	import SETTINGAREA from "action/goods/goods"
	import pageLayers from "components/common/page-layers"
	import chartBox from 'components/goods/goods-chart'
	export default {
		data() {
			return {
				goodsData: "",
				pieData: [],
			}
		},
		created() {
			SETTINGAREA.getGoodsGeneralInfo(this);
		},
		components: {
			pageLayers,
			chartBox,
		},
		methods: {
			initChart() {
				this.$refs.pie.initChart();
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
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
				width: 30px;
			}
		}
		.title {
			font-size: 16px;
			margin-left: 10px;
		}
	}
	
	.header {
		height: 200px;
		.aside {
			border: 1px solid #DFDFDF;
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
			margin-left: 10px;
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
	
	.contents {
		margin: 10px 0;
		.img-box {
			background: #F98A0C;
		}
		.chart-box {
			width: 900px;
			height: 400px;
			padding-bottom: 20px;
			margin: 0 auto;
		}
	}
	
	.help {
		.title {
			font-size: 18px;
			border-left: 3px solid @color-main;
			margin: 10px 0;
			height: 30px;
			line-height: 30px;
			padding-left: 10px;
		}
		.main {
			padding: 10px;
			border-top: 1px solid #F4F4F4;
			h3 {
				color: @color-main;
				font-size: 18px;
				margin: 10px 0;
			}
			p {
				color: #343434;
				font-size: 14px;
				text-indent: 1rem;
			}
		}
	}
</style>