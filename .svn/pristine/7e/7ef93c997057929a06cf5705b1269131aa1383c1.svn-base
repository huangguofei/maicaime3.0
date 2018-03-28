<!-- 商品分类 -->
<template>
	<page-layer :narData="narData" classs="back-color">
		<el-row class="search-wrap">
			 <el-col :span="24" style="margin-right:20px;">
		  	 	<label class="title">{{detailInfo.supplierName}}商品分类</label>
		  	 	<el-button  @click="addCategory" class="btn-add" style="float:right">添加分类</el-button>
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
	        prop="categoryName"
	        label="分类名称"
	        >
	      </el-table-column>
	      <el-table-column
	        prop="parentCategoryName"
	        label="父分类"
	        >
	      </el-table-column>
	       <el-table-column
	        prop="regionName"
	        label="区域"
	        >
	      </el-table-column>
	      <el-table-column
	        label="操作"
	        width="240">
	        <template scope="scope">
				<!-- <el-button @click="setCategory(scope.row)">编辑分类</el-button> -->
				<el-button class="el-button-del" @click="delRow(scope.row)" size="small">删除</el-button> 
			</template>
	      </el-table-column>
	    </el-table>
	    <el-pagination
	      @current-change="handleCurrentChange"
	      :current-page.sync="pagings.current"
	      :page-size="pagings.size"
	      layout="total, prev, pager, next"
	      :total="pagings.total">
	    </el-pagination>

	    <el-dialog
		  title="选择分类"
		  :visible.sync="dialogVisible"
		  size="medium"
		  :before-close="handleClose">
		  <span>
		  <!-- 	<el-row>
		  		<label>区域</label>
		  		<el-select v-model="selectRegionId" placeholder="请选择" @change="selectRegion">
				    <el-option
				      v-for="item in detailInfo.suppierRegionItemBOList"
				      :key="item.regionId"
				      :label="item.regionName"
				      :value="item.regionId">
				    </el-option>
				  </el-select>
		  	</el-row>
		  	<br/> -->
	  	 	<el-row>
	  	 		<label>分类</label>
	  	 		<el-cascader
				    :options="allCategory"
				    v-model="selectOptions"
				    :props="props"
				    filterable
				    @change="handleChange">
				  </el-cascader>
	  	 	</el-row>
  		 	
		  </span>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="dialogVisible = false">取 消</el-button>
		    <el-button type="primary" @click="submitForm">确 定</el-button>
		  </span>
		</el-dialog>
	</page-layer>
</template>
<script>
	import categoryAction from "action/customer/category"
	import pageLayer from "components/common/page-layer"
    export default {
      data() {
        return {
    	 narData : [
    	  	{
    	  		name : "供应商商品分类",
    	  		router : ""
    	  	}
    	  ],
    	  detailInfo : {},
          tableData: [],
          pagings : {
          	current : 1,
          	size : 20,
          	pages : 1,
          	total : 0
          },
          supplierId : "",
          allCategory : [],
          dialogVisible: false,
          subCategoryId : "",
          props : {
          		label : "categoryName",
          		value : "categoryId",
          		children : "subCategoryList"
          },
          selectOptions : [],
          relationId : "",
          selectRegionId : ""
        }
      },
      created() {
      		this.supplierId = this.$route.query.supplierId;
      		if(!this.supplierId) {
      			this.$router.push({
      				name : "customer.supplier.list"
      			});
      		}
      		categoryAction.getSupplierDefault(this);
      		categoryAction.getCatergoryList(this);
      },
      mounted() {
      		categoryAction.getAllProdCatrgory(this);
      },
      components : {
      		pageLayer
      },
      methods : {
      		handleCurrentChange(value) {
				this.pagings.current = value;
				categoryAction.getCatergoryList(this);
			},
			addCategory() {
				this.selectOptions = [];
				this.relationId = "";
				this.dialogVisible = true;
			},
			setCategory(row) {
				this.relationId = row.relationId;
				this.selectOptions = [];
				this.dialogVisible = true;
			},
			handleChange(value) {
				this.subCategoryId = value[1];
			},
			handleClose() {
				this.dialogVisible = false;
			},
			submitForm() {
				if(this.selectRegionId == "") {
					this.$message("请选择区域");
					return false;
				} else if(this.subCategoryId == "") {
					this.$message("请选择分类");
					return false;
				}
				var params = {
					supplierId : this.supplierId,
					categoryId : this.subCategoryId,
					regionId : this.selectRegionId
				}
				if(this.relationId) {
					params.relationId = this.relationId;
				}
				categoryAction.saveCategoryInfo(this, params);
			},
			selectRegion() {
				if(this.selectRegionId) {
					this.allCategory = [];
					categoryAction.getAllProdCatrgory(this, this.selectRegionId);
				}
			},
			delRow(row) {
				var _that = this;
				_that.$confirm('此操作删除本行数据, 是否继续?', '提示', {
		          confirmButtonText: '确定',
		          cancelButtonText: '取消',
		          type: 'warning'
		        }).then(() => {
		          	categoryAction.deleteRow(_that, row.relationId);
		        });
			},
      }
    }
  </script>
  <style lang="less" scoped>
  	.title{
  		font-size : 24px;
  	}
  </style>