<!-- 生成二维码 -->
<template>
	<div class="create-code">
		<div class="layer" @click="close"></div>
		<div class="code-content">
			<img :src="codeUrl">
		</div>
		
	</div>
</template>
<script>
export default{
	props : ["codeUrl"],
	methods : {
		close() {
			this.$emit("closeDialog");
		}
	}
}
</script>
<style lang="less">
	@import "../../common/less/config.less";
	.create-code{
		.layer{
			position: fixed;
			width:100%;
			height:100%;
			left:0;
			top:0;
			background: rgba(0, 0, 0, 0.5)
		}
		.code-content{
			position: fixed;
			.pxrem(width,300);
			.pxrem(height,300);
			.pxrem(border-radius, 8);
			left:50%;
			top:50%;
			.pxrem(margin-top,-150);
			.pxrem(margin-left,-150);
			background: #FFF;
			box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
			img{
				width:100%;
				height:100%;
				.pxrem(border-radius, 8);
			}
		}
		
	}
</style>