<template>
	<article class="page-layer user-set">
		<article class="list">
			<section class="item padding">
				<span class="title pull-left">新消息通知</span>
				<img @click="changeSwitch(true)" v-if="switchs" class="switch pull-right" src="../../images/switch-open.png" />
				<img @click="changeSwitch(false)" v-else class="switch pull-right" src="../../images/switch-off.png" />
			</section>
			<section class="item padding" @click="err">
				<span class="title pull-left">修改密码</span>
				<img class="pull-right" src="../../images/mine_arrow2.png" />
			</section>
		</article>
		<section class="item padding">
			<span class="title pull-left">版本信息</span>
			<span class="val pull-right">v3.0.1</span>
		</section>
		<a href="javascipt:;" class="logout" @click="logout">退出登录</a>
	</article>
</template>

<script>
	import server from "actionurl/user/user"
	export default {
		data() {
			return {
				switchs: true
			}
		},
		props: [],
		created() {

		},
		methods: {
			logout() {
				server.logout(this);
			},changeSwitch(is){
				this.switchs=!is;
			},err() {
				cJs.message('暂未开通此功能');
			}
		},
		components: {

		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.logout {
		display: block;
		width: 80%;
		color: #fff;
		background: @m-c;
		.pxrem(height, 80);
		.pxrem(line-height, 80);
		.pxrem(border-radius, 5);
		margin: 0 auto;
		text-align: center;
		.pxrem(margin-top, 20);
	}
	
	.user-set {
		.list {
			.pxrem(margin-top, 20);
			.pxrem(margin-bottom, 20);
			.item {
				.switch {
					.pxrem(width, 90);
					.pxrem(margin-top,-10);
				}
				img{
					.pxrem(margin-top,10);
				}
			}
			.item:first-child{
				border-bottom:1px solid #E5E5E5;
			}
		}
		.item {
			.clearfix();
			background: #fff;
			box-sizing: border-box;
			.pxrem(height,110);
			span{
				.pxrem(line-height,78);
			}
		}
	}
</style>