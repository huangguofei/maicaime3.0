/**
*  author pzh
*  day  2017-9-20
*  设置模块路由配置
*/
const index = r => require.ensure([], () => r(require('../view/setting/index')), 'index')
const limit = r => require.ensure([], () => r(require('../view/setting/register/limit')), 'limit')
const mobile = r => require.ensure([], () => r(require('../view/setting/register/mobile')), 'mobile')

const router = [
	{
		name : "setting.index",
		path : "/setting",
		component : index,
		children : [
			{
				name : "setting.register.limit",
				path : "/register/limit",
				component : limit
			},
			{
				name : "setting.register.mobile",
				path : "/register/mobile",
				component : mobile
			}
		]
	}
	
]

export default{
	router
}