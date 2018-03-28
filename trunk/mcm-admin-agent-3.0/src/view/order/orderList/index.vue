<!-- 流水信息 -->
<template>
	<page-layer :narData="narData" classs="back-color">
		<el-form :inline="true" ref="form" :model="queryParams" label-width="100px" style='padding-top: 10px;' class="search-wrap">
			<el-form-item label="区域">
				<el-select v-model="queryParams.regionId" placeholder="区域列表" size="small" :disabled="isSelect" clearable >
					<el-option v-for="item in areaData" :key="item.regionId" :label="item.regionName" :value="item.regionId">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="订单状态">
				<el-select v-model="queryParams.orderStatus" placeholder="订单状态" size="small">
					<el-option v-for="item in orderStatus" :key="item.value" :label="item.name" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="订单类型">
				<el-select v-model="queryParams.orderType" placeholder="订单类型" size="small">
					<el-option v-for="item in orderType" :key="item.value" :label="item.name" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="配送方式">
				<el-select v-model="queryParams.deliveryWay" placeholder="配送方式" size="small">
					<el-option v-for="item in deliveryWay" :key="item.value" :label="item.name" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="日期筛选方式">
				<el-select v-model="queryParams.dateTypeId" placeholder="日期筛选方式" size="small">
					<el-option v-for="item in dateTypeId" :key="item.value" :label="item.name" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="查询时间">
				<el-date-picker v-model="queryDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss" @change="queryDateChange" align="right" size="small">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="配送时间">
				<el-date-picker v-model="devDate" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd HH:mm:ss" @change="devDateChange" align="right" size="small">
				</el-date-picker>
			</el-form-item>
			<el-form-item label="关键字">
				<el-input v-model="queryParams.keyword" size="small"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" style="margin-left:20px;" size="small" @click="queryInfo()">查询</el-button>
			</el-form-item>
			<el-tooltip class="item" effect="dark" content="会根据您设置的条件过滤导出Excel" placement="top-start">
				<el-button size="small" style="float:right;margin-top:5px;" @click="downloadExcel">导出</el-button>
			</el-tooltip>
		</el-form>
		<el-table :data="tableData" style="width: 100%" show-summary :summary-method="getSummaries">
			<el-table-column type="index" width="60">
			</el-table-column>
			<el-table-column prop="purchaserName" label="采购商" width="180px">
			</el-table-column>
			<el-table-column prop="purchaserMobile" label="采购手机" width="150px">
			</el-table-column>
			<el-table-column prop="supplierName" label="供应商" width="240px">
			</el-table-column>
			<el-table-column prop="supplierMobile" label="供应手机" width="150px">
			</el-table-column>
			<el-table-column label="订单编号" width="180">
				<template scope="scope">
					<p>{{scope.row.orderId }}</p>
					<p>({{scope.row.parentOrderId }})</p>
				</template>
			</el-table-column>
			<el-table-column prop="orderStatusText" label="状态">
			</el-table-column>
			<el-table-column prop="orderTypeText" label="订单类型">
			</el-table-column>
			<el-table-column prop="timeCreated" label="订单时间" width="160px">
			</el-table-column>
			<el-table-column prop="purchaserRemark" label="备注">
			</el-table-column>
			<el-table-column prop="payableAmount" label="实付金额">
			</el-table-column>
			<el-table-column prop="totalAmount" :label="queryParams.orderType == 2 ? '合计积分' : '合计金额'">
			</el-table-column>
			<el-table-column label="操作" width="150" fixed="right">
				<template scope="scope">
					<!-- <el-button type="" class="btn" @click="viewDetails(scope.row)">查看订单详情 </el-button>-->
					<a :href="'/order/' + scope.row.orderId" class="btn" target="_blank">
						<el-button type="" class="btn">查看订单详情</el-button>
					</a>
				</template>
			</el-table-column>

		</el-table>
		<pagination :pagings="queryParams" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	</page-layer>
</template>
<script>
	import SETTINGAREA from "action/order/order"
	import areaApi from "action/public/area"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				narData: [{
					name: "订单列表",
					router: ""
				}],
				queryParams: {
					regionId:"",
					dateTypeId: 10,
					orderStatus: "",
					orderType: "",
					deliveryWay: "",
					deliveryBeginTime: "",
					deliveryEndTime: "",
					beginDate: "",
					endDate: "",
					keyword: "",
					pageSize: 10,
					pageNum: 1,
				},
				totalCount: 0,
				isSelect:true,
				areaData:[],
				tableData: [],
				orderStatus: [{
					name: '选择订单状态',
					value: ""
				}, {
					name: '待确认',
					value: '30'
				}, {
					name: '待收货',
					value: '40,50'
				}, {
					name: '已完成',
					value: '100'
				}, {
					name: '已取消',
					value: '300'
				}],
				orderType: [{
					name: '选择订单类型',
					value: ""
				}, {
					name: '食材采购',
					value: 1
				}, {
					name: '积分兑换',
					value: 2
				}],
				deliveryWay: [{
					name: '选择配送方式',
					value: ""
				}, {
					name: '送货上门',
					value: 100
				}, {
					name: '自提',
					value: 200
				}, {
					name: '驿站',
					value: 300
				}],
				dateTypeId: [{
					name: '选择日期筛选方式',
					value: ""
				}, {
					name: '下单时间',
					value: 10
				}, {
					name: '付款时间',
					value: 20
				}, {
					name: '接单时间',
					value: 30
				}, {
					name: '收货时间',
					value: 40
				}, {
					name: '完成时间',
					value: 50
				}, {
					name: '取消时间',
					value: 60
				}],
				queryDate: "",
				devDate: ""
			}
		},
		created() {
			areaApi.getAreaList(this);
			SETTINGAREA.getOrderList(this);
		},
		components: {
			pageLayer,
			pagination
		},
		methods: {
			queryInfo() {
				SETTINGAREA.getOrderList(this);
			},
			changePageSize() {
				SETTINGAREA.getOrderList(this);
			},
			viewDetails(data) {
				this.$router.push({
					name: "order.details",
					params: {
						id: data.orderId
					},
					query: {
						page: this.queryParams.pageNum
					}
				})
			},
			queryDateChange(val) {
				var beginDate = "",
					endDate = "";
				if(val && val.length > 0) {
					beginDate = val[0];
					endDate = val[1];
				}
				this.queryParams.beginDate = beginDate;
				this.queryParams.endDate = endDate;
			},
			devDateChange(val) {
				var beginDate = "",
					endDate = "";
				if(val && val.length > 0) {
					beginDate = val[0];
					endDate = val[1];
				}
				this.queryParams.deliveryBeginTime = beginDate;
				this.queryParams.deliveryEndTime = endDate;
			},
			downloadExcel() {
				SETTINGAREA.doweloadOrderExcel(this);
			},
			getSummaries(param) {
				const {
					columns,
					data
				} = param;
				const sums = [];
				columns.forEach((column, index) => {
					if(index === 0) {
						sums[index] = '合计';
						return;
					}
					const values = data.map(item => Number(item[column.property]));
					if(column.property == "totalAmount" || column.property == "payableAmount") {
						sums[index] = values.reduce((prev, curr) => {
							const value = Number(curr);
							if(!isNaN(value)) {
								return prev + curr;
							} else {
								return prev;
							}
						}, 0);
						sums[index] = sums[index].toFixed(2);
					} else {
						sums[index] = '';
					}
				});
				return sums;
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.price {
		color: red;
	}
	
	.search-wrap {
		padding-bottom: 0;
	}
	
	.active {
		color: #46CD72;
	}
</style>