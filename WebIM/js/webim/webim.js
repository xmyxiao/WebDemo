/*基础方法与xml解析*/
(function(global){
	var WebIm;
	WebIm = global.WebIm = {};
	/**
	 * webim参数
	 * userJid  当前登录的JID
	 * httpAdress  服务器地址
	 * localAdress  地址栏地址
	 * fileAdress  文件上传/下载地址
	 * chatWindowsList 聊天窗列表
	 * personList  联系人列表
	 * selectChatWindow 选中的聊天窗
	 * receivIdList 收到消息id列表
	 * sendIdList  发送消息id列表
	**/
	
	WebIm.param = {
		userJid : "",
		httpAdress : "",
		localAdress : "",
		fileAdress : "",
		chatWindowsList : new Array(),
		personList : new Array(),
		selectChatWindow : null,
		receivIdList : new Array(),
		sendIdList : new Array()
	}
	/**
	 * @namespace WebIm.Events
	 * @description  WebIm 事件
	**/
	WebIm.Events = {
		/** 
		 * @description 绑定事件
		 * @function WebIm.Events.on
		 * @example WebIm.Events.on($("#webFace"), "click", WebIm.page.createFacePanel);
		**/
		on:function(obj, event, func,confing){
			if(confing){
				$(document).off(event, obj).on(event, obj, func(confing));
			}else{
				$(document).off(event, obj).on(event, obj, func);
			}
			
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
	/**
	 * @namespace WebIm.Events
	 * @description  WebIm 基础方法
	**/
	WebIm.base = {
		/**
		 * @description 生成guid
		 * @function newGuid
		 * @example WebIm.base.newGuid()
		 * @return {string} guid
		**/
		newGuid : function() {
			var guid = "";
			for (var i = 1; i <= 32; i++) {
				var n = Math.floor(Math.random() * 16.0).toString(16);
				guid += n;
				if ((i == 8) || (i == 12) || (i == 16) || (i == 20)){
					guid += "-";
				}
			}
			return guid;
		},
		/**
		 * @description 获取消息发送方数字id
		 * @function getFromId
		 * @example WebIm.base.getFromId(str);
		 * @param  {string} msg
		 * @return {string} id
		**/
		getFromId : function(msg){
			if($(msg).find("SessionID").length > 0){
				var id = $(msg).find("SessionID").text();
			}else{
				var fromStr = msg.getAttribute("from");
				var id = fromStr.split("@")[0];	
			}
			return id;
		},
		/**
		 * @description 获取消息接收方数字id
		 * @function getToId
		 * @example WebIm.base.getToId(str);
		 * @param  {string} msg
		 * @return {string} id
		**/
		getToId : function(msg){
			var toStr = msg.getAttribute("to");
			var id = toStr.split("@")[0];
			return id;
		},
		/**
		 * @description 获取聊天窗
		 * @function getChatWindow
		 * @example WebIm.base.getChatWindow(id);
		 * @param  {string} 纯数字id
		 * @return {object} chatWindow 聊天窗对象
		**/
		getChatWindow : function(id){
			var chatWindow = null;
			for(var i = 0;i < WebIm.param.chatWindowsList.length;i++){
				if(id == WebIm.param.chatWindowsList[i].id){
					chatWindow = WebIm.param.chatWindowsList[i];
				}
			}
			return chatWindow;
		},
		/**
		 * @description 获取联系人信息
		 * @function getperson
		 * @example WebIm.base.getperson(id);
		 * @param  {string} 纯数字id
		 * @return {object} person 联系人对象
		**/
		getperson : function(id){
			var person = null;
			for(var i = 0;i < WebIm.param.personList.length;i++){
				if(id == WebIm.param.personList[i].id){
					person = WebIm.param.personList[i];
				}
			}
			return person;
		},
		/**
		 * @description 表情转字符
		 * @function imgReplace
		 * @example WebIm.base.imgReplace(str);
		 * @param  {string} 包含img标签的文字
		 * @return {strng} 纯字符
		**/
		imgReplace : function(str){
			var reStr = str.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/gi, function (match, capture) {
				var newStr = capture.match(/\/(\w+\.(?:png))/i)[1];
				newStr = newStr.split(".")[0];
				newStr = ":"+newStr+")";
				return newStr;
			});
			return reStr;
		},
		/**
		 * @description 字符转表情
		 * @function strReplace
		 * @example WebIm.base.strReplace(str);
		 * @param  {string} 纯字符
		 * @return {strng} 包含img标签的文字
		**/
		strReplace : function(str){
			str = str.replace(/\</g,'&lt;');
			str = str.replace(/\>/g,'&gt;');
			str = str.replace(/\n/g,'<br/>');
			str = str.replace(/\:([00-99]*)\)/g,'<img src="images/face/$1.png" border="0" type="face" />');
			return str;
		},
		/**
		 * @description 判断收到id是否重复
		 * @function repetitionReceivId
		 * @example WebIm.base.repetitionReceivId(str);
		 * @param  {string} 消息guid
		 * @return {boolean} 返回true为id不重复
		**/
		repetitionReceivId:function(msgId){
			var receivId = msgId;
			for(var i=0;i< WebIm.param.receivIdList.length;i++){
				if(WebIm.param.receivIdList[i]== receivId){
					return false;
				}
			}
			WebIm.param.receivIdList.push(receivId);
			return true;
		},
		/**
		 * @description 获取发送的消息对象
		 * @function repetitionSendId
		 * @example WebIm.base.repetitionSendId(str);
		 * @param  {string} 消息guid
		 * @retuen {object} 消息对象
		**/
		repetitionSendId:function(msgId){
			var sendId = msgId;
			for(var i=0;i< WebIm.param.sendIdList.length;i++){
				if(WebIm.param.sendIdList[i].id == sendId){
					return WebIm.param.sendIdList[i];
				}
			}
			return false;
		},
		/**
		 * @description 获取格式化时间
		 * @function getFullTime
		 * @example WebIm.base.getFullTime();
		 * @retuen {string} xxxx-xx-xx xx:xx:xx.xxx 格式的日期
		**/
		getFullTime:function(){
			var d = new Date();
			var meYear = d.getFullYear();
			var meMon = d.getMonth() + 1;
			var meDay = d.getDate();
			meMon = ("00" + meMon).substr(("" + meMon).length);
			meDay = ("00" + meDay).substr(("" + meDay).length);
			var h = d.getHours();
			var m = d.getMinutes();
			var s = d.getSeconds();
			var ms = d.getMilliseconds();
			h = ("00" + h).substr(("" + h).length);
			m = ("00" + m).substr(("" + m).length);
			s = ("00" + s).substr(("" + s).length);
			ms = ("000" + ms).substr(("" + ms).length);
			var timesTamp = meYear + "-" + meMon + "-" + meDay + " " + h + ":" + m + ":" + s + "." + ms;
			return timesTamp;
		},
		/**
		 * @description 返回 xx:xx 格式的时间
		 * @function getWriteTime
		 * @example WebIm.base.getWriteTime();
		 * @param  {string} xxxx-xx-xx xx:xx:xx.xxx 格式的日期
		 * @retuen {string} xx:xx 格式的时间
		**/
		getWriteTime:function(timeTamp){
			var fullTime = timeTamp.split(" ")[1].split(":");
			return (fullTime[0] + ":" + fullTime[1]);
		}
	}
	/**
	 * @namespace WebIm.msg
	 * @description  WebIm 消息处理
	**/
	WebIm.msg = {
		/**
		 * @description 收到消息
		 * @function onMessage
		 * @param  msg xml格式消息
		**/
		onMessage:function(msg){
			try{
				var msgId = $(msg).attr("id");
				if(!WebIm.base.repetitionReceivId(msgId)){
					if($(msg).find("received").attr("id")){
						var msgItem = WebIm.base.repetitionSendId($(msg).find("received").attr("id"));
						if(msgItem){
							$("#"+msgItem.id).find(".bubble-load").attr("style","display: none;");
							msgItem.reState = true;
							return true;
						}
					}
					return true;
				}
				var msgTo = WebIm.base.getToId(msg),
					msgFrom = WebIm.base.getFromId(msg),
					msgType = $(msg).attr("type"),
					msgElems = $(msg).find("body").text(),
					msgTime = $(msg).find("timestamp").text() || WebIm.base.getFullTime();
				if(msgType == "chat" && msgElems.length > 0){
					var chatWindow = WebIm.base.getChatWindow(msgFrom);
					if(!chatWindow){
						var config = {
							id : msgFrom,
							type : "",
							server : "@conference." + WebIm.param.httpAdress
						}
						if($(msg).find("SessionID").length>0){
							config.type = "session"
						}else{
							config.type = "persion"
						}
						var chatWindow = new WebIm.chatWindow(config);
					}
					WebIm.msg.sendReturnMsg(msg);
					//文件消息
					if($(msg).find("file").length >0){
						var fileData = {
							id : $(msg).attr("id"),
							extendName : $(msg).find("filetype").text(),
							url : $(msg).find("file").attr("url"),
							fileName : $(msg).find("body").text(),
							fromId : $(msg).find("fromid").text(),
							time : $(msg).find("timestamp").text()
						}
						var img = chatWindow.getFileImg(fileData);
						chatWindow.addOtherMsg(fileData.id,img);
						chatFileMsg.showFileMsg.fileMsgClick();
						//更新相关数据
						var sidebarSet = {
							name : "岗位专员" + "/" + $(msg).attr("from").split("@")[0],
							time : WebIm.base.getWriteTime(fileData.time),
							msg : fileData.fileName
						}
						chatWindow.sidebarItem.upSidebarData(sidebarSet);
						chatWindow.lastMsgTime = fileData.time;
					}
					else if($(msg).attr("messagetype")=="location"){//位置消息
						//to do 位置消息处理
					}
					else if($(msg).find("delay").length <= 0){//非离线消息
						var msgStr = WebIm.base.strReplace(msgElems);
						var msgContent = '<span class="bubble-text">'+msgStr+'</span>';
						//更新相关数据
						chatWindow.addOtherMsg(msgId,msgStr);
						var sidebarSet = {
							name : "岗位专员" + "/" + $(msg).attr("from").split("@")[0],
							time : WebIm.base.getWriteTime(msgTime),
							msg : msgStr
						}
						chatWindow.sidebarItem.upSidebarData(sidebarSet);
						chatWindow.lastMsgTime = msgTime;
					}else if($(msg).find("delay").length > 0){//离线消息
						var msgStr = WebIm.base.strReplace(msgElems);
						var msgContent = '<span class="bubble-text">'+msgStr+'</span>';
						//更新相关数据
						chatWindow.addOtherMsg(msgId,msgStr);
						var sidebarSet = {
							name : "岗位专员" + "/" + $(msg).attr("from").split("@")[0],
							time : WebIm.base.getWriteTime(msgTime),
							msg : msgStr
						}
						chatWindow.sidebarItem.upSidebarData(sidebarSet);
						chatWindow.lastMsgTime = msgTime;
					}
				}else{
					return true;
				}
			}catch(e){
				return true;
			}
			return true;
		},
		/**
		 * @description 发送消息回执
		 * @function sendReturnMsg
		**/
		sendReturnMsg:function(msg){
			if($(msg).find("request").length>0){
				var msgFrom = WebIm.base.getFromId(msg);
				if($(msg).find("SessionID").length > 0){
					msgFrom += "@customerservice." + WebIm.param.httpAdress;
				}else{
					msgFrom += WebIm.param.httpAdress;
				}
				if($(msg).find("delay").attr("history")){
					//历史消息回执
					if($(msg).find("delay").length>0){
						var messageId = $(msg).find("delay").attr("messageID");
					}else{
						var messageId = $(msg).attr("id");
					}
					var request = $msg({
						id : messageId ,
						to : msgFrom
					}).c("autoSend").t("false").up()
					.c("received", {
						xmlns : 'urn:xmpp:receipts',
						id:messageId
					}).up()
					.c("delay").t(messageId).up();
					connection.send(request.tree());
				}else{
					//正常回执消息
					if($(msg).find("delay").length>0){
						var messageId = $(msg).find("delay").attr("messageID");
					}else{
						var messageId = $(msg).attr("id");
					}
					var request = $msg({
						id : messageId ,
						to : msgFrom
					}).c("autoSend").t("false").up()
					.c("received", {
						xmlns : 'urn:xmpp:receipts',
						id:messageId
					});
					connection.send(request.tree());
				}
			}
		},
		/**
		 * @description 发送消息
		 * @function sendMssage
		**/
		sendMssage:function(){
			if($("#msgText").find("img").attr("type")=="face"){
				var msgBody = WebIm.base.imgReplace($("#msgText").html());
			}else{
				var msgBody = $("#msgText").text();
			}
			var msgTime = WebIm.base.getFullTime();
			if(WebIm.param.selectChatWindow.type == "session"){
				var item = WebIm.param.selectChatWindow;
				var msgGuid = WebIm.base.newGuid();
				var msg = $msg({
					id : msgGuid,
					to : item.id + "@" +item.server,
					type : "chat"
				}).c("autoSend", null, "false")
				  .c("body", null, msgBody)
				  .c("request",{xmlns : "urn:xmpp:receipts"}).up()
				  .c("timestamp",null,msgTime);
				connection.send(msg.tree());
			}
			
			if($("#msgText").find("img").attr("type")=="face"){
				var showMsg = $("#msgText").html();
			}else{
				var showMsg = $("#msgText").text();
			}
			var msgContent = '<span class="bubble-text">'+showMsg+'</span>'
						   + '<img class="bubble-load" src="images/loading.gif">'
						   + '<i class="in-bl bubble-resend" style="display: none;"></i>';	
			//更新相关数据
			WebIm.param.selectChatWindow.addOwnMsg(msgGuid,msgContent);
			$("#msgText").html('');
			var sidebarSet = {
				time : WebIm.base.getWriteTime(msgTime),
				msg : showMsg
			}
			WebIm.param.selectChatWindow.sidebarItem.upSidebarData(sidebarSet);
			WebIm.param.selectChatWindow.lastMsgTime = msgTime;
		},
		/**
		 * @description 获取提问端问题列表
		 * @function getProbleList
		 * @example connection.sendIQ(iq,WebIm.param.getProbleList);
		 * @param  probleList 问题列表
		**/
		getProbleList:function(probleList){
			var formId = WebIm.base.getFromId(probleList);
			var config = {
				id : formId,
				type : "system"
			}
			var chatItem = new WebIm.chatWindow(config);
			
			var listStr = $(probleList).find("ProblemList").text();
			var listObject = JSON.parse(listStr);
			var listTime = WebIm.base.getWriteTime($(probleList).find("timestamp").text());
			if(typeof listObject == "object" && listObject.length > 0){
				var probleMsg = '<p class="proble-list-title">请选择您要咨询的业务</p>';
				for(var i = 0;i<listObject.length;i++){
					probleMsg += '<p class="proble-list-item ui-textellipsis" id='+listObject[i].ProblemID+' title='+listObject[i].ProblemType+'>'
    						   + '<i class="in-bl iconfont icon-wenti proble-item-icon"></i>'				
    						   + '<span>'+listObject[i].ProblemType+'</span></p>';
				}
				chatItem.addOtherMsg(WebIm.base.newGuid(),probleMsg);
				
				var sidebarSet = {
					name : "在线客服公众号",
					time : listTime,
					msg : "请选择您要咨询的业务"
				}
				chatItem.sidebarItem.upSidebarData(sidebarSet);
				chatItem.showWindow();
				$(".proble-list-item").on("click",WebIm.page.probleSelect);
			}
		},
		/**
		 * @description 获取客服与聊天室信息
		 * @function customerService
		 * @example connection.sendIQ(iq,WebIm.msg.customerService);
		 * @param  info 详细消息
		 **/
		customerService : function(info){
			var ansName = $(info).find("Answerer").text().split("@")[0];
			if(ansName.length > 0){
				var config = {
					id : $(info).find("SessionID").text(),
					type : "session",
					server : info.getAttribute("from").split("@")[1]
				}
				var chatItem = new WebIm.chatWindow(config);
				
				var itemTime = WebIm.base.getWriteTime($(info).find("timestamp").text());
				var probleMsg = "您好，岗位专员/" + $(info).find("Answerer").text().split("@")[0] + "很高兴为您服务！";
				var sidebarSet = {
					name : "岗位专员" + "/" + $(info).find("Answerer").text().split("@")[0],
					time : itemTime,
					msg : probleMsg
				}
				chatItem.sidebarItem.upSidebarData(sidebarSet);
				chatItem.addOtherMsg(WebIm.base.newGuid(),probleMsg);
				chatItem.showWindow();
			}else{
				alert($(info).find("description").text());
				return true;
			}
		}
	}
	/**
	 * @namespace WebIm.upData
	 * @description  WebIm 数据处理
	**/
	WebIm.upData = {
		/**
		 * @description 获取登录用户信息
		 * @function userData
		 * @example connection.sendIQ(iq,WebIm.param.getUserInfo);
		 * @param  userInfo 服务器返回的xml格式消息
		**/
		userData:function(userInfo){
			WebIm.param.userJid = $(userInfo).find("username").text();
			var person = {
				id : $(userInfo).find("username").text(),
				name : $(userInfo).find("name").text()
			}
			WebIm.param.personList.push(person);
			var userViewModel = {
			    userName: ko.observable(person.id + "/" +person.name),
			    userNumber : ko.observable(person.id)
			};
			ko.applyBindings(userViewModel);
		},
		/** 
		 * @description 获取登录用户头像
		 * @function userImg
		 * @example connection.sendIQ(iq,WebIm.param.userImg);
		 * @param  photoInfo 服务器返回的xml格式消息
		**/
		userImg:function(photoInfo){
			var photoSrc =  $(photoInfo).find("vCard BINVAL").text();
			var toID = WebIm.base.getToId(photoInfo);
			var user = WebIm.base.getperson(toID);
			if(photoSrc){
				if($(photoInfo).find("TYPE").text() == "image/jpeg" ){
					photoSrc = "data:image/jpeg;base64," + photoSrc;
				}
			}else{
				photoSrc = "images/webwxgeticon.jpg";
			}
			user.photo = photoSrc;
			$(".sidebar-user img").attr("src",photoSrc);
		}
	}
	/**
	 * @namespace WebIm.page
	 * @description  WebIm 页面交互
	**/
	WebIm.page = {
		/**
		 * @description 创建表情选框
		 * @function createFacePanel
		 * @example WebIm.Events.on($("#webFace"), "click", WebIm.page.createFacePanel);
		 * @param  event
		**/
		createFacePanel : function(e){
			e.stopPropagation();
			var strFace, labFace;
			var id = "qq-face";
			var path = './images/face/';
			if($('#'+id).length<=0){
				strFace = '<div id="'+id+'" style="display:none;z-index:1000;" class="qqFace">' +
						  '<table border="0" cellspacing="0" cellpadding="0"><tr>';
				for(var i=0; i<100; i++){
					var number=i;
					//labFace = ':'+i+')';
					if(i<10){number=("0" + i).substr(("" + i).length);}
					labFace = ':'+number+')';
					strFace += '<td><img src="'+path+number+'.png" onclick="WebIm.page.writeFace(\'' + labFace + '\');" /></td>';
					if( (i + 1) % 15 == 0 ) strFace += '</tr><tr>';
				}
				strFace += '</tr></table></div>';
			}
			$(".face-content").append(strFace);
			var offset = $("#webFace").position();
			$('#'+id).css('left',offset.left);
			$('#'+id).show();
			$(".face-panel").show();
		},
		/**
		 * @description 表情图片写入输入框
		 * @function writeFace
		 * @example WebIm.page.writeFace(labFace);
		 * @param  {string} labFace
		**/
		writeFace : function(labFace){
			var faceNumber = labFace;
			var str = WebIm.page.strToFace(faceNumber);
			$("#msgText").append(str);
		},
		/** 
		 * @description 字符转为图片格式
		 * @function strToFace
		 * @example WebIm.page.strToFace(faceNumber);
		 * @param  {string} faceNumber
		 * @return {string} str
		**/
		strToFace : function(faceNumber){
			var str = faceNumber.replace(/\</g,'&lt;');
			str = str.replace(/\>/g,'&gt;');
			str = str.replace(/\n/g,'<br/>');
			str = str.replace(/\:([00-99]*)\)/g,'<img src="images/face/$1.png" border="0" type="face" />');
			return str;
		},
		/**
		 * @description 问题列表点击
		 * @function probleSelect
		**/
		 probleSelect : function(item){
			var selectItem = item.currentTarget;
			var proble = $iq({
				type : "get",
				id : WebIm.base.newGuid(),
				to : "11111@customerservice."+ WebIm.param.httpAdress
			}).c("query", {
				xmlns : "fd:customer:service"
			}).c("action").t("bypassFlow").up()
			  .c("Problem")
			  .c("ProblemID").t($(selectItem).attr("id")).up().up()
			  .c("description").t("第二次进入客服系统，请求分配一个客服");
			connection.sendIQ(proble,WebIm.msg.customerService);
		},
		/**
		 * @description 左侧列表点击
		 * @function probleSelect
		**/
		sidebarItemSelect:function(item){
			var selectItem = item.currentTarget;
			var id = $(selectItem).attr("id").split("sidebar")[1];
			var chatWindow = WebIm.base.getChatWindow(id);
			chatWindow.showWindow();
		}
	}
	/**
	 * @namespace WebIm.chatWindow
	 * @description  WebIm 聊天窗
	 * @example chatItem = new WebIm.chatWindow(config);
	**/
	WebIm.chatWindow = function(config){
		this.id = config.id;
		this.type = config.type || "";
		if(config.type == "session"){
			this.server = config.server;
		}
		this.firstMsgTime = this.lastMsgTime = new Date();
		this.createWindow();
		WebIm.param.chatWindowsList.push(this);
		this.body = $("#user"+this.id).find(".main-content-chat");
	}
	WebIm.chatWindow.prototype = {
		/**
		 * @description 显示聊天窗
		 * @function showWindow
		**/
		showWindow:function(){
			var that=this;
			var mainContent = $(".main-content");
			mainContent.find(".main-content-body").each(function(){
				$(this).hide();
			});
			$("#user"+that.id).show();
			WebIm.param.selectChatWindow = that;
			that.sidebarItem.showItem();
		},
		/**
		 * @description 创建聊天窗
		 * @function createWindow
		**/
		createWindow:function(){
			var that=this;
			if(!WebIm.base.getChatWindow(that.id)){
				var thisWindow = '<div id=user'+that.id+' class="main-content-body ui-scroll-bar-styleFc">'
							   + '<div class="main-content-chat">'
							   + '<div class="chat-history system-message">'
							   + '<span class="content"><a class="system-history" href="javascript:void(0);">点击加载更多</a></span></div>'
							   + '<div class="chat-history-end system-message">'
							   + '<span class="content">'
							   + '<hr class="in-bl system-line" size="1" color="#e5e8ea" style="margin-right: 10px;" />'
							   + '<span class="system-history-end">以上是历史消息</span>'
							   + '<hr class="in-bl system-line" size="1" color="#e5e8ea" style="margin-left: 10px;" /></span></div>'
							   + '</div></div>';
				var mainContent = $(".main-content");
				mainContent.append(thisWindow);
				
				that.sidebarItem = new WebIm.chatSidebar(that);
			}
		},
		/**
		 * @description 添加他人消息到页面
		 * @function addOtherMsg
		**/
		addOtherMsg:function(msgId,msgContent){
			var that=this;
			var otherMsg = '<div class="message-other clearfix" id='+msgId+'>'
						 + '<div class="in-bl message-content">'	
						 + '<div class="message-bubble">'+msgContent+'</div>'
						 + '</div><img src="images/webwxgeticon.jpg" class="photo-other"></div>';
			this.body.append(otherMsg);
			this.body.parents(".main-content-body").scrollTop(this.body.parents(".main-content-body")[0].scrollHeight);
		},
		/**
		 * @description 添加自己消息到页面
		 * @function addOwnMsg
		**/
		addOwnMsg:function(msgId,msgContent){
			var that=this;
			var OwnMsg = '<div class="message-me clearfix" id='+msgId+'>'
					   + '<img src="images/webwxgeticon.jpg" class="photo-other">'
					   + '<div class="in-bl message-content">'	
					   + '<div class="message-bubble">'+msgContent+'</div>'
					   + '</div></div>';
			this.body.append(OwnMsg);
			var msgItem = {
				id : msgId,
				reState : false
			}
			WebIm.param.sendIdList.push(msgItem);
			this.body.parents(".main-content-body").scrollTop(this.body.parents(".main-content-body")[0].scrollHeight);
		},
		/**
		 * @description 发送文件消息
		 * @function sendFileMsg
		**/
		sendFileMsg:function(data){
			if(!data.errorCode){
				var msgId = WebIm.base.newGuid();
				var item = WebIm.param.selectChatWindow;	
				if(item.type == "session"){
					var fileFrom = WebIm.param.userJid + "@" + WebIm.param.httpAdress;
					var fileMsg = $msg({
						id : msgId,
						to : item.id + "@" +item.server,
						from : fileFrom,
						type : 'chat'
					}).c("autoSend").t("false").up()
					  .c("body").t(data.fileName).up()
					  .c("file",{url : data.url}).up()
				  	  .c("fromid").t(WebIm.param.userJid).up()
					  .c("filesize").t(data.size).up()
					  .c("filetype").t(data.extendName).up()
					  .c("request",{xmlns : "urn:xmpp:receipts"}).up()
					  .c("timestamp").t(data.timestamp).up();
					connection.send(fileMsg.tree());
				}
				var msgItem = {
					id : msgId,
					reState : false
				}
				WebIm.param.sendIdList.push(msgItem);				
			}else{
				return;
			}
			var img = this.getFileImg(data);
			this.addOwnMsg(msgId,img);
			chatFileMsg.showFileMsg.fileMsgClick();
			//更新相关数据
			var sidebarSet = {
				time : WebIm.base.getWriteTime(data.timestamp),
				msg : data.fileName
			}
			item.sidebarItem.upSidebarData(sidebarSet);
			item.lastMsgTime = data.timestamp;
		},
		/**
		 * @description 获取文件消息显示图
		 * @function getFileImg
		 * @example WebIm.chatWindow.getFileImg(data);
		 * @param  {object} data 上传文件结束后得到的返回数据
		 * @return {string} img  生成的img标签
		**/
		getFileImg:function(data){
			if(!data.extendName){
				return;
			}
			var sName = data.extendName,
				newUrl = data.url,
				sNameStr = data.fileName;
			if(sName=="htm"||sName=="html"||sName=="php"||sName=="jsp"){
				var img = "<img src='images/file-ico/ic_web.png' url="+newUrl+" type='file' />"
			}
			else if(sName=="txt"||sName=="java"||sName=="c"||sName=="cpp"||sName=="py"||sName=="xml"||sName=="json"||sName=="log"){
				var img = "<img src='images/file-ico/ic_text.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			else if(sName=="pdf"){
				var img = "<img src='images/file-ico/ic_pdf.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			else if(sName=="xls"||sName=="xlsx"){
				var img = "<img src='images/file-ico/ic_excel.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			else if(sName=="doc"||sName=="docx"){
				var img = "<img src='images/file-ico/ic_word.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			else if(sName=="ppt"||sName=="pptx"){
				var img = "<img src='images/file-ico/ic_ppt.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			else if(sName=="png"||sName=="gif"||sName=="jpg"||sName=="jpeg"||sName=="bmp"){//发送图片文件
				var preloader = new Image();
				$(preloader).load(function(evt){
					var meWidth = preloader.width, 
					meHeight = preloader.height,
					maxWidth = 100,
					maxHeight = 100;
					var imgId = preloader.src.split("GUID=")[preloader.src.split("GUID=").length-1];
					if(meWidth<=maxWidth&&meHeight<=maxHeight){//小图
						$("#"+imgId+"").attr("style","width:auto;height:auto");
					}else if(meWidth>meHeight){//横向图片
						$("#"+imgId+"").attr("style","width:100px;height:auto");
					}else if(meHeight>meWidth){//纵向图片
						$("#"+imgId+"").attr("style","width:auto;height:100px");
					}
				});
				var imgId = newUrl.split("GUID=")[newUrl.split("GUID=").length-1];
				var img = "<img src="+newUrl+" id="+imgId+" type='picture' style='width:100px;height:100px;' />";
				preloader.src = newUrl;
			}
			else if(sName=="mp4"||sName=="rmvb"||sName=="avi"||sName=="flv"){
				var img = "<img src='images/file-ico/ic_video.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			else if(sName=="mp3"||sName=="wav"||sName=="ogg"||sName=="amr"||sName=="midi"){
				var img = "<img src='images/file-ico/ic_audio.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			else if(sName=="jar"||sName=="zip"||sName=="rar"||sName=="gz"||sName=="apk"||sName=="img"){
				var img = "<img src='images/file-ico/ic_compress.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			else{
				var img = "<img src='images/file-ico/ic_unknow.png' url="+newUrl+" type='file' /><p>"+sNameStr+"</p>"
			}
			return img;
		}		
	}
	/**
	 * @namespace WebIm.chatSidebar
	 * @description  WebIm 左侧联系人项
	 * @example chatItem = new WebIm.chatSidebar(config);
	**/
	WebIm.chatSidebar = function(config){
		this.id = config.id;
		this.createSidebarItem();
	}
	WebIm.chatSidebar.prototype = {
		/**
		 * @description 创建左侧联系人项
		 * @function createSidebarItem
		 * @example WebIm.chatSidebar.createSidebarItem();
		**/
		createSidebarItem:function(){
			var that=this;
			var thisSidebarItem = '<div class="sidebar-list-item" id=sidebar'+that.id+'>'
								+ '<div class="chat-item chat-item-select" persion-type="persion">'
								+ '<div class="avatar"><img src="images/webwxgeticon.jpg" class="img"></div>'
								+ '<div class="info"><h3 class="nickname ui-textellipsis">'
								+ '<p class="chat-item-time ui-fr"></p>'
								+ '<p class="ui-fl nickname-text ui-textellipsis"></p></h3>'
								+ '<div class="chat-item-msg ui-textellipsis"><p class="info-msg"></p>'
								+ '</div></div></div></div>';
			var mainSidebar = $("#chatList");
			mainSidebar.prepend(thisSidebarItem);
			$(".sidebar-list-item").on("click",WebIm.page.sidebarItemSelect);
			that.body = $("#sidebar" + that.id);
		},
		/**
		 * @description 选中聊天项
		 * @function showItem
		**/
		showItem:function(){
			var that=this;
			$("#chatList").find(".sidebar-list-item").each(function(){
				$(this).removeClass("select");
			});
			var chatListItem = $("#sidebar"+that.id);
			chatListItem.addClass("select");
			$("#webImMain .main-header").text(chatListItem.find(".nickname-text").text());
		},
		/**
		 * @description 更新左侧列表信息
		 * @function upSidebarData
		**/
		upSidebarData:function(config) {
			if(typeof config != "object") return;
			var sidebarSet = config;
			var that = this;
			for(key in sidebarSet){
				if(key == "name" && sidebarSet[key] && sidebarSet[key] != ""){
					that.body.find(".nickname-text").text(sidebarSet[key]);
				}else if(key == "time" && sidebarSet[key] && sidebarSet[key] != ""){
					that.body.find(".chat-item-time").text(sidebarSet[key]);
				}else if(key == "msg" && sidebarSet[key] && sidebarSet[key] != ""){
					that.body.find(".info-msg").html(sidebarSet[key]);
				}
			}
		}
	}
})(this);