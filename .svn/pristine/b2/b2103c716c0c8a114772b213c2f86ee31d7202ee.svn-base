<!-- 商品 -->
<template>
	<main-page>
		<left-main-menu 
			slot="leftMenu" 
			:menuData="menuData"
			>
		</left-main-menu>
		<router-view slot="pageContent"></router-view>
	</main-page>
</template>
<script >
import mainPage from "components/common/main-page"
import leftMainMenu from "components/common/left-main-menu"
export default{
	data() {
		return{
			menuData : {
				title : "商品",
				menus : [
					{
						name : "商品概况",
						router : "goods.overview"
					},
					{
						name : "商品素材",
						router : "goods.material.list"
					},
					{
						name : "商品分类",
						router : "goods.goodsClass"
					},
					{
						name : "商品列表",
						router : "goods.goodslist"
					}
				]
			}
		}
	},
	components: {
		mainPage,
		leftMainMenu
	}
}
</script>