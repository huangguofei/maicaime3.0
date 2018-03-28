<!-- 市场食材菜单 -->
<template>
<div class="prod-menu">
	<div class="prod-nav">
		<ul>
			<!-- <li class="p-item p-referral" ><i></i><span class="name">每日推荐</span></li> -->
			<li class="p-item" :class="selectIndex == key ? 'active' : ''" v-for="(c, key) in categoryData" @click="selectCategory(key)">
				<span class="name">{{c.categoryName}}</span>
			</li>

		</ul>
	</div>
	<div class="label-wrap">
		<span class="label-item" :class="selectSubIndex == -1 ? 'active' : ''" @click="selectSubCategory(-1)"><span class="name">全部</span></span>
		<span class="label-item" 
			:class="{active:selectSubIndex == key,hidden:(key > 5 && !moreShow) }" 
			
			 @click="selectSubCategory(key)" v-for="(s, key) in subCategoryList">
			 <span class="name" >{{s.categoryName}}</span>
		</span>
		<span class="label-item label-more" v-show="childCount > 6">
			<span class="name" @click="lookMore" v-if="moreShow">收起
				<i><img src="../../images/register_bottom.png"></i>
			</span>
			<span  class="name" @click="lookMore" v-else>
				更多
				<i><img src="../../images/register_bottom.png"></i>
			</span>
		</span>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return {
				selectIndex : 0,
				selectSubIndex : -1,
				childCount : 0,
				subCategoryList : [],
				moreShow : false
			}
		},
		props : ["categoryData", "setSelectInfo"],
		created() {
			this.subCategoryUpdate();
		},
		methods : {
			selectCategory(key) {
				this.selectIndex = key;
				this.selectSubIndex = -1;
				this.subCategoryUpdate();
				var categoryId =  this.categoryData[this.selectIndex].categoryId;
				var data = {
					categoryId :categoryId
				}
				this.setSelectInfo(data);
			},
			subCategoryUpdate() {
				if(this.categoryData.length > 0) {
					var sub = this.categoryData[this.selectIndex];
					this.subCategoryList = sub.subCategoryList ? sub.subCategoryList : [];
					this.childCount = this.subCategoryList.length;
				}
			},
			selectSubCategory(key) {
				this.selectSubIndex = key;
				var parent = this.categoryData[this.selectIndex];
				var categoryId =  parent.categoryId;
				var data = {
					categoryId :categoryId
				}
				if(key != -1) {
					var subs = parent.subCategoryList[key];
					data.subCategoryId = subs.categoryId;
				}
				this.setSelectInfo(data);
			},
			lookMore() {
				this.moreShow = this.moreShow ? false : true;
			}
			
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.prod-menu{
		.prod-nav{
			.pxrem(height,82);
			background: #FFF;
			width:100%;
			overflow-x: auto;
			overflow-y: hidden;
			ul{
				width:2000px;
			}
			.p-item{
				float:left;
				.pxrem(height,82);
				.pxrem(line-height,82);
				.prem(0,30);
				padding:@prem;
				.pxrem(font-size,28);
			}
			.active{
				background: @m-c;
				color:#FFF;
			}
			.p-referral{
				i{
					display: inline-block;
					position: relative;
					.pxrem(top, 2);
					.pxrem(margin-right, 5);
					.pxrem(width,35);
					.pxrem(height,37);
					background: url(../../images/market_dailyrecommend.png) no-repeat;
					background-size:cover;
				}
			}
		}
		.label-wrap{
			.prem(20, 0);
			padding:@prem;
			.label-item{
				display: inline-block;
				.prem(8, 14.8);
				padding:@prem;
				.name{
					display: inline-block;
					.pxrem(width,120);
					text-align:center;
					border:1px solid #D7D7D7;
					.prem(4, 10);
					padding:@prem;
					background: #FFF;
					overflow: hidden;
					 white-space:nowrap;
					.pxrem(border-radius,80);
					.pxrem(font-size,28);
				}
				
			}
			.hidden{
				display: none;
			}
			.active{
				.name{
					border-color:@m-c;
					color:@m-c;
				}
			}
			.label-more{
				.name{
					position: relative;
					i{
						display: inline-block;
						.pxrem(width, 20);
						.pxrem(height, 20);
						img{
							width:100%;
							opacity: 0.8;
						}
					}
				}
				.moretop{
					i img{
						transform:rotate(180deg);
					}
					
				}
				
			}
			
		}
		
	}
</style>
