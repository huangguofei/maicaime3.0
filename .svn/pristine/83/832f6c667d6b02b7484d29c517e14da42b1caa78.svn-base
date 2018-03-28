<template>
	<article class="order-list padding">
		<order-null v-if="orderData.length==0"></order-null>
		<scroll v-else :pullingDown="true" :listenScroll="true" :pullUpLoad="true" :delayTime="0" :height="scrollHeight" :startY="scrollTop" @pullingUp="onPullingUp" @scrollEnd="orderScroll" ref="scroll">
			<section class="s-item" v-for="(item,key) in orderData" v-if="orderData.length>0" v-show="isDivide(item)">
				<header class="padding" @click="orderDateils(item,'select')">
					<div class="title pull-left" :class="{active:item.select}">
						<span class="check-box" v-if="item.orderStatusId=='40'&&isSelect"></span>
						<img src="../../images/list_order_store.png" />
						<span class="supplier-name ellipsis">
							{{item.supplierName?item.supplierName:(item.products.length>0?(item.products[0].prodName+'等'+item.skuCount+'种食材'):"")}}
						</span>
						<img v-if="item.orderTypeId=='2'" class="integral-icon" src="../../images/integral-icon.png" />
					</div>
					<span class="order-status pull-right">{{item.orderStatusText=='待确认'?'待收货':item.orderStatusText}}</span>
				</header>
				<section class="shop-list padding" @click="orderDateils(item)">
					<div class="shop-item" v-for="(val,key) in item.products">
						<section class="item-left pull-left">
							<p class="commodity-name"><i></i><span>{{val.prodName}}</span></p>
							<p class="price-num"><span>单价:¥{{val.skuPrice|ms}}</span><span>数量:{{val.actualQuantity}}</span></p>
						</section>
						<section class="item-right pull-right">
							<b>¥{{val.totalAmount|ms}}</b>
						</section>
					</div>
					<p class="remark" v-show="item.skuCount>noShowNum">(还有{{item.skuCount-noShowNum}}件食材)</p>
				</section>
				<footer class="padding">
					<p class="pull-left">实付：
						<span class="price" v-if="item.orderTypeId == 2">{{item.totalAmount}}积分</span>
						<span class="price" v-else>¥{{item.totalAmount|ms}}</span>
					</p>
					<button type="button" class="btn order-btn pull-right" v-if="item.orderStatusId==20 || item.orderStatusId==50" @click="goSubmitPay(item)">付款</button>

					<a href="javascript:;" class="btn order-btn pull-right" v-else-if="item.orderStatusId==40" @click.stop="goTakeDelivery(item)">
						确认收货
					</a>

					<!--<input type="button" value="评价" class="order-btn pull-right order-btns" v-else-if="item.orderStatusId==100" @click="goEvaluate(item)"/>-->
					<!--<span v-show="item.orderStatusId==100" class='pull-right'>可获得15积分</span>暂时不显示-->
				</footer>
			</section>
		</scroll>
		<verify-food-list :foodData="foodData" v-if="isShowPage" @hidePage="offPage" @practicalAmount="practicalAmount" @confirmReceipt="confirmReceipt">
		</verify-food-list>
		<pay-ment v-if="payShow" :totalAmount="payPrice" :submitPay="submitPay" :prodType="prodType" :supportDelivery="supportDelivery" @closePay="closePay"></pay-ment>
		<recharge-layer v-if="rechargeShow" :surplusPrice="surplusPrice" @closeRecharge="closeRecharge"></recharge-layer>
	</article>
</template>

