<template>
	<article class="order-item">
		<loading v-if="!isLoad"></loading>
		<order-list-view v-else ref="orderList" @search="search" :order-data="orderList" @updateData="updatePageData"  :no-show-num="option.prodQuantity"></order-list-view>
	</article>
</template>

<script>
	import orderListView from 'components/order/order-list'
	import orderApi from 'actionurl/order/order'
	import loading from 'components/common/loading'
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				orderList: [],
				searchIndex: 2,
				isSelectAll: false,
				isLoad: false,
				option: {
					status: 40,
					/*待付款*/
					prodQuantity: 2,
					pageNum: 1,
					pageSize: 10,
					articleNumber: ''
				},
				totalPage: "",
				currentPage: 1
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
				orderApi.getOrderListData(this);
				this.$store.commit("RECORD_LAST_SCROLL_TOP", 0);
			} else {
				this.isLoad = true;
				this.option.pageNum = this.pageNum;
			}
		},
		methods: {
			changeSearch(index) {
				if(this.searchIndex == index) {}
				this.searchIndex = index;
			},
			selectAll() {
				if(this.isSelectAll)
					this.isSelectAll = false;
				else
					this.isSelectAll = true;
			},
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