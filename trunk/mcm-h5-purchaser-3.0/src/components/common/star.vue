<template>
	<article class="star">
		<img v-for="(val,key) in starList" :src="val.src" @click="select(key)" />
	</article>
</template>

<script>
	export default {
		data() {
			return {
				starList: [{
					src: require("../../images/star.png"),
				}, {
					src: require("../../images/star.png"),
				}, {
					src: require("../../images/star.png"),
				}, {
					src: require("../../images/star.png"),
				}, {
					src: require("../../images/star.png"),
				}],
			}
		},
		props: {
			isClick: {
				type: Boolean,
				default: true
			},
			level: {
				type: Number,
				default: 0
			}
		},
		created() {
			this.setLevel(this.level-1);
		},
		methods: {
			select(index) {
				if(this.isClick)
					this.setLevel(index);
			},
			setLevel(index) {
				this.starList.forEach(function(val, key) {
					if(key <= index) {
						val.src = require("../../images/star_active.png");
					} else {
						val.src = require("../../images/star.png");
					}
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.star {
		text-align: center;
		img {
			.pxrem(width, 50);
			.pxrem(margin, 6);
		}
	}
</style>