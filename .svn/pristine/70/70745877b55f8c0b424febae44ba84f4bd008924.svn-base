<!-- 活动商品 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<el-table :data="tableData" style="width: 100%;">
			<el-table-column prop="skuName" label="商品名称">
			</el-table-column>
			<el-table-column prop="specialName" label="活动名称">
			</el-table-column>
			<el-table-column prop="promotionPrice" label="价格">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.promotionPrice==0?"实时报价":scope.row.promotionPrice }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="supplierName" label="供应商">
			</el-table-column>
			<el-table-column prop="statusText" label="状态">
			</el-table-column>
			<el-table-column width="200" label="审批">
				<template scope="scope">
					<el-button @click="handle('y',scope.row)">同意</el-button>
					<el-button class="el-button-del" @click="handle('n',scope.row)">不同意</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @current-change="handleCurrentChange" :current-page.sync="pagings.current" :page-size="pagings.size" layout="total, prev, pager, next" :total="pagings.total">
		</el-pagination>
	</page-layer>
</template>
<script>
	import postServer from "action/goods/goods"
	import pageLayer from "components/common/page-layer"
	export default {
		data() {
			return {
				pagings: {
					current: 1,
					size: 20,
					pages: 1,
					total: 0
				},
				tableData: [],
				narData: [{
					name: "活动商品"
				}]
			}
		},
		created() {
			postServer.getActivityGoods(this);
		},
		methods: {
			handle(type, data) {
				var sendData = {
					monthlySpecialProdId: data.specialProductId
				}
				if(type == "y") {
					sendData.status = 1;
				} else {
					sendData.status = -5;
				}
				postServer.auditActivityGoods(this, sendData);
			},
			handleCurrentChange() {

			}
		},
		components: {
			pageLayer
		}
	}
</script>