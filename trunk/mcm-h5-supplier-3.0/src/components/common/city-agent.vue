<!-- 区域选择 -->
<template>
	<div class="city-agent" v-if="show">
		<div class="bg" @click="show = false"></div>
		<div class="content">
			<header>选择地区</header>
			<section>
				<p  class="item" :class="{active : selectIndex == index}" v-for="(a, index) in agentList" @click="selectAgentItem(a, index)">
					<span class="con">
						<span class="agent">{{a.areaName}}</span><br/>
						<span class="parent">({{a.provinceName}}{{a.cityName}})</span>
					</span>
					
				</p>
			</section>
		</div>
	</div>
</template>
<script>
	import commonAction from 'actionurl/common/common'
	export default{
		data(){
			return{
				show : false,
				agentList : [],
				selectIndex : -1
			}
		},
		created() {
			commonAction.getOpenAgents(this);
		},
		methods : {
			selectAgentItem(item, index) {
				this.selectIndex = index;
				this.show = false;
				this.$emit("selectAgent", item);
			}
		}
	}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.fx{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height:100%;
	}
	.city-agent{
		.fx;
		.bg{
			.fx;
			background: rgba(0, 0, 0, 0.5);
			z-index:9998;
		}
		.content{
			position: absolute;
			bottom: 0;
			width:100%;
			background: #FFF;
			z-index:9999;
			header{
				.pxrem(height,90);
				.pxrem(line-height,90);
				text-align: center;
				color:@m-c;
				border-bottom:1px solid #eee;
			}
			section{
				.prem(16, -4);
				padding:@prem;
				.pxrem(height, 500);
				overflow: auto;
				p.item{
					display: inline-block;
					color:#999;
					width:46%;
					margin-left:2.8%;
					.con{
						display: inline-block;
						background: #eee;
						width:100%;
						text-align: center;
						.prem(10, -4);
						padding:@prem;
						.pxrem(margin-bottom, 10);
						.pxrem(margin-top, 10);
					}
					.parent{
						.pxrem(font-size, 22);
					}
					.agent{
						color:#222;
					}
				}
				p.active{
					.con{
						background: @m-c;
						color:#FFF;
					}
					.agent{
						color:#FFF;
					}
				}
			}
		}
	}
</style>