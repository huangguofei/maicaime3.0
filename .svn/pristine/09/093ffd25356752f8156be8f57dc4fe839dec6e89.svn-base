<!-- 搜索 -->
<template>
<div class="search-page">
	<header>
		<div class="con">
			<i class="s-icon"></i>
			<input type="text" v-model="keyword" @input="queryKeyword"   @keyup.enter="submitSearch" placeholder="搜索您想要找的食材"/>
			<span class="clear-icon" @click="submitSearch">搜索</span>
		</div>
	</header>
	<section>
		<div class="hot item" >
			<p class="title">热门搜索</p>
			<div class="list">
				<span class="l-item" v-for="s in searchList" @click="searchProd(s.keywordName)">{{s.keywordName}}</span>
			</div>
		</div>
		<div class="log item" >
			<i class="clear" @click="cleatHistory"></i>
			<p class="title">搜索历史</p>
			<div class="list">
				<span class="l-item" v-for="h in historys"  @click="searchProd(h)">{{h}}</span> 
			</div>
		</div>
	</section>
	<search-layer v-show="layer" :keys="keys" @queryKey="queryKey"></search-layer>
</div>
</template>
<script>
	import searchAction from "actionurl/index/search"
	import searchLayer from "components/index/search-layer"
	export default{
		data() {
			return{
				searchList : [],
				keyword : "",
				historys : [],
				keys : [],
				layer : false,
				isios : false
			}
		},
		created() {
			searchAction.getKeyDownList(this);
			this.getHistorys();
			var facility = cJs.verifyFacility();
			if(facility == 2) {

			}
		},
		components : {
			searchLayer
		},
		methods : {
			submitSearch() {
				if(this.keyword == "") {
					cJs.message("请输入关键字");
					return false;
				}
				if(localStorage.historyKeywords) {
					var ary = [];
					ary = JSON.parse(localStorage.historyKeywords);
					ary.push(this.keyword);
					ary = cJs.uniqueArray(ary);
					localStorage.historyKeywords = JSON.stringify(ary);
				} else {
					var ary = [];
					ary[0] = this.keyword;
					localStorage.historyKeywords = JSON.stringify(ary)
				}
				//this.getHistorys();
				this.$router.push({
					name : "index.search.result",
					query : {
						name : this.keyword
					}
				});
			},
			getHistorys() {
				this.historys = localStorage.historyKeywords ? cJs.uniqueArray(JSON.parse(localStorage.historyKeywords)) : [];
			},
			clearInput() {
				this.keyword = "";
			},
			cleatHistory() {
				this.historys = [];
				localStorage.historyKeywords ? localStorage.historyKeywords = "" : "";
			},
			searchProd(name) {
				this.$router.push({
					name : "index.search.result",
					query : {
						name : name
					}
				});
			},
			queryKeyword() {
				searchAction.queryKeyword(this);
			},
			queryKey(name) {
				this.layer = false;
				this.keyword = name;
				this.submitSearch();
			}
		}

	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.search-page{
		header{
			background: #222;
			.pxrem(height, 90);
			.con{
				.prem(10, 20);
				padding:@prem;
				position: relative;
				input{
					width:100%;
					.pxrem(height, 60);
					border:0;
					.pxrem(text-indent, 70);
					.pxrem(font-size,26);
					border-radius:0;
				}
				i{
					display: inline-block;
					position: absolute;
					.pxrem(top,18);
					.pxrem(width,40);
					.pxrem(height,40);
				}
				.s-icon{
					.pxrem(left,32);
					background:rgba(255, 255, 255, 0.8) url(../../images/home_search.png) no-repeat;
					background-size: cover;
				}
				.clear-icon{
					position:absolute;
					background:#222;
					color:#FFF;
					.pxrem(font-size, 24);
					.pxrem(right,0);
					.pxrem(top,0);
					.pxrem(height, 80);
					.pxrem(line-height, 85);
					.pxrem(width, 120);
					text-align:center;
					/*background:rgba(255, 255, 255, 0.8) url(../../images/home_search_delete1.png) no-repeat;
					background-size: cover;*/
				}
			}
		}
		section{
			.item{
				.prem(20);
				background:#FFF;
				padding:@prem;
				.title{
					color:@s-c;
					.pxrem(font-size, 28);
				}
			}
			.log{
				.pxrem(margin-top, 20);
				position: relative;
				.clear{
					position: absolute;
					.pxrem(top, 20);
					.pxrem(right, 20);
					display: inline-block;
					.pxrem(width, 40);
					.pxrem(height, 40);
					background:rgba(255, 255, 255, 0.8) url(../../images/home_search_delete2.png) no-repeat;
					background-size: cover;
				}
			}
			.list{
				.l-item{
					display: inline-block;
					.prem(2, 26);
					padding:@prem;
					border:1px solid #d7d7d7;
					background:#fafafa;
					.pxrem(border-radius,100);
					.pxrem(margin-top,20);
					.pxrem(margin-right,20);
				}
			}
		}
	}
</style>