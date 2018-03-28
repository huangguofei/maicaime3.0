/*重新封装ajax*/
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui';
export default{
	commAjax(opts) {
		if(!opts) return false;
		var that = this;
		var url = (opts.url ? process.env.API_ROOT + opts.url : null);
		var params = opts.params ? opts.params : {};
		var header = {'X-Requested-With': 'XMLHttpRequest','Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'};
		if(cJs.getCookie("mcm-operation-user-info")) {
			var userInfo = cJs.getCookie("mcm-operation-user-info");
			userInfo = JSON.parse(userInfo);
			header["token"] = userInfo.token;
		}
		var httpParams = {
			method : (opts.method ? opts.method : "GET"),
			url : url,
			headers: header
		};
		if(opts.type == "image") {
			httpParams.data = params
		} else {
			if(opts.method == "POST" || opts.method == "post") {
				httpParams.data = qs.stringify(params)
			} else {
				httpParams.params = params;
			}
		}
		axios(httpParams).then(function(response) {
			that.callbankSussess(response,opts);
		},function(response) {
			that.callBankError(response,opts);
		})
	},
	/*回调*/
	callbankSussess(response,opts) {
		var data = response.data;
		var httpCode = data.code;
		if(httpCode == 200) {
			opts.success(data.data);
		} else if(httpCode == 203) {
			window.location.href = "/login"
		} else {
			Message(data.msg);
			opts.error ? opts.error(data) : '';
		}
	},
	callBankError(response,opts) {
		var data = response.data;
		Message("服务器异常！");
		opts.error ? opts.error(data) : '';
	}
}


