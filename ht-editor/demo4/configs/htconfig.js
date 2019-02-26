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
            }else{
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