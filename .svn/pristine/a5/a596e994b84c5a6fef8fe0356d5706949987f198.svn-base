/**
 * author hgf
 * day    2017-12-06
 * 银行卡接口
 */
import { bankCardAPI } from "apiurl/bankCard"
export default {
	/*获取银行卡*/
	getBankCardList(vm, callback) {
		bankCardAPI.bankCardListAPI((result) => {
			vm.bankCardList = result;
			if(result.length > 0) {
				var selectCardId = sessionStorage.getItem("stage-cardData");
				if(selectCardId) {
					result.forEach((v, k) => {
						if(v.cardId == selectCardId)
							vm.cardData = v;
					});
				} else
					vm.cardData = result[0];
			}
			callback && callback(result);
		});
	},
	/*添加银行卡*/
	addBankCard(vm) {
		bankCardAPI.bankCardAddAPI(vm.bankCardData, (result) => {
			if(result) {
				cJs.message("添加成功");
				setTimeout(() => {
					vm.$router.push({
						name: "user.bankCard"
					});
				}, 1000);

			}
		});
	},
	/*删除银行卡*/
	deleteCard(vm) {
		let _that = this;
		bankCardAPI.bankCardDeleteAPI({
			cardId: vm.deleteCardId
		}, (result) => {
			if(result) {
				cJs.message("删除成功！");
				_that.getBankCardList(vm);
			}
		});
	},

}