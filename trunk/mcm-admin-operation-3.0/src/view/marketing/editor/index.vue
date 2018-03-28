<!-- 限时抢购 -->
<template>
	<page-layer :narData="narData" classs="padd" class="edit-page">
		<phone-model title="限时抢购活动">
			<div class="content">
				限时抢购
			</div>
			<setting-area title="活动基本信息">
				设置区域
			</setting-area>
		</phone-model>
		
	</page-layer>
</template>
<script>
import pageLayer from "components/common/page-layer"
import phoneModel from "components/marketing/editor/phone-model"
import settingArea from "components/marketing/editor/setting-area"
export default{
	data() {
		return{
			narData : [
	    	  	{
	    	  		name : "主题活动",
	    	  		router : "marketing.feature.list"
	    	  	},
	    	  	{
	    	  		name : "发起主题活动",
	    	  		router : "marketing.feature.theme",
	    	  		active : true
	    	  	}
	    	  ],
		}
	},
	components : {
		pageLayer,
		phoneModel,
		settingArea
	}
}
</script>
<style lang="less" scoped>
	.edit-page{
		position: relative;
	}
</style>