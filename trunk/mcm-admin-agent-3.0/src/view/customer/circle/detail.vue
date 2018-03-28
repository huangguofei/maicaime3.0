<!-- 配送圈详情 -->
<template>
	<page-layer :narData="narData" classs="back-color padd">
		<el-row class="search-wrap">
			<el-row>
				 <h2>供应商列表</h2>
			</el-row>
		  	
		  	 <el-table
		      :data="detailInfo.supplierBOList"
		      style="width: 100%">
		       <el-table-column
			      type="index"
			      width="50">
			    </el-table-column>
		      <el-table-column
		        prop="supplierName"
		        label="供应商名称"
		        >
		      </el-table-column>
		      <el-table-column prop="contactName" label="联系人" >
				</el-table-column>
		      <el-table-column
		        prop="mobile"
		        label="联系电话"
		        >
		      </el-table-column>
		       <el-table-column
		        prop="timeCreated"
		        label="添加时间">
		      </el-table-column>
	     
	      
	    </el-table>
		</el-row>
	</page-layer>
</template>
<script>
	import CIRCLEACTION from "action/customer/circle"
	import pageLayer from "components/common/page-layer"
	export default{
		data() {
			return {
				narData : [
		    	  	{
		    	  		name : "配送圈详情",
		    	  		router : ""
		    	  	}
		    	 ],
				detailInfo : {
					supplierBOList : []
				},
			}
		},
		created() {
			CIRCLEACTION.getCirCleDetail(this);
		},
		components : {
			pageLayer
		}
	
	}
</script>
<style ></style>