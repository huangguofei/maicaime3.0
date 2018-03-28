,<!-- 食材 -->
<template>
<el-dialog title="商品列表" :visible.sync="dialogTableVisible" :modal="false" :close-on-click-modal="false">
	 <div class="search">
	 		<label>分类</label>
	 		 <el-cascader
			    :options="categoryList"
			    v-model="subCategoryId"
			    :props="props"
			    @change="handleChange">
			  </el-cascader>
			  <el-button type="primary" @click="searchProdList">查 询</el-button>
	 </div>
		
	  <el-table :data="prodTable">
	  		<el-table-column
		      type="selection"
		      width="55">
		    </el-table-column>
		    <el-table-column property="date" label="商品名" width="150"></el-table-column>
		    <el-table-column property="name" label="姓名" width="200"></el-table-column>
		    <el-table-column property="address" label="地址"></el-table-column>
	  </el-table>
	  <span slot="footer" class="dialog-footer">
	    <el-button @click="dialogTableVisible = false">取 消</el-button>
	    <el-button type="primary" >确 定</el-button>
	  </span>
</el-dialog>
</template>
<script>
  import homeAction from "action/marketing/home"
  export default {
    data() {
      return {
      	categoryList : [],
      	subCategoryId : [],
        prodTable: [],
        dialogTableVisible: false,
        props : {
        	value : "categoryId",
        	label : "categoryName",
        	children : "subCategoryList"
        }
      };
    },
    created() {
    	homeAction.getCategoryAllList(this);
    },
    methods : {
    	searchProdList() {
    		if(this.subCategoryId.length <= 0) {
    			this.$message("请选择商品分类");
    		}	
    		homeAction.getProdByCategoryId(this,this.subCategoryId[1]);
    	},
    	handleChange() {

    	}
    }
  };
</script>
<style lang="less" scoped>
.search{
	margin-bottom:20px;
}
</style>