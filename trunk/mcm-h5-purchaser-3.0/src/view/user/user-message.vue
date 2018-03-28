<template>
	<article class="message padding">
		<ul>
			<li class="padding">
				<header>
					<section class="pull-left"><img src="../../images/mine_message_icon1.png" /><span class="new">系统通知<i></i></span></section>
					<span class="pull-right">2017-01-15 16:54:34</span>
				</header>
				<p class="content">12月23日，买菜么招商会议邀请您参加，查看详情</p>
			</li>
			<li class="padding">
				<header>
					<section class="pull-left"><img src="../../images/mine_message_icon2.png" /><span class="new">缺货通知<i></i></span></section>
					<span class="pull-right">2017-01-15 16:54:34</span>
				</header>
				<p class="content">您在刘浩然神马都有批发部购买的食材有缺货，供应商马上与你联系</p>
			</li>
		</ul>
	</article>
</template>

<script>
	import FOOTERNAR from "../../components/common/footer-nar"
	export default {
		data() {
			return {

			}
		},
		components: {
			FOOTERNAR
		},
		created() {

		},
		methods: {

		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.message {
		ul {
			li {
				width: 100%;
				border: 1px solid #E9E9E9;
				.pxrem(border-radius, 8);
				background: #fff;
				.pxrem(margin-bottom, 20);
				box-sizing: border-box;
				header {
					.clearfix();
					section {
						img {
							.pxrem(width, 40);
							.pxrem(height, 40);
							.pxrem(margin-right, 10);
							vertical-align: middle;
						}
						span {
							.pxrem(font-size, 32);
							color: #000;
							font-weight: bold;
						}
					}
					span {
						color: #666;
						.pxrem(font-size, 23);
					}
				}
				.content {
					.pxrem(margin-top, 20);
					color: #666;
					.pxrem(font-size, 28);
				}
				.new {
					position: relative;
					i {
						position: absolute;
						.pxrem(width, 10);
						.pxrem(height, 10);
						border-radius: 50%;
						background: #FF5B60;
						right: -0.05rem;
					}
				}
			}
		}
	}
</style>