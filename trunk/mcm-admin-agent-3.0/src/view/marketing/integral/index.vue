<!-- 活动列表 -->
<template>
	<page-layer :narData="narData">
		<div class="hide-int" v-if="!showPage">
			<h3>您暂未开通积分商城，点击
				<a href="javascript:;" @click="openIntegral">开通</a>
			</h3>
		</div>
		<div class="integral-list" v-else>
			<el-row class="back-color padding">
				<el-col :span="2">
					<el-button type="primary" @click="handle('new')"  size="small">添加</el-button>
				</el-col>
			</el-row>
			<el-table :data="tableData" style="width: 100%;">
				<el-table-column prop="skuName" label="商品名称">
				</el-table-column>
				<el-table-column prop="retailPrice" label="价格(元)">
				</el-table-column>
				<el-table-column prop="integralPrice" label="兑换积分">
				</el-table-column>
				<el-table-column prop="extraPrice" label="差价(元)">
				</el-table-column>
				<el-table-column prop="skuStatusText" label="状态">
				</el-table-column>
				<el-table-column prop="slogan" label="口号">
				</el-table-column>
				<!--<el-table-column width="200" label="操作">
					<template scope="scope">
						<el-button @click="handle('edit',scope.row)">编辑</el-button>
						<el-button class="el-button-del" @click="deleteSearch(scope.row)">删除</el-button>
					</template>
				</el-table-column>-->
			</el-table>
			<pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
		</div>
		<edit-dialog :editDialogInfo="editDialogInfo" @updataTable="updataTable" ref="editDialog"></edit-dialog>
	</page-layer>
</template>
<script>
	import pageLayer from "components/common/page-layer"
	import requestServer from "action/marketing/integral"
	import editDialog from "components/marketing/editor/edit-integral"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				tableData: [],
				showPage: true,
				pagings: {
					pageSize : 10,
	  	 			pageNum : 1,
				},
				totalCount : 0,
				narData: [{
					name: "积分商城"
				}],
				editDialogInfo: {
					title: "新建",
					showDialog: false,
					editData: ""
				}
			}
		},
		created: function() {
			requestServer.getIntegralList(this);
		},
		components: {
			pageLayer,
			editDialog,
			pagination
		},
		methods: {
			changePageSize: function() {
				requestServer.getIntegralList(this);
			},
			open() {
				this.$alert('您还未开通积分商城，是否开通？', '开通提醒', {
					confirmButtonText: '确认开通',
					callback: action => {
						if(action == 'cancel') {
							this.showPage = false;
						} else {
							this.openIntegral();
						}
					}
				});
			},
			handle(status, data) {
				if(status == "new") {
					this.editDialogInfo.title = "新增";
					this.$refs.editDialog.watchData('new', data);
					
				} else {
					this.editDialogInfo.title = "编辑";
					this.editDialogInfo.editData = data;
					this.$refs.editDialog.watchData('edit', data);
				}
				this.editDialogInfo.showDialog = true;
			},
			openIntegral() {
				requestServer.openIntegral(this);
			},
			updataTable() {
				requestServer.getIntegralList(this);
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../common/less/config.less";
</style>