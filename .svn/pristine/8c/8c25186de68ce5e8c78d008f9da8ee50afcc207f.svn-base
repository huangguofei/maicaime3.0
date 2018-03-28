<template>
	<article class="page-layer user-paylist">
		<header class="padding">
			<section class="info">
				<p>{{checkingData.startDate}} - {{checkingData.endDate}}收入：</p>
				<h2>¥{{checkingData.totalAmount|ms}}</h2>
			</section>
			<span class="status" :class="{active:checkingData.settlementStatusId!=1}">{{checkingData.settlementStatusText}}</span>
		</header>
		<article class="content">
			<p class="title padding"><span>订单信息</span><span>完成时间</span><span>金额</span></p>
			<ul>
				<li class="padding" v-for="(v,k) in checkingList">
					<section class="pull-left">
						<p>{{v.title}}</p>
						<span>订单号：{{v.dataId}}</span>
					</section>
					<section class="pull-left">
						{{v.datatime|Time}}
					</section>
					<section class="pull-left last">
						¥{{v.amount|ms}}
					</section>
				</li>
			</ul>
		</article>
		<p class="remark"><img src="../../images/Fill 12.png" />订单已配送，但没有纳入收入记录</p>
	</article>
</template>

<script>
	import server from 'actionurl/checking/checking'
	export default {
		data() {
			return {
				checkingData:"",
				checkingList: [],
				checkingId:this.$route.params.id
			}
		},
		created() {
			server.getCheckingDetails(this);
		},
		components: {
			//			err
		},
		filters: {
			Time: function(val) {
				if(!val)
					return '';
				val = new Date(val);
				var M = val.getMonth() + 1;
				M = M > 12 ? 1 : M;
				var D = val.getDate();
				var h = val.getHours();
				var m = val.getMinutes();
				h = h < 10 ? "0" + h : h;
				m = m < 10 ? "0" + m : m;
				return M + "-" + D + " " + h + ":" + m;
			}
		}
	}
</script>

<style lang="less" scoped>
	@import "../../common/less/config.less";
	.user-paylist {
		header {
			position:relative;
			background: #222;
			.pxrem(height, 100);
			color: #fff;
			.info{
				p{
					.pxrem(font-size, 24);
					opacity:.5;
				}
				h2{
					.pxrem(font-size, 50);
					color:#F9AB0C;
					.pxrem(margin-top,5);
				}
			}
			.status{
				position: absolute;
				top:.4rem;
				right:.5rem;
				.pxrem(width, 120);
				.pxrem(height, 50);
				.pxrem(line-height, 50);
				text-align:center;
				border:1px solid rgba(164,164,164,1);
				.pxrem(border-radius,6);
			}
			.active{
				border-color: @m-c;
				color:@m-c;
			}
		}
		.content {
			background: #fff;
			.pxrem(margin-top, 20);
			&>p {
				border-bottom: 1px solid #E9E9E9;
				.pxrem(font-size, 28);
				.pxrem(height, 70);
				.pxrem(line-height, 70);
				span {
					display: inline-block;
					width: 25%;
				}
				span:last-child {
					width: 20%;
				}
				span:first-child {
					width: 55%;
				}
			}
			ul {
				li {
					position: relative;
					border-bottom: 1px solid #E9E9E9;
					.pxrem(height, 70);
					.clearfix();
					img {
						position: absolute;
						.pxrem(width, 20);
						.pxrem(top, 30);
						.pxrem(right, 10);
					}
					section {
						.pxrem(font-size, 26);
						width: 25%;
						.pxrem(line-height, 70);
					}
					section:first-child {
						width: 55%;
						line-height: inherit;
						p {
							.pxrem(font-size, 28);
						}
						span {
							.pxrem(font-size, 24);
							color: #535353;
						}
					}
					section.last{
						.pxrem(font-size, 30);
						width: 20%;
					}
				}
			}
		}
		.remark {
			.pxrem(font-size, 24);
			color: #666;
			.pxrem(height, 40);
			.pxrem(line-height, 40);
			.pxrem(margin-top, 40);
			text-align: center;
			img {
				.pxrem(width, 30);
				vertical-align: sub;
				.pxrem(margin-right, 5);
			}
		}
	}
</style>