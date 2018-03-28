import Vue from 'vue'
import Router from './router/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import CommonLess from './common/less/common.less'
Vue.use(ElementUI)


// 金额过滤器
Vue.filter('ms', (v) => {
	if(v == ""||v==0)
		return "0.00";
	return (v * 100 / 100). toFixed(2);

});



