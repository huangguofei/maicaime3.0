import Vue from 'vue'
import Router from './router/router'
import CommonLess from './common/less/common.less'
import Animation from './common/less/animation.less'
import fastclick from 'fastclick'
import 'vue-croppa/dist/vue-croppa.css'
import Croppa from 'vue-croppa'
/*fastclick.attach(document.body)*/
Vue.use(Croppa)
// 金额过滤器
Vue.filter('ms', (v) => {
	if(v == "" || v == 0)
		return "0.00";
	v = Math.abs(v);
	return(v * 100 / 100).toFixed(2);

});
Vue.directive('focus', {
	// 当被绑定的元素插入到 DOM 中时……
	update: function(el, {
		value
	}) {
		if(value) {
			el.focus()
		}
	}

});
/*
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		fastclick.attach(document.body);
	}, false);
}*/