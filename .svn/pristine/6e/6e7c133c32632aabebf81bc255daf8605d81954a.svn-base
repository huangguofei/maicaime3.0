/**
 * author hgf 
 * day    2017-12-06
 * 银行卡模块接口
 */
import https from "httpurl/https"

/*银行卡信息*/
export const bankCardAPI = {
	/*银行卡列表*/
	bankCardListAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("get", "/card/getCardList", v)),
	/*添加银行卡*/
	bankCardAddAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/card/addCard", v)),
	/*删除银行卡*/
	bankCardDeleteAPI: (...v) => https.commAjax(cJs.apiDataReturnParams("post", "/card/delByCardId", v)),
}
