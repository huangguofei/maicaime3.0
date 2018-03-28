<!-- 导航 -->
<template>
	<div class="editor-nar">
		<div class="nar-layer"></div>
			<ul class="nar-wrap">
				<li class="n-item" v-for="n in narsData">
					<i class="icon"><img :src="n.categoryIcon"></i>
					<p class="name">{{n.categoryName}}</p>
				</li>
			</ul>
	</div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default{
    computed : {
        ...mapGetters([
          'narsData'
        ])
    },
    created() {
        this.$store.dispatch('getSetCategoryNar');
    }
  }
</script>
<style lang="less" scoped>
	@import "../../../../common/less/config.less";
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
</style>