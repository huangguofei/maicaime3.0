<!-- 活动列表 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		
	</page-layer>
</template>
<script>
import pageLayer from "components/common/page-layer"
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
	    	  		router : "marketing.feature.theme"
	    	  	}
	    	  ],
		}
	},
	components : {
		pageLayer
	}
}
</script>