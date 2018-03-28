<!-- 图片裁剪 -->
<template>
	<div class="croppa-layer" v-if="show">
		<p class="loading" v-show="loading">正在上传中...</p>
		<div class="bg"></div>
		<div class="content">
			<div class="head">图片裁剪</div>
			<croppa v-model="croppa"
				:width="width"
				:height="height"
				:disable-click-to-zoom="true"
				:placeholder="placeholder()"
				:placeholder-font-size="14"
				:initial-image="defaultUrl"
				:show-loading="showDefaultSpinner"
				>
					<div class="spinner" v-if="croppa && croppa.loading"></div>
				</croppa>
			<div class="btns">
			    <button class="btn btn-cancel" @click="cancel">取消</button>
			    <button class="btn btn-up" @click="upload('image/jpeg', 0.6)">上传</button>
			</div>
		</div>
	</div>
</template>
<script>
	import commonAction from "actionurl/common/common"
	export default{
		data() {
			return {
				croppa: {},
    			loading: false,
    			show : false,
    			showDefaultSpinner : false
			}
		},
		props : {
			defaultUrl : {
				type : String
			},
			width : {
				type : Number,
				default : 200
			},
			height : {
				type : Number,
				default : 200
			}
		},
		components : {
		},
		methods : {
			upload(type, compressionRate) {
		      if (!this.croppa.hasImage()) {
		        cJs.message('没有要上传的图片！')
		        return
		      }
		      var _that = this;
		      this.croppa.generateBlob((blob) => {
		        	var fd = new FormData()
			        fd.append('imgFile', blob);
			        _that.loading = true;
			        commonAction.upFileImage(_that, fd, (result) => {
			        	_that.loading = false;
			        	_that.show = false;
			        	_that.$emit("uploadSuccess", result);
			        });
		      }, type, compressionRate)
		    },
		    cancel() {
		    	this.show = false;
		    },
		    placeholder() {
		      return this.croppa && this.croppa.loading ? '读取中...' : '点击选择图片'
		    },
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.fix_bg{
		position: fixed;
		width:100%;
		height:100%;
		top:0;
		left:0;
		z-index:9;
	}
	.croppa-layer{
		.fix_bg;
		.bg{
			.fix_bg;
			background: rgba(0, 0, 0, 0.8);
		}
		.loading{
			text-align: center;
			color:#FFF;
			position: absolute;
			top:0;
			width:100%;
			z-index:99;
			.prem(10, -4);
			padding:@prem;
			.pxrem(font-size, 36);
		}
		.content{
			position: relative;
			z-index:10;
			top:50%;
			.pxrem(height, 600);
			margin:auto;
			.pxrem(margin-top, -350);
			text-align: center;
			.head{
				.pxrem(font-size, 32);
				color:#FFF;
				.pxrem(margin-bottom, 20);
			}
			.btns{
				.pxrem(margin-top, 20);
				.btn{
					.pxrem(border-radius, 6);
					.prem(-4, 20);
					margin: @prem;				}
			}
			.btn-up{
				background: @m-c;
				border-color:@m-c;
				color:#FFF;
			}
			.btn-cancel{
				background: @b-c;
				border-color:@b-c;
			}
		}
		.spinner {
			  position: absolute;
			  top: 50%;
			  left: 50%;
			  height: 70px;
			  width: 70px;
			  margin-left: -35px;
			  margin-top: -35px;
			  -webkit-animation: spin 1s linear infinite;
	          animation: spin 1s linear infinite;
			  border: 3px solid #ddd;
			  border-top: 3px solid #42a5f5;
			  border-radius: 50%;
			}

			@-webkit-keyframes spin {
			  to {
			    border-top-color: #ec407a;
			    -webkit-transform: rotate(360deg);
			            transform: rotate(360deg);
			  }
			}

			@keyframes spin {
			  to {
			    border-top-color: #ec407a;
			    -webkit-transform: rotate(360deg);
			            transform: rotate(360deg);
			  }
			}
	}
</style>