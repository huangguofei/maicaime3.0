/**
* author pzh 
* day    2017-9-14
* 公共模块接口
*/
import https from "../axios/https"
export default{
	/*根据区域id获取单个区域的信息*/
	singleAreaAPI : (...v) => https.commAjax({method : "get",url : "/admin/area/getSingleArea",params : v[0], success : v[1],error : v[2]}),
	/*获取所有省市县数据*/
	provicesAPI : (...v) => https.commAjax({method : "post",url : "/area/getProvices",success : v[0],error : v[1]}),
	/*获取省市数据*/
	cityAPI:(...v)=>https.commAjax({method : "post",url : "/area/getProvices",params:{level:2},success : v[0],error : v[1]}),
}