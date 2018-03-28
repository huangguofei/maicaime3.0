/*路由*/
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import CommonJs from '../common/js/common'
import OrderRouter from './order'
import UserRouter from './user'
import CheckingRouter from './checking'
import CustomerRouter from './customer'
import FoodRouter from './food'
import LoginRouter from './login'

Vue.use(VueRouter);

window.cJs = CommonJs;
cJs.adaptiveRem();

const routes = [];
/*合并路由配置*/
const routesArray = routes.concat(OrderRouter.router).
concat(UserRouter.router).
concat(CheckingRouter.router).
concat(CustomerRouter.router).
concat(LoginRouter.router).
concat(FoodRouter.router);
export const router = new VueRouter({
	mode: "history",
	base: __dirname,
	routes: routesArray
})

/*验证是否登录*/
router.beforeEach((to, from, next) => {
	var path = to.path,
		name = to.name;
	var userInfo = cJs.getCookie("supplier-user-info");
	if(userInfo) {
		next();
	} else {
		if(name.indexOf("login") >= 0) {
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