<template>
	<page-layer :narData="narData" classs="back-color">
		<div class="goods-class padding">
			<el-button type="primary" @click="zoom" style="margin-bottom: 20px;">{{defautShow?'收起':'展开'}}</el-button>
			<el-tree :data="classData" :props="defaultProps" ref="tree" @node-click="handleNodeClick" :default-expand-all="defautShow" v-if="isShowTree"></el-tree>
		</div>
	</page-layer>
</template>
<script>
	import pageLayer from "components/common/page-layer"
	import server from "action/goods/goods"
	export default {
		data() {
			return {
				narData: [{
					name: "商品分类",
					router: "goods.goodsClass"
				}],
				classData: [],
				copyClassData:"",
				defaultProps: {
					children: 'subCategoryList',
					label: 'categoryName'
				},
				isShowTree:true,
				defautShow: false
			}
		},
		created() {
			server.getGoodsClass(this);
		},
		methods: {
			handleNodeClick(data) {
				console.log(data);
			},
			zoom() {
				this.defautShow=!this.defautShow;
				this.isShowTree=false;
				this.classData=[];
				this.classData=JSON.parse(this.copyClassData);
				setTimeout(()=>{
					this.isShowTree=!this.isShowTree;
				},100);
				
			}
		},
		components: {
			pageLayer
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
</style>