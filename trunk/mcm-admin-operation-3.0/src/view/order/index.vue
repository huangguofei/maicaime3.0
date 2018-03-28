<!-- 订单 -->
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
				title : "订单",
				menus : [
					{
						name : "订单列表",
						router : "order.list",
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