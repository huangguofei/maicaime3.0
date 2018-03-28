<template>
	<div class="page-layers">
		<div class="layer-content" :class="classs">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},props:["classs"]
	}
</script>

<style lang="less" scoped>
	.page-layers {
		height: 100%;
		padding: 0 10px 0 20px;
	}
	
	.layer-content {
		height: 100%;
		overflow: auto;
	}
	
	@media screen and (max-height: 768px) {
		/*.layer-content {
			height: calc(100vh-32px);
		}*/
	}
	
	.back-color {
		background: #FFF;
	}
	
	.padd {
		padding: 20px;
	}
</style>