<!-- 底部导航菜单 -->
<template>
	<div class="footer-wrap" id="footerWrap">
		<div class="content">
			<div class="f-item">
				<router-link :to="{name : 'order.index.new'}" :class="active == 1 ? 'f-active' : ''">
					<i class="i-icon i-order"></i>
					<p class="nar-name">订单</p>
				</router-link>
			</div>
			<div class="f-item">
				<router-link :to="{name : 'checking.index'}"  :class="active == 2 ? 'f-active' : ''">
					<i class="i-icon i-checking"></i>
					<p class="nar-name">对账</p>
				</router-link>
			</div>
			<div class="f-item">
				<router-link :to="{name : 'user.index'}" :class="active == 3 ? 'f-active' : ''">
					<i class="i-icon i-user"></i>
					<p class="nar-name">我的</p>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return{

			}
		},
		props : ["active"],
		created () {
			console.log(this.active);
		}
	}
</script>
<style lang="less">
	@import "../../common/less/config.less";
	.footer-wrap{
		position: fixed;
		width:100%;
		bottom:0;
		left:0;
		border-top:1px solid #eee;
		background: #FAFAFA;
		.pxrem(height, 97);
		.content{
			width:100%;
			height:100%;
		}
		.f-item{
			width:33.33%;
			height:100%;
			float:left;
			text-align: center;
			.i-icon{
				display: inline-block;
				.pxrem(width, 54);
				.pxrem(height, 54);
				.pxrem(margin-top,5);
			}
			.nar-name{
				color:#222222;
				.pxrem(font-size, 20);
				.pxrem(margin-top,-18);
			}
			.i-order{
				background: url(../../images/order-icon.png) no-repeat;
				background-size: cover;
			}
			
			.i-checking{
				background: url(../../images/checking-icon.png) no-repeat;
				background-size: cover;
			}
			.i-user{
				background: url(../../images/user-icon.png) no-repeat;
				background-size: cover;
			}
		}
		.f-active{
			.nar-name{
				color:@m-c;
			}
			.i-order{
				background: url(../../images/order-active.png) no-repeat;
				background-size: cover;
			}
			.i-checking{
				background: url(../../images/checking-active.png) no-repeat;
				background-size: cover;
			}
			.i-user{
				background: url(../../images/mine-highlight.png) no-repeat;
				background-size: cover;
			}
		}
	}
</style>