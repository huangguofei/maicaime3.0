<template>
	<article class="err">
		<img src="../../images/Group-err.png" />
		<h3>快看，一“大波”数据正向你走来</h3>
	</article>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		props: ["msg"]
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.err {
		vertical-align: middle;
		text-align: center;
		font-size:20px;
		color: #000;
		img {
			width: 40%;
			margin-top: 10px;
			margin-bottom: 20px;
		}
	}
	
	
</style>