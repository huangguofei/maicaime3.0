<!-- 充值方式 -->
<template>
<div class="payment-type" >
	<div class="bg" @click="close"></div>
	<div class="type-info">
		<header>选择充值方式</header>
		
		<div class="pay-list">
			<div class="p-item weixin" v-if="payType == 1">
				<i class="p-icon"></i>
				<div class="p-con">微信支付</div>
				<i class="check" :class="{active:payType == 1}"></i>
			</div>
			<div class="p-item alipay" v-if="payType == 2">
				<i class="p-icon"></i>
				<div class="p-con">支付宝支付</div>
				<i class="check"  :class="{active:payType == 2}"></i>
			</div>
		</div>
		<div class="pay-con">
			<span>需付款</span>
			<span class="right">¥{{(payAmount * 1).toFixed(2)}}</span>
		</div>
		<footer>
			<button @click="returnSubmitPay()">
				确定付款
			</button>
		</footer>
	</div>
</div>
</template>
<script>
	import commonAction from "actionurl/common/common"
	export default{
		data(){
			return{
				payType : 0
			}
		},
		props : {
			payAmount : {
				type : Number,
				default : 0
			}
		},
		created() {
			cJs.isWeiXin() ? this.payType = 1 : this.payType = 2;
		},
		methods : {
			close() {
				this.$emit("closePay");
			}
		}
	}
</script>
<style lang="less" scoped>
@import "../../common/less/config.less";
.p-f{
	position: fixed;
	top:0;
	left:0;

	width:100%;
	height:100%;
}
.payment-type{
	.p-f;
	z-index:100;
	.bg{
		.p-f;
		z-index:99;
		background: rgba(0, 0, 0, 0.5);
	}
	.type-info{
		background: #FFF;
		position: absolute;
		z-index:101;
		width:100%;
		bottom:0;
		header{
			.pxrem(height, 100);
			.pxrem(line-height, 100);
			.pxrem(font-size,32);
			text-align: center;
			border-bottom:1px solid #E9E9E9;
		}
		
		.pay-list{
			.prem(-4,20);
			padding:@prem;
			.p-item{
				.prem(20,-4);
				padding:@prem;
				position: relative;
				border-bottom:1px solid @p-b-c;
				.p-icon{
					display: inline-block;
					.pxrem(width,40);
					.pxrem(height,40);
					position: absolute;
				}
				.check{
					display: inline-block;
					position: absolute;
					right:0;
					.pxrem(top,20);
					.pxrem(width,32);
					.pxrem(height,32);
					border:1px solid @p-b-c;
					border-radius: 50%;
				}
				.active{
					.pxrem(width,34);
					.pxrem(height,34);
					background: url(../../images/order_value_tick.png) no-repeat;
					background-size:cover;
					border:0;
				}
				.p-con{
					position: relative;
					.pxrem(padding-left,60);
				}
			}
			.alipay{
				.p-icon{
					background: url(../../images/alipay.png) no-repeat;
					background-size:cover;
				}
			}
			.weixin{
				.p-icon{
					background: url(../../images/wechat-pay.png) no-repeat;
					background-size:cover;
				}
			}
		}
		.pay-con{
			.prem(20);
			padding:@prem;
			.right{
				float: right;
			}
		}
		footer{
			.prem(20);
			padding:@prem;
			button{
				width:100%;
				border:0;
				background: @m-c;
				color:#FFF;
				.pxrem(font-size,36);
				.pxrem(height,88);
				.pxrem(line-height,88);
				.pxrem(border-radius,8);
			}
		}
	}
}
</style>