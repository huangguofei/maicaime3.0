<template>
	<article class="page-layer invitation-apply-success">
		<header></header>
		<article class="content">
			<section class="header hr">
				<img src="../../images/list_order_order_finish.png" />
				<p class="success-status">申请成功，等待对方同意！</p>
				<h3>牛先森和猫小姐的店</h3>
				<p>商户地址：深圳市龙岗区大运小镇15栋2楼</p>
				<p>商户电话：15694839485</p>
			</section>
			<section class="form padding">
				<a href="javascript:;">
					<img src="" class="erweima" />
				</a>
				<p>长按关注买菜么公众号</p>
			</section>
		</article>
	</article>
</template>

<script>
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.invitation-apply-success {
		header {
			background: url(../../images/login-header.png);
			background-size: cover;
			height: 4rem;
			img {
				width: 100%;
			}
		}
		.content {
			background: #fff;
			position: absolute;
			top: 3rem;
			width: 90%;
			margin: 0 5%;
			.pxrem(border-radius, 14);
			.header {
				text-align: center;
				.pxrem(padding-bottom, 20);
				&:before {
					.pxrem(left, -15);
				}
				&:after {
					.pxrem(right, -15);
				}
				img {
					.pxrem(width, 250);
					.pxrem(margin-top, 50);
					.pxrem(margin-bottom, 20);
				}
				p {
					.pxrem(font-size, 28);
					color: #222;
				}
				.success-status{
					.pxrem(font-size, 32);
					.pxrem(margin-bottom, 60);
				}
				h3 {
					.pxrem(font-size, 40);
					.pxrem(margin-bottom, 10);
				}
			}
			.form {
				a {
					display: block;
					.pxrem(width, 280);
					.pxrem(height, 280);
					.pxrem(padding, 20);
					border: 1px solid #E5E5E5;
					margin: 0 auto;
					img {
						
					}
					
				}
				p{
					.pxrem(width, 380);
					.pxrem(height, 60);
					.pxrem(line-height, 60);
					border: 1px solid #E5E5E5;
					text-align: center;
					.pxrem(font-size, 28);
					color: #222;
					margin: 0 auto;
					.pxrem(margin-top, 20);
				}
			}
		}
	}
</style>