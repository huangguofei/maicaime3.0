<template>
	<article class="err">
		<img src="../../images/Group.png" />
		<h3>设计师跑路回家抱娃了<br>已抓回来画图</h3>
	</article>
</template>

<script>
	export default {
		data(){
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
		.pxrem(font-size,32);
		color:#939393;
		img {
			width: 90%;
			margin-top: 10px;
			margin-bottom: 20px;
		}
	}
</style>