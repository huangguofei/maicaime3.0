<template>
	<article class="evaluate padding">
		<header class="radius-bottom border-bottom bk-white padding">
			<img src="../../images/list_order_store.png" />
			<span>诚信商行批发部</span>
		</header>
		<article class="radius-top bk-white evaluate-all padding">
			<h4>总体评分</h4>
			<star></star>
			<section class="star-list hide">
				<img src="../../images/star.png" />
				<img src="../../images/order_value_star_default.png" />
				<img src="../../images/star.png" />
				<img src="../../images/order_value_star_default.png" />
				<img src="../../images/star.png" />
				<img src="../../images/order_value_star_default.png" />
				<img src="../../images/star.png" />
				<img src="../../images/order_value_star_default.png" />
				<img src="../../images/star.png" />
				<img src="../../images/order_value_star_default.png" />
			</section>
			<section class="evaluate-list">
				<span class="title">配送速度</span>
				<section class="star-list">
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
				</section>
				<span class="">太慢了</span>
			</section>
			<section class="evaluate-list">
				<span class="title">食材质量</span>
				<section class="star-list">
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
				</section>
				<span class="">太慢了</span>
			</section>
			<section class="evaluate-list">
				<span class="title">服务质量</span>
				<section class="star-list">
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
					<img src="../../images/star-n.png" />
				</section>
				<span class="">太慢了</span>
			</section>
			<textarea placeholder="亲，对本次服务评价如何，食材品质还满意吗？" class="bk-white padding"></textarea>
			<article class="image-upload">
				<img v-for="(val,key) in imgUrlList" :src="val" class="imgbox" />
				<upload-image :uploadSuccess="uploadSuccess"></upload-image>
			</article>

			<article class="anonymity-comment" @click="anonymity">
				<!--<img src="../../images/order_value_tick.png" />-->
				<span class="check-img" :class="{active:isAnonymity}"></span>
				<span>匿名评论</span>
			</article>
		</article>

		<button type="button" class="post-btn" @click="postComment">提交</button>
	</article>
</template>

<script>
	import star from 'components/common/star'
	import uploadImage from 'components/common/upload-image'
	export default {
		data() {
			return {
				isAnonymity: false,
				imgUrlList: []
			}
		},
		created() {

		},
		methods: {
			anonymity() {
				this.isAnonymity = !this.isAnonymity;
			},
			postComment() {
				this.$router.push({
					name: "order.evaluate.result"
				});
			},
			uploadSuccess(data) {
				console.log(data);
				this.imgUrlList.push(data);
			}
		},
		components: {
			star,
			uploadImage
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.bk-white {
		background: #fff;
	}
	
	.evaluate {
		.radius-top {
			border-radius: .2rem .2rem 0 0;
		}
		.radius-bottom {
			border-radius: 0 0 .2rem .2rem;
		}
		.border-bottom:after {
			content: "";
			display: block;
			margin: 0 auto;
			height: 0;
			position: relative;
			top: 10px;
			border-bottom: 2px dashed #e9e9e9;
		}
		header {
			.pxrem(font-size, 32);
			img {
				.pxrem(height, 50);
				vertical-align: middle;
			}
		}
		.evaluate-all {
			h4 {
				.pxrem(font-size, 32);
				text-align: center;
			}
		}
		.star-list {
			text-align: center;
			img {
				.pxrem(width, 50);
				.pxrem(margin, 6);
			}
		}
		.evaluate-list {
			position: relative;
			.clearfix();
			span {
				.pxrem(height, 62);
				.pxrem(line-height, 62);
				position: absolute;
				.pxrem(top, 5);
				color: #666;
				.pxrem(font-size, 28);
			}
			span:last-child {
				.pxrem(right, 6);
				color: #F9AB0C;
			}
		}
		textarea {
			width: 100%;
			.pxrem(height, 200);
			resize: none;
			border: 1px solid #E9E9E9;
			.pxrem(border-radius, 8);
			.pxrem(margin-top, 40);
			box-sizing: border-box;
			background: #f8f8f8;
			color: #999;
			.pxrem(font-size, 28);
		}
		.image-upload {
			.clearfix();
			img.imgbox {
				.pxrem(width, 140);
				height: auto;
				.pxrem(border-radius, 8);
				float: left;
				.pxrem(margin-right, 10);
			}
		}
		.anonymity-comment {
			.pxrem(font-size, 28);
			.pxrem(margin-top, 26);
			.check-img {
				.pxrem(width, 34);
				.pxrem(height, 34);
				vertical-align: text-bottom;
				display: inline-block;
				border: 1px solid #1EC551;
				border-radius: 50%;
			}
			.active {
				background: url(../../images/order_value_tick.png) no-repeat -2px -1px;
				background-size: 120% auto;
			}
		}
		.post-btn {
			.pxrem(font-size, 36);
			background: @m-c;
			outline: none;
			width: 100%;
			border: 0;
			.pxrem(border-radius, 8);
			.pxrem(margin-top, 40);
			color: #fff;
			.pxrem(line-height, 88);
		}
	}
</style>