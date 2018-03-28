<template>
	<article class="statistics-chart bk-white">
		<h3 class="padding">最近7天订单统计</h3>
		<article id="chart" class="chart">

		</article>
	</article>
</template>

<script>
	//	import echarts from "echarts"
	//	let echarts = require('echarts/lib/echarts')
	import * as echarts from 'echarts/lib/echarts';
	// 引入折线图。
	import 'echarts/lib/chart/line';
	// 引入提示框组件、标题组件、工具箱组件。
	import 'echarts/lib/component/tooltip';
	import 'echarts/lib/component/title';
	import 'echarts/lib/component/toolbox';
	export default {
		data() {
			return {}
		},
		props: [],
		created() {
			var dom = document.getElementById("chart");

		},
		mounted() {
			this.initChart();
		},
		methods: {
			initChart() {
				let chartDom = document.getElementById("chart");
				let chart = echarts.init(chartDom);
				chart.setOption({
					title:false,
					grid:{
						left:'10%',
						top:"5%",
						bottom:'20%'
					},
					tooltip: {},
					toolbox: {

					},
					xAxis: {
						boundaryGap:false,
						axisLine: {
							show: false
						},
						axisTick:false,
						splitLine: false,
						data: [{
							value: '1日'
						}, {
							value: '2日'
						}, {
							value: '3日'
						}, {
							value: '4日'
						}, {
							value: '5日'
						}, {
							value: '6日'
						}, {
							value: '7日'
						}, {
							value: '8日'
						}, {
							value: '9日'
						}, {
							value: '10日'
						}]
					},
					yAxis: {
						show: false,
						splitLine: false,
						max:'dataMax',
					},
					color:['#3084F2'],
					series: [{
						type: 'line',
						smooth: false,
						symbol: 'circle',
						symbolSize: 8,
						lineStyle: {
							normal: {
								color: '#3084F2',
								width: 3
							}
						},
						data: [
							['1日', 5],
							['2日', 20],
							['3日', 36],
							['4日', 12],
							['5日', 20],
							['6日', 34],
							['7日', 2],
							['8日', 6],
							['9日', 27],
							['10日', 14]
						]
					}]
				});
			}
		},
		components: {

		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.statistics-chart {
		h3 {
			.pxrem(font-size, 32);
			border-bottom: 1px solid #e9e9e9;
		}
		.chart {
			.pxrem(height, 250);
		}
	}
</style>