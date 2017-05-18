/*服务器连接与消息处理*/
// XMPP服务器BOSH地址
var BOSH_SERVICE = '/http-bind/';
// XMPP连接
var connection = null;
// 当前状态是否连接
var connected = false;

// 连接状态改变的事件
function onConnect(status) {
    if (status == Strophe.Status.CONNFAIL) {
		console.log("连接失败！");
    } else if (status == Strophe.Status.AUTHFAIL) {
		console.log("登录失败！");
    } else if (status == Strophe.Status.DISCONNECTED) {
		console.log("连接断开！");
		connected = false;
    } else if (status == Strophe.Status.CONNECTED) {
		console.log("连接成功！");
		connected = true;
		//获取用户基础信息
		var userInfo = $iq({
			type : "get",
			id : WebIm.base.newGuid()
		}).c('query', {
			xmlns : 'jabber:iq:register'
		});
		connection.sendIQ(userInfo,WebIm.upData.userData);
		//获取用户头像
		var userPhoto = $iq({
			type : "get",
			id : WebIm.base.newGuid()
		}).c("query", {
			xmlns : "vcard-temp"
		});
		connection.sendIQ(userPhoto,WebIm.upData.userImg);
		//提问端获取问题列表
		var probleList = $iq({
			type : "get",
			id : WebIm.base.newGuid(),
			to : "11111@customerservice." + WebIm.param.httpAdress
		}).c("query", {
			xmlns : "fd:customer:service"
		}).c("action").t("problemList").up()
		  .c("description").t("第一次进入客服系统，请求问题列表").up();
		connection.sendIQ(probleList,WebIm.msg.getProbleList);
		
		// 当接收到<message>节，调用onMessage回调函数
		connection.addHandler(WebIm.msg.onMessage, null, 'message', null, null, null);
		
		// 首先要发送一个<presence>给服务器(initial presence)
		connection.send($pres().tree());
    }
}

$(function () {
	//登录
	if(!connected) {
		connection = new Strophe.Connection(BOSH_SERVICE);
		connection.connect($("#userJid").val(), $("#userPass").val(), onConnect);
	}
	//发送按钮
	$("#msgSend").click(function(){
		if(WebIm.param.selectChatWindow){
			WebIm.msg.sendMssage();
		}else{
			alert("未选中联系人");
		}
	});
	
	/*//收到的消息
	connection.rawInput = function (data) {
		console.log('RECV: ' + data);
	};
	//发送的消息
	connection.rawOutput = function (data) { 
		console.log('SEND: ' + data); 
	};
	*/
});
