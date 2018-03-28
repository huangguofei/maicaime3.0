<!-- 配送时间 -->
<template>
	<page-layer :narData="narData" classs="back-color">
		<el-row class="search-wrap">
		  	<el-col :span="2" >
		  	 	<el-button  @click="addArea()" class="btn-add"  size="small">添加配送时间</el-button>
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
	        prop="deliveryStartTimeSection"
	        label="开始时间点"
	        width="180">
	          <template scope="scope">
	          		<span v-if="scope.row.startTimeType == 1">{{"明" + scope.row.deliveryStartTimeSection}}</span>
	          		<span v-else> {{"今" + scope.row.deliveryStartTimeSection}}</span>
        	  </template>
	      </el-table-column>
     		<el-table-column
	        prop="deliveryEndTimeSection"
	        label="结束时间点"
	        >
	        <template scope="scope">
	        		<span v-if="scope.row.endTimeType == 1">{{"明" + scope.row.deliveryEndTimeSection}}</span>
	          		<span v-else> {{"今" + scope.row.deliveryEndTimeSection}}</span>
        	  </template>
	      </el-table-column>
	       <el-table-column
	        prop="timeCreated"
	        width="180"
	        label="创建时间"
	        >
	      </el-table-column>
     		<el-table-column
	        label="状态"
	        >
	        <template scope="scope">
	        	<span v-if="scope.row.status == 1">正常</span>
	        	<span v-if="scope.row.status == 0">禁用</span>
	        	<span v-if="scope.row.status == -1">删除</span>
        	</template>
	      </el-table-column>
	      <el-table-column
	        label="操作"
	        fixed="right"
	        width="180">
	        <template scope="scope">
				<el-button @click="editAreaInfo(scope.row, scope.$index)">编辑</el-button> 
				<el-button class="el-button-del" @click="delRow(scope.row)">删除</el-button> 
				<el-button class="el-button-disable" v-if="scope.row.status == 1" @click="editRowStatus(scope.row)">禁用</el-button>
				<el-button class="el-button-enabled" v-if="scope.row.status == 0" @click="editRowStatus(scope.row)">启用</el-button>
			</template>
	      </el-table-column>
	    </el-table>
	    <EDITDELTIME :editInfo="editInfo" :submitClick="submitDelTimeInfo" ref="timeInfo"></EDITDELTIME>
	</page-layer>
</template>
<script>
	import DELIVERYTIMEACTION from "action/setting/delivery-time"
	import EDITDELTIME from "components/setting/edit-del-time"
	import pageLayer from "components/common/page-layer"
    export default {
      data() {
        return {
          narData : [
    	  	{
    	  		name : "配送时间列表",
    	  		router : ""
    	  	}
    	  ],
          tableData: [],
          editInfo : {
			title : "",
			dialogShow : false
		  },
        }
      },
      created() {
      		DELIVERYTIMEACTION.getDelTimeList(this);
      },
      components : {
      		EDITDELTIME,
      		pageLayer
      },
      methods : {
      		addArea() {
      			var info = this.editInfo;
      			info.title = "添加配送时间"
      			info.dialogShow = true;
      			this.$refs.timeInfo.resetForm();
      		},
      		editAreaInfo(row, index) {
      			var info = this.editInfo;
      			info.title = "编辑配送时间"
      			info.dialogShow = true;
      			var RowData = JSON.stringify(row);
      			this.$refs.timeInfo.editFormData(JSON.parse(RowData));
      		},
			/*提交配送信息*/
			submitDelTimeInfo(info) {
				DELIVERYTIMEACTION.saveDelTimeInfo(this, info);
			},
			delRow(row) {
				var _that = this;
				_that.$confirm('此操作删除本行数据, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          	DELIVERYTIMEACTION.deleteDelTimeRow(_that, row.id);
		        });
			},
			editRowStatus(row) {
				var statusId = row.status, str = "", _that = this;
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
		          	DELIVERYTIMEACTION.updateStatus(_that, row);
		        });
			}
      }
    }
  </script>