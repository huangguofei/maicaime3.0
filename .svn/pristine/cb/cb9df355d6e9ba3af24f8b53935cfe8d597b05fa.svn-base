<!-- 搜索层 -->
<template>
	<div class="search-layer">
		<ul>
			<li class="item" v-for="k in keys" @click="queryKey(k.suggestion)"><span>{{k.suggestion}}</span></li>
		</ul>
	</div>
</template>
<script>
	export default{
		props : ["keys"],
		methods : {
			queryKey(name) {
				this.$emit("queryKey", name);
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.search-layer{
		position: fixed;
		z-index:9999;
		.pxrem(top,90);
		width:100%;
		background: #FFF;
		ul{
			.prem(-4,20);
			padding:@prem;
		}
		.item{
			border-bottom: 1px solid @p-b-c;
			.prem(10, 20);
			padding:@prem;
			.pxrem(font-size, 26);
			&:last-child{
				border-bottom:0;
			}
		}
	}
</style>