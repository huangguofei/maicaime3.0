<template>
	<article class="page-layer user-info">
		<article class="group padding">
			<section class="item">
				<b>头像</b>
				<aside class="pull-right">
					<img class="headimg" :src="detailInfo.headImg" v-if="detailInfo.headImg" />
					<img class="headimg" src="../../images/user-default.png" v-else />
					<img class="icon" src="../../images/mine_arrow2.png" />
				</aside>
			</section>
			<section class="item">
				<b>驿站名称</b>
				<aside class="pull-right">
					<span class="user-name">{{detailInfo.merchantName}}</span>
					<img class="icon" src="../../images/mine_arrow2.png" />
				</aside>
			</section>
			<section class="item">
				<b>联系人</b>
				<aside class="pull-right">
					<span class="user-linkman">{{detailInfo.realName}}</span>
					<img class="icon" src="../../images/mine_arrow2.png" />
				</aside>
			</section>
			<section class="item">
				<b>电话</b>
				<aside class="pull-right">
					<span class="user-phone">{{detailInfo.phone}}</span>
					<img class="icon" src="../../images/mine_arrow2.png" />
				</aside>
			</section>
			<section class="item">
				<b>地区</b>
				<aside class="pull-right">
					<span class="user-city">{{detailInfo.areaName}}</span>
					<img class="icon" src="../../images/mine_arrow2.png" />
				</aside>
			</section>
			<section class="item">
				<b>地址</b>
				<aside class="pull-right">
					<span class="user-address">{{detailInfo.address}}</span>
					<img class="icon" src="../../images/mine_arrow2.png" />
				</aside>
			</section>
		</article>
	</article>
</template>

<script>
	import server from "actionurl/user/user"
	export default {
		data() {
			return {
				detailInfo: {}
			}
		},
		props: [],
		created() {
			server.getUserDetailInfo(this);
		},
		methods: {

		},
		components: {

		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.user-info {
		background: #fff;
		.item {
			.pxrem(height, 115);
			border-bottom: 1px solid #eee;
			.clearfix();
			b {
				.pxrem(font-size, 32);
			}
			aside {
				height: 100%;
				span {
					.pxrem(font-size, 28);
					color: #666;
				}
			}
			b {
				.pxrem(line-height, 115);
			}
			span {
				display: inline-block;
				.pxrem(line-height, 115);
			}
			.headimg {
				.pxrem(width, 80);
				.pxrem(height, 80);
				.pxrem(border-radius, 40);
				.pxrem(margin-right, 50);
				.pxrem(margin-top, 10);
			}
			aside {
				position: relative;
				/*.pxrem(width, 300);*/
				text-align: right;
				span {
					.pxrem(margin-right, 50);
				}
				.icon {
					vertical-align: middle;
					position: absolute;
					.pxrem(top, 35);
					.pxrem(right, 5);
				}
			}
		}
		.item:last-child {
			border: 0;
		}
	}
</style>