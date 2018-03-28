<!-- 属性设置区域 -->
<template>
	<div class="setting-area" >
		<header >
			{{title}}
		</header>
		<div class="setting-content">
			<slot></slot>
		</div>
	</div>
</template>
<script>
export default{
	data(){
		return {
			
		}
	},
	props : {
		title : {
			type : String,
			default : "基本信息"
		}
	},
	methods : {
		
	}
}
</script>
<style lang="less" scoped>
@import "../../../common/less/config.less";
.setting-area{
	width:590px;
	margin-left:60px;
	header{
		height:48px;
		line-height: 48px;
		background: @back-gen;
		text-indent: 20px;
		font-size:@size-m-title;
		border:1px solid @back-gen;
		text-align: left;
	}
	.setting-content{
		padding:20px;
		background: #FFF;
	}
}
</style>
