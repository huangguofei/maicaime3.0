/**
 *  author hgf
 *  day  2017-9-22
 *  登录路由配置
 */
const loginView = r => require.ensure([], () => r(require('../view/login/index')), 'Index')
const registerView = r => require.ensure([], () => r(require('../view/login/register')), 'Index')
const findpswView = r => require.ensure([], () => r(require('../view/login/find-pwd')), 'Index')
const registerSuccessView = r => require.ensure([], () => r(require('../view/login/register-success')), 'Index')
const router = [{
		name: "login.index",
		path: "/login/",
		component: loginView
	},
	{
		name: "login.register",
		path: "/register/",
		component: registerView,
	}, {
		name: "login.findpsw",
		path: "/findpsw/",
		component: findpswView
	}, {
		name: "login.register.success",
		path: "/register/success/",
		component: registerSuccessView
	}
]

export default {
	router
}