<!-- 服务站模块 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<el-row class="search-wrap">
			<el-col :span="3">
				<el-input v-model="seachData.agentName" placeholder="请输入服务站名称"  size="small"></el-input>
			</el-col>
			<el-col :span="3">
				<el-input v-model="seachData.contact" :maxlength="8" placeholder="请输入联系人姓名"  size="small"></el-input>
			</el-col>
			<el-col :span="3">
				<el-input v-model.number="seachData.mobile" :maxlength="11" placeholder="请输入电话号码"  size="small"></el-input>
			</el-col>
			<el-col :span="3">
				<el-cascader placeholder="试试搜索：四川" :clearable="true" expand-trigger="hover"  size="small" :props="keyobj" :options="options" @change="handleChange">
				</el-cascader>
			</el-col>
			<el-col :span="2">
				<el-button style="margin-left:20px;" @click="queryInfo()"  size="small">查询</el-button>
			</el-col>
			<el-button style="margin-left:20px;float:right" @click="addStairCategory()" class="btn-add"  size="small">添加服务站</el-button>
		</el-row>
		<el-table :data="tableData">
			<el-table-column type="index" width="60">
			</el-table-column>  
			<el-table-column prop="agentName" label="名称" width="200"></el-table-column>
			<el-table-column prop="contact" label="联系人" width="200"></el-table-column>
			<el-table-column prop="areaName" label="区域"></el-table-column>
			<el-table-column prop="mobile" label="电话号码" width="160"></el-table-column>
			<el-table-column prop="timeCreated" label="创建时间" width="180"></el-table-column>
			<el-table-column label="操作" fixed="right" width="120">
				<template scope="scope" >
					<el-button type="text" size="small" @click="editorDetail(scope.row)">编辑</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="pagination">
			<pagination :pagings="seachData" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
		</div>
		<add-server-dialog :editInfo="addServeData" :cityData="options" :submitClick="submitCategoryInfo" ref="agentInfo"></add-server-dialog>
	</page-layer>
</template>
<script>
	import serverModule from "actionurl/serve/agent"
	import addServerDialog from "components/serve/add-serve"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				narData : [
		    	  	{
		    	  		name : "服务站",
		    	  	}
		    	  
		    	  ],
				tableData: [],
				options: [],
				seachData: {
					agentName: "",
					contact: "",
					mobile: "",
					areaId: "",
					pageSize : 10,
 					pageNum : 1,
				},
				totalCount : 0,
				keyobj: {
					value: "areaId",
					label: "areaName",
					children: "subAreas"
				},
				addServeData: {
					title: "",
					dialogShow: false
				}
			}
		},
		created() {
			serverModule.getSiteList(this);
			serverModule.getCityData(this);
		},
		methods: {
			handleChange(val) {
				this.seachData.areaId = val[2];
			},
			queryInfo() {
				serverModule.setSearch(this);
			},
			addStairCategory() {
				this.addServeData.title = "添加服务站";
				this.addServeData.dialogShow = true;
				this.$refs.agentInfo.resetForm();
			},
			submitCategoryInfo(data) {
				if(data.agentId) {
					serverModule.editServer(this, data);
				} else {
					serverModule.addServer(this, data);
				}
				this.addServeData.dialogShow = false;
			},
			changePageSize(page) {
				this.queryInfo();
			},
			editorDetail(data) {
				this.addServeData.title = "编辑";
				this.addServeData.dialogShow = true;
				/*this.addServeData.serveData=data;*/
				this.$refs.agentInfo.updateInfo(data);
			}
		},
		components: {
			addServerDialog,
			pageLayer,
			pagination
		}
	}
</script>
<style>
	.pagination {
		text-align: right;
		margin-top: 10px;
	}
	
	.search-wrap>div {
		margin-right: 10px;
	}
</style>