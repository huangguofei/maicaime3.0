<!-- 我的 -->
<template>
	<div class="page-layer" style="padding-bottom: .8rem;">
		<section class="bg"></section>
		<article class="user-main padding" v-cloak>
			<article class="user-header item padding">
				<section class="user-info header">
					<img :src="userInfo.headImg?userInfo.headImg:require('../../images/user-default.png')" class="pull-left" />
					<section class="user-name pull-left">
						<h2 class="title ellipsis">{{userInfo.merchantName}}</h2>
						<p class="ellipsis">{{userInfo.realName}}-{{userInfo.phone}}</p>
					</section>
				</section>
				<ul>
					<li class="h-item">
						<router-link to="/userintegral/"><b class="title">{{userInfo.integralAmount}}</b>
							<p>我的积分</p>
						</router-link>
					</li>
					<li class="h-item">
						<router-link to="/coupon/"><b class="title">{{userInfo.couponNum}}</b>
							<p>优惠券</p>
						</router-link>
					</li>
					<li class="h-item">
						<a href="/remaining/" target="_blank">
							<b class="title">¥{{(userInfo.balance * 1).toFixed(2)}}</b>
							<p>账户余额</p>
						</a>
					</li>
					<!-- <li>
						<router-link to="/user/"><b class="title">¥{{(userInfo.frozenAmount * 1).toFixed(2)}}</b>
							<p>冻结金额</p>
						</router-link>
					</li> -->
				</ul>
				<section class="header-right">
					<!--<router-link to="/message/" class="message new"><img src="../../images/message-icon.png" /><i></i></router-link>-->
					<a href="javascript:;" class="message new" @click="err"><img src="../../images/message-icon.png" /><i></i></a>
					<router-link to="/user/info"><img src="../../images/mine_arrow1.png" /></router-link>
				</section>
			</article>
			<article class="user-order item" v-cloak>
				<h2 class="header padding title">订单</h2>
				<ul>
					<li>
						<a href="/order/2"><span :class="{new:orderNum.pay!=0}"><img src="../../images/mine_pay.png" /><i></i></span>
							<p>待付款</p>
						</a>
					</li>
					<li>
						<a href="/order/3"><span :class="{new:orderNum.receive!=0}"><img src="../../images/mine_get.png" /><i></i></span>
							<p>待收货</p>
						</a>
					</li>
					<li>
						<a href="/order/4"><span :class="{new:orderNum.finish!=0}"><img src="../../images/mine_finshed.png" /><i></i></span>
							<p>已完成</p>
						</a>
					</li>
					<li>
						<a href="/order/1"><span :class="{new:orderNum.my!=0}"><img src="../../images/mine_all.png" /><i></i></span>
							<p>我的订单</p>
						</a>
					</li>
				</ul>
			</article>
			<article class="user-nav item">
				<!--<router-link to="/paylist/">
					<section class=""><img src="../../images/mine_liushui.png" /><span class="title">流水明细</span><img class="pull-right" src="../../images/mine_arrow2.png" /></section>
				</router-link>-->
				<router-link to="/checking/">
					<section class=""><img src="../../images/mine_liushui.png" /><span class="title">我的对账</span><img class="pull-right" src="../../images/mine_arrow2.png" /></section>
				</router-link>
				<router-link to="/staffManagement/">
					<section class=""><img src="../../images/mine_yuangong.png" /><span class="title">员工管理</span><img class="pull-right" src="../../images/mine_arrow2.png" /></section>
				</router-link>
			</article>
			<article class="user-nav item">
				<router-link to="/user/set"><img src="../../images/mine_setting.png" /><span class="title">设置</span><img class="pull-right" src="../../images/mine_arrow2.png" /></router-link>
				<router-link to="/user/about"><img src="../../images/mine_aboutus.png" /><span class="title">关于我们</span><img class="pull-right" src="../../images/mine_arrow2.png" /></router-link>
				<!--<section @click="err"><img src="../../images/mine_help.png" /><span class="title">使用帮助</span><img class="pull-right" src="../../images/mine_arrow2.png" /></section>-->
			</article>

		</article>
		<FOOTERNAR :active="5"></FOOTERNAR>
	</div>
