<template>
	<article class="page-layer user-details">
		<article class="group user-info padding bk-white">
			<section class="item">
				<b>头像</b>
				<aside class="pull-right">
					<img class="headimg" :src="detailInfo.headImg" v-if="detailInfo.headImg" />
					<img class="headimg" src="../../images/user-default.png" v-else />
					<img class="icon" src="../../images/mine_arrow2.png" />
				</aside>
			</section>
			<section class="item">
				<b>联系人</b>
				<aside class="pull-right">
					<span class="user-name">{{detailInfo.realName}}</span>
					<img class="icon" src="../../images/mine_arrow2.png" />
				</aside>
			</section>
			<section class="item">
				<b>手机号</b>
				<aside class="pull-right">
					<span class="user-phone">{{detailInfo.phone}}</span>
				</aside>
			</section>
		</article>
		<article class="group user-marker padding bk-white padding">
			<section class="item">
				<aside>
					<b>主营</b>
					<span>{{detailInfo.major}}</span>
				</aside>
				<img class="icon" src="../../images/mine_arrow2.png" />
			</section>
			<section class="item">
				<aside>
					<b>店铺地址</b>
					<span>{{detailInfo.address}}</span>
				</aside>
			</section>
		</article>
	</article>
</template>

<script>
import server from "actionurl/user/user"
export default{
	data() {
		return{
			detailInfo: {}
		}
	},
	created() {
		server.getUserDetailInfo(this);
	},
}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.user-details {
		.user-info {
			margin-bottom: .3rem;
			.item {
				.pxrem(height, 115);
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
					width:70%;
					text-align: right;
					span {
						.pxrem(margin-right, 50);
					}
					.user-phone {
						.pxrem(margin-right, 20);
					}
					.icon {
						vertical-align: middle;
						position: absolute;
						.pxrem(top, 35);
						.pxrem(right, 5);
					}
				}
			}
		}
	}
	
	.user-marker {
		padding-top: 0;
		.item {
			position:relative;
			.pxrem(height, 140);
			.pxrem(padding-top,20);
			.pxrem(padding-bottom,20);
			box-sizing:border-box;
			b {
				display: block;
			}
			.icon{
				position: absolute;
				.pxrem(top,50);
				.pxrem(right,10);
			}
		}
	}
	
	.group {
		padding-bottom: 0;
		.item {
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
		}
		.item:last-child {
			border: 0;
		}
	}
</style>