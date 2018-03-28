<!-- 商圈列表 -->
<template>
	<page-layer :narData="narData" classs="back-color">
		<el-row class="search-wrap">
		  	 <el-col :span="2" >
		  	 	<el-button  @click="addCircle()" class="btn-add" size="small">添加配送圈</el-button>
		  	 </el-col>
		</el-row>
		<el-table
	      :data="tableData"
	      style="width: 100%">
	       <el-table-column
		      type="index"
		      width="50">
		    </el-table-column>
	      <el-table-column
	        prop="deliveryDealerName"
	        label="配送商名称"
	        width="180px"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="stationName"
	        label="驿站名称"
	        width="180px"
	        >
	      </el-table-column>
	      <el-table-column label="关联供应商" width="300px">
				<template scope="scope">
					{{supplierArrayData(scope.row)}}
				</template>
			</el-table-column>
	       <!-- <el-table-column
	        prop="startTime"
	        label="开始时间"
	        >
	      </el-table-column>
	       <el-table-column
	        prop="entTime"
	        label="结束时间"
	        >
	      </el-table-column> -->
	       <el-table-column
	        prop="timeCreated"
	        label="添加时间" width="180">
	      </el-table-column>
	      <el-table-column
		        prop="statusId"
		        label="状态"
		       >
	        	<template scope="scope">
					<span v-if="scope.row.statusId == 1">正常</span>
					<span v-if="scope.row.statusId == -1">已删除</span>
					<span v-if="scope.row.statusId == 0">禁用</span>
				</template>

		      </el-table-column>
	      <el-table-column
	        label="操作"
	        fixed="right"
	        width="300">
	        <template scope="scope">
	        	<!-- <el-button @click="editRowInfo(scope.row, scope.$index)" size="small">编辑</el-button>  -->
				<el-button class="el-button-del" @click="delRow(scope.row)" size="small">删除</el-button> 
				<el-button class="el-button-disable" v-if="scope.row.statusId == 1" @click="editRowStatus(scope.row)" size="small">禁用</el-button>
				<el-button class="el-button-enabled" v-if="scope.row.statusId == 0" @click="editRowStatus(scope.row)" size="small">启用</el-button>
				<el-button class="el-button-enabled" @click="setSuppliers(scope.row)" size="small">设置供应商</el-button>
				<el-button class="el-button-enabled" @click="lookDetail(scope.row)" size="small">详情</el-button>
			</template>
	      </el-table-column>
	    </el-table>
	    <pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	    <EDITCIRCLEINFO 
	    	:editInfo="editInfo" 
	    	:submitClick="submitInfo" 
	    	:stageList="stageList" 
	    	:distrList="distrList"
	    	ref="circle">
	    </EDITCIRCLEINFO>
    	<SETSUPPLIER 
	    	:supplierDialog="supplierDialog" 
	    	:submitClick="editSupplier"
	    	ref="setSupplier">
	    </SETSUPPLIER>
	</page-layer>
</template>
<script>
	import CIRCLEACTION from "action/customer/circle"
	import EDITCIRCLEINFO from "components/customer/edit-circle-info"
	import SETSUPPLIER from "components/customer/set-supplier"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
    export default {
      data() {
        return {
         narData : [
    	  	{
    	  		name : "配送圈列表",
    	  		router : ""
    	  	}
    	  ],
          tableData: [],
          pagings : {
          	pageSize : 10,
			pageNum : 1,
          },
          totalCount : 0,
          editInfo : {
			title : "",
			dialogShow : false
		  },
		  stageList : [],
		  distrList : [],
		  supplierDialog : {
          		title : "设置供应商",
          		dialogShow : false
          },
          selectRowInfo : {}
        }
      },
      created() {
      		CIRCLEACTION.getCircleList(this);
      		
      },
      components : {
      		EDITCIRCLEINFO,
      		SETSUPPLIER,
      		pageLayer,
      		pagination
      },
      methods : {
      		editRowStatus(row) {
      			var statusId = row.statusId, str = "", _that = this;
      			if(statusId == 1) {
      				str = "此操作禁用该行";
      			} else if(statusId == 0) {
      				str = "此操作启用该行";
      			}
      			_that.$confirm(str + ', 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          	CIRCLEACTION.updateRowStatus(_that, row);
		        });
      		},
      		changePageSize() {
				CIRCLEACTION.getCircleList(this);
			},
			addCircle() {
				var info = this.editInfo;
      			info.title = "添加配送圈"
      			info.dialogShow = true;
      			CIRCLEACTION.getStageAll(this);
      			CIRCLEACTION.getDistrAll(this);
      			this.$refs.circle.resetForm();
			},
			submitInfo(info) {
				CIRCLEACTION.saveCircleInfo(this, info);
			},
			editRowInfo(row, index) {
      			var info = this.editInfo;
      			info.title = "编辑配送圈"
      			info.dialogShow = true;
      			var RowData = JSON.stringify(row);
      			this.$refs.circle.editFormData(JSON.parse(RowData));
			},
			delRow(row) {
				var _that = this;
				_that.$confirm('此操作删除本行数据, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          	CIRCLEACTION.deleteRow(_that, row.stationCircleId);
		        });
			},
			lookDetail(row) {
				this.$router.push({
					name : "customer.circle.detail",
					params : {
						id : row.stationCircleId
					}
				});
			},
			setSuppliers(row) {
				this.selectRowInfo = row;
				this.supplierDialog.dialogShow = true;
				this.$refs.setSupplier.editFormData(row);
			},
			editSupplier(supplierIds) {
				var len = supplierIds.length, str = ""
				for(var i = 0; i < len ; i ++) {
					if(len - 1 == i) {
						str += supplierIds[i];
					} else{
						str += supplierIds[i] + ","
					}
					
				}
				if(str == "") {
					this.$message("请勾选供应商！");
				}
				CIRCLEACTION.bindSupplerInfo(this, str);
			},
			supplierArrayData(data) {
				if(data.supplierBOList.length > 0) {
					var str="";
					var sList=data.supplierBOList;
					sList.forEach((v,k)=>{
						str+=v.supplierName+",";
					});
					return str.substring(0,str.length-1);
				}
				return "无";
			}
      }
    }
  </script>