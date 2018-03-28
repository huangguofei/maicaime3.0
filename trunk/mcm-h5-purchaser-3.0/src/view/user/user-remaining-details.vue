<template>
	<article class="page-layer user-integral-details">
		<!-- <select-time class="selet-time" v-model="time" language="ch" @input="changetime"></select-time> -->
		<header class="padding" ref="header">
			<section class="pull-left ">
				<!-- <h3>{{month}}月</h3>
				<span>{{year}}年</span>
				<img src="../../images/register_bottom.png" /> -->
				<span class="all">全部</span>
			</section>
			<section class="pull-left">
				<span class="t">合计：</span>
				<p>¥{{amount.toFixed(2)}}</p>
			</section>
		</header>
		<article class="integral-list" ref="content">
			<scroll :pullingDown="true" :pullUpLoad="true"  @pullingUp="onPullingUp" ref="scroll">
				<ul>
					<li class="padding" v-for="(v,k) in payListData" :class="{active:v.typeId==0||v.typeId==6||v.typeId==7}">
						<img src="../../images/mine_yue_details_chognzhi.png" class="pull-left add-img" />
						<img src="../../images/mine_yue_details_order.png" class="pull-left reduce-img" />
						<section class="pull-left">
							<p>{{v.typeText}}</p>
							<span>{{v.timeCreated}}</span>
						</section>
						<span class="pull-right">{{v.typeId==0||v.typeId==6||v.typeId==7?"-":"+"}}{{v.amount|ms}}</span>
					</li>
					<!--<li class="padding active">
						<img src="../../images/mine_yue_details_chognzhi.png" class="pull-left add-img" />
						<img src="../../images/mine_yue_details_order.png" class="pull-left reduce-img" />
						<section class="pull-left">
							<p>下单支付</p>
							<span>08-06 14:43:30</span>
						</section>
						<span class="pull-right">-188.50</span>
					</li>-->
				</ul>
			</scroll>
		</article>
	</article>
</template>

<script>
	import server from 'actionurl/user/paylist'
	import scroll from "components/common/scroll"
	import selectTime from "vue-date"
	export default {
		data() {
			return {
				payListData: [],
				month: "",
				year: "",
				time: "",
				option : {
		          	pageNum : 1,
		          	size : 10,
		          	pages : 1,
		          	total : 0,
		          	walletType : 0
	            },
	            amount : 0
			}
		},
		created() {
			server.getPayList(this);
			server.getAmount(this);
			/*this.initTime("today");*/
		},
		mounted() {
			this.calculateViewHeight();
		},
		methods: {
			changetime(val) {
				this.initTime(val);
				server.getPayList(this);
			},
			initTime(time) {
				if(!time)
					return false;
				if(time == "today") {
					time = new Date();
				} else {
					this.time = time.substring(0, 10);
					time = time.replace(/\-/g, "/");
					time = new Date(time);
				}
				this.month = (time.getMonth() + 1) < 10 ? "0" + (time.getMonth() + 1) : (time.getMonth() + 1);
				this.year = time.getFullYear();
			},
			onPullingUp() {
				var _that = this;
				setTimeout(() => {
					server.getPayList(_that, (count) => {
						_that.pullingUpPage(count);
					});
				}, 500);
			},
			pullingUpPage(count) {
				if(count >= 10) {
					this.$refs.scroll.forceUpdate();
				} else {
					setTimeout(() => {
						this.$refs.scroll.forceUpdate(true);
					}, 20);
				}
			},
			calculateViewHeight() {
				if(this.$refs.header) {
					const h = this.$refs.header.getBoundingClientRect().height;
					this.$refs.content.style.height = (document.body.clientHeight - h - 5) + "px";
				}
			}
		},
		components: {
			selectTime,
			scroll
		},
		filters: {
			Time: function(val) {
				if(!val)
					return '';
				val = new Date(val);
				var M = val.getMonth() + 1;
				M = M > 12 ? 1 : M;
				var D = val.getDate();
				var h = val.getHours();
				var m = val.getMinutes();
				h = h < 10 ? "0" + h : h;
				m = m < 10 ? "0" + m : m;
				return M + "-" + D + " " + h + ":" + m;
			}
		}
	}
</script>

<style lang="less">
	@import "../../common/less/config.less";
	.user-integral-details {
		.selet-time {
			position: absolute  !important;;
			.pxrem(top, 20);
			left: 0;
			.pxrem(width, 160);
			z-index:1;
			.input-wrapper {
				padding-right:0;
				.pxrem(height, 80) !important;
				opacity: 0;
				.input{
					.pxrem(width, 280);
					.pxrem(height, 80) !important;
				}
			}
		}
		header {
			background: #fff;
			.pxrem(margin-bottom, 20);
			.clearfix();
			.all{
				display: inline-block;
				width:100%;
				text-align: center;
				.pxrem(height, 80);
				.pxrem(line-height, 80);
			}
			section:first-child {
				position: relative;
				width: 20%;
				border-right: 1px solid #d7d7d7;
				.pxrem(margin-right, 20);
				h3 {
					.pxrem(font-size, 36);
				}
				span {
					.pxrem(font-size, 28);
					color: #666;
				}
				img {
					.pxrem(width, 40);
					position: absolute;
					.pxrem(top, 30);
					.pxrem(right, 0);
				}
			}
			section:last-child {
				span {
					.pxrem(font-size, 24);
					color: #666;
				}
				p {
					.pxrem(font-size, 32);
					.pxrem(margin-top, 10);
				}
			}
		}
		.integral-list {
			background: #fff;
			ul {
				li {
					.pxrem(height, 90);
					.clearfix();
					border-bottom: 1px solid #F0F0F0;
					img {
						.pxrem(width, 70);
						.pxrem(margin-right, 30);
					}
					.reduce-img {
						display: none;
					}
					section {
						p {
							.pxrem(font-size, 32);
						}
						span {
							.pxrem(font-size, 24);
							color: #535353;
						}
					}
					&>span {
						.pxrem(font-size, 36);
						color: #1EC551;
						.pxrem(line-height, 90);
					}
				}
				.active {
					img {
						display: none;
					}
					.reduce-img {
						display: inline-block;
					}
					&>span {
						color: #F9AB0C;
					}
				}
			}
		}
	}
</style>