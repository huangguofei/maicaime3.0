<!-- 供应商列表 -->
<template>
	<page-layer :narData="narData" classs="back-color">
		<el-row class="search-wrap">
			<el-col :span="3" style="margin-right:20px;">
				<el-select v-model="queryParams.regionId" placeholder="区域列表" size="small" :disabled="isSelect" clearable >
					<el-option v-for="item in areaData" :key="item.regionId" :label="item.regionName" :value="item.regionId">
					</el-option>
				</el-select>
			</el-col>
			<el-col :span="3" style="margin-right:20px;">
				<el-input v-model="queryParams.supplierName" placeholder="供应商名称"  size="small"></el-input>  
			</el-col>
		    <el-col :span="3" style="margin-right:20px;">
		  	 	<el-input v-model="queryParams.mobile" placeholder="手机号码"  size="small"></el-input>
		  	 </el-col>
		  	 <!-- <el-col :span="3">
		  	 	<el-input v-model="queryParams.areaName" placeholder="区域"></el-input>
		  	 </el-col> -->
			<el-col :span="2">
				<el-button type="primary" style="margin-left:20px;" @click="queryInfo()"  size="small">查询</el-button>
			</el-col>

		</el-row>
		<el-table :data="tableData" style="width: 100%">
			<el-table-column type="index" width="50">
			</el-table-column>
			<el-table-column prop="supplierName" label="供应商名" width="240">
			</el-table-column>
			<el-table-column prop="contactName" label="联系人" width="100">
			</el-table-column>
			<el-table-column prop="mobile" label="手机号码" width="130">
			</el-table-column>
			<el-table-column prop="areaName" label="概念区域" width="100">
				<template scope="scope">
					{{areaDatas(scope.row)}}
				</template>
			</el-table-column>
			<el-table-column prop="longitude" label="经度" width="120">
			</el-table-column>
			<el-table-column prop="dimension" label="纬度" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址" width="300px">
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
			<el-table-column label="操作" width="200"  fixed="right">
				<template scope="scope">
					<el-button @click="setArea(scope.row, 0)" v-if="scope.row.statusId != 5">设置区域和分类</el-button>
					<el-button class="el-button-audit" v-if="scope.row.statusId == 5" @click="auditRow(scope.row)">审核</el-button>
					<el-button class="el-button-disable" v-if="scope.row.statusId == 1" @click="editRowStatus(scope.row)">禁用</el-button>
					<el-button class="el-button-enabled" v-if="scope.row.statusId == 0" @click="editRowStatus(scope.row)">启用</el-button>
					<!-- <el-button @click="setCategory(scope.row)">编辑分类</el-button> -->
				</template>
			</el-table-column>
		</el-table>
		<pagination :pagings="queryParams" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
		<set-area-category :areaDialog="areaDialog" :editRowInfo="editRowInfo" :submitClick="editArea" ref="setArea"></set-area-category>
		<!--<set-area :areaDialog="areaDialog" :checkbox="true" :submitClick="editArea" ref="setArea"></set-area>-->
	</page-layer>
</template>
<script>
	import CUSTOMERSUPPLIER from "action/customer/supplier"
	import areaApi from "action/public/area"
	import setAreaCategory from "components/customer/set-area-category"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				narData: [{
					name: "供应商列表",
					router: ""
				}],
				queryParams: {
					regionId:"",
					supplierName: "",
					mobile: "",
					pageSize : 10,
	    	  		pageNum : 1,
				},
				totalCount : 0,
				isSelect:true,
				areaData:[],
				tableData: [],
				areaDialog: {
					title: "设置区域",
					dialogShow: false,
					type: 0
				},
				editRowInfo: {},
			}
		},
		created() {
			areaApi.getAreaList(this);
			CUSTOMERSUPPLIER.getSupplierList(this);
		},
		components: {
			setAreaCategory,
			pageLayer,
			pagination
		},
		methods: {
			queryInfo() {
				CUSTOMERSUPPLIER.getSupplierList(this);
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
					CUSTOMERSUPPLIER.updateSupplierStatus(_that, row);
				});
			},
			changePageSize() {
				CUSTOMERSUPPLIER.getSupplierList(this);
			},
			setArea(row, type) {
				this.editRowInfo = row;
				this.areaDialog.type = type;
				this.areaDialog.dialogShow = true;
				this.$refs.setArea.editFormData(row);
			},
			editArea(params) {
				/*var params = {
					newRegionIdStr : regionIds.toString(),
					supplierId : this.editRowInfo.supplierId
				}*/
				/*CUSTOMERSUPPLIER.bindReginAction(this, regStr);*/
				CUSTOMERSUPPLIER.saveAreaAndCategory(this, params);
			},
			setCategory(row) {
				this.$router.push({
					name: "customer.supplier.catrgory",
					query: {
						supplierId: row.supplierId
					}
				});
			},
			areaDatas(data) {
				if(data.suppierRegionItemBOList.length > 0) {
					var str="";
					var areaList=data.suppierRegionItemBOList;
					areaList.forEach((v,k)=>{
						str+=v.regionName+",";
					});
					return str.substring(0,str.length-1);
				}
				return "无";
			}
		}
	}
</script>