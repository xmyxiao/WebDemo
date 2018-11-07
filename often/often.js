//验证URL合法
function checkURL(url){
	var str = url;
	//判断URL地址的正则表达式为:http(s)?://([\w-]+\.)+[\w-]+(/[\w- ./?%&=]*)?
	//下面的代码中应用了转义字符"\"输出一个字符"/"
	var expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
	var objExp = new RegExp(expression);
	if(objExp.test(str) == true){
		return true;
	}else{
		return false;
	}
} 

//判断字符长度
function returnStrLen(str){
	var len = 0;
	if(typeof str != 'string'){
		return 0
	}
	var len = 0;
	for(var i = 0; i < str.length; i++){
		var s = str.charCodeAt(i);
		if((s >= 0x0001 && s <= 0x007e) || (0xff60 <= s && s <= 0xff9f)){
			len++
		}else{
			len += 2
		}
	}
	return len;
}

//获取地址参数
function getUrlString(name){
    //name 为url中的参数
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var reUrl = decodeURI(window.location.search);
	var r = reUrl.substr(1).match(reg);
	if(r != null){
        //unescape 对字符串进行解码
		return unescape(r[2]);		
	}else{
		return null;
	}
}

//往地址添加参数
function addUrlParam(url, paramObj) {
    if (url.indexOf("?") > 0) { 
        url = url + "&"; 
    }else { 
        url = url + "?"; 
    }
    // $.param是jq中的方法
    return url + $.param(paramObj);
}

//格式化日期
function formatDate(setData,type){
	var date = new Date(setData);
	var y = date.getFullYear();
	var m = date.getMonth() + 1;
	var d = date.getDate();
	var h = date.getHours();
	var mm = date.getMinutes();
    date.setMinutes(0);
	m = m < 10 ? "0" + m : m;
	d = d < 10 ? "0" + d : d;
	h = h < 10 ? "0" + h : h;
	mm = mm < 10 ? "0" + mm : mm;
	
	switch (type) {
      case 'd':
		var str = y.toString() + "-" + m.toString() + "-" + d.toString();
        break;
      case 'md':
		var str = m.toString() + "月" + d.toString() + "日";
        break;
      case 'mm':
		var str = y.toString() + "-" + m.toString() + "-" + d.toString() + " " + h.toString() + ":" + mm.toString();
        break;
    }
    return str;
}

//localStorage  调用时使用LS.set('name',val)
(function(window,localStorage,undefined){
	var LS = {
	    set : function(key, value){
	        if( this.get(key) !== null )
	            this.remove(key);
	        localStorage.setItem(key, value);
	    },
	    get : function(key){
	        var v = localStorage.getItem(key);
	        return v === undefined ? null : v;
	    },
	    remove : function(key){ localStorage.removeItem(key); },
	    clear : function(){ localStorage.clear(); },
	    each : function(fn){
	        var n = localStorage.length, i = 0, fn = fn || function(){}, key;
	        for(; i<n; i++){
	            key = localStorage.key(i);
	            if( fn.call(this, key, this.get(key)) === false )
	                break;
	            if( localStorage.length < n ){
	                n --;
	                i --;
	            }
	        }
	    }
	},
	j = window.jQuery, c = window.Core;
	window.LS = window.LS || LS;
	if(j) j.LS = j.LS || LS;
	if(c) c.LS = c.LS || LS;
})(window,window.localStorage);

//页面编码  将特殊符号转为编码
function htmlEncodeByRegExp(str){
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&/g,"&amp;");
    s = s.replace(/</g,"&lt;");
    s = s.replace(/>/g,"&gt;");
    s = s.replace(/ /g,"&nbsp;");
    s = s.replace(/\'/g,"&#39;");
    s = s.replace(/\"/g,"&quot;");
    return s;  
}
//页面解码  将编码转为特殊字符
function htmlDecodeByRegExp(str){
    var s = "";
    if(str.length == 0) return "";
    s = str.replace(/&amp;/g,"&");
    s = s.replace(/&lt;/g,"<");
    s = s.replace(/&gt;/g,">");
    s = s.replace(/&nbsp;/g," ");
    s = s.replace(/&#39;/g,"\'");
    s = s.replace(/&quot;/g,"\"");
    return s;  
}
















