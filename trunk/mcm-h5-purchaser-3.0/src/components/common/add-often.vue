<!-- 加入清单 -->
<template>
	<i class="often"  @click="addOften">
		<img src="../../images/market_hearthighlight.png" v-if="row.collectId" />
		<img src="../../images/market_heart.png" v-else />
	</i>
</template>
<script>
	import commonAction from "actionurl/common/common"
	export default{
		props : ["row"],
		methods : {
			addOften(event) {
				var productSkuId = this.row.productSkuId, that = this,
					collectId = this.row.collectId;
				if(!this.row || !productSkuId) {
					if(row.collectId == "") {
						cJs.message("加入清单失败！");
					} else {
						cJs.message("移除清单失败！");
					}
					return false;
				}
				if(collectId) {
					commonAction.removeSingleProdOften(productSkuId, function() {
						that.row.collectId = ""
					});
				} else {
					commonAction.addProdOften(productSkuId, function() {
						that.row.collectId = "true";
						window.$ref_often_parabold.drop(event.target)
					});
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.often{
		display: inline-block;
		.pxrem(width, 55);
		.pxrem(height, 46);
		img{
			width:100%;
		}
	}
</style>
