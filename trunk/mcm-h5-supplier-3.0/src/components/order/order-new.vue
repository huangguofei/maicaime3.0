<template>
	<article class="order-item">
		<loading v-if="!isLoad"></loading>
		<order-list-view v-else ref="orderList" :order-data="orderList" @updateData="updatePageData" :no-show-num="option.prodQuantity"></order-list-view>
	</article>
</template>

<script>
	import orderListView from 'components/order/order-list'
	import orderApi from 'actionurl/order/order'
	import scroll from "components/common/scroll"
	import loading from 'components/common/loading'
	import { mapGetters } from 'vuex'
	export default {
		data() {
			return {
				orderList:[],
				isLoad: false,
				option : {
					orderStatusId : 30,
		          	current : 1,
		          	prodQuantity:2,
		          	size : 10,
		          	pages : 1,
		          	total : 0,
		          	sortDirection : 0
	            },
			}
		},
		computed : {
			...mapGetters([
				"orderType",
				"pageNum"
			])
		},
		components: {
			orderListView,
			scroll,
			loading
		},
		created() {
			if(this.option.orderStatusId != this.orderType) {
				orderApi.getOrderListData(this);
				this.$store.commit("RECORD_LAST_SCROLL_TOP", 0);
			} else {
				this.isLoad = true;
				this.option.pageNum = this.pageNum;
			}
		},
		methods: {
			updatePageData() {
				orderApi.getOrderListData(this,(count) => {
					this.$refs.orderList.pullingUpPage(count);
				});
			}
		}
	}
</script>

<style lang="less" scoped>
	.order-item{
		height:100%;
	}
</style>