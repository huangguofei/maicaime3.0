<!-- 单个手机号注册上限设置 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<el-row class="search-wrap">
			<el-button  @click="addLimit()" class="btn-add"  size="small">添加</el-button>
		</el-row>
		<el-table :data="tableData">
			<el-table-column type="index" width="60">
			</el-table-column>  
			<el-table-column prop="mobile" label="手机号" width="200"></el-table-column>
			<el-table-column prop="purchaserCount" label="采购商限制数" width="200">
					<template scope="scope" >
						{{scope.row.purchaserCount == -1 ? "未限制"  : scope.row.purchaserCount}}
					</template>
			</el-table-column>
			<el-table-column prop="supplierCount" label="供应商限制数">
				<template scope="scope" >
						{{scope.row.supplierCount == -1 ? "未限制"  : scope.row.supplierCount}}
					</template>
			</el-table-column>
			<el-table-column prop="agentCount" label="服务站限制数" width="160">
				<template scope="scope" >
						{{scope.row.agentCount == -1 ? "未限制"  : scope.row.agentCount}}
					</template>
			</el-table-column>
			<el-table-column prop="deliveryDealerCount" label="配送商限制数" width="160">
				<template scope="scope" >
						{{scope.row.deliveryDealerCount == -1 ? "未限制"  : scope.row.deliveryDealerCount}}
					</template>
			</el-table-column>
			<el-table-column prop="stationCount" label="驿站限制数" width="160">
				<template scope="scope" >
						{{scope.row.stationCount == -1 ? "未限制"  : scope.row.stationCount}}
					</template>
			</el-table-column>
			<el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
			<el-table-column label="操作" fixed="right" width="160">
				<template scope="scope" >
					<el-button type="text" size="small" @click="editorDetail(scope.row)">编辑</el-button>
					<el-button type="text" class="btn-del" size="small" @click="delRow(scope.row.id)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<div class="pagination">
			<pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
		</div>
		<el-dialog :title="title" :visible.sync="dialogShow" size="tiny" :close-on-click-modal="false">
			<edit-register-limit @onSubmit="onSubmit" :form="form">
					<el-form-item label="手机号码">
					    <el-input
							  placeholder="请输入手机号码" auto-complete="off" 
							  v-model="form.mobile" :maxlength="11"  style="width:200px" :disabled="form.id ? true : false">
							</el-input>
					  </el-form-item>
			</edit-register-limit>
		</el-dialog>
	</page-layer>
</template>
<script>
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
	import editRegisterLimit from "components/setting/edit-register-limit"
	import limitAction from "actionurl/setting/limit"
	export default{
		data() {
			return{
				narData : [
		    	  	{
		    	  		name : "通用端限制数",
		    	  		router : "setting.register.limit"
		    	  	},
		    	  	{
		    	  		name : "单个手机号限制数",
		    	  		router : "setting.register.mobile"
		    	  	}
		    	],
		    	tableData : [],
		    	pagings : {
		    		pageSize : 10,
 					pageNum : 1,
		    	},
		    	totalCount : 0,
		    	title : "添加注册限制数",
		    	dialogShow : false,
		    	form : {}
			}
		},
		components : {
			pageLayer,
			pagination,
			editRegisterLimit
		},
		created() {
			this.initForm();
			limitAction.getLimitByMobileList(this);
		},
		methods : {
			changePageSize() {
				limitAction.getLimitByMobileList(this);
			},
			addLimit() {
				this.initForm();
				this.dialogShow = true;
			},
			onSubmit() {
				var form = this.form;
				if(form.mobile == "") {
					this.$message("手机号码不能为空！");
					return false;
				} else if(!cJs.checkMobile(form.mobile)) {
					this.$message("手机号码格式不正确！");
					return false;
				}
				limitAction.saveMobileLimitInfo(this);
			},
			initForm() {
				this.form = {
		    		mobile : "",
		    		agentCount : -1,
		    		purchaserCount :  -1,
		    		supplierCount :  -1,
		    		stationCount : -1,
		    		deliveryDealerCount : -1,
		    	}
		    	delete this.form.id;
			},
			editorDetail(row) {
				this.form = row;
				this.dialogShow = true;
			},
			delRow(rowId) {
				limitAction.delLimitRow(this, rowId);
			}
		}
	}
</script>