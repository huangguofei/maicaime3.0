/**
*  author pzh
*  day  2017-9-21
*  设置模块路由配置
*/
const index = r => require.ensure([], () => r(require('../view/setting/index')), 'index')
const overview = r => require.ensure([], () => r(require('../view/setting/overview')), 'overview')
const areaList = r => require.ensure([], () => r(require('../view/setting/area/list')), 'areaList')
/*配送时间*/
const devTimeList  = r => require.ensure([], () => r(require('../view/setting/delivery-time/list')), 'devTimeList')
const router = [
	{
		name : "setting.index",
		path : "/setting",
		component : index,
		children : [
			{
				name : "setting.overview",
				path : "/",
				component : overview
			},
			{
				name : "setting.area.list",
				path : "/setting/area/list",
				component : areaList
			},
			{
				name : "setting.delivery.time.list",
				path : "/setting/delivery/time/list",
				component : devTimeList
			}
		]
	}
	
]

export default{
	router
}