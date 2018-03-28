<!-- 积分 -->
<template>
	<page-layer :narData="narData" class="edit-page">
		<el-table :data="tableData" style="width: 100%">
			<el-table-column prop="agentName" label="服务站名称">
			</el-table-column>
			<el-table-column prop="cityName" label="服务站地址">
			</el-table-column>
			<el-table-column prop="contact" label="服务站负责人">
			</el-table-column>、
			<el-table-column prop="statusText" label="服务站状态">
			</el-table-column>
		</el-table>
		<pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	</page-layer>
</template>
<script>
	import pageLayer from "components/common/page-layer"
	import resServer from "actionurl/marketing/integral"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				narData: [{
					name: "积分"
				}],
				tableData: [],
				pagings: {
					pageSize : 10,
 					pageNum : 1,
				},
				totalCount : 0
			}
		},
		created() {
			resServer.getIntegralList(this);
		},
		methods: {
			handleSizeChange() {

			},
			changePageSize() {
				resServer.getIntegralList(this);
			},
		},
		components: {
			pageLayer,
			pagination
		}
	}
</script>
<style lang="less" scoped>

</style>