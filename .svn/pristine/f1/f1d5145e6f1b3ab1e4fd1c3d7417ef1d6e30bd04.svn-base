<template>
	<article class="select-shop">
		<div class="bg">

		</div>
		<div class="content">
			<header class="padding">
				请选择您需要前往的店铺
				<img src="../../images/off.png" @click="hidePage" class="off-page" />
			</header>
			<section class="shop-list">
				<div class="padding" v-for="(val,key) in shopList">
					<h4 class="pull-left">{{val.merchantName}}</h4>
					<button type="button" class="pull-right" @click="goPage(val)" v-if="val.status == 1">进入</button>
					<button class="pull-right pull-end" v-if="val.status == 0">已禁用</button>
					<button class="pull-right pull-end" v-if="val.status == -1">已删除</button>
					<button class="pull-right pull-end" v-if="val.status == 5">待审核</button>
					<button class="pull-right pull-end" v-if="val.status == -5">待激活</button>
				</div>
			</section>
		</div>
	</article>
</template>

<script>
	import loginApi from "actionurl/login/login"
	export default {
		data(){
			return {
				
			}
		},
		props:['shopList','userInfo'],
		methods:{
			hidePage(){
				this.$parent.isSelectShop=false;
			},
			goPage(item){
				loginApi.selectShop(this,item.merchantId);
			}
		}
	}
	
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.select-shop {
		margin: 0!important;
		position: fixed;
		top: 0;
		bottom: 0;
		width: 100%;
		.bg {
			width: 100%;
			height: 100%;
			background: #000;
			opacity: 0.3;
		}
		.content {
			width: 80%;
			position: fixed;
			top: 20%;
			left: 10%;
			background: #fff;
			.pxrem(border-radius, 16);
			header {
				position: relative;
				background: @m-c;
				.rem(16);
				border-radius:@rem @rem 0 0;
				color:#fff;
				.pxrem(font-size, 36);
				text-align:center;
				/*.pxrem(border-radius, 16);*/
				img {
					position: absolute;
					top: -35%;
					.pxrem(right, -16);
					.pxrem(width, 32);
					border-radius: 50%;
					background: #fff;
					.pxrem(padding, 10);
				}
			}
			.shop-list{
				&>div{
					.clearfix();
				}
				h4{
					.pxrem(font-size, 32);
				}
				button{
					color:#fff;
					.pxrem(font-size, 28);
					border:0;
					background:#F98A0C;
					text-align:center;
					.pxrem(width, 105);
					.pxrem(height, 50);
					.pxrem(border-radius, 8);
				}
				.pull-end{
					background: #888;
				}
			}
		}
	}
</style>