<template>
	<article class="page-layers">
		<article class="register-success">
			<img src="../../images/register-success.png"/>
			<h2>注册成功，请耐心等待</h2>
			<p>我们已经收到您的资料，将第一时间<br>为您审核。</p>
			<router-link to="/login/">返回首页</router-link>
		</article>
	</article>
</template>

<script>
</script>

<style lang='less' scoped>
	@import "../../common/less/config.less";
	.register-success{
		text-align:center;
		margin: 1rem auto;
		img{
			width:30%;
			display: block;
			margin: 0 auto;
		}
		h2{
			color: #4a4a4a;
			.pxrem(font-size,32);
			line-height: 0.8rem;
		}
		p{
			color: #666;
			.pxrem(font-size,28);
		}
		a{
			margin: 0.8rem auto;
			display: block;
			width: 40%;
			background: @m-c;
			color: #fff;
			.pxrem(height,70);
			.pxrem(line-height,70);
			.pxrem(border-radius,35);
			text-align: center;
		}
	}
</style>