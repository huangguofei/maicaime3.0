/**
 * author pzh 
 * day    2017-9-13
 * 公共JS脚本
 */
export default {
	/*创建和存储 cookie*/
	setCookie: (name, value, hour) => {
		var hour = hour ? hour : 24 * 30; 
		var exp = new Date(); //获得当前时间
		exp.setTime(exp.getTime() + hour * 60 * 60 * 1000); //换成毫秒
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
	},
	/*读cookie*/
	getCookie: (name) => {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if(arr != null) return unescape(arr[2]);
		return null;
	},
	delCookie: (name, path) =>{ 
	    var exp = new Date(); 
	    exp.setTime(exp.getTime() - 1); 
	    var cval=cJs.getCookie(name); 
	    path = path ? path : "";
	    var paths = ";path/" + path;
	    if(cval!=null) 
	        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+ paths;
	},
	/* 适配rem
	 */
	adaptiveRem: () => {
		var docEl = document.documentElement,
			resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
			recalc = function() {
				var width = docEl.getBoundingClientRect().width;
				if(width > 640) { // 最大宽度
					width = 640;
				}
				var rem = width / 6.4;
				docEl.style.fontSize = rem + 'px';

			};
		recalc();
		window.addEventListener(resizeEvt, recalc, false);
		document.addEventListener('DOMContentLoaded', recalc, false);
	},
	/*提示框
	 * str   提示语
	 * time  显示时间
	 * layer  是否有遮罩层
	 */
	message: (str, time = 2000, layer = false) => {
		var lHtml = "",
			mesHtml = "";
		if(layer) {
			lHtml = '<div class="layer a-fade-in"></div>';
		}
		var mf = document.getElementById("messageFixed");
		if(mf) {
			mf.remove();
		}
		var mes = document.createElement('div');
		mes.setAttribute("class", "message-fixed");
		mes.setAttribute("id", "messageFixed");
		mes.innerHTML = lHtml + '<div class="m-content a-fade-in" id="messageLayer"><span class="mes">' + str + '</div></div>';
		document.body.appendChild(mes);
		setTimeout(() => {
			var layer = document.getElementById("messageLayer");
			layer.setAttribute("class", "m-content a-fade-out");
			/*layer.addEventListener("webkitAnimationEnd", function() {
				mes.remove();
			})*/
			setTimeout(()=>{
				mes.remove();
			},500);
		}, time);
	},
	/*api接口处理参数*/
	apiDataReturnParams: (type, url, params) => {
		var apiData = {
			method: type ? type : "get",
			url: url
		}
		if(typeof params[0] === "function") {
			apiData.success = params[0];
			if(params[1]) {
				apiData.error = params[1];
			}
		} else {
			apiData.params = params[0];
			apiData.success = params[1];
			if(params[2]) {
				apiData.error = params[2];
			}
		}
		return apiData;
	},
	/*表单验证之手机号验证*/
	checkMobile: (str) => {
		var re = /^1\d{10}$/;
		if(!re.test(str)) {
			cJs.message("手机号格式不正确！");
			return false;
		} else {
			return true;
		}
	},
	checkPrice : (price) => {
		var reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
		if(reg.test(price)) {
			return true;
		} else {
			return false;
		}
	},
	isWeiXin : () =>{
	    var ua = window.navigator.userAgent.toLowerCase();
	    if(ua.match(/MicroMessenger/i) == 'micromessenger' || ua.match(/_SQ_/i) == '_sq_'){
	        return true;
	    }else{
	        return false;
	    }
	},
	isAndroid : () => {
		var u = navigator.userAgent;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
		return isAndroid;
	},
	/*微信支付*/
	weixinPay:(params, success, cancel, fail) => {
		function onBridgeReady(){
		   WeixinJSBridge.invoke(
		       'getBrandWCPayRequest', {
		       		appId : params.appId,
		       		timeStamp : params.timeStamp,
		       		nonceStr : params.nonceStr,
		       		package : params.packageValue,
		       		signType : params.signType,
		       		paySign : params.paySign
		       },
		       function(res){     
		           if(res.err_msg == "get_brand_wcpay_request:ok") {
		           		success();
		           } else if(res.err_msg == "get_brand_wcpay_request:cancel") {
		           		cancel();
		           } else {
		           		fail();
		           } 
		       }
		   ); 
		}
		if (typeof WeixinJSBridge == "undefined"){
		   if( document.addEventListener ){
		       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
		   }else if (document.attachEvent){
		       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
		       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
		   }
		}else{
		   onBridgeReady();
		}
	},
	/*去除数组里重复的值*/
	uniqueArray:(arr) => {
		var result = [], hash = {};
	    for (var i = 0, elem; (elem = arr[i]) != null; i++) {
	        if (!hash[elem]) {
	            result.push(elem);
	            hash[elem] = true;
	        }
	    }
	    return result;
	},
	/*监听屏幕变化*/
	monitorWindowResize : (callback) => {
		var docEl = document.documentElement,
		    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		    recalc = function() {
		        callback();
		    };
		recalc();
		window.addEventListener(resizeEvt, recalc, false);
		document.addEventListener('DOMContentLoaded', recalc, false);
	},
	/*监听屏幕隐藏显示底部*/
	resizeToggleFooter : (vm) => {
		vm.clientHeight = document.body.clientHeight;
		cJs.monitorWindowResize(() => {
			if(vm.clientHeight > document.body.clientHeight) {
				vm.footerShow = false;
			} else {
				vm.footerShow = true;
			}
		});
	},
	verifyFacility : () => {
		if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
		    return 2;
		} else if (/(Android)/i.test(navigator.userAgent)) {
		    return 1;
		} else {
		   return 3;
		};
	}
}