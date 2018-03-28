/*路由*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import IndexRouter from './index'
import ProductRouter from './product'
import ServeRouter from './serve'
import MarketingRouter from './marketing'
import dataRouter from './data'
import orderRouter from './order'
import settingRouter from './setting'
import CommonJs from './../common/js/common'
window.cJs = CommonJs;
Vue.use(VueRouter);

const mainView = r => require.ensure([], () => r(require('../view/main')), 'Main')
const loginView = r => require.ensure([], () => r(require('../view/login')), 'Login')

const mainS = [];
const mainRouters = mainS.concat(ProductRouter.router).
				concat(ServeRouter.router).
				concat(IndexRouter.router).
				concat(dataRouter.router).
				concat(orderRouter.router).
				concat(settingRouter.router).
				concat(MarketingRouter.router);
const routes = [
	{
		name: "main",
		path: "/",
		component: mainView,
		children: mainRouters
	},
	{
		name: "login",
		path: "/login",
		component: loginView
	}
];

export const router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes: routes
})
/*验证是否登录*/
router.beforeEach((to, from, next) => {
	var path = to.path;
	var userInfo = cJs.getCookie("mcm-operation-user-info");
	var token = "";
	if(userInfo) {
		next();
	} else {
		if(path == "/login") {
			next();
			return false;
		}
		next({
			name: "login"
		});
	}

})

new Vue({
	router,
	store
}).$mount("#app")