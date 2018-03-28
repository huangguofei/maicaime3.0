import Vue from 'vue'
import Router from './router/router'
import CommonLess from './common/less/common.less'
import Animation from './common/less/animation.less'

var _ = require('lodash');
/*
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		fastclick.attach(document.body);
	}, false);
}*/
// 金额过滤器
Vue.filter('ms', (v) => {
	if(v == "" || v == 0)
		return "0.00";
	v = Math.abs(v);
	if(v < 0.01) {
		return 0.01;
	}
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