<!-- 购物车悬浮 -->
<template>
<p class="cart-info">
	<router-link :to="{name : 'often.cart'}">
		<span class="num">{{cartNum}}</span>
	</router-link>
	<cart-parabola  ref="parabold">
		 <div class="inner inner-hook">
         </div>
	</cart-parabola>
</p>
</template>

<script>
	import cartParabola from "components/common/cart-parabola"
	export default{
		computed : {
			cartNum : function() {
				return this.$store.state.cart.cartNum
			}
		},
		created() {
			this.$store.commit("queryCartNum");
		},
		mounted() {
			window.$ref_parabold = this.$refs.parabold;
		},
		components : {
			cartParabola
		}
	}
</script>
<style lang="less" scoped>
@import "../../common/less/config.less";
	.cart-info{
			position: fixed;
			.pxrem(bottom, 120);
			.pxrem(left, 20);
			display: inline-block;
			.pxrem(width, 90);
			.pxrem(height, 90);
			z-index:201;
			background: url(../../images/market_shoppingcar.png) no-repeat;
			background-size: cover;
			border-radius: 50%;
			a{
				display: block;
				width: 100%;
				height:100%;
			}
			.num{
				position: absolute;
				display: inline-block;
				.pxrem(top, -20);
				.pxrem(right, -20);
				.pxrem(font-size, 20);
				background: @m-c;
				.prem(-4, 10);
				padding:@prem;
				color:#FFF;
				.pxrem(border-radius, 40);
			}
			.inner{
				.pxrem(width, 30);
				.pxrem(height, 30);
				border-radius: 50%;
				transition: all 0.4s linear;
				overflow: hidden;
				background: @m-c;
			}
		}
</style>