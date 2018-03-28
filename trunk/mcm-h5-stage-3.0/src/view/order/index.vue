<!-- 订单 -->
<template>
	<div class="page-layers">
		<ul class="order-nav" ref="nav">
			<li>
				<router-link to="/order/new">待打包</router-link>
			</li>
			<li>
				<router-link to="/order/obligation">待取货</router-link>
			</li>
			<li>
				<router-link to="/order/waitreceiving">待收货</router-link>
			</li>
			<li>
				<router-link to="/order/accomplish">已完成</router-link>
			</li>
		</ul>
		<section ref="content">
			<router-view></router-view>
		</section>
		<FOOTERNAR :active="1" ref="footer"></FOOTERNAR>
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
		mounted() {
			var footer = document.getElementById("footerWrap");
			if(this.$refs.nav && footer) {
				const h = this.$refs.nav.getBoundingClientRect().height;
				var height = footer.offsetHeight ? footer.offsetHeight : 0;
				this.$refs.content.style.height = (document.body.clientHeight - h - height - 45) + "px";
			}
		},
		methods: {

		}
	}
</script>
<style lang="less" scope>
	@import "../../common/less/config.less";
	.page-layers{
		background:#f3f3f3;
	}
	.order-nav {
		background: #222;
		overflow: auto;
		li {
			.pxrem(height, 80);
			.pxrem(line-height, 80);
			float: left;
			width: 25%;
			text-align: center;
			a {
				color: #999;
				display: inline-block;
				width: 60%;
				.pxrem(height, 70);
			}
			a.router-link-active {
				color: #fff;
				border-bottom: 2px solid #fff;
			}
		}
	}
</style>