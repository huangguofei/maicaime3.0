<template>
	<div class="top-title">
		<h3 class="title">商品{{num==3?'分类':''}}销售Top{{num}}排行榜</h3>
		<ul class="nav">
			<li :class="{active:selectIndex==1}" @click="changeIndex('1')">今日</li>
			<li :class="{active:selectIndex==2}" @click="changeIndex('2')">昨日</li>
			<li :class="{active:selectIndex==3}" @click="changeIndex('3')">近7天</li>
			<li :class="{active:selectIndex==4}" @click="changeIndex('4')">上月</li>
		</ul>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				selectIndex:4,
			}
		},
		methods: {
			changeIndex(index) {
				this.selectIndex=index;
				this.$emit('navSearch',index);
			}
		},props:["num"]
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.active {
		color: #46CD72;
	}
	.title{
		font-size: 20px;
		text-align: center;
	}
	.nav{
		.clearfix();
		width:300px;
		margin:10px auto;
		li{
			float:left;
			width: 70px;
			height: 30px;
			line-height: 30px;
			color: #343434;
			text-align: center;
			font-size:15px;
			
		}
		.active{
			background: @color-main;
			color: #fff;
			border-radius:15px;
		}
	}
</style>