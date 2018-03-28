<!-- 活动列表 -->
<template>
	<page-layer :narData="narData" classs="">
		<div class="activity-list">
			<div class="activity-item begin" v-for="(t,k) in tableData">
				<div class="header back-color radius">
					<div class="logo"><img src="../../../images/money-back.png" /></div>
					<div class="title">
						<p></p>
						<h1>{{t.name}}</h1>
						<p></p>
					</div>
				</div>
				<div class="content back-color padd radius">
					<p class="title">赠送优惠券信息</p>
					<!-- <div class="coupon-list">
						<p><img src="../../../images/coupon-icon.png"/><span>满100减10元现金券 x1</span></p>
						<p><img src="../../../images/coupon-icon.png"/><span>满100减10元现金券 x1</span></p>
						<p><img src="../../../images/coupon-icon.png"/><span>满100减10元现金券 x1</span></p>
					</div> -->
					<div class="coupon-list">
						<p><img src="../../../images/coupon-icon.png" />
							<span v-if="t.specialOfferTypeId == 60">
								消费送积分
							</span>
							<span v-else-if="t.specialOfferTypeId == 50">充值送券</span>
							<span v-else>注册送券</span>
						</p>
					</div>
				</div>
				<div class="footer back-color padd">
					<p>活动时间</p>
					<!--<span v-if="t.startDate && t.startTime">
						{{t.startDate | filterDate}} {{t.startTime}} 至 {{t.endDate | filterDate}} {{t.endTime}}
					</span>
					<span v-else-if="t.startDate && !t.startTime">
						{{t.startDate | filterDate }} 00:00:00 至 {{t.endDate | filterDate}} 24:00:00
					</span>
					<span v-else-if="!t.startDate && t.startTime">
						每天 {{t.startTime}} 至 {{t.endTime}}
					</span>-->
					<span v-if="t.availableTimeString&&t.availableDateString">
						{{t.availableDateString}} {{t.availableTimeString}}
					</span>
					<span v-else-if="!t.availableTimeString&&t.availableDateString">
						{{t.availableDateString}}
					</span>
					<span v-else-if="t.availableTimeString&&!t.availableDateString">
						每天{{t.availableTimeString}}
					</span>
					<span v-else>不限制时间</span>
				</div>
				<div class="mark" v-if="t.specialOfferTypeId == 60">消费送积分</div>
				<div class="mark" v-else-if="t.specialOfferTypeId == 50">充值送券</div>
				<div class="mark" v-else>注册送券</div>
			</div>
		</div>
		<pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	</page-layer>
</template>
<script>
	import pageLayer from "components/common/page-layer"
	import requestServer from "action/marketing/activity"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				tableData: [],
				narData: [{
					name: "优惠活动"
				}],
				pagings: {
					pageSize : 10,
	  	 			pageNum : 1,
				},
				totalCount : 0
			}
		},
		filters: {
			filterDate(val) {
				var s = val.split(" ");
				return s.length >= 2 ? s[0] : val;
			}
		},
		created: function() {
			requestServer.getActivityList(this);
		},
		components: {
			pageLayer,
			pagination
		},
		methods: {
			changePageSize() {
				requestServer.getActivityList(this);
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.activity-list {
		.clearfix();
		.begin {
			.logo {
				background: #FABC05;
			}
			.mark {
				background: @color-main;
			}
		}
		.radius {
			position: relative;
			&:before {
				content: "";
				width: 20px;
				height: 20px;
				border-radius: 10px;
				background: @back-page;
				position: absolute;
				left: -11px;
				bottom: 4px;
			}
			&:after {
				content: "";
				width: 20px;
				height: 20px;
				border-radius: 10px;
				background: @back-page;
				position: absolute;
				right: -11px;
				bottom: 4px;
			}
		}
		.activity-item {
			position: relative;
			float: left;
			width: 360px;
			margin-right: 10px;
			margin-bottom: 10px;
			overflow: hidden;
			.header {
				border: 1px solid #DFDFDF;
				border-bottom: 0;
				padding-top: 35px;
				.logo {
					width: 80px;
					height: 80px;
					line-height: 80px;
					border-radius: 40px;
					text-align: center;
					font-size: 24px;
					color: #fff;
					margin: 0 auto;
					margin-bottom: 20px;
					img {
						width: 70%;
						margin-top: 15%;
					}
				}
				.title {
					position: relative;
					text-align: center;
					p {
						width: 50px;
						height: 1px;
						position: absolute;
						top: 13px;
						border-top: 2px solid #DFDFDF;
					}
					p:first-child {
						left: 20px;
					}
					p:last-child {
						right: 20px;
					}
					h1 {
						font-size: 20px;
						color: @color-main;
					}
				}
			}
			.content {
				height: 180px;
				box-sizing: border-box;
				padding-top: 40px;
				border: 1px solid #DFDFDF;
				border-top: 0;
				border-bottom: 0;
				.title {
					font-size: 16px;
					text-align: center;
					margin-bottom: 15px;
				}
				.coupon-list {
					text-align: center;
					color: #737373;
					font-size: 12px;
					margin-bottom: 10px;
					line-height: 30px;
					img {
						width: 18px;
						height: 18px;
						vertical-align: middle;
						margin: 0;
						margin-right: 5px;
					}
				}
			}
			.footer {
				border: 1px solid #DFDFDF;
				height: 90px;
				border-top: 0;
				text-align: center;
				padding: 20px 10px;
				box-sizing: border-box;
				p {
					font-size: 16px;
					margin-bottom: 5px;
				}
				span {
					font-size: 12px;
					color: #737373;
				}
				&:before {
					content: "";
					display: block;
					border-top: 2px dashed #DFDFDF;
					position: relative;
					top: -35px;
				}
			}
			.mark {
				position: absolute;
				top: 28px;
				right: -35px;
				height: 30px;
				line-height: 30px;
				width: 150px;
				text-align: center;
				font-size: 18px;
				color: #fff;
				transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				/* IE 9 */
				-moz-transform: rotate(45deg);
				/* Firefox */
				-webkit-transform: rotate(45deg);
				/* Safari 和 Chrome */
				-o-transform: rotate(45deg);
			}
		}
	}
</style>