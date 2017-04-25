//历史消息
(function(global){
	var WebIm;
	WebIm = global.WebIm = {};
	/**
	 * @namespace WebIm.Events
	 * @description  WebIm 事件
	**/
	WebIm.Events = {
		on:function(obj, event, func){
			$(document).off(event, obj).on(event, obj, func);
		},
		tryfun:function(func){
			try{
				func;
				return func;
			}catch(e){
				return null;
			}
		}
	}
})(this);