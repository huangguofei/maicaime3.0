<!-- 分类商品 -->
<template>
	<div class="page-layer category-page">
		<div class="head" ref="head" >
			<category-nar :categoryData="categoryData" @returnInfo="categoryInfo" v-if="categoryData.length > 0"></category-nar>
		</div>
		<div class="content" ref="content">
			<scroll 
			:pullingDown="true" 
			:pullUpLoad="true"
			 @pullingUp="onPullingUp"
			 ref="scroll"
			 v-if="prodData.length > 0">
				<prodlist :prodData="prodData"  class="prod-wrap"  v-if="prodData.length > 0" @previewImgEvent="previewImgEvent"></prodlist>
			</scroll>
			<goods-not-data  v-if="prodData.length <= 0"><p>暂无任何食材!</p></goods-not-data>
		</div>
		
		<cart-suspend></cart-suspend>
		<img-preview :imgSrc="previewImg" ref="preview"></img-preview>
	</div>
</template>
<script>
	import categoryNar from "components/often/category-nar"
	import prodlist from "components/market/prod-list"
	import cartSuspend from "components/common/cart-suspend"
	import categoryAction from "actionurl/index/category"
	import goodsNotData from "components/common/goods-not-data"
	import scroll from "components/common/scroll"
	import imgPreview from "components/common/img-preview"
	export default{
		data() {
			return{
				categoryData : [],
				prodData : [],
				option : {
		          	pageNum : 1,
		          	size : 10,
		          	pages : 1,
		          	total : 0,
		          	subCategoryId : ""
	            },
	            previewImg : ""
			}
		},
		created() {
			categoryAction.getSubCateById(this);
		},
		components : {
			categoryNar,
			prodlist,
			cartSuspend,
			goodsNotData,
			scroll,
			imgPreview
		},
		mounted() {
			if(this.$refs.head) {
				const h = this.$refs.head.getBoundingClientRect().height;
				this.$refs.content.style.height = (document.body.clientHeight - h - 10) + "px";
			}
		},
		methods : {
			categoryInfo(info) {
				var id = info.categoryId;
				this.prodData = [];
				this.option.subCategoryId = id;
				this.option.pageNum = 1;
				categoryAction.getProdsById(this);
			},
			onPullingUp() {
				var _that = this;
				setTimeout(() => {
					categoryAction.getProdsById(_that, (count) => {
						_that.pullingUpPage(count);
					});
				}, 500);
			},
			pullingUpPage(count) {
				if(count >= 10) {
					this.$refs.scroll.forceUpdate();
				} else {
					setTimeout(() => {
						this.$refs.scroll.forceUpdate(true);
					}, 20);
				}
			},
			previewImgEvent(src) {
				this.previewImg = src;
				this.$refs.preview.show = true;
			}
		}
	}
</script>
<style lang="less" scoped>
@import "../../common/less/config.less";
.prod-wrap{
	.pxrem(margin-top, 20);
}
.category-page{
	.head{
		.pxrem(height,82);
	}
}
</style>
