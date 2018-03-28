<!-- 设置 -->
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
						name : "设置概况",
						router : "setting.overview"
					},
					{
						name : "区域管理",
						router : "setting.area.list"
					},
					{
						name : "配送时间",
						router : "setting.delivery.time.list"
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