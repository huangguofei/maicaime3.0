<!-- 积分分析 -->
<template>
	<page-layers>
		<el-container class="header"> <!--v-if="integralData"-->
			<el-aside class="aside padding bk-white">
				<div class="head">
					<div class="img-box pull-left">
						<img src="../../../images/order-icon.png" />
					</div>
					<h1 class="title re pull-left">积分统计</h1>
					<p class="re pull-left">统计时间：2017-11-06</p>
				</div>
				<div class="con">
					<p class="til">已发放总积分</p>
					<h4 class="n num">{{integralData.totalNum}}</h4>
				</div>
			</el-aside>
			<el-main class="main padding bk-white">
				<el-row>
					<el-col :span="6" class="item">
						<p class="til">已使用总积分</p>
						<p class="n number">{{integralData.notSellingNum}}</p>
					</el-col>
					<el-col :span="6" class="item">
						<p class="til">未使用总积分</p>
						<p class="n number">{{integralData.sellingNum}}</p>
					</el-col>
					<el-col :span="6" class="item">
						<p class="til">今日已发放积分</p>
						<p class="n number">{{integralData.soldTotalNum}}</p>
					</el-col>
					<el-col :span="6" class="item">
						<p class="til">今日已使用积分</p>
						<p class="n number">{{integralData.soldTotalNum}}</p>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
		<div class="content bk-white padding">
			<chart :chartData="integralData"></chart>
		</div>
	</page-layers>
</template>
<script>
	import SETTINGAREA from "action/data/goodsAnalyze"
	import pageLayers from "components/common/page-layers"
	import chart from "components/data/integral-chart"
	export default {
		data() {
			return {
				integralData:"",
			}
		},
		created() {
			
		},
		components: {
			pageLayers,chart
			
		},
		methods: {
			
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
				p{
					color: #737373;
					font-size: 12px;
				}
				.re{
					margin-left: 10px;
					width:calc(100% - 50px) ;
					line-height:25px;
				}
				.title {
					font-size: 16px;
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
	.content{
		margin-top: 10px;
	}
	
	
</style>