</template>
<script>
	import FOOTERNAR from "../../components/common/footer-nar"
	import server from "actionurl/user/user"
	export default {
		data() {
			return {
				orderNum: {
					pay: 0,
					receive: 0,
					finish: 0,
					my: 0
				},
				userInfo: {
					address: "加载中",
					areaName: "加载中",
					balance: "加载中",
					couponNum: "加载中",
					frozenAmount: "加载中",
					integralAmount: "加载中",
					merchantName: "加载中",
					phone: "加载中",
					realName: "加载中"
				}
			}
		},
		components: {
			FOOTERNAR
		},
		created() {
			server.getOrderNum(this);
			server.getUserInfo(this);
		},
		methods: {
			err() {
				cJs.message('暂未开通此功能');
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.bg {
		position: fixed;
		top: 0;
		width: 100%;
		background: #19191E;
		.pxrem(height, 130);
		z-index: -1;
	}
	
	[v-cloak] {
		display: none;
	}
	
	ul {
		.clearfix();
		.pxrem(padding-top, 20);
		li {
			float: left;
			width: 25%;
			text-align: center;
			p {
				.pxrem(font-size, 24);
			}
			a {
				display: inline-block;
				.pxrem(font-size, 34);
			}
		}
		.h-item {
			width: 33.3%;
		}
	}
	
	.new {
		position: relative;
		i {
			position: absolute;
			.pxrem(width, 10);
			.pxrem(height, 10);
			border-radius: 50%;
			background: #F74C31;
			right: 0;
		}
	}
	
	.user-main {
		.title {
			.pxrem(font-size, 32);
			color: #000;
		}
		.item {
			background: #fff;
			.pxrem(margin-bottom, 20);
			.header {
				border-bottom: 1px solid #E5E5E5;
			}
		}
		.user-header {
			position: relative;
			.user-info {
				.pxrem(padding-top, 50);
				.pxrem(padding-bottom, 50);
				.clearfix();
				.user-name{
					width:calc(~"100% - 1.6rem");
				}
				img {
					.pxrem(width, 120);
					.pxrem(height, 120);
					.pxrem(margin-right, 20);
					border-radius: 50%;
				}
				p {
					.pxrem(font-size, 26);
					color: #4a4a4a;
				}
			}
			a {
				color: #666;
			}
			.header-right {
				position: absolute;
				.pxrem(top, 25);
				.pxrem(right, 25);
				a {
					display: block;
					img {
						.pxrem(width, 45);
						height: auto;
					}
				}
				a:first-child {
					.pxrem(margin-bottom, 20);
				}
			}
		}
		.user-order {
			.pxrem(padding-bottom, 20);
			ul {
				li {
					a {
						display: inline-block;
						width: 100%;
						img {
							.pxrem(width, 50);
							height: auto;
						}
						span {
							display: inline-block;
							.pxrem(min-height, 60);
						}
						color:#4a4a4a;
					}
				}
				li:nth-child(3) {
					border-right: 1px solid #E5E5E5;
					box-sizing: border-box;
				}
			}
		}
		.user-nav {
			.clearfix();
			.pxrem(padding-left, 25);
			.pxrem(padding-right, 25);
			a {
				display: block;
				.pxrem(padding-top, 25);
				.pxrem(padding-bottom, 25);
				border-bottom: 1px solid #E5E5E5;
				img {
					.pxrem(width, 40);
					height: auto;
					.pxrem(margin-right, 10);
					vertical-align: text-bottom;
				}
				img:last-child {
					.pxrem(width, 15);
					height: auto;
				}
			}
			a:last-child {
				section {
					border: 0;
				}
			}
		}
	}
</style>