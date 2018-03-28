<!-- 采购商列表 -->
<template>
	<page-layer :narData="narData" classs="back-color">
		<el-row class="search-wrap">
			<el-col :span="3" style="margin-right:20px;">
				<el-select v-model="queryParams.regionId" placeholder="区域列表" size="small" :disabled="isSelect" clearable >
					<el-option v-for="item in areaData" :key="item.regionId" :label="item.regionName" :value="item.regionId">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="5" style="margin-right:20px;">
				<el-input v-model="queryParams.purchaserName" placeholder="采购商名称" size="small"></el-input>
			</el-col>
			<el-col :span="3" style="margin-right:20px;">
				<el-input v-model="queryParams.mobile" placeholder="手机号码" size="small"></el-input>
			</el-col>
			<el-col :span="2">
				<el-button style="margin-left:20px;" type="primary" @click="queryInfo()" size="small">查询</el-button>
			</el-col>

		</el-row>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" width="50">
			</el-table-column>
			<el-table-column prop="purchaserName" label="采购商名" width="180">
			</el-table-column>
			<el-table-column prop="contact" label="联系人">
			</el-table-column>
			<el-table-column prop="mobile" label="手机号码" width="130">
			</el-table-column>
			<el-table-column prop="regionName" label="概念区域" width="100">
			</el-table-column>
			<el-table-column prop="longitude" label="经度" width="120">
			</el-table-column>
			<el-table-column prop="dimension" label="纬度" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址">
			</el-table-column>
			<el-table-column prop="defaultDeliveryAddress" label="默认收货地址">
			</el-table-column>
			<el-table-column prop="timeCreated" label="注册时间" width="160px">
			</el-table-column>
			<el-table-column prop="statusId" label="状态">
				<template scope="scope">
					<span v-if="scope.row.statusId == 5">未审核</span>
					<span v-if="scope.row.statusId == 1">已审核</span>
					<span v-if="scope.row.statusId == -1">已删除</span>
					<span v-if="scope.row.statusId == 0">禁用</span>
					<span v-if="scope.row.statusId == -5">待激活</span>
				</template>
			</el-table-column>
			<el-table-column label="操作" fixed="right" width="120">
				<template scope="scope">
					<el-button @click="setArea(scope.row, 0)">设置区域</el-button>
					<el-button @click="editAddr(scope.row, 0)">修改收货地址</el-button>
					<el-button class="el-button-audit" v-if="scope.row.statusId == 5" @click="auditRow(scope.row)">审核</el-button>
					<!--<el-button class="el-button-disable" v-if="scope.row.statusId == 1" @click="editRowStatus(scope.row)">禁用</el-button>
				<el-button class="el-button-enabled" v-if="scope.row.statusId == 0" @click="editRowStatus(scope.row)">启用</el-button>-->
				</template>
			</el-table-column>
		</el-table>
		<pagination :pagings="queryParams" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
		<CUSTOMERSETAREA :areaDialog="areaDialog" :submitClick="editArea" ref="setArea"></CUSTOMERSETAREA>
		<edit-address :dialogData="dialogData" :submitClick="editAdress" ref="setAdress"></edit-address>
	</page-layer>
</template>
<script>
	import CUSTOMERPURCHASER from "action/customer/purchaser"
	import areaApi from "action/public/area"
	import CUSTOMERSETAREA from "components/customer/set-area"
	import editAddress from "components/customer/edit-address"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				narData: [{
					name: "采购商列表",
					router: "customer.purchaser.list"
				}, {
					name: "充值记录",
					router: "customer.purchaser.rechargeRecord"
				}],
				queryParams: {
					regionId:"",
					purchaserName: "",
					mobile: "",
					pageSize: 10,
					pageNum: 1,
				},
				isSelect:true,
				areaData:[],
				totalCount: 0,
				tableData: [],
				areaDialog: {
					title: "设置区域",
					dialogShow: false,
					type: 0
				},
				dialogData: {
					title: "编辑收货地址",
					dialogShow: false,
				},
				editRowInfo: {},
			}
		},
		created() {
			areaApi.getAreaList(this);
			CUSTOMERPURCHASER.getPurchaserList(this);
		},
		components: {
			CUSTOMERSETAREA,
			pageLayer,
			pagination,
			editAddress
		},
		methods: {
			queryInfo() {
				CUSTOMERPURCHASER.getPurchaserList(this);
			},
			auditRow(row) {
				var type = 1; /*审核*/
				this.setArea(row, type);
			},
			editRowStatus(row) {
				var statusId = row.statusId,
					str = "",
					_that = this;
				if(statusId == 5) {
					str = "此操作审核该行";
				} else if(statusId == 1) {
					str = "此操作禁用该行";
				} else if(statusId == 0) {
					str = "此操作启用该行";
				}
				_that.$confirm(str + ', 是否继续?', '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					CUSTOMERPURCHASER.updatePurchaserStatus(_that, row);
				});
			},
			changePageSize(value) {
				CUSTOMERPURCHASER.getPurchaserList(this);
			},
			setArea(row, type) {
				this.editRowInfo = row;
				this.areaDialog.type = type;
				this.areaDialog.dialogShow = true;
				this.$refs.setArea.editFormData(row);
			},
			editArea(regionId) {
				CUSTOMERPURCHASER.bindReginAction(this, regionId);
			},
			editAddr(data) {
				this.dialogData.adress = data.defaultDeliveryAddress;
				this.dialogData.purchaserId = data.purchaserId;
				this.dialogData.dialogShow = true;
			},
			editAdress() {
				if(this.dialogData.adress) {
					CUSTOMERPURCHASER.editAdress(this);
					this.dialogData.dialogShow = false;
				} else {
					this.$message.error('地址不能为空！');
				}
			}
		}
	}
</script>