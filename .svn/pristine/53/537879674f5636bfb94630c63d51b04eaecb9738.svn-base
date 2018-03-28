<template>
	<article class="page-layer bankCard">
		<article class="bankCard-list padding" v-if="changeShow">
			<section class="item padding" v-if="bankCardList.length>0" v-for="(v,k) in bankCardList" @click="selectCard(v)">
				<header class="padding">
					<img class="pull-left" src="../../../images/bank-icon.png" />
					<section class="bankCard-info pull-left">
						<h3>{{v.bankName}}</h3>
						<span>{{v.ownerUserName}}</span>
					</section>
					<img class="delete-icon" src="../../../images/card-delete.png" @click.stop="deleteCard(v)" />
				</header>
				<p class="bankCard-number">**** **** **** {{v.cardCode}}</p>
			</section>
			<section class="item add-bankCard padding">
				<!--<router-link to="/user/addBankCard"></router-link>-->
				<a href="javascript:;" @click="changeShow=false"><img src="../../../images/add.png" />添加银行卡</a>
				<!--<p class="remark"><img src="../../../images/warn.png" />目前仅支持招商银行卡</p>-->
			</section>
		</article>
		<article class="verify bk-white" v-else>
			<p class="title">请输入登陆密码，以验证身份</p>
			<input type="password" class="psw" />
			<button type="button" class="btn" @click="submit">完成</button>
			<span @click="changeShow=true">取消</span>
		</article>
		<warndialog v-if="isDialog" :title="dialogData.title" :okBtnStr="dialogData.okBtnStr" :contentHtml="dialogData.contentHtml" @affirm="affirm" @offDialog="offDialog"></warndialog>
	</article>
</template>

<script>
	import server from "actionurl/user/bankCard"
	import warndialog from "components/common/dialog"
	export default {
		data() {
			return {
				changeShow: true,
				isDialog: false,
				deleteCardId:"",
				bankCardList: [],
				dialogData: {
					title: "提醒",
					okBtnStr: '删除',
					contentHtml: "确认删除该银行卡么？"
				},
				isSelect:this.$route.query.select,
			}
		},
		props: [],
		created() {
			server.getBankCardList(this);
		},
		methods: {
			submit() {
				this.$router.push({
					path: "/user/addBankCard/"
				});
			},
			deleteCard(data) {
				this.deleteCardId=data.cardId;
				this.isDialog = true;
			},
			affirm() {
				server.deleteCard(this);
			},
			offDialog() {
				this.isDialog = false;
				this.deleteCardId="";
			},selectCard(data){
				if(this.isSelect){
					window.sessionStorage.setItem("supplier-cardData",data.cardId);
					this.$router.go(-1);
				}
			}
		},
		components: {
			warndialog
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.bankCard {
		.bankCard-list {
			.item {
				.pxrem(height, 230);
				.pxrem(border-radius, 6);
				box-sizing: border-box;
				background: #da1e3a;
				.pxrem(margin-bottom, 20);
				position: relative;
				header {
					.clearfix();
					padding-bottom: 0;
					img {
						.pxrem(width, 80);
						.pxrem(height, 80);
						.pxrem(margin-top, 8);
						.pxrem(border-radius, 40);
						.pxrem(margin-right, 20);
					}
					.bankCard-info {
						.pxrem(height, 100);
						color: #fff;
						h3 {
							.pxrem(font-size, 36);
						}
						span {
							.pxrem(font-size, 28);
							opacity: .5;
						}
					}
				}
				.bankCard-number {
					/*.pxrem(height, 60);
					.pxrem(line-height, 60);*/
					.pxrem(font-size, 36);
					text-align: right;
					color: #fff;
				}
				.delete-icon {
					position: absolute;
					.pxrem(top, 10);
					.pxrem(right, 0);
					.pxrem(width, 40);
					height: auto;
				}
			}
			.add-bankCard {
				background: #fff;
				.pxrem(margin-top, 20);
				a {
					display: flex;
					/*.pxrem(width, 300);*/
					justify-content: center;
					align-items: center;
					width: 80%;
					margin: 0 auto;
					border: 1px dashed @m-c;
					.pxrem(border-radius, 6);
					.pxrem(height, 100);
					.pxrem(line-height, 100);
					text-align: center;
					color: @m-c;
					.pxrem(font-size, 36);
					.pxrem(margin-top, 10);
					img {
						.pxrem(width, 35);
						.pxrem(height, 35);
						.pxrem(margin-right, 5);
						vertical-align: text-top;
					}
				}
				.remark {
					.pxrem(height, 60);
					.pxrem(line-height, 60);
					.pxrem(margin-top, 10);
					display: flex;
					justify-content: center;
					align-items: center;
					color: #F98A0C;
					img {
						.pxrem(width, 40);
						.pxrem(height, 40);
					}
				}
			}
		}
		.verify {
			text-align: center;
			padding-top: .3rem;
			padding-bottom: .3rem;
			.pxrem(font-size, 32);
			input,
			button {
				width: 70%;
				display: block;
				margin: .3rem auto;
				.pxrem(height, 80);
				.pxrem(line-height, 80);
				.pxrem(border-radius, 8);
			}
			input {
				border: 1px solid #eee;
				text-align: center;
				.pxrem(font-size, 32);
			}
			button {
				color: #fff;
				background: @m-c;
			}
		}
	}
</style>