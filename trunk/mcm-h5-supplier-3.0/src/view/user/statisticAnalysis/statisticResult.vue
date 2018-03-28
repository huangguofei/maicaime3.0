<template>
	<article class="page-layer statistic-result">
		<section class="bg"></section>
		<article class="statistic-content padding">
			<section class="item info padding">
				<p class="statistic-time">2017.07.07— 2017.08.06订单总额</p>
				<h3><i>¥</i>46574.5</h3>
				<p>订单总量：<span>637笔</span></p>
			</section>
			<section class="item main padding bk-white">
				<section class="items">
					<p>34</p>
					<span>日均订单（笔）</span>
				</section>
				<section class="items">
					<p>¥814.25</p>
					<span>日均订单额</span>
				</section>
				<section class="items">
					<p>34</p>
					<span>单日最高</span>
				</section>
				<section class="items">
					<p>¥1214.50</p>
					<span>单日最高额</span>
				</section>
			</section>
		</article>
	</article>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: [],
		created() {

		},
		methods: {

		},
		components: {

		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.statistic-result {
		.bg {
			position: fixed;
			top: 0;
			width: 100%;
			background: #19191E;
			.pxrem(height, 130);
			z-index: -1;
		}
		.statistic-content {
			.item {
				.pxrem(border-radius, 8);
				.pxrem(margin-bottom, 20);
			}
			.info {
				background: @m-c;
				.pxrem(height, 250);
				.pxrem(padding-top, 50);
				p {
					.pxrem(font-size, 24);
					color: #80B7FF;
					span {
						.pxrem(font-size, 32);
						color: #fFF;
					}
				}
				h3 {
					.pxrem(font-size, 70);
					color: #fff;
					.pxrem(height, 100);
					.pxrem(line-height, 100);
					.pxrem(margin-bottom, 30);
					i {
						.pxrem(font-size, 40);
						font-style: normal;
					}
				}
			}
			.main {
				.pxrem(height, 300);
				display: flex;
				flex-wrap: wrap;
				text-align: center;
				.items {
					.pxrem(height, 150);
					width: 50%;
					box-sizing: border-box;
					p {
						.pxrem(font-size, 46);
						color: @m-c;
						.pxrem(line-height, 80);
					}
					span {
						.pxrem(font-size, 24);
						color: #999;
					}
				}
				.items:nth-child(2n-1) {
					border-right: 1px solid #e9e9e9;
				}
				.items:nth-child(1) {
					border-bottom: 1px solid #e9e9e9;
				}
				.items:nth-child(2) {
					border-bottom: 1px solid #e9e9e9;
				}
			}
		}
	}
</style>