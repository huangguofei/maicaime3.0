<template>
	<article class="page-layer goods-details">
		<article class="goods-img">
			<section class="img">
				<img src="../../images/Group.png" /></section>
			<section class="title">商品名称<img src="../../images/food_xiajia.png"/>
			</section>
			<section class="price padding">
				<section class="left"><input type="text" name="price" id="price" class="" /><i class="price-icon">¥</i></section>
				<section class="right"><input type="button" class="btn " value="上架"></section>
			</section>
		</article>
	</article>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: [],
		created() {

		},
		methods: {

		},
		components: {

		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.goods-details {
		background: #fff;
		.goods-img {
			.img {
				border-bottom: 1px solid #e9e9e9;
				padding-bottom: .3rem;
			}
			img {
				width: 80%;
				display: block;
				margin: 0 auto;
			}
			.title{
				.pxrem(font-size, 36);
				text-align: center;
				.pxrem(line-height, 105);
				img{
					display: inline-block;
					.pxrem(width,65);
					.pxrem(margin-left,10);
				}
			}
			.price {
				display: flex;
				justify-content: center;
				section {
					width: 50%;
				}
				.left {
					position: relative;
					text-align: right;
					.pxrem(padding-right, 30);
				}
				.right {
					.pxrem(padding-left, 30);
				}
				input {
					.pxrem(width, 200);
					text-align: center;
					.pxrem(height, 75);
					.pxrem(line-height, 75);
					.pxrem(border-radius, 9);
				}
				input[type='text'] {
					border: 1px solid #D7D7D7;
					.pxrem(font-size, 38);
				}
				input[type='button'] {
					background: @m-c;
				}
				i {
					position: absolute;
					font-style: normal;
					.pxrem(right, 200);
					.pxrem(top, 10);
					color: #000;
				}
			}
		}
	}
</style>