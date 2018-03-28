<template>
	<article class="coupon padding">
		<ul v-if="couponData.length>0">
			<li class="padding" v-for="(v,k) in couponData" @click="selectCoupon(v)">
				<article class="item-left pull-left">
					<p>¥<b>{{v.coupon.amount}}</b></p>
					<span class="remark" v-if="v.coupon.preconditionTypeId==1">满{{v.coupon.preconditionAmount}}元使用</span>
					<span class="remark" v-else>无条件</span>
				</article>
				<article class="item-right pull-left">
					<p class="title">{{v.coupon.title}}
						<img v-if="v.coupon.preconditionTypeId==1" src="../../images/user_remark.png" />
						<img v-else src="../../images/Group 2.png" />
					</p>
					<p class="time">{{v.coupon.startDate|dateChange(v)}}</p>
					<p class="remark"><i></i>{{v.coupon.purpose}}</p>
				</article>
				<!-- <span class="select_radio" :class="{active:v.coupon.isSelect}" v-if="isSelect" @click.stop="select(v.coupon)"></span> -->
				<span class="select_radio" :class="{active:v.coupon.isSelect}" v-if="isSelect" ></span>
			</li>

		</ul>
		<p v-else class="order-null">暂无使用券</p>
		<router-link v-if="!isSelect" to="/overcoupon/" class="view-other">查看无效券<img src="../../images/user_more.png" /></router-link>
	</article>
</template>

<script>
	import couponServer from 'actionurl/user/coupon'
	import FOOTERNAR from "../../components/common/footer-nar"
	export default {
		data() {
			return {
				couponData: [],
				isSelect: false,
				selectPrice: 0
			}
		},
		components: {
			FOOTERNAR
		},
		created() {
			if(this.$route.params.type) {
				this.isSelect = true;
				this.selectPrice = sessionStorage.getItem("priceCondition");
			}
			couponServer.getCouponList(this);
		},
		methods: {
			selectCoupon(data) {
				if(this.isSelect) {
					var couponData = [{
						couponId: data.userCouponId,
						couponPrice: data.coupon.amount
					}]
					localStorage.setItem("couponData", JSON.stringify(couponData));
					this.$router.push({
						name: "often.orders",
						query: {
							coupon: true
						}
					});
				}
			},
			select(data) {
				data.isSelect = !data.isSelect;
			}
		},
		filters: {
			dateChange(val, d) {
				var timeText = "";
				if(d.expirationTime) {
					return d.expirationTime + "失效";
				}
				var data = d.coupon;
				if(data.startDate || data.startTime) {
					var sDate = data.starDate,
						eDate = data.endDate;
					if(data.startDate && data.startTime) {
						sDate = data.startDate.substring(0, data.startDate.length - 9).replace(/\-/g, ".") + " " + data.startTime;
						eDate = data.endDate.substring(0, data.endDate.length - 9).replace(/\-/g, ".") + " " + data.endTime;
					}
					if(data.startDate && !data.startTime) {
						sDate = data.startDate.substring(0, data.startDate.length - 9).replace(/\-/g, ".");
						eDate = data.endDate.substring(0, data.endDate.length - 9).replace(/\-/g, ".");
					}
					if(!data.startDate && data.startTime) {
						sDate = "每天" + data.startTime;
						eDate = "每天" + data.endTime;
					}
					timeText = sDate + " - " + eDate;

				} else {
					timeText = "永久有效";
				}
				return timeText;
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.coupon {
		.order-null {
			text-align: center;
			color: #999;
			.pxrem(line-height, 50);
		}
		ul {
			li {
				position: relative;
				width: 100%;
				.pxrem(height, 200);
				border: 1px solid #E9E9E9;
				.pxrem(border-radius, 14);
				background: #fff;
				.pxrem(margin-bottom, 20);
				box-sizing: border-box;
				.clearfix();
				.item-left {
					width: 28%;
					text-align: center;
					border-right: 1px dashed #D7D7D7;
					position: relative;
					height: 100%;
					p {
						.pxrem(font-size, 50);
						color: @assist-color;
						.pxrem(line-height, 100);
						.pxrem(margin-bottom, -20);
						b {
							.pxrem(font-size, 90);
						}
					}
					span {
						.pxrem(font-size, 24);
						color: #999;
					}
					.common() {
						content: "";
						display: inline-block;
						.pxrem(width, 20);
						.pxrem(height, 20);
						.pxrem(border-radius, 10);
						position: absolute;
						background: @m-back;
						.pxrem(right, -15);
					}
					&:before {
						.common();
						.pxrem(top, -35);
					}
					&:after {
						.common();
						.pxrem(bottom, -35);
					}
				}
				.item-right {
					.pxrem(padding-left, 10);
					.title {
						.pxrem(font-size, 36);
						img {
							.pxrem(width, 100);
							position: relative;
							.pxrem(top, -10);
							.pxrem(left, 10);
						}
					}
					.time {
						.pxrem(font-size, 20);
						color: #222;
						.pxrem(margin-bottom, 15);
					}
					.remark {
						.pxrem(font-size, 24);
						color: #999;
						display: inline-block;
						.pxrem(padding-left, 18);
						.pxrem(padding-right, 18);
						background: #F2F2F2;
						.pxrem(height, 40);
						.pxrem(line-height, 40);
						.pxrem(border-radius, 20);
						i {
							display: inline-block;
							.pxrem(width, 10);
							.pxrem(height, 10);
							.pxrem(margin-right, 5);
							vertical-align: middle;
							background: #666;
							.pxrem(border-radius, 5);
						}
					}
				}
			}
		}
		.view-other {
			display: block;
			margin-top: .2rem;
			.pxrem(font-size, 28);
			color: #9a9a9a;
			text-align: center;
			vertical-align: middle;
			img {
				.pxrem(width, 30);
				.pxrem(margin-left, 5);
			}
		}
		.select_radio {
			position: absolute;
			top: .1rem;
			right: .2rem;
			display: inline-block;
			.pxrem(width, 32);
			.pxrem(height, 32);
			border: 1px solid #a4a4a4;
			.pxrem(border-radius, 16);
			vertical-align: sub;
		}
		.active {
			background: url(../../images/order_check.png) no-repeat -1px -1px;
			background-size: 120% auto;
			border-color: @m-c;
		}
	}
</style>