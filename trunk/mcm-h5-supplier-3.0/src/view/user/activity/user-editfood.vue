<template>
	<article class="page-layer padding">
		<article class="food-details bk-white padding">
			<img class="pull-left" :src="foodData.skuImage" />
			<section class="food-info pull-left">
				<p class="food-name">{{foodData.skuName}}</p>
				<p class="food-price">¥{{foodData.offerPrice}}</p>
			</section>
		</article>
		<article class="food-edit bk-white padding">
			<article class="form hr">
				<p class="title">活动价格</p>
				<section class="form-item">
					<input type="number" class="activity-price" id="price" v-model="price" placeholder="¥输入该商品参与活动价格" />
				</section>
				<!-- <section class="form-item">
					<span>设置库存：</span>
					<input type="text" id="price" v-model="repertory" placeholder="输入参与活动的商品数量" />
				</section> -->
			</article>
			<article  class="set-num">
				<span class="pull-left">限购规则：</span>
				<section class="pull-right">
					<span class="switch" @click="switchRules">
						<img src="../../../images/switch-open.png" v-if="ruleShow" />
						<img src="../../../images/switch-off.png" v-else />
					</span>
				</section>
			</article>
			<article v-show="ruleShow">
				<div class="row">
					<p class="title">限购数量</p>
					<section class="form-item">
						<input type="number" class="activity-price" v-model="limitedRules.count"  placeholder="请输入该商品用户参与活动的限购数量" />
					</section>
				</div>
				<div class="row">
					<p class="title">设置库存</p>
					<section class="form-item">
						<input type="number" class="activity-price" v-model="limitedRules.totalAmount"  placeholder="输入该商品参与活动的总库存" />
					</section>
				</div>
			</article>
		</article>
		<section class="btn-confim" @click="addFood">确定</section>
	</article>
</template>

<script>
	import postServer from "actionurl/user/userActivity"
	export default {
		data() {
			return {
				foodData: JSON.parse(window.localStorage.getItem("foodData")),
				price: "",
				repertory: 99,
				activityId:this.$route.query.id,
				ruleShow : false,
				limitedRules : {
					period : 4,
					count : "",
					totalAmount : ""
				}
			}
		},
		created() {
		},
		methods: {
			addFood(){
				if(!this.price) {
					cJs.message("活动价格不能为空");
					return false;
				} else if(this.price == 0) {
					cJs.message("活动价格必须大于0");
					return false;
				}else if(!cJs.checkPrice(this.price)) {
					cJs.message("活动价格格式错误,只能保留两位小数");
					return false;
				}
				if(this.ruleShow) {
					if(this.limitedRules.count == "") {
						cJs.message("限购数量不能为空！");
						return false;
					} else if(this.limitedRules.count < 1) {
						cJs.message("限购数量不能少于1！");
						return false;
					} else if(this.limitedRules.totalAmount != "" && this.limitedRules.totalAmount < 1) {
						cJs.message("库存数量不能少于1！");
						return false;
					}
				}
				postServer.postActivityFood(this);
			},
			switchRules() {
				this.ruleShow = this.ruleShow ? false : true;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.page-layer {
		box-sizing: border-box;
	}
	
	.bk-white {
		background: #fff;
	}
	
	.food-details {
		.clearfix();
		.pxrem(margin-bottom, 20);
		img {
			.pxrem(width, 120);
			.pxrem(height, 120);
			.pxrem(margin-right, 20);
		}
		.food-name {
			.pxrem(font-size, 28);
		}
		.food-price {
			.pxrem(margin-top, 25);
			.pxrem(font-size, 36);
			color: #F98A0C;
		}
	}
	
	.food-edit {
		.title {
			.pxrem(font-size, 32);
			.pxrem(margin-bottom, 20);
		}
			
		.form-item {
			.pxrem(height, 80);
			.pxrem(line-height, 80);
			border: 1px solid #D7D7D7;
			.pxrem(margin-bottom, 15);
			.pxrem(padding-left, 10);
			.pxrem(border-radius, 5);
			span {
				.pxrem(font-size, 28);
			}
			input {
				border: 0;
				outline: none;
				width:100%;
				.pxrem(font-size, 28);
			}
		}
		.set-num {
			.clearfix();
			span {
				.pxrem(font-size, 32);
				display: inline-block;
				.pxrem(height, 100);
				.pxrem(line-height, 100);
			}
			.switch{
				display: inline-block;
				.pxrem(width,126);
				.pxrem(height,80);
				.pxrem(margin-top,10);
				text-align: right;
				img{
					height: 100%;
				}
			}
		}
	}
	
	.btn-confim {
		.pxrem(margin-top, 60);
		background: @m-c;
		color: #fff;
		.pxrem(font-size, 32);
		.pxrem(border-radius, 8);
		text-align: center;
		.pxrem(height, 80);
		.pxrem(line-height, 80);
	}
</style>