/*重新封装ajax*/
import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
export default {
	commAjax(opts, type) {
		if(!opts) return false;
		var that = this;
		var url = (opts.url ? (type == "orginUrl" ? opts.url : process.env.API_ROOT + opts.url) : null);
		var params = opts.params ? opts.params : {};
		var header = {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
		};
		if(cJs.getCookie("distribution-user-info")) {
			var userInfo = cJs.getCookie("distribution-user-info");
			userInfo = JSON.parse(userInfo);
			header["token"] = userInfo.token;
		}
		var httpParams = {
			method: (opts.method ? opts.method : "GET"),
			url: url,
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
			that.callbankSussess(response, opts);
		}, function(response) {
			that.callBankError(response, opts);
		})
	},
	/*回调*/
	callbankSussess(response, opts) {
		var data = response.data;
		var httpCode = data.code;
		if(httpCode == 200) {
			opts.success(data.data);
		} else if(httpCode == 203) {
			window.location.href = "/login#/login"
		} else if(httpCode == -1) {
			cJs.message(data.msg);
			var cookie = cJs.getCookie("distribution-user-info");
			try{
				var userInfo = JSON.parse(cookie);
				if(!userInfo.token) {
					window.location.href = "/login#/login"
				}
			}catch(e) {}
		} else {
			cJs.message(data.msg);
			opts.error ? opts.error(data) : '';
		}
	},
	callBankError(response, opts) {
		cJs.message("网络异常");
		var data = response.data;
		opts.error ? opts.error(data) : '';
	}
}