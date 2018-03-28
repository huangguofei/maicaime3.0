<template>
	<div class="page-layer">
		<IMAGESSLIDER></IMAGESSLIDER>
		主页面
		<button @click="show()">点击我</button>
		<FOOTERNAR :active="1"></FOOTERNAR>
	</div>
</template>
<script>
	import FOOTERNAR from "../../components/common/footer-nar"
	import IMAGESSLIDER from "../../components/common/images-slider"
	export default{
		data() {
			return {

			}
		},
		components : {
			FOOTERNAR,
			IMAGESSLIDER
		},
		created() {
		},
		methods : {
			show() {
				cJs.message("错误信息");
			}
		}
	}
</script>
<style lang="less" scope>
	
</style>