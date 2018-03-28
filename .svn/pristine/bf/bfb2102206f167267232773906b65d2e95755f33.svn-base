<template>
	<div class="main-page" ref="page">
		<div class="header" ref="header">
			<MAINHEADER ></MAINHEADER>
			<top-main-menu></top-main-menu>
		</div>
		<div class="content" ref="content">
			<router-view ></router-view>
		</div>
	
	</div>
</template>
<script>
	import MAINHEADER from "../components/common/main-header"
	import topMainMenu from "../components/common/top-main-menu"
	import LEFTMAINMENU from "../components/common/left-main-menu"
	export default{
		data() {
			return {
				isShrink : false
			}
		},
		components : {
			MAINHEADER,
			LEFTMAINMENU,
			topMainMenu
		},
		mounted() {
			var _that = this;
			var docEl = document.documentElement,
	    	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		    recalc = function() {
		    	 if(_that.$refs.page) {
						const pageH = _that.$refs.page.getBoundingClientRect().height;
						const header = _that.$refs.header.getBoundingClientRect().height;
						_that.$refs.content.style.height = (pageH - header) + "px";
					}
		    };
			recalc();
			window.addEventListener(resizeEvt, recalc, false);
			document.addEventListener('DOMContentLoaded', recalc, false);
		},
		methods : {
			
		}
	}
</script>
<style lang="less" scoped >
	@import "../common/less/config.less";
	.main-page{
		height:100%;
		width: 100%;
		overflow: hidden;
	}
	.content{
		height:100%;
	}
</style>