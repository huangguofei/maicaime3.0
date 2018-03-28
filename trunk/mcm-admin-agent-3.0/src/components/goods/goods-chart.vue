<template>
	<div class="chart" id="chart">

	</div>
</template>

<script>
	// 引入基本模板
	let echarts = require('echarts/lib/echarts')
	// 引入饼图组件
	require('echarts/lib/chart/pie')
	// 引入提示框和图例组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/legend')
	export default {
		data() {
			return {
				option: {
					title: {
						show: false
					},
					tooltip: {
						trigger: 'item',
						formatter: "{a} <br/>{b} : {c} ({d}%)"
					},
					legend: {
						show: false
					},
					series: [{
						name: '相关信息',
						type: 'pie',
						radius: '55%',
						center: ['50%', '60%'],
						radius: ['70%', '30%'],
						hoverOffset:5,
						label: {
							normal: {
								show: true,
								position: 'outside',
								formatter:"{b} {c} {d}%",
								color:"#343434",
								fontSize:"16"
							}
						},
						labelLine: {
							normal: {
								show: true,
								length: 110,
								length2: 50

							}
						},
						data: this.pieData,
						itemStyle: {
							emphasis: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)'
							}
						}
					}]
				}
			}
		},
		created() {

		},
		props:['pieData'],
		mounted() {
//			this.initChart();

		},
		methods: {
			initChart() {
				let chartDom = document.getElementById("chart");
				let chart = echarts.init(chartDom);
				chart.setOption(this.option);
			}

		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	#chart {
		height: 400px;
	}
</style>