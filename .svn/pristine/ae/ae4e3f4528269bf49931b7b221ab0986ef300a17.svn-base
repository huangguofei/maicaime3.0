<!-- 购物车抛物线 -->
<template>
<div class="cart-parabold">
 <div v-for="ball in balls">
     <transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
         <div class="ball" :class="type == 'often' ? 'ball-often' : 'ball-cart'" v-show="ball.show">
             <slot></slot>
         </div>
     </transition>
 </div>
</div>
</template>
<script>
export default{
	data() {
		return{
			balls : [
				{
					 show: false	
				}
			],
			dropBalls:[],
		}
	},
    props : {
        type : {
            type : String,
            default : null
        }
    },
	methods : {
		drop(el){
             for(let i=0;i<this.balls.length;i++){
                 let ball= this.balls[i];
                 if(!ball.show){
                     ball.show = true;
                     ball.el=el;
                     this.dropBalls.push(ball);
                     return;
                 }
             }
             
         },
         beforeDrop(el) {
             let count = this.balls.length;
             while (count--) {
                 let ball = this.balls[count];
                 if (ball.show) {
                     let rect = ball.el.getBoundingClientRect(); 
                     let x = rect.left;
                     let y = -(window.innerHeight - rect.top  - 50); 
                     el.style.display = '';
                     el.style.webkitTransform = 'translateY('+y+'px)';  
                     el.style.transform = 'translateY('+y+'px)';
                     let inner = el.getElementsByClassName('inner-hook')[0];
                     inner.style.webkitTransform = 'translateX('+x+'px)';
                     inner.style.transform = 'translateX('+x+'px)';
                 }
             }
         },
         dropping(el, done) {
             let rf = el.offsetHeight;
             el.style.webkitTransform = 'translate3d(0,0,0)';
             el.style.transform = 'translate3d(0,0,0)';
             let inner = el.getElementsByClassName('inner-hook')[0];
             inner.style.webkitTransform = 'translate3d(0,0,0)';
             inner.style.transform = 'translate3d(0,0,0)';
             el.addEventListener('transitionend', done);
         },
         afterDrop(el) {
             let ball = this.dropBalls.shift();
             if (ball) {
                 ball.show = false;
                 el.style.display = 'none';
             }
		}
	}
}
</script>
<style lang="less" scoped>
	@import "../../common/less/config.less";
	.cart-parabold{
		.ball{
			 position: fixed;
			 z-index: 999999;
			 .pxrem(bottom,120);
		}
        .ball-cart{
             .pxrem(left,30);
             transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41); 
        }
        .ball-often{
             .pxrem(right,210);
             .pxrem(bottom,60);
             transition: all 0.8s cubic-bezier(0.45, -0.75, 0.75, 0.7); 
        }
	}
</style>
