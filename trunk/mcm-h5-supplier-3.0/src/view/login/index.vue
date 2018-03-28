<!-- 登录 -->
<template>
	<div class="page-layers">
		<article class="login">
			<scroll 
				:listenScroll="true"
				:probe-type="probeType"
				@scroll="scroll"
				ref="scroll"
				:listenBeforeScroll = "true"
				@beforeScrollStart="beforeScrollStart"
				>
				<header>
					<img src="../../images/login_logo.png" />
				</header>
				<article>
					<section class="from-item" ref="items">
						<img src="../../images/login_phone.png" />
						<input type="tel" name="phone" id="phone" ref="mob" class="text-input"  @focus="scrollView"  v-model="userName" autocomplete maxlength="11" placeholder="请输入手机号码" />
					</section>
					<section class="from-item">
						<img src="../../images/login_psw.png" />
						<input type="password" name="psw" id="psw" ref="psw" class="text-input"  @focus="scrollView"  v-model="password" placeholder="请输入密码" />
					</section>
					<section class="from-item">
						<button id="loginBtn" @click="login" >登录</button>
					</section>
					<section class="from-item">
						<a href="javascript:void(0)" class="register" @click="jumpRegister">注册</a>
						<a href="javascript:void(0)" class="findpsw" @click="yumpFindPwd">忘记密码</a>
						<!-- <router-link class="register" to="/register/">注册</router-link>
						<router-link class="findpsw" to="/findpsw/">忘记密码</router-link> -->
					</section>
				</article>
			</scroll>
			<select-shop v-if="isSelectShop" :userInfo="userInfo" :shop-list="shopList"></select-shop>
		</article>
	</div>
</template>
<script>
	import loginApi from "actionurl/login/login"
	import selectShop from "components/login/select-shop"
	import scroll from "components/common/scroll"
	import MD5 from "../../../static/md5.js"
	export default {
		data() {
			return {
				userName: "",
				password: "",
				loginData: null,
				isSelectShop: false,
				shopList:[],
				userInfo : {},
				probeType : 3
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
			},
			scroll(pos) {
				
			},
			scrollView() {
				if(cJs.isAndroid()) {
					var _that = this;
					setTimeout(function() {
						_that.$refs.scroll.scrollToElement(_that.$refs.items, 100);
					}, 1000);
				}
			},
			beforeScrollStart() {
				let inputList = document.querySelectorAll('.text-input');
		        inputList.forEach((item) => {
		           item.blur()
		        })
			},
			jumpRegister() {
				this.$router.push({
					name : "login.register"
				});
			},
			yumpFindPwd() {
				this.$router.push({
					name : "login.findpsw"
				});
			}
		},
		components: {
			selectShop,
			scroll
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.login {
		height : 100%;
		article {
			margin: 1rem .5rem;
		}
		header {
			.pxrem(height, 460);
			background: url(../../images/login_logo.png);
			background-size: cover;
			img {
				width: 100%;
				height: auto;
			}
		}
		.register {
			float: left;
		}
		.findpsw {
			float: right;
		}
	}
</style>