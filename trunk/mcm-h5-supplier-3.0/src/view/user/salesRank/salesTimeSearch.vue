<template>
	<article class="page-layer sales-search">
		<article class="group bk-white padding">
			<section class="item padding">
				<section class="title pull-left">
					<img src="../../../images/mine_rank_calendar@2x.png" />
					<span>开始时间</span>
				</section>
				<section class="pull-right">
					<span>2017-08-21</span>
					<img src="../../../images/mine_arrow2.png" />
				</section>
			</section>
			<section class="item padding">
				<section class="title pull-left">
					<img src="../../../images/mine_rank_calendar@2x.png" />
					<span>结束时间</span>
				</section>
				<section class="pull-right">
					<span>2017-08-21</span>
					<img src="../../../images/mine_arrow2.png" />
				</section>
			</section>
			<section class="item padding">
				<section class="title pull-left">
					<img src="../../../images/mine_rank_choice@2x.png" />
					<span>查询类型</span>
				</section>
				<section class="pull-right">
					<nav>
						<a :class="{active:searchType==1}" href="javascipt:;" @click="selectType('1')">菜品排行</a>
						<a :class="{active:searchType==2}" href="javascipt:;" @click="selectType('2')">客户排行</a>
						<!-- <a :class="{active:searchType==3}" href="javascipt:;" @click="selectType('3')">订单排行</a> -->
					</nav>
				</section>
			</section>
		</article>
		<button class="btn" type="button">查询</button>
	</article>
</template>

<script>
	import selectTime from "vue-date"
	export default {
		data(){
			return {
				searchType:1
			}
		},methods:{
			selectType(type){
				this.searchType=type;
			}
		},components:{
			selectTime
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.sales-search {
		.group {
			.item {
				.clearfix();
				border-bottom: 1px solid #e9e9e9;
				.pxrem(height, 110);
				box-sizing: border-box;
				section {
					height: 100%;
					span {
						display: inline-block;
						.pxrem(line-height, 78);
					}
				}
				.title {
					.pxrem(font-size, 32);
					img {
						.pxrem(width, 40);
						.pxrem(margin-right, 10);
						vertical-align: text-bottom;
					}
				}
				.pull-right {
					.pxrem(font-size, 30);
					color: #666;
					img {
						.pxrem(width, 12);
					}
					nav {
						height: 100%;
						a {
							display: inline-block;
							.pxrem(font-size, 22);
							.pxrem(line-height, 50);
							.pxrem(height, 50);
							.pxrem(margin-top, 8);
							.pxrem(margin-left, 5);
							.pxrem(padding-left, 20);
							.pxrem(padding-right, 20);
							.pxrem(border-radius, 25);
							border: 1px solid #d7d7d7;
							color:#000;
						}
						a.active{
							border-color:@m-c;
							color:@m-c;
						}
					}
				}
			}
		}
		.btn{
			display: block;
			width: 90%;
			.pxrem(height, 80);
			.pxrem(line-height, 80);
			text-align:center;
			background:@m-c;
			color: #fff;
			margin: 0 auto;
			.pxrem(border-radius,12);
			.pxrem(margin-top, 60);
		}
	}
</style>