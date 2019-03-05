$(function(){
	initVisitPage();
})
//拓展ht.DataModel方法
ht.DataModel.prototype.connectInit = function() {
    var me = this;
    var dataSetList = me.getDataSet();
    if(dataSetList && dataSetList.length < 1){
    	return;
    }
    analogEntitySet(dataSetList,me);
    var O = location.hostname + ':10000';
    var socket = io.connect(O);
    socket.on("connect", function() {
		console.log('连接')
	})
    /*var userStr = getCookie("user");
    if(!userStr){
    	userStr = '{}'
    }
	var UserJson = window.UserJson || JSON.parse(userStr);
    //var pageCookie = document.cookie
    
	if(UserJson && UserJson.name){
		
	}*/
	var name = getPageHrefAppid();
    socket.emit('explore',me.getDataSet(),name);
	socket.on(name + "/data", function(data) {
    	var item = JSON.parse(data);
    	me.nodeReassignment(item);
	})
    socket.on("disconnect", function() {
		console.log('断开')
	})
};
//获取图元上的数据集
ht.DataModel.prototype.getDataSet = function(){
	var me = this,dataSetList = [];
	me.each(function(data) {
    	var dataBindings = data.getDataBindings();
    	var dataSet = data.a('dataSet');
    	if (dataBindings && dataSet) {
    		for (var name in dataBindings.a) {
                var db = dataBindings.a[name];
                if(db.fieldName){
                	dataSetList.push(dataSet);
                }
            }
    	}
    })
	me.dataSetList = [];
	for(var i = 0; i < dataSetList.length; i++){
		if(me.dataSetList.indexOf(dataSetList[i]) == -1){
			me.dataSetList.push(dataSetList[i]);
		}
	}
	return me.dataSetList;
}
//获取绑定字段详情
ht.DataModel.prototype.getDataSetFiledInfo = function(){
	var me = this;
	var fieldList = []
	var dataSetList = me.dataSetList ? me.dataSetList : me.getDataSet();
	for(var i = 0; i < dataSetList.length; i++){
		var item = {
			dataSetId: dataSetList[i],
			bindingNode:[]
		}
		fieldList.push(item);
	}
	me.each(function(data) {
    	var dataBindings = data.getDataBindings();
    	var dataSet = data.a('dataSet');
    	if (dataBindings && dataSet) {
    		for (var name in dataBindings.a) {
                var db = dataBindings.a[name];
                if(db.fieldName){
                	for(var j = 0; j < fieldList.length; j++){
                		if(fieldList[j].dataSetId === dataSet){
                			var info = {
		                		propertyName : name,
		                		fieldName : db.fieldName,
		                		nodeId : data.getId(),
		                		func : db.func
		                	}
                			fieldList[j].bindingNode.push(info)
                		}
                	}
                }
            }
    	}
    })
	me.filedInfoList = fieldList;
	return fieldList;
}
//根据获取值刷新图元
ht.DataModel.prototype.nodeReassignment = function(data){
	var me = this;
	var infoList = me.filedInfoList ? me.filedInfoList : me.getDataSetFiledInfo();
	//需要优化
	for(var i = 0; i < infoList.length; i++){
		if(data.id === infoList[i].dataSetId){
			var item = data.data;
			for(var k = 0; k < item.length; k++){
				if(infoList[i].bindingNode && infoList[i].bindingNode.length > 0){
					for(var j = 0; j < infoList[i].bindingNode.length; j++){
						if(item[k].name === infoList[i].bindingNode[j].fieldName){
							var selNode = infoList[i].bindingNode[j];
							if(selNode.func){item[k].value = selNode.func(item[k].value)}
							me.setDataValueById(selNode.nodeId,selNode.propertyName,item[k].value);
						}
					}
					
				}
			}
		}
	}
	data.dataSetId
}
//设置图元属性值
ht.DataModel.prototype.setDataValueById = function(id,name,value){
	if(!id && !name){
		return;
	}
	var me = this;
	var node = me.getDataById(id);
	node.a(name,value);
}
//序列化
ht.DataModel.prototype.deserialize = function(u, o, W){
	var me = this;
	var json = new ht.JSONSerializer(this).deserialize(u, o, W);
	try{
		ht.Default.setImage('logo', 'custom/images/logonew.json');
		ht.Default.setImage('logo1', 'custom/images/logonew1.json');
		var logoX = 0, logoY = 0;
		if(u.contentRect){
			logoX = u.contentRect.x || 0;
			logoY = u.contentRect.y + u.contentRect.height || 0;
		}
		var logoNode = new ht.Node();
		if(u.p && u.p.background){
			logoNode.setImage('logo');
		}else{
			logoNode.setImage('logo1');
		}
		if(u.contentRect && u.contentRect.width && u.contentRect.height){
			var par = Math.min(u.contentRect.width/180,u.contentRect.height/35)
			if(par < 1){
				logoNode.setSize(180*par/2, 35*par/2);
				logoY = logoY + 35*par/2
			}else{
				logoNode.setSize(180, 35);
			}
		}else{
			logoNode.setSize(180, 35);
		}
		logoNode.setPosition(logoX,logoY);                
		me.add(logoNode);
		me.connectInit();
		if(!window.isPageShow){
			for(var i = 0; i < $('body')[0].children.length; i++){
				if(!$($('body')[0].children[i]).hasClass('ht-widget-dialog') && !$($('body')[0].children[i]).hasClass('layui-m-layer')){
					$($('body')[0].children[i]).css('visibility','hidden');
				}
			}
		}
	}
	catch(err){
		console.log(err);
		if(!window.isPageShow){
			for(var i = 0; i < $('body')[0].children.length; i++){
				if(!$($('body')[0].children[i]).hasClass('ht-widget-dialog') && !$($('body')[0].children[i]).hasClass('layui-m-layer')){
					$($('body')[0].children[i]).css('visibility','hidden');
				}
			}
		}
	}
	return json;	
}

