<template>
	<article class="page-layer">
		<article class="list bk-white padding">
			<section class="item" @click="lookDetails">
				<section class="pull-left">
					<h3>配送费</h3>
					<span class="time">2017.05.31 16:00</span>
				</section>
				<span class="price pull-right">+¥5.00</span>
			</section>
			<section class="item" @click="lookDetails">
				<section class="pull-left">
					<h3>配送费</h3>
					<span class="time">2017.05.31 16:00</span>
				</section>
				<span class="price pull-right">+¥5.00</span>
			</section>
		</article>
	</article>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		},methods:{
			lookDetails(){
				this.$router.push({
					name:"user.balanceDetails",
					params:{
						id:123
					}
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.list {
		.item {
			.clearfix();
			.pxrem(height, 90);
			border-bottom: 1px solid #eee;
			.pxrem(padding-bottom, 16);
			.pxrem(padding-top, 16);
			h3 {
				.pxrem(font-size, 32);
				.pxrem(margin-bottom, 10);
			}
			.time {
				.pxrem(font-size, 24);
				color: #666;
			}
			.price {
				.pxrem(font-size, 38);
				color: @m-c;
				.pxrem(line-height, 90);
			}
		}
		.item:last-child {
			border: 0;
		}
	}
</style>