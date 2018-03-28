<!-- 充值成功 -->
<template>
	<div class="page-layer orders-success-page">
		<section v-if="paySuccess > 0">
			<div class="conent">
				<i class="s-icon"></i>
				<p class="title" v-if="paySuccess == 1">
					<i></i>
						<span v-if="type == 1">充值成功!</span>
						<span v-else>充值并支付成功！</span>
					<i></i>
				</p>
				<p class="title" v-if="paySuccess == 2">
					<i></i>
						<span>充值成功但支付失败！</span>
					<i></i>
				</p>
			</div>
			<footer v-if="type == 1">
				<router-link :to="{name : 'mcm.purchaser.user.index'}">
					<button class="look-orders">个人中心</button>
				</router-link>
				<router-link :to="{name : 'mcm.purchaser.remaining'}">
					<button class="go-orders">继续充值</button>
				</router-link>
			</footer>
			<footer v-else >
				<router-link :to="{name : 'order.index.all'}">
					<button class="look-orders">查看订单</button>
				</router-link>
				<router-link :to="{name : 'market.index'}">
					<button class="go-orders">继续下单</button>
				</router-link>
			</footer>
		</section>
	</div>
</template>
<script>
	import balanceAction from "actionurl/user/balance"
	export default{
		data() {
			return{
				type : 1,
				paySuccess : 0
			}
		},
		created() {
			var orderId = localStorage.getItem("orderId");
			if(orderId) {
				/*充值并支付*/
				this.type = 2;
				localStorage.removeItem("orderId");
				balanceAction.payByBalance(this, orderId);
			} else {
				this.paySuccess = 1;
			}
		}
	}
</script>
<style lang="less" scoped>
@import "../../common/less/config.less";
.orders-success-page{
	section{
		margin:auto;
		.pxrem(width,640);
		position: relative;
		.pxrem(top,300);
		background: #FFF;
		.conent{
			.prem(160, 20, 100, 20);
			padding:@prem;
			text-align: center;
			.s-icon{
				position: absolute;
				.pxrem(top,-100);
				.pxrem(margin-left,-130);
				left:50%;
				display: inline-block;
				.pxrem(width,260);
				.pxrem(height,200);
				background: url(../../images/list_order_order_finish.png) no-repeat;
				background-size: cover;
			}
		}
		.title{
			.pxrem(font-size,40);
			i{
				position: relative;
				.pxrem(top,-14);
				display: inline-block;
				.pxrem(width,82);
				border:1px solid #000;
			}
			span{
				display: inline-block;
				.prem(0,8);
				padding:@prem;
			}
		}
		.reamk{
			.pxrem(font-size,30);
			color:#666666;
		}
		footer{
			text-align: center;
			.prem(20);
			padding:@prem;
			border-top:1px dashed #E9E9E9;
			position: relative;
			button{
				.pxrem(width,200);
				.pxrem(height,68);
				.pxrem(line-height,68);
				background: #FFF;
				.pxrem(font-size, 32);
				.pxrem(border-radius,8);
				.prem(-4,20);
				margin:@prem;
			}
			.look-orders{
				border:1px solid @btn-e-color;
				color:#4A4A4A;
			}
			.go-orders{
				border:1px solid @m-c;
				color:@m-c;
			}
		}
		.footer-circle{
			content : "";
			position: absolute;
			.pxrem(top,-22);
			.pxrem(width,30);
			.pxrem(height,30);
			background: #f3f3f3;
			display: inline-block;
			border-radius:50%;
		}
		footer:after{
			.footer-circle;
			.pxrem(left,-20);
		}
		footer:before{
			.footer-circle;
			.pxrem(right,-20);
		}
	}
}
</style>