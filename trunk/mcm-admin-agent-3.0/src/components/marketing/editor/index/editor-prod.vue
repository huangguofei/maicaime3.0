<!-- 编辑商品 -->
<template>
	<div class="editor-prod">
		<header>
			<ul>
				<li class="c-item active">粮油米面</li>
				<li class="c-item">粮油米面</li>
				<li class="c-item">粮油米面</li>
				<li class="c-item">粮油米面</li>
				<li class="c-item">粮油米面</li>
			</ul>
		</header>
		<div class="con">
			<div class="p-item" v-for="p in 6">
				<i class="p-img"></i>
				<div class="p-info">
					<p class="name">优质大白菜</p>
					<p class="inventory">库存：40件</p>
					<div class="info">
						<span class="price">¥14.8/斤</span>
						<span class="or-price">¥2.50/斤</span>
						<span class="shop-name">农家爱联市场</span>
						<button>即将开放</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="less" scoped>
	@import "../../../../common/less/config.less";
	.editor-prod{
		@b-c:#E5E5E5;
		header{
			@h:41px;
			height:@h;
			background: #FAFAFA;
			overflow-x: hidden;
			border:1px solid @b-c;
			ul{
				width:2000px;
				.c-item{
					height:@h;
					line-height: @h;
					float:left;
					padding:0 20px;
				}
				.active{
					background: @color-main;
					color:#FFF;
					font-size:@size-gen;
				}
			}
		}
		.con{
			background: #FFF;
			.p-item{
				position: relative;
				padding:10px;
				min-height:75px;
				border-bottom:1px solid @b-c;
				.p-img{
					width:75px;
					height:75px;
					position: absolute;
					border:1px solid @b-c;
				}
				.p-info{
					padding-left:85px;
					.name{
						font-size: @size-title;
					}
					.inventory{
						display: inline-block;
						background: #eee;
						padding:3px 10px;
						text-align: center;
						margin-top:5px;
						border-radius: 100px;
						color:#666;
					}
					.info{
						position: relative;
						margin-top:5px;
						button{
							position: absolute;
							right:0;
							bottom:30px;
							width:78px;
							height:27px;
							background: #999999;
							border:0;
							color:#FFF;
						}
					}
					.shop-name{
						float: right;
						font-size: @size-gen;
						color:#222222;

					}
					.price{
						color:@color-yellow;
						font-size: @size-m-title;
					}
					.or-price{
						text-decoration: line-through;
						color:#999;
					}
				}
			}
		}
	}
</style>