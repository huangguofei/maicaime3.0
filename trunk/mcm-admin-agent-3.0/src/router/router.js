/*路由*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import IndexRouter from './index'
import customerRouter from './customer'
import settingRouter from './setting'
import marketingRouter from './marketing'
import dataRouter from './data'
import orderRouter from './order'
import goodsRouter from './goods'
import CommonJs from './../common/js/common'
window.cJs = CommonJs;
Vue.use(VueRouter);

const mainView = r => require.ensure([], () => r(require('../view/main')), 'Main')
const loginView = r => require.ensure([], () => r(require('../view/login')), 'Login')

const mainS = [];
const mainRouters = mainS.concat(customerRouter.router)
					.concat(settingRouter.router).
					concat(marketingRouter.router).
					concat(IndexRouter.router).
					concat(dataRouter.router).
					concat(orderRouter.router).
					concat(goodsRouter.router);
const routes = [
	{
		name : "main",
		path : "/",
		component : mainView,
		children : mainRouters
	},
	{
		name : "login",
		path : "/login",
		component : loginView
	}
];
/*合并路由配置*/
//const routesArray = routes.concat(IndexRouter.router);

export const router = new VueRouter({
	mode : "history",
	base: __dirname,
	routes : routes
})
/*验证是否登录*/
router.beforeEach((to, from, next) => {
	var path = to.path;
	var userInfo = cJs.getCookie("MCM_AGENT_USER_INFO");
	var token = "";
	if(userInfo) {
		next();
	} else {
		if(path == "/login") {
			next();
			return false;
		}
		next({name : "login"});
	}
	
})

new Vue({
	router,
	store
}).$mount("#app")
