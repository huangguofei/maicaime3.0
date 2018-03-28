/**
 * author pzh 
 * day    2017-9-13
 * 公共JS脚本
 */
export default {
	/*创建和存储 cookie*/
	setCookie(name, value, Days) {
		var Days = Days ? Days : 60; //cookie 将被保存两个月
		var exp = new Date(); //获得当前时间
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000); //换成毫秒
		document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/";
	},
	/*读cookie*/
	getCookie(name) {
		var arr = document.cookie.match(new RegExp("(^| )" + name + "=([^;]*)(;|$)"));
		if(arr != null) return unescape(arr[2]);
		return null;
	},
	/*清除cookie*/
	delCookie: (name, path) =>{ 
	    var exp = new Date(); 
	    exp.setTime(exp.getTime() - 1); 
	    var cval=cJs.getCookie(name); 
	    path = path ? path : "";
	    var paths = ";path/" + path;
	    if(cval!=null) 
	        document.cookie= name + "="+cval+";expires="+exp.toGMTString()+ paths;
	},
	/*api接口处理参数*/
	apiDataReturnParams(type, url, params) {
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
	/*图片类型和大小*/
	upLoadImgSize(file) {
		var isJPG = false;
  		if(file.type === "image/jpeg" || file.type === "image/png" || file.type == "image/gif") {
  			isJPG = true;
  		}
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG,PNG,GIT 格式!');
          return false;
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
	},
	copyToClipboard : function(maintext) {
 		if (window.clipboardData){  
		    window.clipboardData.setData("Text", maintext);  
	    }else if (window.netscape){  
	      try{  
	        netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");  
	    }catch(e){  
	        alert("该浏览器不支持一键复制！n请手工复制文本框链接地址～");  
	    }  
		    var clip = Components.classes['@mozilla.org/widget/clipboard;1'].createInstance(Components.interfaces.nsIClipboard);  
		    if (!clip) return;  
		    var trans = Components.classes['@mozilla.org/widget/transferable;1'].createInstance(Components.interfaces.nsITransferable);  
		    if (!trans) return;  
		    trans.addDataFlavor('text/unicode');  
		    var str = new Object();  
		    var len = new Object();  
		    var str = Components.classes["@mozilla.org/supports-string;1"].createInstance(Components.interfaces.nsISupportsString);  
		    var copytext=maintext;  
		    str.data=copytext;  
		    trans.setTransferData("text/unicode",str,copytext.length*2);  
		    var clipid=Components.interfaces.nsIClipboard;  
		    if (!clip) return false;  
		    clip.setData(trans,null,clipid.kGlobalClipboard);  
	  }  
 	}
}