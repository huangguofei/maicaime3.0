<template>
	<div class="activity-item begin" @click="couponDetails">
		<div class="header back-color">
			<div class="title">
				<p></p>
				<h1>{{v.title}}</h1>
				<p></p>
			</div>
		</div>
		<div class="content back-color padd radius">
			<p class="title">¥<span>{{v.amount}}</span></p>
			<p class="icon"></p>
			<p class="condition" v-if="v.preconditionType == 1 || v.preconditionTypeId == 1">
					满{{v.preconditionAmount}}元使用(不含运费)
			</p>
			<p class="remark">{{v.purpose}}</p>
		</div>
		<div class="footer back-color padd">
			<p>有效时间</p>
			<span v-if="v.startDate && v.startTime">
				{{v.startDate | filterDate}} {{v.startTime}} 至 {{v.endDate | filterDate}} {{v.endTime}}
			</span>
			<span v-else-if="v.startDate && !v.startTime">
				{{v.startDate | filterDate}} 00:00:00 至 {{v.endDate | filterDate}} 24:00:00 
			</span>
			<span v-else-if="!v.startDate && v.startTime">
				每天 {{v.startTime}} 至 {{v.endTime}}
			</span>
			<span v-else>不限制时间</span>
		</div>
		<div class="mark">{{v.typeText}}</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		props:['v'],
		filters : {
			filterDate(val) {
				var s = val.split(" ");
				return s.length >= 2 ? s[0] : val;
			}
		},
		components: {
			
		},methods:{
			couponDetails:function(){
				this.$emit("couponDetails");
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.back-color {
		background: #fff;
	}
	
	.begin {
		.mark {
			background: #F98A0C;
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
			bottom: -10px;
		}
		&:after {
			content: "";
			width: 20px;
			height: 20px;
			border-radius: 10px;
			background: @back-page;
			position: absolute;
			right: -11px;
			bottom: -10px;
		}
	}
	
	.activity-item {
		position: relative;
		float: left;
		width: 280px;
		height: 400px;
		margin-right: 10px;
		margin-bottom: 10px;
		overflow: hidden;
		.header {
			border: 1px solid #DFDFDF;
			border-bottom: 0;
			padding-top: 65px;
			.title {
				position: relative;
				text-align: center;
				p {
					width: 42px;
					height: 1px;
					position: absolute;
					top: 12px;
					border-top: 1px solid #DFDFDF;
				}
				p:first-child {
					left: 20px;
				}
				p:last-child {
					right: 20px;
				}
				h1 {
					font-size: 18px;
					color: #000;
					font-weight: inherit;
				}
			}
		}
		.content {
			border: 1px solid #DFDFDF;
			border-top: 0;
			border-bottom: 0;
			height: 240px;
			box-sizing: border-box;
			color: @color-main;
			text-align: center;
			.title {
				font-size: 26px;
				text-align: center;
				span {
					font-size: 46px;
					font-weight: bold;
				}
			}
			.condition {
				font-size: 18px;
				margin-bottom: 10px;
			}
			.remark {
				font-size: 16px;
			}
			.icon {
				width: 40px;
				height: 5px;
				background: @color-main;
				margin: 25px auto;
			}
		}
		.footer {
			border: 1px solid #DFDFDF;
			border-top: 0;
			text-align: center;
			padding: 10px 10px;
			height: 70px;
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
				top: -10px;
			}
		}
		.mark {
			position: absolute;
			top: 28px;
			right: -45px;
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