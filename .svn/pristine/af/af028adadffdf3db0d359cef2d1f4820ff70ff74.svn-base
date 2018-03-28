<template>
	<article class="page-layer sales-search">
		<article class="group bk-white padding">
			<section class="item padding">
				<section class="title pull-left">
					<img src="../../images/mine_rank_calendar@2x.png" />
					<span>开始时间</span>
				</section>
				<section class="pull-right">
					<span>{{stime}}</span>
					<img src="../../images/mine_arrow2.png" />
				</section>
				<select-time class="selet-time" v-model="stime" :range="false" language="ch" @input="changetime('s')"></select-time>
			</section>
			<section class="item padding">
				<section class="title pull-left">
					<img src="../../images/mine_rank_calendar@2x.png" />
					<span>结束时间</span>
				</section>
				<section class="pull-right">
					<span>{{etime}}</span>
					<img src="../../images/mine_arrow2.png" />
				</section>
				<select-time class="selet-time" v-model="etime" :range="false" language="ch" @input="changetime('s')"></select-time>
			</section>
			<section class="item padding">
				<section class="title pull-left">
					<img src="../../images/mine_rank_choice@2x.png" />
					<span>查询类型</span>
				</section>
				<section class="pull-right">
					<nav v-if="searchType==1">
						<a :class="{active:selectIndex==1}" href="javascipt:;" @click="selectType('1')">菜品排行</a>
						<a :class="{active:selectIndex==2}" href="javascipt:;" @click="selectType('2')">客户排行</a>
						<!-- <a :class="{active:selectIndex==3}" href="javascipt:;" @click="selectType('3')">订单排行</a> -->
					</nav>
					<nav v-else>
						<a :class="{active:selectIndex==1}" href="javascipt:;" @click="selectType('1')">订单统计</a>
						<a :class="{active:selectIndex==2}" href="javascipt:;" @click="selectType('2')">商户统计</a>
					</nav>
				</section>
			</section>
		</article>
		<button class="btn" type="button" @click="queryData">查询</button>
	</article>
</template>

<script>
	import selectTime from "vue-date"
	export default {
		data() {
			return {
				searchType: this.$route.query.type,
				selectIndex: 1,
				stime: "",
				etime: ""
			}
		},
		created() {
			this.initTime();
		},
		methods: {
			selectType(type) {
				this.selectIndex = type;
			},
			changetime(type) {

			},
			initTime() {
				var nowDate = new Date();
				var y = nowDate.getFullYear();
				var m = nowDate.getMonth() + 1;
				m = m < 10 ? "0" + m : m;
				var d = nowDate.getDate();
				d = d < 10 ? "0" + d : d;
				this.stime = y + "-" + m + "-" + d;
				this.etime = y + "-" + m + "-" + d;
			},
			queryData() {
				if(!this.stime) {
					cJs.message("请选择开始时间")
					return false;
				} else if(!this.etime) {
					cJs.message("请选择结束时间")
					return false;
				}
				var sDateStr = new Date(this.stime).getTime(),
					eDateStr = new Date(this.etime).getTime();
				if(eDateStr < sDateStr) {
					cJs.message("结束时间不能大于开始时间")
					return false;
				}
				if(this.searchType == 1) {
					this.$router.push({
						name : "user.salesRank",
						query : {
							type : this.selectIndex,
							s : this.stime,
							e : this.etime,
						}
					});
				}
			}
		},
		components: {
			selectTime
		},

	}
</script>

<style lang="less">
	@import "../../common/less/config.less";
	.sales-search {
		.group {
			.item {
				.clearfix();
				border-bottom: 1px solid #e9e9e9;
				.pxrem(height, 110);
				box-sizing: border-box;
				position: relative;
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
							color: #000;
						}
						a.active {
							border-color: @m-c;
							color: @m-c;
						}
					}
				}
				.selet-time {
					position: absolute!important;
					top: 0;
					right: 0;
					/*z-index: 2;*/
					left: 0;
					height: 0;
					.input-wrapper {
						.pxrem(height, 90)!important;
						opacity: 0;
						position:relative;
						z-index:5;
						&>img {
							display: none;
						}
					}
					.date-panel{
						/*z-index: 10;*/
					}
				}
			}
		}
		.btn {
			display: block;
			width: 90%;
			.pxrem(height, 80);
			.pxrem(line-height, 80);
			text-align: center;
			background: @m-c;
			color: #fff;
			margin: 0 auto;
			.pxrem(border-radius, 12);
			.pxrem(margin-top, 60);
		}
	}
</style>