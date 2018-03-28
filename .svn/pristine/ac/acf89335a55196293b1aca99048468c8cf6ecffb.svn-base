<!-- 左边主菜单 -->
<template>
	<div class="left-menu">
		<header>
			{{menuData.title}}
		</header>
		<ul>
			<li class="m-item"
				:class="{active:menuActive(m.router)}"
				 v-for="m in menuData.menus" @click="jumpPage(m.router)">
				<!-- <router-link :to="{name : m.router}">
					{{m.name}}
				</router-link> -->
				<a href="javascript:void(0)">
					{{m.name}}
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
			}
		},
		props : ["menuData"],
		methods : {
			menuActive(name) {
				var routeName = this.$route.name;
				var splits = routeName.split("."), n = ""
				if(splits.length >= 3) {
					n = splits[0] + "." + splits[1];
				}
				if(routeName == name || ( n != "" && name.indexOf(n) >= 0)) {
					return true;
				}
				return false;
			},
			jumpPage(routerName) {
				/*再次点击时刷新页面*/
				if(window.router_name && window.router_name == routerName) {
					this.$router.go(0);
					return;
				}
				window.router_name = routerName;
				this.$router.push({
					name : routerName
				});
			}

		}
	}
</script>
<style lang="less">
	@import "../../common/less/config.less";
	.left-menu {
		
		@h:50px;
		.lineHeight{
			height:@h;
			line-height: @h;
		}
		header{
			text-indent: 20px;
			.lineHeight;
			font-size:@size-title;
			color:@color-font;
			border-bottom:1px solid @back-gen;
		}
		.m-item{
			.lineHeight;
			font-size: @size-gen;
			cursor: pointer;
			a{
				text-indent: 20px;
				display: inline-block;
				width:100%;
				height:100%;
				color:@color-font;
			}
		}
		.active{
			background: @back-m-s-2;
			position: relative;
			a{
				color:@color-main;
			}
			&:after{
				content: "";
				position: absolute;
				left:0;
				height:100%;
				width:4px;
				background: @color-main;
			}
		}
	}

</style>