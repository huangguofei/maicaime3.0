<template>
	<article class="page-layer deposit-details">
		<article class="content padding bk-white">
			<section class="head">
				<p class="bank-name">{{depositData.bankName}}</p>
				<p class="price">{{depositData.actualAmount?depositData.actualAmount:depositData.amount|ms}}</p>
				<p class="status">{{depositData.statusText}}</p>
			</section>
			<section class="item">
				<span class="title">商户类型</span>
				<span class="val">{{depositData.merchantTypeText}}</span>
			</section>
			<section class="item">
				<span class="title">提现到</span>
				<span class="val" v-if='depositData.cardCode'>{{depositData.bankName}}&#12288;({{depositData.cardCode.substring(depositData.cardCode.length-4,depositData.cardCode.length)}})&#12288;{{depositData.ownerUserName}}</span>
			</section>

			<section class="item">
				<span class="title">提现单号</span>
				<span class="val">{{depositData.billId}}</span>
			</section>
			<section class="item">
				<span class="title">提交时间</span>
				<span class="val">{{depositData.timeCreated}}</span>
			</section>
			<section class="item">
				<span class="title">备注信息</span>
				<span class="val">{{depositData.userNote}}</span>
			</section>
		</article>
		<article class="log bk-white padding">
			<h2>提现日志</h2>
			<article class="log-box">
				<section class="log-item padding" v-for="(v,k) in depositData.operationLogs">
					<span class="log-icon pull-left">
						<img src="../../../images/order_check.png"/>
						<i></i>
					</span>
					<section class="log-main pull-left">
						<p class="log-head"><span class="log-title pull-left">{{v.logTitle}}</span><span class="log-time pull-right">{{v.timeCreated}}</span></p>
						<p class="log-content">{{v.logContent}}</p>
					</section>
				</section>
			</article>
		</article>
		<button type="button" class="btn" @click="showChangeCard" v-if="depositData.statusId==-1">{{btnTxt}}</button>
		<dia :title="diaData.title" :contentHtml="diaData.contentHtml" @affirm="affirm" @offDialog="offDialog" v-if="isChangeCard"></dia>
	</article>
</template>

<script>
	import depositServer from 'actionurl/user/deposit'
	import cardServer from "actionurl/user/bankCard"
	import dia from "components/common/dialog"
	export default {
		data() {
			return {
				depositData: "",
				id: this.$route.params.id,
				isChangeCard: false,
				btnTxt: "更换银行卡",
				diaData: {
					title: "更换银行卡",
					contentHtml: ""
				}
			}
		},
		created() {
			depositServer.getDepositDetails(this);
		},
		methods: {
			showChangeCard() {
				this.isChangeCard = !this.isChangeCard;
			},
			affirm() {
				var dom = document.getElementById("cardList");
				depositServer.changeCard(this, dom.value);
			},
			getCardList() {
				var _that = this;
				if(this.depositData.statusId == -1) {
					cardServer.getBankCardList(this, function(data) {
						if(data) {
							var str = "<select id='cardList'>";
							data.forEach((v, k) => {
								var defaultStr = k == 0 ? "selected='selected'" : "";
								str += `<option ${defaultStr} value="${v.cardId}">${v.bankName}</option>`
							});
							str += "</select>";
							_that.diaData.contentHtml = str;
						}
					});
				}
			},
			offDialog() {
				if(document.getElementById("cardList").value) {
					this.isChangeCard = false;
				} else {
					cJs.message("请选择的银行卡！");
				}
			}
		},
		components: {
			dia
		}
	}
</script>

<style lang="less">
	@import "../../../common/less/config.less";
	.deposit-details {
		.content {
			.head {
				padding-top: .5rem;
				padding-bottom: .5rem;
				text-align: center;
				border-bottom: 1px solid #eee;
				.bank-name {
					.pxrem(font-size, 28);
					color: #000;
				}
				.price {
					.pxrem(font-size, 50);
					margin-top: .2rem;
					color: #1EC551;
				}
				.status {
					.pxrem(font-size, 24);
					color: #666;
				}
			}
			.item {
				.pxrem(font-size, 28);
				color: #666;
				.pxrem(height, 50);
				.pxrem(line-height, 50);
				margin-top: .2rem;
				span {
					display: inline-block;
				}
				.val {
					float: right;
					color: #222222;
					.pxrem(font-size, 28);
				}
			}
			.item:first-child {
				.pxrem(height, 150);
				.pxrem(line-height, 150);
				border-bottom: 1px solid #EEEEEE;
				.pxrem(margin-bottom, 20);
				.title {
					color: #666;
				}
				.val {
					.pxrem(font-size, 38);
					color: #1EC551;
				}
			}
		}
		.log {
			.pxrem(margin-top, 20);
			h2 {
				.pxrem(font-size, 28);
				border-bottom: 1px solid #eee;
				.pxrem(height, 80);
				.pxrem(line-height, 80);
				margin-bottom: .2rem;
			}
			.log-item {
				.pxrem(height, 200);
				padding-bottom: 0;
				padding-top: 0;
				.clearfix();
				.log-main {
					width: calc(~'100% - .5rem');
					margin-left: .1rem;
					.log-head {
						.clearfix();
						.log-title {
							.pxrem(font-size, 28);
							color: @m-c;
						}
						.log-time {
							.pxrem(font-size, 24);
							color: #9a9a9a;
						}
					}
					.log-content {
						.pxrem(font-size, 24);
						color: #666;
					}
				}
				.log-icon {
					img {
						.pxrem(width, 32);
						display: block;
						margin-top: .05rem;
					}
					i {
						position: absolute;
						font-style: normal;
						display: inline-block;
						.pxrem(width, 2);
						background: @m-c;
						.pxrem(height, 165);
						.pxrem(margin-left, 10);
					}
				}
				p {
					.pxrem(line-height, 50);
				}
			}
			.log-item:last-child{
				i{
					display: none;
				}
			}
		}
		.btn {
			display: block;
			.pxrem(font-size, 36);
			width: 90%;
			margin: .4rem auto;
			.pxrem(height, 80);
			.pxrem(line-height, 80);
			text-align: center;
			.pxrem(border-radius, 6);
			background: @m-c;
			color: #fff;
		}
		#cardList {
			width: 100%;
			.pxrem(height, 80);
			.pxrem(font-size, 36);
		}
	}
</style>