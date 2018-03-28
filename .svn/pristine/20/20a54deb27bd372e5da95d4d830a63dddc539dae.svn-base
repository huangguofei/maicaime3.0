<!-- 商品快捷导航 -->
<template>
	<div class="setting-nar">
		<el-row >
		   <el-col :span="8" v-for="c in categoryList" class="item">
		   		<el-checkbox v-model="c.check" class="check" @change="changeCheck(c)"></el-checkbox>
		   		<i class="pic"><img :src="c.categoryIcon"></i>
	   			<p class="name">{{c.categoryName}}</p>
		   </el-col>
		</el-row>
	</div>
</template>
<script>
import homeAction from "action/marketing/home"
import { mapGetters } from 'vuex'
export default{
	data() {
		return{
			categoryList : [],
		}
	},
	created() {
		
	},
	computed : {
        ...mapGetters([
          'narsData'
        ])
    },
    mounted() {
    	this.$nextTick(function() {
    		homeAction.getCategoryLevel(this);
    	});
    },
	methods : {
		_readCategoryChecked(checkJson) {
			if(!checkJson || checkJson.length <= 0) {
				var list = this.categoryList, checkJson = []
				list.map((item) => {
					if(item.check) {
						checkJson.push({
							categoryId : item.categoryId,
							categoryName : item.categoryName,
							categoryIcon : item.categoryIcon
						});
					}
				});
			}
			this.$store.commit("receive_nar", {checkJson});
		},
		changeCheck(category) {
			var list = this.categoryList, count = 0, checkJson = [];
			list.map((item)=>{
				if(item.check) {
					++count;
					checkJson.push({
						categoryId : item.categoryId,
						categoryName : item.categoryName,
						categoryIcon : item.categoryIcon
					});
				} 
			})
			if(count > 4) {
				category.check = false;
			} else {
				this._readCategoryChecked(checkJson);
			}
		}
	}
}
</script>
<style lang="less" scoped>
	@import "../../../../common/less/config.less";
	.setting-nar{
		.item{
			text-align:center;
			padding:20px;
			border:1px solid #eee;
			margin-right:-1px;
			margin-bottom:-1px;
			position: relative;
			    height: 122px;
			.check{
				position: absolute;
				left:20px;
			}
			
		}
		.pic{
			width: 60px;
			height:60px;
			display: inline-block;
			img{
				max-width:100%;
				max-height:100%;
				overflow: hidden;
			}
		}

	}
</style>