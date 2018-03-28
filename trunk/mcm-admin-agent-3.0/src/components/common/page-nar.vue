<!-- 子页面导航 -->
<template>
<div class="page-nar">
	<ul>
		<li class="n-item" v-for="n in narData" :class="{active:narActive(n)}" @click="jumpHref(n)">{{n.name}}</li>
	</ul>
</div>
</template>
<script>
	export default{
		props : {
			narData : {
				type : Array,
				default : [
					{
						name : "默认导航"
					}
				]
			}
		},
		methods : {
			narActive(nars) {
				var name = nars.router,
					active = nars.active,
					routeName = this.$route.name;
				if(active) {
					return true;
				}
				if(routeName == name) {
					return true;
				}
				return false;
			},
			jumpHref(nars) {
				var router = nars.router;
				if(router && router != "") {
					this.$router.push({
						name : router
					});
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.page-nar{
		@h:48px;
		height:@h;
		line-height: @h;
		background: #FFF;
		border:1px solid @color-border;
		.n-item{
			float:left;
			padding:0 30px;
			font-size:@size-title;
			cursor: pointer;
		}
		.active{
			color:@color-main;
			position: relative;
			&:after{
				position: absolute;
				content: "";
				width:30px;
				height:2px;
				background: @color-main;
				bottom:-1px;
				left:50%;
				margin-left:-15px;
			}
		}
	}
</style>