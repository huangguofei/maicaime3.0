<!-- 编辑组件 -->
<template>
	<div class="edit-element" @click="setElement">
		<slot></slot>
		<div class="edit-layer"></div>
	</div>
</template>
<script>
	export default{
		data() {
			return{

			}
		},
		props : ["elementIndex"],
		methods : {
			setElement() {
				this.$emit("setElement", this.elementIndex);
			}
		}
	}
</script>
<style lang="less" socped>
@import "../../../common/less/config.less";
	.edit-element{
		position: relative;
	}
	.active{
		.edit-layer{
			position: absolute;
			top:-2px;
			left:-2px;
			z-index:999;
			width:100%;
			height:100%;
			border:2px dashed @color-yellow;
		}
		
	}
</style>