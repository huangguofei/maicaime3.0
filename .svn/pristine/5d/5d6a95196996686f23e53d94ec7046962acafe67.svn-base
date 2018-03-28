<template>
	<article class="page-layer padding sales-summary">
		<section class="header">
			<span>{{showTime}}</span>
			<img class="pull-right" src="../../images/mine_rank_calendar@2x.png" />
			<select-time class="selet-time" v-model="time" :range="false" language="ch" @input="changetime"></select-time>
		</section>
		<article class="list">
			<section class="item bk-white">
				<article class="item-head padding hr">
					<aside class="shop-info">
						<img class="" src="../../images/user-default.png" />
						<span class="shop-name">天山雪莲 260件</span>
					</aside>
					<span class="shop-price">¥6400.50</span>
				</article>
				<article class="content">
					<ul>
						<li>
							<p class="status">已完成(件)</p>
							<h2>245</h2>
							<p class="all-price">总额：¥3453.5</p>
						</li>
						<li>
							<p class="status">未完成(件)</p>
							<h2>245</h2>
							<p class="all-price">总额：¥3453.5</p>
						</li>
						<li>
							<p class="status">待审核(件)</p>
							<h2>245</h2>
							<p class="all-price">总额：¥3453.5</p>
						</li>
					</ul>
				</article>
			</section>
			<section class="item bk-white">
				<article class="item-head padding hr">
					<aside class="shop-info">
						<img class="" src="../../images/user-default.png" />
						<span class="shop-name">天山雪莲 260件</span>
					</aside>
					<span class="shop-price">¥6400.50</span>
				</article>
				<article class="content">
					<ul>
						<li>
							<p class="status">已完成(件)</p>
							<h2>245</h2>
							<p class="all-price">总额：¥3453.5</p>
						</li>
						<li>
							<p class="status">未完成(件)</p>
							<h2>245</h2>
							<p class="all-price">总额：¥3453.5</p>
						</li>
						<li>
							<p class="status">待审核(件)</p>
							<h2>245</h2>
							<p class="all-price">总额：¥3453.5</p>
						</li>
					</ul>
				</article>
			</section>
		</article>
	</article>
</template>

<script>
	import selectTime from "vue-date"
	export default {
		data() {
			return {
				amount: "0.00",
				checkingList: [],
				time: "",
				showTime: ""
			}
		},
		created() {
			this.initTime();
		},
		components: {
			selectTime
		},
		methods: {
			changetime(val) {
				if(val) {
					val = val.replace(/\-/g, "/");
					var Time = new Date(val);
					var Y = Time.getFullYear();
					var M = Time.getMonth() + 1;
					M = M > 12 ? 1 : M;
					var D = Time.getDate();
					this.showTime = Y + "年" + M + "月" + D+"日";
					console.log(this.time);
				}
			},
			initTime() {
				var newTime = new Date();
				this.changetime(newTime.toLocaleDateString());
			}
		}
	}
</script>

<style lang="less">
	@import "../../common/less/config.less";
	.hr:before {
		.pxrem(left, -15);
	}
	
	.hr:after {
		.pxrem(right, -15);
	}
	
	.selet-time {
		position: absolute!important;
		top: 0;
		right: 0;
		z-index: 2;
		.input-wrapper {
			opacity: 0;
			&>img {
				display: none;
			}
		}
	}
	
	.sales-summary {
		box-sizing: border-box;
		.header {
			.clearfix();
			.pxrem(height, 60);
			.pxrem(line-height, 60);
			.pxrem(margin-bottom, 10);
			span {
				.pxrem(font-size, 28);
			}
			img {
				.pxrem(width, 45);
			}
		}
		.list {
			.item {
				.pxrem(margin-bottom, 20);
				.item-head {
					display: flex;
					justify-content: space-between;
					.pxrem(height, 68);
					.pxrem(line-height, 68);
					span {
						.pxrem(font-size, 30);
					}
					.shop-info {
						span {
							.pxrem(font-size, 32);
						}
						img {
							.pxrem(width, 50);
							.pxrem(height, 50);
							.pxrem(border-radius, 25);
							vertical-align: middle;
						}
					}
				}
				.content {
					ul {
						display: flex;
						justify-content: space-between;
						text-align: center;
						.pxrem(padding-top, 30);
						.pxrem(padding-bottom, 30);
						li {
							width: 33.3333%;
							.pxrem(height, 180);
							box-sizing: border-box;
							.pxrem(font-size, 24);
							border-right: 1px solid #e9e9e9;
							.all-price {
								color: #666;
							}
							h2 {
								.pxrem(font-size, 50);
								color: @m-c;
								.pxrem(margin-top, 30);
							}
						}
						li:last-child {
							border: 0;
						}
					}
				}
			}
		}
	}
</style>