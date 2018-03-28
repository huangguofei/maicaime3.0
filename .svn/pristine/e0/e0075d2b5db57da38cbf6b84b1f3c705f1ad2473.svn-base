<!-- 对账 -->
<template>
	<div class="page-layer">
		<article class="checking">
			<header>结算周期为：每月7号生成一次账单</header>
			<h1 class="padding">历史对账单</h1>
			<article class="checking-list" v-if="checkingList.length>0">
				<router-link v-for="(v,k) in checkingList" :to="{name:'checking.details',params:{id:v.billId}}" class="item bk-white padding">
					<section class="pull-left" :class="{active:v.settlementStatusId!=1}">
						<p class="time">{{v.startDate}}-{{v.endDate}}</p>
						<span class="status">{{v.settlementStatusText}}</span>
					</section>
					<section class="item-right">
						<span class="price">¥0.00</span>
						<img src="../../images/Path 6.png" />
					</section>
				</router-link>
			</article>
			<p v-else class="null-status">暂无数据</p>
		</article>
		<FOOTERNAR :active="2"></FOOTERNAR>
	</div>
</template>
<script>
	import FOOTERNAR from "components/common/footer-nar"
	import server from "actionurl/checking/checking"
	export default {
		data() {
			return {
				checkingList: [],
				options: {
					pageNum: 1,
					pageSize: 10,
				}
			}
		},
		components: {
			FOOTERNAR
		},
		created() {
			server.getCheckingList(this);
		},
		methods: {

		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.null-status {
		text-align: center;
		.pxrem(height, 108);
		.pxrem(line-height, 108);
		background:#fff;
	}
	
	.checking {
		header {
			.pxrem(height, 70);
			.pxrem(line-height, 70);
			text-align: center;
			background: #FFF4DD;
			border-bottom: 1px solid #FCD586;
			.pxrem(font-size, 28);
		}
		h1 {
			.pxrem(font-size, 28);
			font-weight: none;
		}
		.checking-list {
			.item {
				position: relative;
				display: block;
				.pxrem(height, 108);
				border-bottom: 1px solid #e9e9e9;
				.clearfix();
				color: #000;
				.item-right {
					position: absolute;
					top: .2rem;
					right: .2rem;
				}
				.time {
					.pxrem(font-size, 34);
				}
				.active {
					.status {
						border-color: #d7d7d7;
						color: #666;
					}
				}
				.status {
					.pxrem(margin-top, 10);
					display: inline-block;
					.pxrem(width, 100);
					.pxrem(height, 40);
					.pxrem(line-height, 40);
					.pxrem(border-radius, 6);
					color: #F9AB0C;
					border: 1px solid #F9AB0C;
					text-align: center;
					.pxrem(font-size, 24);
				}
				.price {
					.pxrem(font-size, 38);
					display: inline-block;
					.pxrem(line-height, 40);
					.pxrem(line-height, 108);
					.pxrem(margin-right, 15);
				}
				img {
					.pxrem(width, 15);
				}
			}
		}
	}
</style>