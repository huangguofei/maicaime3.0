<template>
	<article class="page-layer">
		<header class="padding bk-white">
			<h3 class="pull-left">提现账户</h3>
			<router-link to="/user/bankCard" class="pull-right">
				<p class="bank-name">招商银行卡</p><span class="bank-num">尾号5656</span>
			</router-link>
		</header>
		<article class="content bk-white padding">
			<section class="head">
				<p>本次提现</p>
				<section><i class="pull-left">¥</i><input type="text" maxlength="7" class="money-num pull-left" value="100" /></section>
			</section>
			<section class="footer">
				<p class="pull-left">账户余额 <span>¥0.00</span></p>
				<a class="pull-right" href="javascript:;">全部提现</a>
			</section>
		</article>
		<p class="remark">预计3个工作日到帐</p>
		<a href="javascript:;" class="sure-btn">提现</a>
	</article>
</template>

<script>
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	header {
		.pxrem(height, 84);
		.pxrem(margin-bottom, 20);
		.pxrem(margin-top, 20);
		.clearfix();
		h3 {
			.pxrem(line-height, 84);
			.pxrem(font-size, 32);
		}
		a {
			display: block;
			text-align: right;
			color: #000;
		}
		.bank-name {
			.pxrem(font-size, 28);
		}
		.bank-num {
			.pxrem(font-size, 24);
			color: #666;
		}
	}
	
	.content {
		.head {
			border-bottom: 1px solid #E9E9E9;
			.pxrem(margin-bottom, 30);
			section {
				.pxrem(padding-top, 20);
				.pxrem(padding-bottom, 40);
				.clearfix();
				i {
					.pxrem(font-size, 40);
					color: #222;
					font-style: normal;
					.pxrem(margin-top, 10);
				}
				input {
					.pxrem(font-size, 60);
					color: #2C3139;
					border: 0;
					width: 95%;
				}
			}
			p {
				.pxrem(font-size, 28);
				color: #222;
			}
		}
		.footer {
			.clearfix();
			.pxrem(height, 60);
			.pxrem(line-height, 60);
			p {
				.pxrem(font-size, 28);
				color: #2C3139;
				span {
					color: @m-c;
				}
			}
			a {
				display: inline-block;
				border: 1px solid @m-c;
				.pxrem(font-size, 24);
				color: @m-c;
				.pxrem(width, 150);
				.pxrem(height, 50);
				.pxrem(line-height, 50);
				text-align: center;
				.pxrem(border-radius, 6);
			}
		}
	}
	
	.remark {
		.pxrem(font-size, 28);
		color: #4a4a4a;
		text-align: center;
		.pxrem(margin-top, 80);
		.pxrem(margin-bottom, 40);
	}
	
	.sure-btn {
		display: block;
		background: @m-c;
		.pxrem(font-size, 36);
		color: #fff;
		width: 90%;
		margin: 0 auto;
		.pxrem(height, 80);
		.pxrem(line-height, 80);
		text-align: center;
		.pxrem(border-radius, 6);
	}
</style>