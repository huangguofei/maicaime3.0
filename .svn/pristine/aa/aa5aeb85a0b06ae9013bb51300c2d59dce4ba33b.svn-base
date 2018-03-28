<!-- 页面插槽-->
<template>
	<div class="page-layer">
		<page-nar :narData="narData"></page-nar>
		<div class="layer-content" :class="classs">
			<slot></slot>
		</div>
	</div>
</template>
<script>
import pageNar from "components/common/page-nar"
export default{
	props : {
		narData : {
			type : Array
		},
		classs : {
			default : ""
		}
	},
	components : {
		pageNar
	}
}
</script>
<style lang="less" scoped>
	.page-layer{
		height:100%;
	}
	.layer-content{
		margin-top:10px;
		height: calc(100vh-22px);
		overflow: auto;
	}
	@media screen and (max-height: 768px) {
	    .layer-content{
			height: calc(100vh-22px);
		}
	}
	.back-color{
		background: #FFF;
	}
	
</style>