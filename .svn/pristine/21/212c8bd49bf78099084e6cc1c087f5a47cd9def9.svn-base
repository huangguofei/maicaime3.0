<!-- 分类菜单 -->
<template>
<div class="prod-menu" :style="styles">
	<div class="prod-nav">
		<ul>
			<li class="p-item" :class="selectIndex == key ? 'active' : ''" v-for="(c, key) in categoryData" @click="selectCategory(key,c)">
				<span class="name">{{c.categoryName}}</span>
			</li>
		</ul>
	</div>
</div>
</template>
<script>
 export default{
 	data() {
 		return{
 			selectIndex : 0,
 		}
 	},
 	props : {
 		categoryData : Array,
 		styles : {
 			type : Object,
 			default : function(){
 				return {
 					background : "#FFF"
 				}
 			}
 		}
 	},
 	created() {
 		console.log(this.styles);
 	},
 	methods : {
 		selectCategory(key, info) {
 			this.selectIndex = key;
 			this.$emit("returnInfo",info);
 		}
 	}
 }
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.prod-menu{
		.prod-nav{
			.pxrem(height,82);
			width:100%;
			overflow-x: auto;
			overflow-y: hidden;
			ul{
				width:2000px;
			}
			.p-item{
				float:left;
				.pxrem(height,82);
				.pxrem(line-height,82);
				.prem(0,30);
				padding:@prem;
				.pxrem(font-size,28);
			}
			.active{
				background: @m-c;
				color:#FFF;
			}
			.p-referral{
				i{
					display: inline-block;
					position: relative;
					.pxrem(top, 2);
					.pxrem(margin-right, 5);
					.pxrem(width,35);
					.pxrem(height,37);
					background: url(../../images/market_dailyrecommend.png) no-repeat;
					background-size:cover;
				}
			}
		}
	}
</style>