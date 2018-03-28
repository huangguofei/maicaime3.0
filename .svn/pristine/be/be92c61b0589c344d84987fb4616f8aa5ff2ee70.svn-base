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
				title : "服务站",
				menus : [
					{
						name : "服务站概况",
						router : "serve.overview"
					},
					{
						name : "服务站",
						router : "serve.agent.list"
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