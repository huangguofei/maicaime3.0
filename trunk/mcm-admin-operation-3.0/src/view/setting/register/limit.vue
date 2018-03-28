<!-- 注册通用端上限设置 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<edit-register-limit @onSubmit="onSubmit" :form="form"></edit-register-limit>
	</page-layer>
</template>
<script>
	import pageLayer from "components/common/page-layer"
	import editRegisterLimit from "components/setting/edit-register-limit"
	import limitAction from "actionurl/setting/limit"
	export default{
		data() {
			return{
				narData : [
		    	  	{
		    	  		name : "通用端限制数",
		    	  		router : "setting.register.limit"
		    	  	},
		    	  	{
		    	  		name : "单个手机号限制数",
		    	  		router : "setting.register.mobile"
		    	  	}
		    	],
		    	form : {
		    		agentCount : -1,
		    		purchaserCount :  -1,
		    		supplierCount :  -1,
		    		stationCount : -1,
		    		deliveryDealerCount : -1,
		    	}
			}
		},
		components : {
			pageLayer,
			editRegisterLimit
		},
		created() {
			limitAction.getDetailInfo(this);
		},
		methods : {
			onSubmit() {
				limitAction.saveCommNum(this);
			}
		}
	}
</script>