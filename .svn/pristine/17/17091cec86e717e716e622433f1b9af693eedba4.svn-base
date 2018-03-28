<template>
	<div class="activity-item begin">
		<div class="header back-color radius">
			<div class="logo"><img src="../../../images/money-back.png" /></div>
			<div class="title">
				<p></p>
				<h1>{{activityInfo.name || '优惠活动'}}</h1>
				<p></p>
			</div>
		</div>
		<div class="content back-color padd radius">
			<p class="title">赠送优惠券信息</p>
			<!--<div class="coupon-list" v-if="activityInfo.specialOfferTypeId == 50">
				<p><img src="../../../images/coupon-icon.png" /><span>满100减10元现金券 x1</span></p>
				<p><img src="../../../images/coupon-icon.png" /><span>满100减10元现金券 x1</span></p>
				<p><img src="../../../images/coupon-icon.png" /><span>满100减10元现金券 x1</span></p> 
			</div>-->
			<div class="coupon-list">
				<p><img src="../../../images/coupon-icon.png" />
					<span v-if="activityInfo.specialOfferTypeId == 60 || activityInfo.specialOfferType == 60">
						消费送积分
					</span>
					<span v-else-if="activityInfo.specialOfferTypeId == 50 || activityInfo.specialOfferType == 50">充值送券</span>
					<span v-else>注册送券</span>
				</p>
			</div>
		</div>
		<div class="footer back-color padd">
			<p>活动时间</p>
			<!--<span v-if="activityInfo.startDate && activityInfo.startTime">
				{{activityInfo.startDate | filterDate}} {{activityInfo.startTime}} 至 {{activityInfo.endDate | filterDate}} {{activityInfo.endTime}}
			</span>
			<span v-else-if="activityInfo.startDate && !activityInfo.startTime">
				{{activityInfo.startDate | filterDate}} 00:00:00 至 {{activityInfo.endDate | filterDate}} 23:59:59
			</span>
			<span v-else-if="!activityInfo.startDate && activityInfo.startTime">
				每天 {{activityInfo.startTime}} 至 {{activityInfo.endTime}}
			</span>-->
			<span v-if="!activityInfo.availableDateString&&!activityInfo.availableTimeString">不限制时间</span>
			<span v-else>
				{{!activityInfo.availableDateString?'每天':''}}{{activityInfo.availableDateString}} {{activityInfo.availableTimeString}}
			</span>
			<a href="javascript:;" class="soldout" @click="changeStatus(activityInfo)" :class="{out:activityInfo.statusId!=1}">{{activityInfo.statusId==1?"下架":"上架"}}</a>
		</div>
		<div class="mark" v-if="activityInfo.specialOfferTypeId == 60 || activityInfo.specialOfferType == 60">消费送积分</div>
		<div class="mark" v-else-if="activityInfo.specialOfferTypeId == 50 || activityInfo.specialOfferType == 50">充值送券</div>
		<div class="mark" v-else>注册送券</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ["activityInfo"],
		components: {

		},
		filters: {
			filterDate(val) {
				var s = val.split(" ");
				return s.length >= 2 ? s[0] : val;
			}
		},
		methods: {
			couponDetails: function() {
				this.$emit("couponDetails");
			},
			changeStatus(data) {
				var status_txt = (data.statusId == 1 ? "下架" : "上架");
				this.$confirm('确认' + status_txt + '该活动?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					this.$emit("changeStatus", {
						specialOfferId: data.specialOfferId,
						status: data.statusId == 1 ? 0 : 1
					});
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.begin {
		.logo {
			background: #FABC05;
		}
		.mark {
			background: @color-main;
		}
	}
	
	.back-color {
		background: #fff;
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
		height: 470px;
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
			height: 130px;
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
		.soldout {
			display: block;
			margin: 10px auto;
			width: 70%;
			height: 40px;
			line-height: 40px;
			text-align: center;
			background: #FFA356;
			font-size: 18px;
			color: #FFFFFF;
		}
		.out {
			background: #d7d7d7;
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
</style>