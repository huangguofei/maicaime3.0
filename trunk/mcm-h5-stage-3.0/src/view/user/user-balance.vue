<template>
	<article class="page-layer">
		<header class="">
			<p>账户余额(元)</p>
			<section>
				<h2>0.00</h2>
				<!--<router-link to="/user/balanceDetails" class="details">明细</router-link>-->
				<a href="javascript:cJs.message('此功能暂未开放');" class="details">明细</a>
			</section>
		</header>
		<!--<router-link to="/user/deposit" class="group padding">
			<img src="../../images/moery-iocn.png" />
			<a class="deposit" href="javascript:;">提现</a>
			<img src="../../images/mine_arrow2.png" />
		</router-link>-->
	</article>
</template>

<script>
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	header {
		background: @m-c;
		.pxrem(height, 250);
		.pxrem(padding, 50);
		box-sizing: border-box;
		color: #fff;
		.pxrem(font-size, 28);
		section {
			position: relative;
			h2 {
				line-height: 1rem;
				.pxrem(font-size, 80);
			}
			a {
				position: absolute;
				top: .3rem;
				right: 0;
				color: #fff;
				.pxrem(width, 120);
				.pxrem(height, 50);
				.pxrem(line-height, 50);
				text-align: center;
				border: 1px solid #fff;
				.pxrem(border-radius, 6);
			}
		}
	}
	
	.group {
		position:relative;
		display:block;
		margin-top: .2rem;
		.pxrem(height, 68);
		.pxrem(line-height, 68);
		background:#fff;
		img:first-child{
			.pxrem(width,30);
			.pxrem(margin-right,15);
			vertical-align:sub;
		}
		img:last-child{
			.pxrem(width,20);
			position:absolute;
			right:.2rem;
			top:.3rem
		}
		a{
			color:#000;
			.pxrem(font-size, 32);
			display:inline-block;
		}
	}
</style>