<!-- 付款方式 -->
<template>
<div class="payment-type" v-if="show">
	<div class="bg" @click="close" ></div>
	<div class="type-info">
		<header>付款方式</header>
		<div class="pay-list pay-inte" v-if="prodType == 1">
			<span>需要支付{{firstIntegralProd.integralPrice}}积分 + ¥{{(firstIntegralProd.extraPrice*1).toFixed(2)}}</span>
		</div>
		<div class="pay-list" v-else>
			<div class="p-item">
				<i class="p-icon"></i>
				<div class="p-con">
					<p class="header">余额支付</p>
					<p class="value">可用余额：¥{{(balance * 1).toFixed(2)}}</p>
				</div>
				<i class="check" :class="{active:selectPayType==1}" @click="checkPayType(1)"></i>
			</div>
			<div class="p-item pay-on-item" v-if="supportDelivery" style="display:none">
				<i class="p-icon"></i>
				<div class="p-con">
					<p class="header">收货后支付</p>
					<p class="value">收到货后再线上支付货款</p>
				</div>
				<i class="check" :class="{active:selectPayType==2}" @click="checkPayType(2)"></i>
			</div>
		</div>
		<footer>
			<button @click="returnSubmitPay()">
				<span v-if="selectPayType == 1 && (!prodType || prodType == 2)">
					<span v-if="balance - totalAmount < 0 ">
						余额不足，立即充值并支付
					</span>
					<span v-else>
						确定支付<span v-if="!prodType">¥{{(totalAmount * 1).toFixed(2)}}</span>
					</span>
				</span>
				<span v-else>确定</span>
				
			</button>
		</footer>
	</div>
</div>
</template>
<script>
	import commonAction from "actionurl/common/common"
	/*prodType 1 为积分商品
	  prodType 2 订单进入
	*/
	export default{
		data(){
			return{
				balance : 0,
				statusId : "",
				selectPayType : 1,
				show : false
			}
		},
		props : ["totalAmount", "submitPay", "prodType", "firstIntegralProd", "supportDelivery"],
		created() {
			commonAction.getBalanceInfo(this);
		},
		mounted() {
			var _that = this;
			setTimeout(function() {
				_that.show = true;
			}, 100)
			if(this.supportDelivery) {
				_that.checkPayType(1);
			}
		},
		methods : {
			returnSubmitPay() {
				this.submitPay(this.selectPayType, this.balance);
			},
			close() {
				this.$emit("closePay");
			},
			checkPayType(type) {
				this.selectPayType = type;
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
		width:100%;
		bottom:0;
		z-index:101;
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
				.p-icon{
					display: inline-block;
					.pxrem(width,80);
					.pxrem(height,80);
					position: absolute;
					background: url(../../images/list_order_pay_yue.png) no-repeat;
					background-size:cover;
				}
				.check{
					display: inline-block;
					position: absolute;
					right:0;
					.pxrem(top,45);
					.pxrem(width,34);
					.pxrem(height,34);
					border:1px solid #999;
					border-radius:50%;
				}
				.active{
					background: url(../../images/order_value_tick.png) no-repeat;
					background-size:cover;
					border-radius: none;
					border:0;
					.pxrem(width,36);
					.pxrem(height,36);
				}
				.p-con{
					position: relative;
					.pxrem(padding-left,100);
				}
				.header{
					.pxrem(font-size,32);
				}
				.value{
					.pxrem(font-size,24);
					color:#666666;
				}
			}
			.pay-on-item{
				.p-icon{
					background: url(../../images/pay-on-de-icon.png) no-repeat;
					background-size:cover;
				}
			}
		}
		.pay-inte{
			text-align: center;
			.prem(20, -4);
			padding:@prem;
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