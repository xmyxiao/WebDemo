'use strict';

console.log('a');
//根据name获取cookie
window.getCookie = function(name) {
	var cookies = document.cookie;
	var list = cookies.split("; ");

	for(var i = 0; i < list.length; i++) {
		var arr = list[i].split("=");
		if(arr[0] == name){
			return decodeURIComponent(arr[1]);
		}
	}
  return "";
};
console.log(getCookie('user'));
