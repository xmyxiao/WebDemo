/*页面控制*/
$(function () {
	WebIm.param.fileAdress = $("#fileAddress").val();
	WebIm.param.httpAdress = $("#httpAddress").val();
	WebIm.param.localAdress = window.location.origin;
	//左侧导航切换
	$(".sidebar-tab .sidebar-tab-item").click(function(){
		$(".sidebar-tab .sidebar-tab-item").removeClass("select");
		$(this).addClass("select");
		$("#webImSidebar .sidebar-list").attr("style","display: none;");
		$("#"+$(this).attr("id")+"List").attr("style","display: block;");
	});
	//快速回复
	$(".main-send-select").click(function(e){
		e.preventDefault();
		e.stopPropagation();
		var item = $(".main-send-select").offset();
		var panelHeight = $(".main-quick-send").height();
		//判断弹出位置
		if((item.top + panelHeight + 25)  > $(window).height()){
			$(".main-quick-send").attr("style","display: block;top: "+panelHeight-65+"px;left: -108px;");
		}else{
			$(".main-quick-send").attr("style","display: block;top: 40px;left: 55px;");
		}
	});
	//快速回复选项点击
	$(".quick-send-item").click(function(){
		var msgtext = $("#msgText").html($(this).text()) ;
		$(".main-quick-send").attr("style","display: none;");
	});
	//鼠标左点击
	$(document).click(function () {
		if($(".main-quick-send").is(":visible")){
			$(".main-quick-send").attr("style","display: none;");
		}
		if($(".face-panel").is(":visible")){
			$(".face-panel").attr("style","display: none;")
		}
	});
	//ctrl+enter 发送消息
	$(document).keydown(function (e) {
		if($("#msgText").is(":visible")){
			if (e.keyCode == 13 && e.ctrlKey&&$("#msgText").is(":focus")) {
				e.preventDefault();
				e.stopPropagation();
				if(WebIm.param.selectChatWindow){
					WebIm.msg.sendMssage();
				}else{
					alert("未选中联系人");
				}
			}
		}
	});
	//页面调整
	bodyResize();
	$(window).resize(function(){
		bodyResize();
	});
	//表情点击
	$("#webFace").on("click", WebIm.page.createFacePanel);
	//文件上传
	var chatWindowUpLoad = {
		uploadAgs:{
			browse_button : 'upLoad',//触发文件选择对话框的按钮，为那个元素id		
		},
		handleEvent:{
			FileUploaded:function(uploaderpop,file,responseObject){
				var data = JSON.parse(responseObject.response);
				if(data.result){
					uploaderpop.removeFile(file);//清空上传队列
					if(WebIm.param.selectChatWindow){
						WebIm.param.selectChatWindow.sendFileMsg(data);
					}
				}
				else{
					alert("文件上传出错");
				}				
			},
			Error:function(uploaderpop,errObject){
				alert("文件上传出错");
			}
		}
	};
	creatUpload(chatWindowUpLoad);
});
//页面调整
function bodyResize(){
	if($(window).height()>$("body").height()){
		$("#customservicemrg").attr("style","margin-top: "+($(window).height()-$("body").height())/2+"px;");
	}else{
		$("#customservicemrg").attr("style","margin-top: 0px;");
	}
}
//文件上传
function creatUpload(config){
	var def={
        browse_button : 'popfile',//触发文件选择对话框的按钮，为那个元素id
        url : WebIm.param.localAdress + '/file/uploadInterface', //服务器端的上传页面地址
        flash_swf_url : '../lib/Moxie.swf', //swf文件，当需要使用swf方式进行上传时需要配置该参数
        silverlight_xap_url : '../lib/Moxie.xap' //silverlight文件，当需要使用silverlight方式进行上传时需要配置该参数		
	};
	var options = $.extend({},def,config.uploadAgs);
	
	var uploaderpop = new plupload.Uploader(options);
    //在实例对象上调用init()方法进行初始化
    uploaderpop.init();
    //绑定各种事件，并在事件监听函数中做你想做的事
    uploaderpop.bind('FilesAdded',function(uploaderpop,files){
		uploaderpop.start();//文件加载完立即上传
    });
	uploaderpop.bind('addFile',function(file,fileName){
    });
	uploaderpop.bind('FileUploaded',function(uploaderpop,file,responseObject){//文件上传服务器结束		
		config.handleEvent.FileUploaded(uploaderpop,file,responseObject);
	});
	uploaderpop.bind('Error',function(uploaderpop,errObject){
		//alert("文件上传出错");
		config.handleEvent.Error(uploaderpop,errObject);
	});
	return uploaderpop;
}