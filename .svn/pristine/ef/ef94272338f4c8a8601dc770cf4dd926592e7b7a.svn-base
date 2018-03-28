<!-- 图片上传 -->
<template>
	<div class="upload-image">
		<div class="form-item f-img">
			<span>+</span>
			<p>添加照片</p>
			<input type="file" @change="uploadImg($event)" class="up-img" name="imgFile" />
			<p class="loading" v-show="loading">上传中...</p>
		</div>
	</div>
</template>
<script>
import COMMONACTION from "actionurl/common/common"
export default{
	data() {
		return{
			loading : false,
		}
	},
	props : ["uploadSuccess"],
	methods : {
		uploadImg(e) {
			var fileData = e.target.files[0];
			 if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG|bmp)$/.test(e.target.value)){
		          cJs.message("请上传图片格式")
		          return false;
	        }
	        var fileSize = fileData.size, maxsize = 2000 * 1024; 
	        if(fileSize > maxsize) {
	        	 cJs.message("图片不能大于2M")
		         return false;
	        }
	        this.loading = true;
			var formData = new FormData();
    		formData.append('imgFile', e.target.files[0]);
    		COMMONACTION.upFileImage(this, formData);
		}
	}
}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.upload-image{
		.pxrem(width, 140);
		.pxrem(height, 140);
		float:left;
		.f-img{
			width:100%;
			height:100%;
			.pxrem(border-radius, 8);
			text-align: center;
			.pxrem(text-indent, -4);
			border:1px solid #E5E5E5;
			position: relative;
			span{
				display: inline-block;
				text-align: center;
				.pxrem(width, 140);
				.pxrem(font-size,70);
			}
			p{
				.pxrem(font-size,24);
				.pxrem(margin-top,-20);
			}
			.up-img{
				position: absolute;
				top:0;
				left:0;
				.pxrem(width, 140);
				.pxrem(height, 140);
				opacity: 0;
			}
			.loading{
				position: absolute;
				.pxrem(top, 10);
				left:0;
				z-index: 2;
				color:#FFF;
				.pxrem(line-height, 140);
				.pxrem(border-radius, 8);
				background: rgba(0, 0, 0, 0.5);
				width:100%;
				height:100%;
			}
		}
	}
</style>