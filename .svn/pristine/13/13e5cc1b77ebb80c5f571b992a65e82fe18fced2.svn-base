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
	
	.back-color{
		background: #FFF;
	}
	.layer-content{
		margin-top:10px;
		height: calc(100vh-24px);
		overflow: auto;
	}
	@media screen and (max-height: 768px) {
	    .layer-content{
			height: calc(100vh-24px);
		}
	}
	.padd{
		padding:20px;
	}
</style>