//写入到Cookie
function SetCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + 60 * 30000);//过期时间 30分钟
    document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
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
//模拟数据
function analogEntitySet(dataSetList,me){
	for(var i = 0; i < dataSetList.length; i++){
		if(dataSetList[i].indexOf('AnalogEntity') > -1){
			getAnalogData(dataSetList,me)
			return ;
		}
	}
}
//获取模拟数据
function getAnalogData(dataSetList,me){
	var UserJson = window.UserJson;
	var dataSetUrl = '/database/info';
	var pageCookie = document.cookie
	$.ajax({
		type:"get",
		url:dataSetUrl,
		async:true,
		scope:dataSetList,
		me:me,
		data:{
			name:UserJson.name
		},
		success:function(data){
			var list = this.scope;
			var me = this.me;
			for(var i = 0; i < list.length; i++){
				if(list[i].indexOf('AnalogEntity') > -1 && data.msg){
					for(var j = 0; j < data.msg.length; j++){
						if(data.msg[j].type === 'analogData' && data.msg[j].id === list[i]){
							if(data.msg[j].jsonType === 'json'){
								var json = {
									"id":data.msg[j].id,
							    	"data":[]
								}
								if(JSON.parse(data.msg[j].jsonStr)){
									var jsonList = JSON.parse(data.msg[j].jsonStr)
									if(jsonList && jsonList.length > 0){
										for(var i = 0; i < jsonList.length; i++){
											json.data.push(jsonList[i]);
										}
									}else{
										json.data.push(JSON.parse(data.msg[j].jsonStr));
									}
								}
							}else if(data.msg[j].jsonType === 'mock'){
								var mockData = eval(data.msg[j].mockStr);
								var json = {
									"id":data.msg[j].id,
							    	"data":[]
								}
								if(mockData){
									var jsonList = mockData.list;
									if(jsonList && jsonList.length > 0){
										for(var i = 0; i < jsonList.length; i++){
											json.data.push(jsonList[i]);
										}
									}else{
										json.data.push(mockData.list);
									}
								}
							}
							
							if(data.msg[j].intervalTime && Number(data.msg[j].intervalTime)){
								function nodeReassignmentInt(me,json,data){
									return function(){
										if(data.jsonType === 'mock'){
											var mockData = eval(data.mockStr);
											var json = {
												"id":data.id,
										    	"data":[]
											}
											if(mockData){
												var jsonList = mockData.list;
												if(jsonList && jsonList.length > 0){
													for(var i = 0; i < jsonList.length; i++){
														json.data.push(jsonList[i]);
													}
												}else{
													json.data.push(mockData.list);
												}
											}
										}
								    	me.nodeReassignment(json)
									} 
								}
								function IntervalNode(me,json,time,data){
									var obj = me;
									var nodeData = json;
									var IntTime = time;
									var item = data;
									setInterval(nodeReassignmentInt(obj,nodeData,data),1000 * IntTime)
								}
								me.nodeReassignment(json);
								IntervalNode(me,json,Number(data.msg[j].intervalTime),data.msg[j]);
							}else{
								me.nodeReassignment(json)
							}
						}
					}
				}
			}
		},
		error:function(){
			alert('数据集获取失败！');
		}
	});
}
//页面初始化
function initPageGraph() {
	dataModel = new ht.DataModel();
	graphView = new ht.graph.GraphView(dataModel);
	graphView.addToDOM();
	var dataSetUrl = '/displays/info';
	$.ajax({
		type:"get",
		url:dataSetUrl,
		async:true,
		data:{
			appid: getPageHrefAppid()
		},
		success:function(data){
			if(data.code !== 1){
				alert(data.msg.msg);
				return;
			}
			window.UserJson = {
				name:data.user
			}
			var text = data.data;
			var json = ht.Default.parse(text);
			if (json.title) document.title = json.title;
			//绘制
			dataModel.deserialize(json);
			graphView.fitContent(true);
			//graphView.setPannable(false);
			//graphView.setMovableFunc(function () { return false; });
		},
		error:function(){
			alert('数据获取失败！');
		}
	});
}
//密码登录
function signInByCookie(id,passWord){
	$.ajax({
		type: "get",
		url: "/displays/visitKey",
		async: true,
	    contentType: "application/json; charset=utf-8",
    	dataType:'json',
    	appid: id,
    	pagePassWord: passWord,
		data:{
			appid: id,
			password: passWord
		},
		success: function(data){
			if(data.code === 1){
				window.isPageShow = true;
				for(var i = 0; i < $('body')[0].children.length; i++){
					if(!$($('body')[0].children[i]).hasClass('ht-widget-dialog') && !$($('body')[0].children[i]).hasClass('layui-m-layer')){
						$($('body')[0].children[i]).css('visibility','visible');
					}
				}
			}else{
				var id = this.appid;
				var passWords = getCookie('pagePassWord');
				if(passWords && JSON.parse(passWords)){
					var list = JSON.parse(passWords);
					for(var i = 0; i < list.length; i++){
						if(list[i].id === id){
							list[i].passWord = '';
						}
					}
					SetCookie('pagePassWord',JSON.stringify(list))
				}
				creatPassWordDialog();
			}
		},
		error: function(){
			alert('密码验证失败！');
		}
	});
}
//密码弹出框
function creatPassWordDialog(){
	var id = getPageHrefAppid();
	var passWords = getCookie('pagePassWord');
	if(passWords && JSON.parse(passWords)){
		var list = JSON.parse(passWords);
		for(var i = 0; i < list.length; i++){
			if(list[i].id === id && list[i].passWord){
				signInByCookie(list[i].id,list[i].passWord)
				return;	
			}
		}
	}
	//有弹出的情况
	if(layer && itoPage){
		var html = '<div style = "width:300px;">'
			+'<div class="page-dialog-titlt">请输入密码</div>'
			+'<div class="page-dialog-body"><input id="pageDialogInput" type="password" class="page-dialog-input" value="" onkeydown="itoPage.submitPassword(event)" ></div>'
			+'<div class="page-dialog-btn"><a class="page-dialog-btn0" onclick="itoPage.submitPassword()">确定</a></div>'
			+'</div>'
			
		layer.open({
			type: 1,
			skin: 'layui-layer-rim', //加上边框
			content: html
		});
		return
	}
	var dialog  = new ht.widget.Dialog();
	var formPane = new ht.widget.FormPane();

	formPane.addRow([
    	{
    		element:'访问密码',
    		align: 'right'
    	},
        {
            id: 'password',
            textField: {
                text: ''
            }
        }
    ], [75, 0.1]);
    
    dialog.setConfig({
        title: "输入密码",
        closable: false,
        draggable: true,
        width:260,
        height:120,
        contentPadding: 10,
        content: formPane,
        buttons: [
            {
                label: "确定",
                action: function(button, e) {
                	var pagePassWord = formPane.v('password');
                	if(!pagePassWord || pagePassWord === ''){
                		alert('访问密码必须填写！');
                		return;
                	}
                	$.ajax({
						type: "get",
						url: "/displays/visitKey",
						async: true,
					    contentType: "application/json; charset=utf-8",
				    	dataType:'json',
				    	appid: getPageHrefAppid(),
				    	pagePassWord: pagePassWord,
						data:{
							appid: getPageHrefAppid(),
							password: pagePassWord
						},
						success: function(data){
							if(data.code === 1){
								window.isPageShow = true;
								for(var i = 0; i < $('body')[0].children.length; i++){
									if(!$($('body')[0].children[i]).hasClass('ht-widget-dialog') && !$($('body')[0].children[i]).hasClass('layui-m-layer')){
										$($('body')[0].children[i]).css('visibility','visible');
									}
								}
		            			dialog.hide();
		            			var passWords = getCookie('pagePassWord');
								if(passWords && JSON.parse(passWords)){
									var list = JSON.parse(passWords);
								}else{
									var list = [];
								}
								var item = {
									'id' : this.appid,
									'passWord': this.pagePassWord
								}
								list.push(item)
								SetCookie('pagePassWord',JSON.stringify(list))
							}else{
								alert('密码验证失败！');
							}
						},
						error: function(){
							alert('密码验证失败！');
						}
					});
		        }
            }
        ],
        buttonsAlign: "right"
    });
    dialog.show();
}
//判断是否需要密码
function initVisitPage(){
	$.ajax({
		type: "get",
		url: "/displays/isNeedVisit",
		async: true,
		data:{
			appid: getPageHrefAppid()
		},
		success: function(data){
			if(data.code === 1){
				creatPassWordDialog();
			}else if(data.code === 2){
				alert(data.msg);
			}else{
				window.isPageShow = true;
				for(var i = 0; i < $('body')[0].children.length; i++){
					if(!$($('body')[0].children[i]).hasClass('ht-widget-dialog') && !$($('body')[0].children[i]).hasClass('layui-m-layer')){
						$($('body')[0].children[i]).css('visibility','visible');
					}
				}
			}
		},
		error: function(){
			alert('获取信息失败！');
		}
	});
}
//获取appid
function getPageHrefAppid(){
	var str = decodeURI(window.location.pathname);
	var appId = '';
	if(str.indexOf('.html') > 0 && str.indexOf('/previews2D/') === 0){
		appId = str.split('/previews2D/')[1].split('.html')[0]
	}
	return appId;
}
//guid
function guid() {
    var guid = "";
    for (var i = 1; i <= 32; i++){
      var n = Math.floor(Math.random()*16.0).toString(16);
      guid +=   n;
      if((i==8)||(i==12)||(i==16)||(i==20))
        guid += "-";
    }
    return guid; 
}
