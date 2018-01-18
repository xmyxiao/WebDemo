$(function(){
	d=new Date(); //创建一个Date对象 
	localTime = d.getTime(); 
	localOffset=d.getTimezoneOffset()*60000; //获得当地时间偏移的毫秒数 
	utc = localTime + localOffset; //utc即GMT时间 
	offset =8; //以北京时间为例，东8区 
	beijing = utc + (3600000*offset); 
	nd = new Date(beijing); 
	document.writeln("beijing time is " + nd.toLocaleString() + "<br>"); 
});
