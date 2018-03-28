<!-- 分页 -->
<template>
	 <el-pagination
	      @size-change="handleSizeChange"
		  :page-sizes="pageSizes"
	      @current-change="handleCurrentChange"
	      :current-page.sync="pagings.pageNum"
	      :page-size="pagings.pageSize"
	      :layout="layout"
	      :total="totalCount">
	    </el-pagination>
</template>
<script>
	export default {
		data() {
			return {
				pageSizes : [10, 20, 30, 50, 100],
			}
		},
		props : {
			pagings : {
				type : Object,
				default : function() {
					return {
						pageSize : 10,
						totalCount : 0,
						pageNum : 1
					}
				}
			},
			layout : {
				type : String,
				default : "total, sizes, prev, pager, next"
			},
			totalCount : {
				type : Number,
				default : 0
			}
			
		},
		methods : {
			handleSizeChange(value) {
				this.pagings.pageNum = 1;
				this.pagings.pageSize = value;
				this.$emit("changePageSize");
			},
			handleCurrentChange(value) {
				this.$emit("changePageSize");
			}
		}
	}
</script>