/**
 * author pzh
 * day    2017-12-21
 * 地址业务处理
 */
 import {addrAPI} from "apiurl/addr"
 export default {
 	/*获取区域*/
 	getAddreeArea(vm) {
 		addrAPI.agentAreaAPI((result) => {
 			vm.areaInfo = result;
 		});
 	},
 	saveAddrInfo(vm) {
 		var params = vm.form;
 		if(vm.$route.query.addrId) {
 			params.addressId = vm.$route.query.addrId;
 			addrAPI.editAddrAPI(params, (result) => {
 				/*cJs.message("编辑成功！");*/
 				if(vm.$route.query.type == "order") {
 					vm.$router.push({
						name : "often.orders"
					});
 				}
 			});
 		} else {
 			addrAPI.addAddrAPI(params, (result) => {
 				/*cJs.message("添加成功！");*/
 				if(vm.$route.query.type == "order") {
 					vm.$router.push({
						name : "often.orders"
					});
 				}
 			});
 		}
 	},
 	/*地址列表*/
 	getAddrList(vm) {
 		addrAPI.addrListAPI((result) => {
 			vm.addrList = result;
 		});
 	},
 	/*设默认地址*/
 	setDefaultAddr(vm, params) {
 		addrAPI.defaultAddrAPI(params,(result)=> {
 			if(vm.$route.query.type == "order") {
					vm.$router.push({
					name : "often.orders"
				});
			}
 		});
 	},
 	getAddrDatail(vm, addressId) {
 		var params = {
 			addressId : addressId
 		};
 		addrAPI.addrDetailAPI(params, (result)=> {
				var form = vm.form;
				form.userName = result.userName;
				form.mobile = result.mobile;
				form.address = result.address;
 		})
 	}
}