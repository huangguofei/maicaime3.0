<!-- 雪花 -->
<template>
	<div class="snowflake">
		<span class="item" :class="{item2:i.speed == 1, item3:i.speed == 2}" v-for="i in items" :style='{
			"top" : i.top + "px",
			"left" : i.left + "px",
			"width" : i.width + "px",
			"height" : i.height + "px",
		}'>
			<img src="../../images/snow/snow2.gif" v-if="i.key == 1" />
			<img src="../../images/snow/snow3.gif" v-else-if="i.key == 2" />
			<img src="../../images/snow/snow1.gif" v-else />
		</span>
	</div>
</template>
<script>
	export default{
		data() {
			return{
				items : []
			}
		},
		created() {
			var _that = this;
			setInterval(function() {
				_that.initSnowflake();
			},300);
		},
		methods : {
			initSnowflake() {
				var width = document.body.clientWidth, height = document.body.clientHeight;
				var left = Math.random() * width,
					width = 18 + Math.random() * 5;
				this.items.push({
					left : left,
					top :0,
					width : width,
					height : width,
					key : Math.floor(Math.random() * 3),
					speed : Math.floor(Math.random() * 3),
				});
				this.items.forEach((item, index) => {
					if(Math.random() > 0.5) {
						item.left += Math.random() * 3;
					} else {
						item.left -= Math.random() * 3;
					}
				});
				if(this.items.length > 36) {
					this.items.pop();
				}
			}
		}
	}
</script>
<style lang="less" scoped>
	.snowflake{
		.item{
			position: fixed;
			z-index:99999;
			display: inline-block;
			width:18px;
			height:18px;
			animation: mysnow 8s infinite; 
			opacity:0;   
			img{
				width:100%;
			}
		}
		.item2{
			animation: mysnow 7s infinite; 
		}
		.item3{
			animation: mysnow 6s infinite; 
		}
	 	@keyframes mysnow{  
            0%{  
                top:0;  
                opacity:0;  
            }  
            50%{  
                opacity:1;  
                transform: rotate(360deg); 
            } 
            98%{  
                transform: rotate(0deg);  
                opacity: 0;  
                top:100%;  
            }  
        }  
	}
</style>