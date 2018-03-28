<!-- 正在加载 -->
<template>
	<div class="loading">
		<img src="../../images/loading.gif">
	</div>
</template>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.loading{
		text-align: center;
		.pxrem(margin-top, 50);
		img{
			.pxrem(width, 50);
		}
	}
</style>