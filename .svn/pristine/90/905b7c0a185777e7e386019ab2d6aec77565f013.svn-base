/**
*  author pzh
*  day  2017-9-20
*  服务站模块路由配置
*/
const index = r => require.ensure([], () => r(require('../view/serve/index')), 'index')
const overview = r => require.ensure([], () => r(require('../view/serve/overview')), 'overview')
const agentList = r => require.ensure([], () => r(require('../view/serve/agent/list')), 'agentList')

const router = [
	{
		name : "serve.index",
		path : "/serve",
		component : index,
		children : [
			{
				name : "serve.overview",
				path : "/",
				component : overview
			},
			{
				name : "serve.agent.list",
				path : "/serve/agent/list",
				component : agentList
			}
		]
	}
	
]

export default{
	router
}