<!-- 设置头部广告 -->
<template>
	<div class="setting-advertising">
		<div class="adv-item adv-hq" v-for="a in adHQInfo">
			<p class="title">总部主页广告</p>
			<el-row class="con">
				<el-col :span="10">
					 <img v-if="a.picture" :src="a.picture" class="avatar" /> 
				</el-col>
			</el-row>
		</div>
		<div class="adv-item" v-for="(h, key) in allHeaderData" :key="key">
			<p class="title">第{{key + 1}}张主页广告</p>
			<el-row class="con">
				<el-col :span="10">
					<el-upload
						  class="avatar-uploader"
						  action="/agent/admin/image/upload"
						  name= "imgFile"
						  v-loading="h.loadingUp"
   						  element-loading-text="上传中" 
						  :show-file-list="false"
						  :on-success="handleAvatarSuccess"
						  :before-upload="beforeAvatarUpload"
						  >
						  <img v-if="h.picture" :src="h.picture" class="avatar" @click="uploadImg(key)"> 
						  <i v-else class="el-icon-plus avatar-uploader-icon" @click="uploadImg(key)"><span>上传图片</span></i>
						  <i class="close" v-if="h.picture" @click="clearItem($event, h)">
						  		<img src="../../../../images/close.png" />
						  </i>
						</el-upload>
				</el-col>
				<el-col :span="14">
					<div class="set-con">
						<p class="title">点击动作：</p>
						<div class="e-item">
							<el-radio class="radio" v-model="h.action.type" label="none">不可点击</el-radio>
						</div>
						<div class="e-item">
							<el-radio class="radio" v-model="h.action.type" label="link">跳转链接</el-radio>
							<p v-show="h.action.type == 'link'">
								<el-input v-model="h.action.url"  size="small" placeholder="地址为http://"></el-input>
							</p>
					 		
						</div>
						<div class="e-item">
							 <el-radio class="radio" v-model="h.action.type" label="textarea">富文本信息</el-radio>
							 <p v-show="h.action.type == 'textarea'">
							 	<el-input v-model="h.action.content"  type="textarea" placeholder="请输入内容"></el-input>
						 	 </p>
					 	</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</div>
</template>
<script>
 import { mapGetters } from 'vuex'
  export default {
    data() {
	      return {
		        imageUrl: '',
		        selectIndex : 0,
	      };
    },
    computed : {
    	...mapGetters([
	      'allHeaderData',
	      'adHQInfo'
	    ])
    },
    methods: {
      handleAvatarSuccess(res, file) {
      	var img = res.data;
      	this.allHeaderData[this.selectIndex].picture = img;
      	this.allHeaderData[this.selectIndex].loadingUp = false;
      },
      beforeAvatarUpload(file) {
        	var isJPG = false;
      		if(file.type === "image/jpeg" || file.type === "image/png" || file.type == "image/gif") {
      			isJPG = true;
      		}
	        const isLt2M = file.size / 1024 / 1024 < 2;
	        if (!isJPG) {
	          this.$message.error('上传头像图片只能是 JPG,PNG,GIT 格式!');
	          return false;
	        }
	        if (!isLt2M) {
	          this.$message.error('上传头像图片大小不能超过 2MB!');
	        }
	        if(isJPG && isLt2M) {
	        	this.allHeaderData[this.selectIndex].loadingUp = true;
	        }
	        return isJPG && isLt2M;
      },
      uploadImg(key) {
      	this.selectIndex = key;
      },
      clearItem(event, item) {
      		event.stopPropagation();
      		item.picture = "";
      }
    }
  }
</script>
<style lang="less">
	@import "../../../../common/less/config.less";
	.setting-advertising{

		.adv-item{
			.title{
				font-size:@size-m-title;
				color:@color-main;
			}
			.con{
				margin:20px 0;
				.avatar-uploader{
					.el-upload{
						width:200px;
						height:140px;
						border:1px solid @color-border;
						position: relative;
						img{
							max-width: 100%;
							max-height:100%;
						}
						.close{
							position: absolute;
							top:-6px;
							right:-6px;
						}
					}
					.avatar-uploader-icon{
						font-size: 28px;
					    height: 140px;
					    line-height: 120px;
					    text-align: center;
					    color:@color-f-assist;
					    position: relative;
					    width:100%;
					    span{
					    	font-size: 16px;
					    	position: absolute;
					    	width:80px;
					    	left:50%;
					    	margin-left:-40px;
					    	top:30px;
					    }
					}
				}
			}
			.set-con{
				.title{
					font-size:@size-title;
					color:@color-font;
					margin-bottom:5px;
				}
				.e-item{
					padding:2px 0;
					p{
						padding-left:20px;
						margin:3px 0;
					}
				}
			}
		}
		.adv-hq{
			width:100%;
			broder:1px solid red;
			img{
				width:200px;
				height:140px;
			}
		}
	}
</style>