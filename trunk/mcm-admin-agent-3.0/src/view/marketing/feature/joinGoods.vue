<!-- 参与过的食材 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<div class="info">
			<h2>{{detailInfo.specialName}}</h2>
			<div class="row">
				<label>活动名称：</label><span>{{detailInfo.specialName}}</span>
			</div>
			<div class="row">
				<label>活动状态：</label><span>{{detailInfo.marketingStatusText}}</span>
			</div>
			<div class="row">
				<label>活动类型：</label><span>{{detailInfo.monthlySpeciaTypeText}}</span>
			</div>
			<div class="row">
				<label>创建时间：</label><span>{{detailInfo.creationTime}}</span>
			</div>
		</div>
		<h2 class="tit">参与的商品列表</h2>
		<el-table :data="detailInfo.prods" style="width: 100%;">
			<el-table-column prop="skuName" label="商品名称" width="280">
			</el-table-column>
			<el-table-column  label="图片">
				<template scope="scope">
					<img :src="scope.row.skuImage" style="width:45px;height:45px;" />
				</template>
			</el-table-column>
			<el-table-column prop="skuUnit" label="单位"  width="80">
			</el-table-column>
			<el-table-column prop="totalAmount" label="总库存"  width="80">
			</el-table-column>
			<el-table-column prop="totalAmount" label="剩余库存"  width="80">
			</el-table-column>
			<el-table-column prop="promotionPrice" label="价格">
				<template scope="scope">
					<span style="margin-left: 10px">{{ scope.row.promotionPrice==0?"实时报价":scope.row.promotionPrice }}</span>
				</template>
			</el-table-column>
			<el-table-column prop="statusText" label="状态">
			</el-table-column>
			<el-table-column prop="creationTime" label="添加时间" width="180">
			</el-table-column>
		</el-table>
	</page-layer>
</template>
<script>
	import featureAction from "action/marketing/feature"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				narData: [{
						name: "主题活动参与的商品"
					},
				],
				detailInfo : {}
			}
		},
		created() {
			featureAction.getActivityDetail(this);
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
<style lang="less" scoped>
	.info{
		padding:15px;
		h2{
			margin-bottom:5px;
		}
		.row{
			padding:5px 0;
			font-size:14px;
			label{
				color:#666;
			}
		}
	}
	.tit{
		padding:0 0 15px 15px;
	}

</style>