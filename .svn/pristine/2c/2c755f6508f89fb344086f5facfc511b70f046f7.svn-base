<!-- 订单 -->
<template>
	<div class="page-layer footer-page">
		<ul class="order-nav"  ref="nav">
			<li>
				<router-link to="/order/1">全部</router-link>
			</li>
			<li>
				<router-link to="/order/2">待付款</router-link>
			</li>
			<li>
				<router-link to="/order/3">待收货</router-link>
			</li>
			<li>
				<router-link to="/order/4">已完成</router-link>
			</li>
		</ul>
		<section ref="content">
			<router-view></router-view>
		</section>
		<FOOTERNAR :active="3" ref="footer"></FOOTERNAR>
	</div>
</template>
<script>
	import FOOTERNAR from "components/common/footer-nar"
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
		mounted() {
			var footer = document.getElementById("footerWrap");
			if(this.$refs.nav && footer) {
				const h = this.$refs.nav.getBoundingClientRect().height;
				var height = footer.offsetHeight ? footer.offsetHeight : 0;
				this.$refs.content.style.height = (document.body.clientHeight - h - height) + "px";
			}
		},
		methods: {
			
		}
	}
</script>
<style lang="less" scope>
	@import "../../common/less/config.less";
	.order-nav {
		background: #fff;
		overflow: auto;
		li {
			.pxrem(height, 80);
			.pxrem(line-height, 80);
			float: left;
			width: 25%;
			text-align: center;
			a {
				color: #4a4a4a;
				display: inline-block;
				width: 60%;
				.pxrem(height, 75);
			}
			a.router-link-active {
				color: @m-c;
				border-bottom: 2px solid @m-c;
			}
		}
	}
</style>