<!-- 驿站 -->
<template>
	<page-layer :narData="narData" classs="back-color">
		<el-row class="search-wrap">
	  		<el-col :span="2" >
		  	 	<el-button  @click="addStage()" class="btn-add" size="small">添加驿站</el-button>
		  	 </el-col>
		</el-row>
		<el-table
	      :data="tableData"
	      stripe
	      style="width: 100%">
	       <el-table-column
		      type="index"
		      width="50">
		    </el-table-column>
		    <el-table-column
		        prop="stationName"
		        label="驿站名称"
		        width="180">
		      </el-table-column>
		     <el-table-column
		        prop="contact"
		        label="联系人"
		        >
		      </el-table-column>
		       <el-table-column
		        prop="mobile"
		        label="手机号码"
		        width="160">
		      </el-table-column>
		       <el-table-column
		        prop="longitude"
		        label="经度"
		        width="100">
		      </el-table-column>
		      <el-table-column
		        prop="dimension"
		        label="纬度"
		        width="120">
		      </el-table-column>
		       <!--<el-table-column
		        prop="dimension"
		        label="纬度"
		        width="120">
		      </el-table-column>-->
		      <el-table-column
		        prop="address"
		        label="地址" width="300">
		      </el-table-column>
		       <el-table-column
		        prop="timeCreated"
		        label="添加时间" width="180">
		      </el-table-column>
		      <el-table-column
		        prop="statusId"
		        label="状态"
		        width="100">
	        	<template scope="scope">
					<span v-if="scope.row.statusId == 1">正常</span>
					<span v-if="scope.row.statusId == -1">已删除</span>
					<span v-if="scope.row.statusId == 0">禁用</span>
				</template>

		      </el-table-column>
		      <el-table-column
		        label="操作"
		        fixed="right"
		        width="180">
		        <template scope="scope">
		        	<!-- <el-button @click="editRowInfo(scope.row, scope.$index)">编辑</el-button>  -->
					<el-button class="el-button-del" @click="delRow(scope.row)">删除</el-button> 
					<el-button class="el-button-disable" v-if="scope.row.statusId == 1" @click="editRowStatus(scope.row)">禁用</el-button>
					<el-button class="el-button-enabled" v-if="scope.row.statusId == 0" @click="editRowStatus(scope.row)">启用</el-button>
				</template>
		      </el-table-column>
	    </el-table>
	    <pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	    <EDITORSTAGEINFO :editInfo="editInfo" :submitClick="submitAreaInfo" ref="stageInfo"></EDITORSTAGEINFO>
	</page-layer>
</template>
<script>
	import STAGEACTION from "action/customer/stage"
	import EDITORSTAGEINFO from "components/customer/edit-stage-info"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
    export default {
      data() {
        return {
          narData : [
    	  	{
    	  		name : "驿站列表",
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
        }
      },
      created() {
      		STAGEACTION.getStageList(this);
      },
      components : {
      		EDITORSTAGEINFO,
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
		          	STAGEACTION.updateRowStatus(_that, row);
		        });
      		},
      		changePageSize() {
				STAGEACTION.getStageList(this);
			},
			addStage() {
				var info = this.editInfo;
      			info.title = "添加驿站"
      			info.dialogShow = true;
      			this.$refs.stageInfo.resetForm();
			},
			submitAreaInfo(info) {
				STAGEACTION.saveStageInfo(this, info);
			},
			editRowInfo(row, index) {
      			var info = this.editInfo;
      			info.title = "编辑驿站"
      			info.dialogShow = true;
      			var RowData = JSON.stringify(row);
      			this.$refs.stageInfo.editFormData(JSON.parse(RowData));
			},
			delRow(row) {
				var _that = this;
				_that.$confirm('此操作删除本行数据, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          	STAGEACTION.deleteRow(_that, row.stationId);
		        });
			}
      }
    }
  </script>