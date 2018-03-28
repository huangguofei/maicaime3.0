<!-- 编辑主页 -->
<template>
	<page-layer :narData="narData" classs="padd" class="edit-page">
		<phone-model>
			<div class="content">
				<edit-element :elementIndex="1" :class="selectElementIndex == 1 ? 'active' : ''">
					<el-carousel height="150px">
					     <el-carousel-item  v-for="(item, index) in adAllData" :key="index" >
					       	<img :src="item.picture" />
					      </el-carousel-item>
				    </el-carousel>
				</edit-element>
				<edit-element  :elementIndex="2" class="nar-element" >
					<editor-nar></editor-nar>
				</edit-element>
				<edit-element  :elementIndex="3" class="feature-element" >
					<editor-feature></editor-feature>
				</edit-element>
				<edit-element  :elementIndex="4" class="feature-element" >
					<editor-re-prod></editor-re-prod>
				</edit-element>
			</div>
			
		</phone-model>
		<div class="right">
				<setting-area>
					<setting-advertising ></setting-advertising>

				</setting-area>
				<div class="event" >
					<el-button>取消</el-button>
					<el-button type="primary" @click="submitHome">保存</el-button>
				</div>	
			</div>
	</page-layer>
</template>
<script>
import pageLayer from "components/common/page-layer"
import phoneModel from "components/marketing/editor/phone-model"
import settingArea from "components/marketing/editor/setting-area"
import editElement from "components/marketing/editor/edit-element"
import editorNar from "components/marketing/editor/home/editor-nar"
import editorFeature from "components/marketing/editor/home/editor-feature"
import editorReProd from "components/marketing/editor/home/editor-re-prod"
import settingAdvertising from "components/marketing/editor/home/setting-advertising"
import { mapGetters } from 'vuex'
import homeAction from "actionurl/marketing/home"
export default{
	data() {
		return{
			narData : [
	    	  	{
	    	  		name : "主页管理",
	    	  		router : ""
	    	  	}
	    	],
	    	selectElementIndex : 1,
		}
	},
	components : {
		pageLayer,
		phoneModel,
		settingArea,
		editElement,
		editorNar,
		editorFeature,
		editorReProd,
		settingAdvertising
	},
	computed : {
    	...mapGetters([
	      'allHeaderData',
	      'adAllData'
	    ])
    },
	created() {
		this.$store.dispatch('getHeaderData');
	},
	methods : {
		submitHome() {
			var str = JSON.stringify(this.allHeaderData);
			var data = {
				json : str
			}
			homeAction.saveAdInfo(this, data);
		}
	}
}
</script>
<style lang="less" scoped>
	@import "../../../common/less/config.less";
	.edit-page{
		position: relative;
		.right{
			float: left;
			.event{
				text-align: center;
				padding:20px 60px;
			}
		}
	}
	.content{
		.el-carousel__item {
			img{
				max-width: 100%;
			}
		  }

		  .nar-element{
		  		position: relative;
		  		.nar-layer{
		  			width:100%;
		  			height:40px;
		  			background: #FFF;
		  			position: absolute;
		  			left:0;
		  			z-index:99;
		  			top:-20px;
		  			border-radius: 50%;
		  		}
		  }
		  .prod-element{
		  		padding-bottom: 10px;
		  }
		  .nar-wrap{
		  		height:90px;
		  		background: #FFF;
		  		position: relative;
		  		z-index:100;
		  		.n-item{
		  			float:left;
		  			width:25%;
		  			text-align: center;
		  			font-size:@size-title;
		  			.icon{
		  				display: inline-block;
		  				width:45px;
		  				height:45px;
		  				margin-top:15px;
		  				img{
		  					width:100%;
		  					height:100%;
		  				}
		  			}
		  		}
		  }
	}
</style>