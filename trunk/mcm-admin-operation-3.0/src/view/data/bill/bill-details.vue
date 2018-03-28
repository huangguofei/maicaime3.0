<template>
	<page-layer :narData="narData" classs="back-color">
		<div class="bill-info padding" v-if="headData">
			<p><span class="title">商户信息：</span>{{headData.merchantName}}({{headData.merchantTypeText}})&#12288;{{headData.merchantMobile}}</p>
			<p><span class="title">状&#12288;&#12288;态：</span>{{headData.settlementStatusText}}</p>
			<p><span class="title">账单总金额：</span>{{totalData.amount}}</p>
			<p><span class="title">流水总金额：</span>{{totalData.tradeAmount}}</p>
			<p><span class="title">创建时间：</span>{{headData.timeCreated}}</p>
			<el-tooltip class="item" effect="dark" content="会根据您设置的条件过滤导出Excel" placement="top-start">
		      <el-button size="small" style="float:right;margin:5px;" @click="downloadExcel">导出</el-button>
		    </el-tooltip>
		</div>
		<el-table :data="billData" style="width: 100%" v-if="billData">
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="billId" label="账单号" width="190">
			</el-table-column>
			<el-table-column prop="refId" label="订单号">
			</el-table-column>
			<el-table-column prop="approachText" label="说明">
			</el-table-column>
			<el-table-column prop="subsidies" label="补贴">
			</el-table-column>
			<el-table-column prop="amount" label="交易金额">
			</el-table-column>
			<el-table-column prop="amountBeforeChange" label="交易前余额">
			</el-table-column>
			<el-table-column prop="amountAfterChange" label="交易后余额">
			</el-table-column>
			<el-table-column prop="tradeAmount" label="合计">
			</el-table-column>
			<el-table-column prop="datatime" label="账单时间">
			</el-table-column>
		</el-table>
		<el-pagination @current-change="handleCurrentChange" :current-page.sync="queryParams.pageNum" :page-size="queryParams.pageSize" layout="total, prev, pager, next" :total="queryParams.total">
		</el-pagination>
	</page-layer>
</template>

<script>
	import billServer from "actionurl/data/bill"
	import pageLayer from "components/common/page-layer"

	export default {
		data() {
			return {
				narData: [{
					name: "账单详情",
					router: ""
				}],
				totalData: "",
				billData: "",
				type: this.$route.query.type,
				headData: '',
				billId: this.$route.params.id,
				queryParams: {
					billId: this.$route.params.id,
					pageNum: 1,
					pageSize: 10,
					pages: 1,
					total: 0
				}
			}
		},
		created() {
			billServer.getBillDetails(this);
		},
		methods: {
			handleCurrentChange() {

			},
			viewDetails(data) {

			},
			downloadExcel() {
				var params = "", query = this.queryParams;
				for(var k in query) {
					if(query[k] && k != "pageSize" && k != "pageNum")
						params += "&" + k + "=" +query[k];
				}
				var info = cJs.getCookie("mcm-operation-user-info");
				if(info) {
					info = JSON.parse(info);
					window.location.href = "/operation/admin/bill/export-bill-record-list?token=" + info.token + params;
				}
			}
		},
		components: {
			pageLayer
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.bill-info {
		p {
			line-height: 26px;
			font-size: 16px;
			.title {}
		}
	}
</style>