<!-- 登录 -->
<template>
	<div class="page-layers">
		<article class="login">
			<header>
				<img src="../../images/login.png" />
			</header>
			<article class="form">
				<section class="from-item">
					<input type="tel" name="phone" id="phone" ref="mob" v-model="userName" autocomplete maxlength="11" placeholder="请输入手机号码" />
				</section>
				<section class="from-item">
					<input type="password" name="psw" id="psw" ref="psw" v-model="password" placeholder="请输入密码" />
				</section>
			</article>
			<section class="from-item">
				<input type="button" id="loginBtn" @click="login" value="登录" />
				<router-link class="findpsw" to="/findpsw/">忘记密码</router-link>
			</section>
			<select-shop v-if="isSelectShop" :shop-list="shopList" :userInfo="userInfo"></select-shop>
		</article>
	</div>
</template>
<script>
	import loginApi from "actionurl/login/login"
	import selectShop from "components/login/select-shop"
	import MD5 from "../../../static/md5.js"
	export default {
		data() {
			return {
				userName: "",
				password: "",
				loginData: null,
				isSelectShop: false,
				shopList: [],
				userInfo: {}
			}
		},
		methods: {
			login() {
				if(!this.userName) {
					cJs.message("手机号不能为空！");
					this.$refs.mob.focus();
					return false;
				}
				if(!this.password) {
					cJs.message("密码不能为空！");
					this.$refs.psw.focus();
					return false;
				}
				if(!cJs.checkMobile(this.userName)) {
					return false;
				}
				this.userInfo = {
					"userName": this.userName,
					"password": MD5(this.password)
				}
				loginApi.login(this, this.userInfo);
			}
		},
		components: {
			selectShop
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.login {
		.form {
			width: 80%;
			margin: 0 auto;
			border: 1px solid #EAEAEA;
			background: #FAFAFA;
			.pxrem(border-radius, 10);
			margin-bottom: 1rem;
			.from-item {
				width: 100%;
				margin-bottom: 0;
				margin-top: 0;
				.pxrem(height, 90);
				.pxrem(line-height, 90);
				input {
					width: 100%;
					.pxrem(padding, 16);
					color: #9D9D9D;
					.pxrem(font-size, 32);
					box-sizing: border-box;
					border: 0;
					outline: none;
					background: #FAFAFA;
				}
			}
			.from-item:first-child {
				border-bottom: 1px solid #f1f1f1;
			}
		}
		#loginBtn {
			width: 80%;
			display: block;
			margin: 0 auto;
			.pxrem(height, 90);
			.pxrem(line-height, 90);
			background: @m-c;
			.pxrem(border-radius, 10);
			border: 0;
			outline: none;
			color: #fff;
			.pxrem(font-size, 32);
		}
		header {
			.pxrem(height, 460);
			text-align: center;
			padding-top: .5rem;
			img {
				width: 50%;
				height: auto;
			}
		}
		.register {
			float: left;
		}
		.findpsw {
			float: right;
			margin-right: 10%;
			margin-top: .5rem;
			color: #666666;
			.pxrem(font-size, 32);
		}
	}
</style>