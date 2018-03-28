<!-- 限时特价 -->
<template>
	<div class="page-layer footer-page prompt-page">
		<header v-if="!loading && detailInfo !=''" ref="head">
			<p class="title">
					<i><img src="../../images/home_shuaihuo_time.png"></i>
					<span>{{message}}</span>
			</p>
			<p class="time" >
				<span class="t-1">
					{{dayStr}}
				</span>
				<span class="rule">活动规则</span>
			</p>
			
		</header>
		<div class="nar" ref="nar">
			
				<category-nar 
					:categoryData="categoryData" 
					@returnInfo="categoryInfo" class="nar" :styles="{background:'#FAFAFA',border:'1px solid #e5e5e5'}">
				</category-nar>
			
		</div>
		
		<div class="con" v-if="!loading && detailInfo !=''" ref="content">
			<scroll 
			:pullingDown="true" 
			:pullUpLoad="true"
			 @pullingUp="onPullingUp"
			 ref="scroll"
			 :listenBeforeScroll = "true"
			 @beforeScrollStart="beforeScrollStart"
			 v-if="prodData.length > 0">
				<prompt-prod :prodData="prodData" :activityStart="activityStart" @previewImgEvent="previewImgEvent" v-if="prodData.length"></prompt-prod>
			</scroll>
		</div>
		<div class="not-data" v-else>
			<div class="con">
				<i><img src="../../images/not-activity.png"></i>
				<p>暂无任何活动，敬请期待</p>
			</div>
		</div>
		<cart-suspend></cart-suspend>
		<img-preview :imgSrc="previewImg" ref="preview"></img-preview>
	</div>
</template>
<script>
	import categoryNar from "components/often/category-nar"
	import promptProd from "components/index/prompt-prod"
	import promptAction from "actionurl/index/prompt"
	import cartSuspend from "components/common/cart-suspend"
	import scroll from "components/common/scroll"
	import imgPreview from "components/common/img-preview"
	export default{
		data() {
			return{
				categoryData : [],
				prodData : [],
				detailInfo : "",
				activityStart : 0,
				message : "",
				dayStr : "",
				loading: true,
				option : {
		          	pageNum : 1,
		          	size : 10,
		          	pages : 1,
		          	total : 0,
		          	monthlySpecialId : this.$route.params.refId,
		          	categoryId : ""
	            },
	            previewImg : "",
	            clearTime : "",
	            countdown : 0
			}
		},
		filters : {
			firstval : function(value) {
				return value < 10 ? 0 : value.toString().substring(0,1)
			},
			lastVal : function(value) {
				return value < 10 ? value : value.toString().substring(1,2)
			}
		},
		created() {
			promptAction.getDetailInfo(this);
		},
		mounted() {
			promptAction.getCategoryList(this);
		},
		components : {
			categoryNar,
			promptProd,
			cartSuspend,
			scroll,
			imgPreview
		},
		methods : {
			activityDownTime() {
				var info = this.detailInfo, _that = this;
				_that.countdown -= 1000;
				function MillisecondToDate(msd) {
				    var time = parseFloat(msd) / 1000, timeStr = "";
				    if (null != time && "" != time && time > 0) {
				    	var day = 0, h = 0, m = 0, s = 0;
				    	day = Math.floor((time / 3600) / 24);
					    h = Math.floor((time - day * 24 * 3600) / 3600);
					    m = Math.floor((time - day * 24 * 3600 - h * 3600) / 60);
					    s = Math.floor((time - h * 3600) % 60);
					    day = day < 10 ? "0" + day : day;
					    h = h < 10 ? "0" + h : h;
					    m = m < 10 ? "0" + m : m;
					    s = s < 10 ? "0" + s : s;
				        timeStr = day + "天" + h + "时" + m + "分" + s + "秒";
				    } else {
				    	if((info.marketingStatusId == 0 || info.marketingStatusId == 1) && _that.countdown < -1001) {
				    		promptAction.getDetailInfo(_that);
				    	}
				    }
				    return timeStr;
				}
				this.dayStr = MillisecondToDate(_that.countdown);
			},
			categoryInfo(info) {
				this.prodData = [];
				this.option.categoryId = info.categoryId;
				this.option.pageNum = 1;
				promptAction.getProdList(this);
			},
			calculateViewHeight() {
				if(this.$refs.head) {
					const h = this.$refs.head.getBoundingClientRect().height;
					const n = this.$refs.nar.getBoundingClientRect().height;
					this.$refs.content.style.height = (document.body.clientHeight - h - n - 10) + "px";
				}
			},
			onPullingUp() {
				var _that = this;
				setTimeout(() => {
					promptAction.getProdList(this,(count) => {
						_that.pullingUpPage(count);
					});
				}, 500);
			},
			pullingUpPage(count) {
				if(count >= 10) {
					this.$refs.scroll.forceUpdate();
				} else {
					setTimeout(() => {
						this.$refs.scroll.forceUpdate(true);
					}, 20);
				}
			},
			beforeScrollStart(e) {
				let inputList = document.querySelectorAll('.text-input');
		        inputList.forEach((item) => {
		           item.blur()
		        })
			},
			previewImgEvent(src) {
				this.previewImg = src;
				this.$refs.preview.show = true;
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.prompt-page{
		header{
			.pxrem(height, 160);
			background: #FFF;
			text-align: center;
			.title{
				.prem(20, -4);
				padding:@prem;
				i{
					display: inline-block;
					position: relative;
					@h:31;
					.pxrem(width, @h);
					.pxrem(height, @h);
					.pxrem(top, -2);
					img{
						width: 100%;
					}
				}
			}
			.time{
				position: relative;
				.pxrem(margin-top, -16);
				.t-1{
					display: inline-block;
					background: #222;
					.pxrem(font-size, 32);
					.prem(1,5);
					padding:@prem;
					color:#FFF;
					.pxrem(border-radius,5);
				}
				.t-2{
					.pxrem(font-size, 46);
				}
				.rule{
					position: absolute;
					.pxrem(right, 20);
					.pxrem(top, 15);
					color:#666;
					&:after{
						content : "";
						position: relative;
						display: inline-block;
						.pxrem(width, 30);
						.pxrem(height, 30);
						.pxrem(top, 2);
						.pxrem(margin-left, 2);
						background: url(../../images/home_shuaihuo_rule.png) no-repeat;
						background-size: 100% auto;

					}
				}
			}
		}
		.nar{
			.pxrem(margin-top, 20);
			.pxrem(height,82);
		}
		.con{
			.nar{
				background:#FAFAFA;
			}
		}
		.not-data{
			text-align: center;
			position: absolute;
			top:50%;
			width:100%;
			.pxrem(margin-top,-240);
			.con{
				width:100%;
				text-align: center;
			}
			img{
				.pxrem(width,248);
				.pxrem(height,240);
			}
			p{
				.pxrem(margin-top,20);
				.pxrem(font-size,32);
				color: @d-b-c;
			}
		}
	}
</style>