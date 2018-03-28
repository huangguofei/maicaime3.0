<!-- 模态框 -->
<template>
	<div class="dialog-layer" v-if="show">
		<div class="bg" @click="close"></div>
		<div class="content">
			<header>
				<span>{{title}}</span>
			</header>
			<section>
				<slot></slot>
			</section>
			<footer>
				<span class="btn-cancel" @click="close">取消</span>
				<span class="btn-confirm" @click="confirmOK">确定</span>
			</footer>
		</div>
	</div>
</template>
<script>
	export default{
		data() {
			return {
				show : false
			}
		},
		props : {
			title : {
				type : String,
				default : "选择配送时间"
			},

		},
		methods : {
			close () {
				this.show = false;
			},
			confirmOK() {
				this.show = false;
				this.$emit("confirm");
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
	width:100%;
	height:100%;
	z-index:99;
}
.dialog-layer{
	.fx;
	.bg{
		.fx;
		background: rgba(0, 0, 0, 0.8);
	}
	.content{
		position: absolute;
		top:20%;
		z-index:100;
		.pxrem(width,660);
		left:50%;
		.pxrem(margin-left, -330);
		background: #FFF;
		.pxrem(border-radius, 12);
		header{
			.pxrem(height, 100);
			.pxrem(line-height, 100);
			.pxrem(font-size, 32);
			text-align: center;
			border-bottom:1px solid @p-b-c;
		}
		section{
			.prem(10);
			padding:@prem;
		}
		footer{
			.pxrem(height, 120);
			.pxrem(line-height, 120);
			.pxrem(font-size, 32);
			border-top:1px solid @p-b-c;
			span{
				display:inline-block;
				width:50%;
				float:left;
				text-align: center;
			}
			.btn-cancel{
				color:@s-c;
			}
			.btn-confirm{
				color:@m-c;
				border-left:1px solid @p-b-c;
				margin-left:-1px;
			}
		}
	}
}
</style>