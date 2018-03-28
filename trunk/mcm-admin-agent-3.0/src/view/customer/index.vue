<!-- 客户 -->
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
				title : "客户",
				menus : [
					{
						name : "客户概况",
						router : "customer.overview"
					},
					{
						name : "采购商",
						router : "customer.purchaser.list"
					},
					{
						name : "供应商",
						router : "customer.supplier.list"
					},
					{
						name : "配送商",
						router : "customer.distribution.list"
					},
					{
						name : "驿站",
						router : "customer.stage.list"
					},
					{
						name : "配送圈",
						router : "customer.circle.list"
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