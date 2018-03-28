<template>
	<article class="order-item">
		<loading v-if="!isLoad"></loading>
		<order-list-view 
			v-else 
			ref="orderList" 
			@updateData="updatePageData"  
			:no-show-num="option.prodQuantity"  @search="search"></order-list-view>
	</article>
</template>

<script>
	import orderListView from 'components/order/order-list'
	import commonAction from 'actionurl/common/common'
	import orderApi from 'actionurl/order/order'
	import { mapGetters } from 'vuex'
	import loading from 'components/common/loading'
	export default {
		data() {
			return {
				isLoad: false,
				option:{
					status:"20,30",
					prodQuantity:2,
					pageNum:1,
					pageSize:10,
					articleNumber: ''
				},
				totalPage:"",
				currentPage:1
			}
		},
		components: {
			orderListView,loading
		},
		computed : {
			...mapGetters({
				thatUrl : "thatUrl",
				orderType : "orderType",
				pageNum : "pageNum"
			})
		},
		created() {
			if(this.option.status != this.orderType) {
				if(cJs.isWeiXin() && this.$route.name == "order.index.new"){
					var urls = window.location.href.split("#");
					var params = {
						url : urls[0] ? urls[0] : window.location.href
					}
					commonAction.getJsApiInfo(params, (result) => {
						cJs.weixinConfig(result);
					});
				}
				orderApi.getOrderListData(this);
				this.$store.commit("RECORD_LAST_SCROLL_TOP", 0);
			} else {
				this.isLoad = true;
				this.option.pageNum = this.pageNum;
			}
		},
		mounted() {

		},
		methods: {
			updatePageData() {
				orderApi.getOrderListData(this,(count) => {
					this.$refs.orderList.pullingUpPage(count);
				});
			},
			search(txt) {
				this.option.articleNumber = txt;
				this.option.pageNum = 1;
				this.orderList = [];
				orderApi.getOrderListData(this);
			}
		}
	}
</script>

<style lang="less" scoped>
	.order-item{
		height:100%;
	}
</style>