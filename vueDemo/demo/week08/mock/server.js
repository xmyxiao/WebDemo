let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');

//获取数据 /getData
let sliders = require('./sliders.js');
//可以将数据放在一个js文件中  然后进行调用
//数据文件module.exports= [1,2,3]  导入let data = require('./data')  文件路径
function read(cb){
	fs.readFile(path.join(__dirname,'./book.json'),'utf8',function(err,data){
		if(err || data.length == 0){
			cb([]);
		}else{
			cb(JSON.parse(data));
		}
	});
}

http.createServer((req,res)=>{
	//node跨域头
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	res.setHeader("Access-Control-Allow-Methods","*");
	res.setHeader("X-Powered-By",' 3.2.1');
	if(req.method == 'OPTIONS'){
		return res.end();
	}

	let {pathname,query} = url.parse(req.url);
	if(pathname === '/getData'){
		return res.end(JSON.stringify(sliders));
	}
	if(pathname ==='/hot'){
		read(function(books){
			let hot = books.reverse().slice(0,3);
			res.setHeader('Content-Type','application/json;charset=utf8');
			res.end(JSON.stringify(hot));
		});
		return;
	}
}).listen(3000);

//这里可以使用http://localhost:3000/getData 来访问数据
//这里的页面是8080端口  所以有跨域问题
