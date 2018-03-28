<!-- 图片预览 -->
<template>
	<div class="img-preview" v-if="show">
		<div class="bg" @click="show = false"></div>
		<div class="content" @click="show = false">
			 <span class="wrap" v-if="imgSrc">
				<img :src="imgSrc"  />
			</span>
			<span class="wrap" v-else>
				<loading ></loading>
			</span>
		</div>
	</div>
</template>
<script>
	import loading from "components/common/loading"
	export default{
		data() {
			return{
				show : false
			}
		},
		components : {
			loading
		},
		props : {
			imgSrc : {
				type : String,
				default : ""
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.fx{
		position: fixed;
		z-index:99999;
		width:100%;
		height:100%;
		top:0;
		left:0;
	}
	.img-preview{
		.fx;
		.bg{
			.fx;
			background: #000;
		}
		.content{
			position: absolute;
			width:100%;
			height:100%;
			z-index:100000;
			text-align: center;
			display: table;
			.wrap{
				display: table-cell;
				vertical-align: middle;
				height:100%;
				margin:auto;
				padding:0 1px;
				
				img{
					vertical-align: middle;
					width:100%;
				}
			}
			
			
		}
	}
</style>