<script>
	import payMent from 'components/common/payment-type'
	import commonAction from 'actionurl/common/common'
	import orderServer from 'actionurl/order/order'
	import verifyFoodList from 'components/order/verify-food-list'
	import scroll from "components/common/scroll"
	import rechargeLayer from "components/common/recharge-layer"
	import orderNull from "components/order/order-null"
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				isRemark: true,
				payShow: false,
				orderId: "",
				totalAmount: 0,
				isLoad: false,
				isShowPage: false,
				foodData: {
					orderStatusId: 99,
					products: [],
					totalAmount: 0,
					orderId: ""
				},
				rechargeShow: false,
				surplusPrice: 0,
				prodType: 0,
				payPrice: 0,
				supportDelivery: false,
				orderType: "",
				orderStatusId: 0,
				payedAmount: 0
			}
		},
		computed: {
			...mapGetters({
				orderData: "orderList",
				scrollTop: "scrollTop"
			})

		},
		mounted() {
			if(this.isSelect) {
				document.getElementsByClassName("order-list")[0].style.height = "calc(100% - 1rem)";
			}
		},
		props: ['noShowNum', "scrollHeight", 'isSelect', 'isdivide'],
		methods: {
			orderDateils(obj, type) {
				if(this.isSelect && type && obj.orderStatusId == '40') {
					obj.select = !obj.select;
					if(!obj.select) {
						this.$emit("cancelSelectAll");
					}
					return false;
				}
				this.$router.push({
					name: "order.detail",
					params: {
						id: obj.orderId
					},
					query: {
						status: obj.orderStatusId
					}
				})
			},
			goSubmitPay(item) {
				this.payShow = true;
				this.orderId = item.orderId;
				this.totalAmount = item.totalAmount;
				this.payPrice = this.totalAmount;
				this.orderType = 0;
				this.orderStatusId = item.orderStatusId;
				if(item.orderTypeId == 2) {
					/*积分商品*/
					this.totalAmount = item.discountAmount;
					this.payPrice = (item.discountAmount - item.payedAmount).toFixed(2);
					this.supportDelivery = false;
				} else {
					if(item.orderStatusId == 50) {
						localStorage.setItem("orderId", this.orderId);
						this.prodType = 2;
						this.supportDelivery = false;
						this.payedAmount = item.payedAmount;
						this.payPrice = (item.totalAmount - item.payedAmount).toFixed(2);
					} else if(item.orderStatusId == 20) {
						/*支持货到付款*/
						this.supportDelivery = true;
					}
				}

			},
			goTakeDelivery(item) { /*确认收货*/
				if(item.orderTypeId == 2) {
					orderServer.integralOrderConfirmReceipt(this, item.orderId);
					return false;
				}
				this.foodData.orderId = item.orderId;
				this.foodData.orderStatusId = item.orderStatusId;
				this.orderId = item.orderId;
				this.totalAmount = item.totalAmount;
				localStorage.setItem("orderId", item.orderId);
				orderServer.orderFood(this, item.orderId, item.discountAmount);
				this.isShowPage = true;
				document.getElementsByTagName("body")[0].setAttribute("style", "overflow:hidden");
			},
			submitPay(payType, balance) {
				if(payType == 2) {
					commonAction.delayedPayment(this);
				} else {
					if(balance - this.totalAmount < 0) {
						this.rechargeShow = true;
						this.surplusPrice = (this.totalAmount - balance - this.payedAmount).toFixed(2);
					} else {
						commonAction.payByBalance(this, this.foodData.orderStatusId);
					}
				}
			},
			onScoll(event) {
				var offsetHeight = event.currentTarget.offsetHeight,
					scrollHeight = event.target.scrollHeight,
					scrollTop = event.target.scrollTop,
					scrollBottom = offsetHeight + scrollTop
				if(scrollTop === 0) {
					if(this.pgNo === 1) {
						return
					}
					this.pgNo--
						this.changePgItems()
					event.target.scrollTop = offsetHeight - 1
				}
				if(scrollBottom === scrollHeight || scrollBottom === scrollHeight + 2) {
					if(this.pgNo == Math.ceil(this.rawItems.length / this.pgSize)) {
						return
					}
					this.pgNo++
						this.changePgItems()
					event.target.scrollTop = 1
				}
			},
			offPage() {
				this.isShowPage = false;
				document.getElementsByTagName("body")[0].setAttribute("style", "overflow:auto");
			},
			reduce(item) {
				this.foodData.totalAmount = this.Subtr(this.foodData.totalAmount, item);
			},
			add(item) {
				this.foodData.totalAmount = (this.foodData.totalAmount * 100 + item * 100) / 100;
			},
			practicalAmount(amount, discountAmount) {
				this.foodData.totalAmount = amount - discountAmount;
				if(this.foodData.totalAmount < 0) {
					this.foodData.totalAmount = 0;
				}
			},
			confirmReceipt() {
				var _that = this;
				_that.orderType = 40;
				orderServer.orderConfirmReceipt(this, this.foodData.orderId, (price) => {
					_that.surplusPrice = (price * 1).toFixed(2);
					_that.payPrice = _that.surplusPrice;
					_that.totalAmount = _that.surplusPrice;
					_that.payShow = true;
					_that.isShowPage = false;
					_that.supportDelivery = false;
				});
				//				document.getElementsByTagName("body")[0].setAttribute("style", "overflow:hidden");

			},
			Subtr(arg1, arg2) {
				var r1, r2, m, n;
				try {
					r1 = arg1.toString().split(".")[1].length
				} catch(e) {
					r1 = 0
				}
				try {
					r2 = arg2.toString().split(".")[1].length
				} catch(e) {
					r2 = 0
				}
				m = Math.pow(10, Math.max(r1, r2));
				n = (r1 >= r2) ? r1 : r2;
				return((arg1 * m - arg2 * m) / m).toFixed(n);
			},
			goEvaluate(data) {
				cJs.message("暂未开通此功能");
				return false;
				this.$router.push({
					name: 'order.evaluate'
				});
			},
			onPullingUp() {
				var _that = this;
				setTimeout(() => {
					_that.$emit("updateData");
				}, 500);
			},
			pullingUpPage(count) {
				if(count >= 10) {
					this.$refs.scroll.forceUpdate();
				} else {
					setTimeout(() => {
						this.$refs.scroll && this.$refs.scroll.forceUpdate(true);
					}, 20);
				}
			},
			closePay() {
				this.payShow = false;
				if(this.orderType == 40) {
					this.$router.push({
						name: 'order.index.obligation'
					});
				}
			},
			closeRecharge() {
				this.rechargeShow = false;
				if(this.orderType == 40) {
					this.$router.push({
						name: 'order.index.obligation'
					});
				}
			},
			orderScroll(pos) {
				this.$store.commit("RECORD_LAST_SCROLL_TOP", pos.y);
			},
			selectAll(isSelectAll) {
				this.orderData.forEach((v, k) => {
					if(v.orderStatusId == 40)
						v.select = isSelectAll;
				});
			},
			countSelect(callback) { /*统计数据*/
				var datas = "";
				this.orderData.forEach((v, k) => {
					if(v.select) {
						datas += v.orderId + ',';
					}
				});
				callback(datas.substring(0, datas.length - 1));
			},
			isDivide(data) {
				console.log(data)
				if(this.isdivide) {
					if(this.isdivide == 2) { //即将送达
						if(Date.parse(new Date(data.deliveryEndTime)) < Date.parse(new Date())) {
							return false;
						} else {
							return true;
						}
					} else if(this.isdivide == 3) { //忘记收货
						if(Date.parse(new Date(data.deliveryEndTime)) > Date.parse(new Date())) {
							return false;
						} else {
							return true;
						}
					}else{
							return true;
					}
				} else {
					return true;
				}
			}

		},
		components: {
			payMent,
			verifyFoodList,
			scroll,
			rechargeLayer,
			orderNull
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.order-list {
		padding-top: 0;
		height: 100%;
		&>section {
			.pxrem(margin-top, 20)
		}
		.title {
			display: inline-block;
			position: relative;
			.supplier-name {
				display: inline-block;
				.pxrem(max-width, 460);
				.pxrem(margin-left, 5);
				vertical-align: middle;
				position: relative;
				.pxrem(top, -22);
			}
			.integral-icon {
				.pxrem(width, 100);
				position: absolute;
				border-radius: 0;
				.pxrem(right, -100);
				.pxrem(top, -20);
			}
		}
		header {
			background: #fff;
			.rem(50);
			.pxrem(font-size, 32);
			.pxrem(height, 64);
			.pxrem(line-height, 64);
			position: relative;
			img {
				.pxrem(width, 50);
				.pxrem(border-radius, 25);
				.pxrem(margin-bottom, 0);
			}
			.order-status {
				position: absolute;
				.pxrem(top, 15);
				.pxrem(right, 10);
				.pxrem(font-size, 28);
				color: @m-c;
			}
			.active {
				.check-box {
					background: url(../../images/order_check.png) no-repeat -1px -1px;
					background-size: 120% auto;
					border-color: @m-c;
				}
			}
			.check-box {
				display: inline-block;
				border: 1px solid #222;
				.pxrem(width, 30);
				.pxrem(height, 30);
				.pxrem(border-radius, 15);
				/*.pxrem(margin-right, 10);*/
				vertical-align: super;
				background: #fff;
			}
		}
		.s-item {
			.pxrem(margin-top, 26);
		}
		.s-item:first-child {
			margin-top: 10px;
		}
		.shop-list {
			background: #F8F8F8;
			.shop-item {
				.pxrem(margin-bottom, 26);
				overflow: auto;
				.item-left {
					.commodity-name {
						color: #151009;
						.pxrem(height, 40);
						.pxrem(line-height, 40);
						.pxrem(font-size, 28);
						.pxrem(margin-bottom, 5);
						i {
							background: @p-p-c;
							display: inline-block;
							.pxrem(width, 12);
							.pxrem(height, 12);
							.pxrem(border-radius, 6);
							.pxrem(margin-right, 6);
						}
					}
					.price-num {
						.pxrem(height, 33);
						.pxrem(line-height, 33);
						color: #999999;
						.pxrem(font-size, 24);
						.pxrem(padding-left, 22);
						span:first-child {
							margin-right: 0.3rem;
						}
					}
				}
				.item-right {
					.pxrem(height, 74);
					.pxrem(line-height, 74);
					position: relative;
					b {
						color: #343534;
						.pxrem(font-size, 28);
					}
				}
			}
			.remark {
				color: #343534;
				text-align: center;
				.pxrem(font-size, 24);
			}
		}
		footer {
			.pxrem(height, 64);
			.pxrem(line-height, 64);
			background: #fff;
			.pxrem(font-size, 28);
			p {
				color: #000;
			}
			input {
				.pxrem(width, 150);
				.pxrem(height, 58);
				.pxrem(margin-left, 12);
				text-align: center;
				border: 1px solid @m-c;
				.pxrem(font-size, 28);
			}
			.order-btn {
				background: @m-c;
				color: #fff;
				position: relative;
			}
			.order-btns {
				background: #fff;
				color: @m-c;
			}
		}
	}
</style>