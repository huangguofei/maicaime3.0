<!-- 概况 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<err></err>
	</page-layer>
</template>
<script>
import pageLayer from "components/common/page-layer"
import err from "components/common/err"
export default{
	data() {
		return {
			narData : [
				{
					name : "营销概况",
					router : ""
				}
			]
		}
	},
	components : {
		pageLayer,err
	}
}
</script>