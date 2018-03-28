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
				title : "设置",
				menus : [
					{
						name : "注册限制数",
						router : "setting.register.limit"
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