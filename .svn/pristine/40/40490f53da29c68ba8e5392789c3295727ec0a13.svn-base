<!-- 活动开放时间组件 -->
<template>
	<div class="activity-time">
		<header>
			<span class="title">距离开放时间</span>
		</header>
		<div class="con">
			<div class="time-wrap">
				<span class="t-1">还未开始</span>
				<!-- <span class="t-1">0</span>
				<span class="t-1">9</span>
				<span class="t-2">:</span>
				<span class="t-1">2</span>
				<span class="t-1">4</span>
				<span class="t-2">:</span>
				<span class="t-1">5</span>
				<span class="t-1">8</span> -->
			</div>
			<span class="help">活动规则</span>
		</div>
	</div>
</template>
<style lang="less" scoped>
	@import "../../../../common/less/config.less";
	.activity-time{
		height:80px;
		background: #FFF;
		header{
			height:30px;
			line-height: 40px;
			text-align: center;
			.title{
				position: relative;
				font-size:@size-title;
				.line{
					content: "";
					position: absolute;
					top:10px;
					right:-48px;
					height:1px;
					width:45px;
					background: @color-font;
				}
				&:after{
					.line;
				}
				&:before{
					.line;
					left:-48px;
				}
			}
		}
		.con{
			.time-wrap{
				width:165px;
				margin:6px auto;
				text-align: center;
				.t-1{
					padding:3px 5px;
					display: inline-block;
					background: @color-font;
					color:#FFF;
					font-size: @size-title;
					border-radius: 5px;
				}
				.t-2{
					display: inline-block;
					width:10px;
					text-align: center;
					font-size:@size-title;
				}
			}
			.help{
				float:right;
				margin:-30px 10px 0 0;
				font-size: @size-title;
				color:#666;
			}
		}
	}
</style>