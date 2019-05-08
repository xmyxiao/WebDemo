window.htconfig = {
    Default: {
        toolTipDelay: 100,
        toolTipContinual: true,
        convertURL: function(url) {
            var storagePrefix = '';
            if (storagePrefix && url && !/^data:image/.test(url) && !/^http/.test(url) && !/^https/.test(url)) {
                url = storagePrefix + '/' + url
            }
            // append timestamp
            url += (url.indexOf('?') >= 0 ? '&' : '?') + 'ts=' + Date.now();
            // append sid
            var match = window.location.href.match('sid=([0-9a-z\-]*)');
            if (match) {
                window.sid = match[1]
            }
            if(window.sid){
                url += '&sid=' + window.sid;
            }
            //请求地址
            var user = pageGetUserName();
            if((url.indexOf('custom/') === 0 || url.indexOf('components/') === 0) && user){
            	url = '/' + url;
            }else if(url.indexOf('/') === 0 && user){
            	url = '/' + user + url;
            }else if(url.indexOf('displays/') === 0 || url.indexOf('public/') === 0
             || url.indexOf('symbols/') === 0 || url.indexOf('assets/') === 0 || url.indexOf('publicAsset/') === 0
             || url.indexOf('temporary/') === 0 || url.indexOf('scenes/') === 0 || url.indexOf('models/') === 0
             || url.indexOf('previews/') === 0){
            	url = '/' + user + '/' + url;
            }
            /*if(location.href.indexOf('previews2D/') > 0 ){
            	url = '/' + url;
            }*/
            return url;
        }
    }
};
function pageGetUserName(){
	var userStr = getCookie("user");
    if(!userStr){
    	userStr = '{}'
    }
    if(!window.UserJson && !window.hasRequestUserJson){
		window.hasRequestUserJson = true;
		var dataSetUrl = '/displays/info';
		$.ajax({
			type:"get",
			url:dataSetUrl,
			async:false,
			data:{
				appid: getPageHrefAppid()
			},
			success:function(data){
				window.UserJson = {
					name:data.user
				}
			},
			error:function(){
				alert('用户获取失败！');
			}
		});
	}
	var UserJson = window.UserJson || JSON.parse(userStr);
	return UserJson.name;
}
//根据name获取cookie
function getCookie(name) {
	var cookies = document.cookie;
	var list = cookies.split("; ");

	for(var i = 0; i < list.length; i++) {
		var arr = list[i].split("=");
		if(arr[0] == name){
			return decodeURIComponent(arr[1]);
		}
	}
  return "";
}
window.htconfig.base = new Base64(); 
/*
if(window.location.host.indexOf(window.htconfig.base.decode('c3R1ZGlvLmdraWlvdC5jb20=')) == -1) {
	window.location.href = window.htconfig.base.decode('aHR0cDovL3N0dWRpby5na2lpb3QuY29t');
}*/
function Base64() {
    // private property  
    _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";  

    // public method for encoding  
    this.encode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = _utf8_encode(input);  
        while (i < input.length) {  
            chr1 = input.charCodeAt(i++);  
            chr2 = input.charCodeAt(i++);  
            chr3 = input.charCodeAt(i++);  
            enc1 = chr1 >> 2;  
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);  
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);  
            enc4 = chr3 & 63;  
            if (isNaN(chr2)) {  
                enc3 = enc4 = 64;  
            } else if (isNaN(chr3)) {  
                enc4 = 64;  
            }  
            output = output +  
            _keyStr.charAt(enc1) + _keyStr.charAt(enc2) +  
            _keyStr.charAt(enc3) + _keyStr.charAt(enc4);  
        }  
        return output;  
    }  

    // public method for decoding  
    this.decode = function (input) {  
        var output = "";  
        var chr1, chr2, chr3;  
        var enc1, enc2, enc3, enc4;  
        var i = 0;  
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");  
        while (i < input.length) {  
            enc1 = _keyStr.indexOf(input.charAt(i++));  
            enc2 = _keyStr.indexOf(input.charAt(i++));  
            enc3 = _keyStr.indexOf(input.charAt(i++));  
            enc4 = _keyStr.indexOf(input.charAt(i++));  
            chr1 = (enc1 << 2) | (enc2 >> 4);  
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);  
            chr3 = ((enc3 & 3) << 6) | enc4;  
            output = output + String.fromCharCode(chr1);  
            if (enc3 != 64) {  
                output = output + String.fromCharCode(chr2);  
            }  
            if (enc4 != 64) {  
                output = output + String.fromCharCode(chr3);  
            }  
        }  
        output = _utf8_decode(output);  
        return output;  
    }  

    // private method for UTF-8 encoding  
    _utf8_encode = function (string) {  
        string = string.replace(/\r\n/g,"\n");  
        var utftext = "";  
        for (var n = 0; n < string.length; n++) {  
            var c = string.charCodeAt(n);  
            if (c < 128) {  
                utftext += String.fromCharCode(c);  
            } else if((c > 127) && (c < 2048)) {  
                utftext += String.fromCharCode((c >> 6) | 192);  
                utftext += String.fromCharCode((c & 63) | 128);  
            } else {  
                utftext += String.fromCharCode((c >> 12) | 224);  
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);  
                utftext += String.fromCharCode((c & 63) | 128);  
            }  

        }  
        return utftext;  
    }  

    // private method for UTF-8 decoding  
    _utf8_decode = function (utftext) {  
        var string = "";  
        var i = 0;  
        var c = c1 = c2 = 0;  
        while ( i < utftext.length ) {  
            c = utftext.charCodeAt(i);  
            if (c < 128) {  
                string += String.fromCharCode(c);  
                i++;  
            } else if((c > 191) && (c < 224)) {  
                c2 = utftext.charCodeAt(i+1);  
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));  
                i += 2;  
            } else {  
                c2 = utftext.charCodeAt(i+1);  
                c3 = utftext.charCodeAt(i+2);  
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));  
                i += 3;  
            }  
        }  
        return string;  
    }  
}