<!-- 图片轮播 -->
<template>
	<div class="images-slider">
		<swiper :options="swiperOption">
		    <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
		    <div class="swiper-pagination" slot="pagination"></div>
	  	</swiper>
	</div>
	
</template>
<script>
export default{
	data() {
      return {
        swiperOption: {
          autoplay: 2000,
          setWrapperSize :true,
          pagination : '.swiper-pagination',
          paginationClickable :true,
          mousewheelControl : true,
          observeParents:true,
        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    mounted() {
	      
    }
}
</script>
<style lang="less">
	@import "../../common/less/config.less";
	.images-slider{
		.pxrem(height, 160);
		overflow: hidden;
		.swiper-container,.swiper-slide{
			height:100%;
		}
	}
</style>