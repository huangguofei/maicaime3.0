<template>
	<article class="evaluate-result padding">
		<article class="bk-white">
			<header>
				<img src="../../images/order_value_justsoso.png" />
				<h3>诚信商行批发部</h3>
			</header>
			<p>——— 我的评价 ———</p>
			<star :isClick="isClick" :level="level"></star>
			<h4>恭喜您，获得15积分</h4>
			<a href="javascrip:;">查看积分</a>
		</article>
	</article>
</template>

<script>
	import star from 'components/common/star'
	export default {
		data() {
			return {
				isClick: false,
				level: 3
			}
		},
		created() {

		},
		methods: {},
		components: {
			star
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.bk-white {
		background: #fff;
	}
	
	.evaluate-result {
		text-align: center;
		&>article {
			.pxrem(padding, 68);
		}
		header {
			img {
				.pxrem(width, 120);
				.pxrem(border-radius, 60);
			}
			h3 {
				.pxrem(font-size, 40);
				.pxrem(margin-top, 15);
			}
		}
		p {
			.pxrem(margin-top, 35);
			.pxrem(margin-bottom, 20);
			.pxrem(font-size, 28);
			color: #222;
		}
		h4 {
			.pxrem(font-size, 36);
			color: #222;
			.pxrem(margin-top, 50);
			.pxrem(margin-bottom, 35);
		}
		a {
			display: inline-block;
			border: 1px solid #d7d7d7;
			color: #4a4a4a;
			.pxrem(font-size, 32);
			.pxrem(border-radius, 8);
			.pxrem(padding, 12);
			padding: 0.125rem 0.3125rem;
		}
	}
</style>