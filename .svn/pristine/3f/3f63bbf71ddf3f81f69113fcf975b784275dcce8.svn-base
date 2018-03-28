<!-- 活动列表 -->
<template>
	<page-layer :narData="narData" classs="">
		<div class="activity-list">
			<activity v-for="a in activityList" :activityInfo="a" @changeStatus="changeStatus"></activity>
		</div>
		<pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	</page-layer>
</template>
<script>
	import resServer from 'actionurl/marketing/activity'
	import pageLayer from "components/common/page-layer"
	import activity from "components/marketing/activity/activity"
	import activityAction from "actionurl/marketing/activity"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				dataList: [],
				narData: [{
						name: "优惠活动",
						router: "marketing.activity.index"
					},
					{
						name: "发起优惠活动",
						router: "marketing.activity.new"
					}
				],
				activityList : [],
				pagings : {
		          	pageSize : 10,
 					pageNum : 1,
		        },
		        totalCount : 0,
			}
		},
		created: function() {
			resServer.getActivityList(this);
		},
		components: {
			pageLayer,
			activity,
			pagination
		},
		created() {
			activityAction.getActivityList(this);
		},
		methods : {
			changePageSize() {
				resServer.getActivityList(this);
			},
			changeStatus(data){
				resServer.changeActionStatus(this,data);
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.activity-list {
		.clearfix();
	}
</style>