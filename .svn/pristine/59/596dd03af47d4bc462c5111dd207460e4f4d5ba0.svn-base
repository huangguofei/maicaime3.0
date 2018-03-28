<template>
	<article class="select-shop">
		<article class="bg" @click="offPages"></article>
		<article class="content">
			<header class="padding">请选择供应商</header>
			<ul class="padding">
				<li v-for="(val,key) in shopData" :class="{active:val.isSelect}" @click="select(val)">
					<span>{{val.supplierName}}</span>
					<i class="radio pull-right"></i>
				</li>
			</ul>
			<section class="footer">
				<a href="javascript:;" @click="sendAll">已全部送达</a>
				<a href="javascript:;" @click="sure">确定</a>
			</section>
		</article>
	</article>
</template>

<script>
	import orderServer from 'actionurl/order/order'
	export default {
		data() {
			return {

			}
		},
		props: ['shopData', 'orderId'],
		created() {
			console.log(this.shopData)
		},
		wacth: {
			shopData(val) {
				console.log(val)
			}
		},
		methods: {
			offPages() {
				this.$emit("offPage");
			},
			sendAll() {
				orderServer.orderConfirmGoto(this, 'all');
			},
			sure() {
				orderServer.orderConfirmGoto(this, '');
			},
			select(data) {
				data.isSelect = !data.isSelect;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.select-shop {
		position: fixed;
		top: 0;
		width: 100%;
		bottom: 0;
		z-index: 999;
		.bg {
			position: absolute;
			top: 0;
			bottom: 0;
			width: 100%;
			background: #000;
			opacity: .5;
		}
		.content {
			background: #fff;
			position: absolute;
			bottom: 0;
			width: 100%;
			header {
				text-align: center;
				.pxrem(font-size, 36);
				border-bottom: 1px solid #eee;
			}
			ul {
				.pxrem(font-size, 32);
				li {
					.pxrem(margin-bottom, 20);
					i {
						.pxrem(width, 32);
						.pxrem(height, 32);
						border: 1px solid #a4a4a4;
						/*.pxrem(border-radius,50);*/
						border-radius: 50%;
						overflow: hidden;
					}
				}
				.active {
					i {
						background: url(../../images/select_checkbox_pre.png) -1px -1px;
						background-size: 120% auto;
						border-color: @m-c;
					}
				}
			}
			.footer {
				.pxrem(font-size, 32);
				text-align: center;
				margin-bottom: .3rem;
				a {
					display: inline-block;
					width: 35%;
					border: 1px solid #e9e9e9;
					.pxrem(border-radius, 6);
					.pxrem(height, 70);
					.pxrem(line-height, 70);
					color: #000;
				}
				a:last-child {
					color: @m-c;
					border-color: @m-c;
					.pxrem(margin-left, 30);
				}
			}
		}
	}
</style>