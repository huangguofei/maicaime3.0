<!-- 活动商品 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<el-table :data="tableData" style="width: 100%;">
			<el-table-column prop="skuName" label="商品名称" width="200">
			</el-table-column>
			<el-table-column prop="specialName" label="活动名称"  width="200">
			</el-table-column>
			<el-table-column  label="图片">
				<template scope="scope">
					<img :src="scope.row.skuImage" style="width:45px;height:45px;" />
				</template>
			</el-table-column>
			<el-table-column prop="promotionPrice" label="价格">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.promotionPrice==0?"实时报价":scope.row.promotionPrice }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="supplierName" label="供应商"  width="300">
			</el-table-column>
			<el-table-column prop="statusText" label="状态">
			</el-table-column>
			<el-table-column width="200" label="审批" fixed="right">
				<template scope="scope">
					<el-button @click="handle('y',scope.row)">同意</el-button>
					<el-button class="el-button-del" @click="handle('n',scope.row)">不同意</el-button>
				</template>
			</el-table-column>
		</el-table>
		<pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	</page-layer>
</template>
<script>
	import postServer from "action/goods/goods"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				pagings: {
					pageSize : 10,
	  	 			pageNum : 1,
				},
				tableData: [],
				totalCount : 0,
				narData: [{
						name: "主题活动",
						router: "marketing.feature.list"
					},
					{
						name: "发起主题活动",
						router: "marketing.feature.theme"
					},
					{
						name : "活动商品",
						router : "marketing.feature.activityGoods"
					}
				],
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
			changePageSize() {
				postServer.getActivityGoods(this);
			}
		},
		components: {
			pageLayer,
			pagination
		}
	}
</script>