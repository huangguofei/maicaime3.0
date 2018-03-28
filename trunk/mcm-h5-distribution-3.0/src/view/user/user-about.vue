<template>
	<article class="page-layers user-about padding">
		<img src="../../images/about-logo.png" />
		<h2>买菜么</h2>
		<p>3.0.1版本</p>
		<article class="info-list padding">
			<section class="item">
				<span class="title">官方微信</span>
				<span class="val">mcmkefu</span>
			</section>
			<section class="item">
				<span class="title">官方网站 </span>
				<span class="val">www.maicaim.com</span>
			</section>
			<section class="item">
				<span class="title">客服电话</span>
				<span class="val">400-8080-838</span>
			</section>
			<section class="item">
				<span class="title">公司邮箱</span>
				<span class="val">kefu@ouryue.com</span>
			</section>
		</article>
		<aside>深圳悦厚科技有限公司版权所有</aside>
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
	.user-about {
		img {
			.pxrem(width, 150);
			display: block;
			margin: 0 auto;
			.pxrem(margin-top, 80);
			.pxrem(margin-bottom, 10);
		}
		h2 {
			.pxrem(font-size, 36);
			color: #1EC551;
			text-align: center;
			.pxrem(line-height, 80);
		}
		p {
			.pxrem(font-size, 24);
			color: #999;
			text-align: center;
		}
		.info-list {
			box-sizing: border-box;
			.item {
				.clearfix();
				width: 96%;
				.pxrem(font-size, 32);
				color: #222;
				.pxrem(line-height, 80);
				.pxrem(height, 80);
				border-bottom: 1px solid #e5e5e5;
				display: flex;
				justify-content: space-between;
				span {
					display: inline-block;
					width: 50%;
				}
				.title {
					/*float: left;*/
				}
				.val {
					text-align: right;
				}
			}
		}
		aside {
			position: fixed;
			.pxrem(bottom, 30);
			text-align: center;
			width: 100%;
			.pxrem(font-size, 24);
			color: #999;
		}
	}
</style>