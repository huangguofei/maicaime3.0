<template>
	<article class="page-layer padding">
		<article v-if="activityList.length>0" class="item" v-for="(val,key) in activityList">
			<section class="content">
				<img src="../../../images/Group@2x.png" class="pull-left" v-if="val.featureTypeId==200" />
				<img src="../../../images/Group 51@2x.png" class="pull-left" v-else />
				<section class="pull-left">
					<h3>{{val.title}}</h3>
					<p>{{val.featureTypeText}}</p>
				</section>
			</section>
			<router-link :to="{path:'/activitiesAdd/',query:{id:val.refId}}" class="footer">立刻参加</router-link>
		</article>
		<article class="null-status" v-else>
			<img src="../../../images/no-action.png" />
			<p>暂无任何活动，敬请期待</p>
		</article>
		<goods-not-data icon="http://maicaim3.oss-cn-shenzhen.aliyuncs.com/product/1412924d249f49b29e1a29b9d3ecaa24.png" v-if="activityList.length == 0">
			<p>没有要参加的活动!</p>
		</goods-not-data>
		<!--<article class="item">
			<section class="content">
				<img src="../../images/Group 51@2x.png" class="pull-left" />
				<section class="pull-left">
					<h3>热门推荐</h3>
					<p>新品上市、热门商品、海鲜必买、厨房用品，适用场景：尾货甩卖、降价促销……可重新定</p>
				</section>
			</section>
			<router-link to="/activitiesAdd/" class="footer">立刻参加</router-link>
		</article>
		<article class="item">
			<section class="content">
				<img src="../../images/储蓄罐-01@2x.png" class="pull-left" />
				<section class="pull-left">
					<h3>积分活动</h3>
					<p>新品上市、热门商品、海鲜必买、厨房用品，适用场景：尾货甩卖、降价促销……可重新定</p>
				</section>
			</section>
			<router-link to="/activitiesAdd/" class="footer">立刻参加</router-link>
		</article>-->
	</article>
</template>

<script>
	import postServer from "actionurl/user/userActivity"
	import goodsNotData from "components/common/goods-not-data"
	//	import 
	export default {
		data() {
			return {
				activityList: []
			}
		},
		created() {
			postServer.getActivityKindList(this);
		},
		components : {
			goodsNotData
		}
	}
</script>

<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.page-layer {
		box-sizing: border-box;
	}
	
	.null-status {
		img {
			display: block;
			width: 50%;
			margin: 1rem auto;
			margin-bottom: 0.5rem;
		}
		p {
			color: #999;
			text-align: center;
		}
	}
	
	.item {
		background: #fff;
		.pxrem(border-radius, 12);
		.pxrem(padding, 16);
		padding-bottom: 0;
		.pxrem(margin-bottom, 20);
		.content {
			.clearfix();
			border-bottom: 1px solid #eee;
			img {
				/*.pxrem(width,100);*/
				width: 20%;
				/*.pxrem(margin,1%);	*/
				margin: 5% 2%;
			}
			section {
				width: 76%;
				margin: 5% 0;
			}
			h3 {
				.pxrem(font-size, 36);
				.pxrem(margin-bottom, 15);
			}
			p {
				.pxrem(font-size, 24);
				color: #666;
			}
		}
		.footer {
			display: block;
			.pxrem(font-size, 32);
			text-align: center;
			.pxrem(height, 90);
			.pxrem(line-height, 90);
			color: #1EC551;
		}
	}
</style>