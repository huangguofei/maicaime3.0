<!-- 素材列表 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<el-row class="search-wrap">
		  	 <el-col :span="2" >
		  	 	<el-button  @click="addMaterial()" class="btn-add"  size="small" >添加素材</el-button>
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
	        prop="prodName"
	        label="商品名称"
	        width="260"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="categoryName"
	        label="分类名称"
	        width="200"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="startTime"
	        width="120"
	        label="商品图片"
	        >
	        <template scope="scope">
					<span class="prod-img">
						<img :src="scope.row.prodImage">
					</span>
				</template>
	      </el-table-column>
	      <el-table-column
	        prop="skuUnit"
	        label="单位"
	        >
	      </el-table-column>
	      <el-table-column
		        prop="statusId"
		        label="状态"
		        width="100">
	        	<template scope="scope">
					<span v-if="scope.row.prodStatusId == 1">正常</span>
					<span v-if="scope.row.prodStatusId == -1">已删除</span>
					<span v-if="scope.row.prodStatusId == 0">禁用</span>
				</template>

		      </el-table-column>
	      <el-table-column
	        label="操作"
	        fixed="right"
	        width="160">
	        <template scope="scope">
	        	<el-button @click="editRowInfo(scope.row, scope.$index)" size="small">编辑</el-button> 
				<el-button class="el-button-del" @click="delRow(scope.row)" size="small">删除</el-button> 
			</template>
	      </el-table-column>
	    </el-table>
	    <pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	  	<edit-material 
	    	:editInfo="editInfo" 
	    	:submitClick="submitInfo" 
	    	ref="editMaterial">
	    </edit-material> 
    	
	</page-layer>
</template>
<script>
	import materialAction from "actionurl/product/material"
	import editMaterial from "components/product/edit-material"
	import pageLayer from "components/common/page-layer"
	import pagination from "components/common/pagination"
    export default {
      data() {
        return {
         narData : [
    	  	{
    	  		name : "素材列表",
    	  		router : "product.material.list"
    	  	}
    	  ],
          tableData: [],
          pagings : {
          	pageSize : 10,
 			pageNum : 1,
          },
          editInfo : {
			title : "",
			dialogShow : false
		  },
		  totalCount : 0,
          selectRowInfo : {},
          loading : false,
        }
      },
      created() {
      		materialAction.getMateialList(this);
      },
      components : {
      		editMaterial,
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
				materialAction.getMateialList(this);
			},
			addMaterial() {
				var info = this.editInfo;
      			info.title = "添加素材"
      			info.dialogShow = true;
      			this.$refs.editMaterial.resetForm();
			},
			submitInfo(info) {
				materialAction.saveMaterialInfo(this, info);
			},
			editRowInfo(row, index) {
      			var info = this.editInfo;
      			info.title = "编辑配送圈"
      			info.dialogShow = true;
      			var RowData = JSON.stringify(row);
      			this.$refs.editMaterial.editFormData(JSON.parse(RowData));
			},
			delRow(row) {
				var _that = this;
				_that.$confirm('此操作删除本行数据, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          	materialAction.deleteRow(_that, row.prodTempplateId);
		        });
			},
		
      }
    }
  </script>

  <style lang="less" scoped>
  	.prod-img{
  		display: inline-block;
  		width:80px;
  		height:80px;
  		img{
  			max-width: 100%;
  			max-height: 100%;
  		}
  	}
  </style>