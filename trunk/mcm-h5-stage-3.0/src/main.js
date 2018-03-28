import Vue from 'vue'
import Router from './router/router'
import CommonLess from './common/less/common.less'
import Animation from './common/less/animation.less'
import fastclick from 'fastclick'
fastclick.attach(document.body)

// 金额过滤器
Vue.filter('ms', (v) => {
	if(v == ""||v==0)
		return "0.00";
	return (v * 100 / 100). toFixed(2);

});
/*微信-是否已签名*/
window.wxSignature = false;
/*微信是否出错*/
window.wx_error = true;




