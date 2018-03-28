/*路由*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import CommonJs from '../common/js/common'
import LoginRouter from './login'
import IndexRouter from './index'
import OrderRouter from './order'
import UserRouter from './user'
import CheckingRouter from './checking'
Vue.use(VueRouter);

window.cJs = CommonJs;
cJs.adaptiveRem();

const routes = [];
/*合并路由配置*/
const routesArray = routes.concat(LoginRouter.router).
					concat(OrderRouter.router).
					concat(UserRouter.router).
					concat(IndexRouter.router).
					concat(CheckingRouter.router);
export const router = new VueRouter({
	mode : "hash",
	base: __dirname,
	routes : routesArray
})

/*验证是否登录*/
router.beforeEach((to, from, next) => {
	var path = to.path;
	var userInfo = cJs.getCookie("distribution-user-info");
	try{
		userInfo = JSON.parse(userInfo);
	}catch(e) {}
	if(userInfo) {
		/*if(to.name == "index.index") {
			window.location.href="/order/new"
		} */
		/*var thatUrl = document.location.origin + path
		store.commit("writeRouterUrl", thatUrl)*/
		next();
	} else {
		if(path == "/login") {
			next();
			return false;
		}
		next({
			name: "login.index"
		});
	}

})

new Vue({
	router,
	store
}).$mount("#app")
