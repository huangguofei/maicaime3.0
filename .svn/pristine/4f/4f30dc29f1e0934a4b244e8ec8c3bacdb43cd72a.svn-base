<!-- 活动列表 -->
<template>
	<page-layer :narData="narData" class="">
		<div class="activity-list">
			<coupon v-for="(v,k) in tableData" :v="v" @couponDetails="couponDetails"></coupon>
		</div>
		<div class="page" v-show="isShowPage">
			<div class="bg"></div>
			<div class="page-content">
				<!--<coupon></coupon>-->
				<div class="coupon-details back-color">
					<h2 class="padding">优惠券详情</h2>
					<div class="coupon-info padding">
						<p>发行方：深圳悦厚科技有限公司</p>
						<p>运营方：深圳悦厚科技有限公司</p>
						<p>发行时间：2017-11-08 18:3</p>
					</div>
					<ul class="coupon-table padding">
						<li>
							<span>发行总张数</span>
							<p>1000</p>
						</li>
						<li>
							<span>未派发张数</span>
							<p>1000</p>
						</li>
						<li>
							<span>已派发张数</span>
							<p>1000</p>
						</li>
						<li>
							<span>已使用张数</span>
							<p>1000</p>
						</li>
						<li>
							<span>未使用张数</span>
							<p>1000</p>
						</li>
					</ul>
					<div class="coupon-info padding">
						<p>用户群体：所有采购商</p>
						<p>商品品类：全品类</p>
						<p>商品限制：无</p>
						<p>使用时段：无限制</p>
					</div>
					<hr color="#DFDFDF" size="1">
					<div class="footer padding">
						<h3>使用说明：</h3>
						<p>如果你无法简洁的表达你的想法，那只说明你如果你无法简洁的表达你的想法，那只说明你如果你无法简洁的表达你的想法，那只说明你</p>
					</div>
					<a href="javascript:;" class="off-page" @click="isShowPage=false"><img src="../../../images/off.png"></a>
				</div>
			</div>
		</div>
		<pagination :pagings="pagings" :totalCount="totalCount" @changePageSize="changePageSize"></pagination>
	</page-layer>
</template>
<script>
	import pageLayer from "components/common/page-layer"
	import coupon from "view/marketing/coupon/coupon"
	import requestServer from "action/marketing/ticket"
	import pagination from "components/common/pagination"
	export default {
		data() {
			return {
				tableData:[],
				narData: [{
					name: "优惠券"
				}],
				isShowPage:false,
				pagings : {
		          	pageSize : 10,
	  	 			pageNum : 1,
		        },
		        totalCount : 0
			}
		},created:function(){
			requestServer.getTicketList(this);
		},
		components: {
			pageLayer,
			coupon,
			pagination
		},methods:{
			couponDetails:function(){
				//this.isShowPage=true;
			},
			changePageSize(value) {
				this.pagings.current = value;
				requestServer.getTicketList(this);
			},
		}
	}
</script>
<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.activity-list {
		.clearfix();
	}
	
	.page {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		.bg {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: #000;
			opacity: .5;
		}
		.page-content {
			width: 70%;
			margin: 10% 15%;
			position: relative;
			z-index: 1;
			.clearfix();
			.coupon-details {
				position: relative;
				float: left;
				width: 340px;
				/*height: 610px;*/
				border: 1px solid #DFDFDF;
				h2 {
					background: #F4F4F4;
					font-size: 18px;
					color: #000;
					box-sizing: border-box;
				}
				h3 {
					font-size: 16px;
					color: #000;
				}
				.coupon-info {
					font-size: 14px;
					color: #343434;
					line-height: 24px;
				}
				.coupon-table {
					background: #F8F8F8;
					.clearfix();
					li {
						float: left;
						width: 33.333333%;
						padding-bottom: 5px;
						border-right: 1px solid #DFDFDF;
						border-bottom: 1px solid #DFDFDF;
						text-align: center;
						box-sizing: border-box;
						span {
							font-size: 12px;
							color: #737373;
						}
						p {
							font-size: 24px;
							color: #343434;
						}
					}
					li:nth-child(3n) {
						border-right: 0;
					}
					li:nth-child(3)~li {
						border-bottom: 0;
						padding-top: 5px;
					}
				}
				hr {
					width: 90%;
					margin: 0 auto;
				}
				.footer {
					p {
						font-size: 14px;
						color: #343434;
						word-break: break-all;
						word-wrap: break-word;
						margin-top: 10px;
					}
				}
				.off-page{
					position: absolute;
					width: 20px;
					height: 20px;
					right:-10px;
					top: -10px;
					background: #FABC05;
					border: 1px solid #F98A0C;
					border-radius: 10px;
					text-align: center;
					img{
						width: 50%;
						margin-top: 25%;
					}
				}
			}
		}
	}
</style>