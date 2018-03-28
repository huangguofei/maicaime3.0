<template>
	<article class="page-layer balance-details">
		<article class="content padding bk-white">
			<section class="item">
				<span class="title">入账金额</span>
				<span class="val">¥645.90</span>
			</section>
			<section class="item">
				<span class="title">类&#12288;&#12288;型：</span>
				<span class="val">收入</span>
			</section>
			<section class="item">
				<span class="title">时&#12288;&#12288;间：</span>
				<span class="val">2017-01-05 15:21:23</span>
			</section>
			<section class="item">
				<span class="title">交易单号：</span>
				<span class="val">20170105152123148422543</span>
			</section>
			<section class="item">
				<span class="title">剩余零钱：</span>
				<span class="val">¥423.90</span>
			</section>
			<section class="item">
				<span class="title">备&#12288;&#12288;注：</span>
				<span class="val">刘浩然酒楼采购14524件食材</span>
			</section>
		</article>
	</article>
</template>

<script>
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.balance-details {
		.content {
			.item {
				.pxrem(font-size, 28);
				color: #2C3139;
				.pxrem(height, 50);
				.pxrem(line-height, 50);
				span {
					display: inline-block;
				}
				.val {
					float: right;
				}
			}
			.item:first-child {
				.pxrem(height, 150);
				.pxrem(line-height, 150);
				border-bottom: 1px solid #EEEEEE;
				.pxrem(margin-bottom,20);
				.title {
					.pxrem(font-size, 32);
				}
				.val {
					.pxrem(font-size, 38);
					color:#1EC551;
				}
			}
		}
	}
</style>