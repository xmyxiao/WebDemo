let http = require('http');
let fs = require('fs');
let url = require('url');

//获取数据 /getData
let data = [1,2,3];
//可以将数据放在一个js文件中  然后进行调用
//数据文件module.exports= [1,2,3]  导入let data = require('./data')  文件路径
function read(cb){
	fs.readFile('./book.json','utf8',function(err,data){
		if(err || data.length == 0){
			cb([]);
		}else{
			cb(JSON.parse(data));
		}
	});	
}
read(function(books){

})
http.createServer((req,res)=>{
	//node跨域头
	res.setHeader("Access-Control-Allow-Origin", "*");  
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");  
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.setHeader("X-Powered-By",' 3.2.1')  
    res.setHeader("Content-Type", "application/json;charset=utf-8");  
	if(req.method == 'OPTIONS'){
		return res.end();
	}
    
	let {pathname,query} = url.parse(req.url);
	if(pathname === '/getData'){
		return res.end(JSON.stringify(data));
	}
	if(pathname ==='/hot'){
		
	}
}).listen(3000);

//这里可以使用http://localhost:3000/getData 来访问数据
//这里的页面是8080端口  所以有跨域问题