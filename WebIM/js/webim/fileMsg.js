/*文件消息点击*/
(function(global){
	var chatFileMsg;
	chatFileMsg = global.chatFileMsg = {};
	
	/*
	** rotate为图片逆时针旋转的角度
	** percent为图片的缩放比例
	** move为图片移动状态
	** mousedownx为图片鼠标点击下时的x轴位置
	** mousedowny为图片鼠标点击下时的y轴位置
	** imgShowWidth为图片初次展示的宽度
	** imgShowHeight为图片初次展示的高度
	*/
	chatFileMsg.steting = {
		rotate : 0,
		percent	: 1,
		move : false,
		mousedownx : 0,
		mousedowny : 0,
		imgShowWidth : 0,
		imgShowHeight : 0
	},
	chatFileMsg.showFileMsg = {//聊天窗文件消息显示
		fileMsgClick:function(msgId){
			$(".message-content").unbind("click");
			$(".message-content").click(function(e){
				$(window).unbind('beforeunload');
				e.preventDefault();
				e.stopPropagation();
				if($(this).find("img").length>0&&$(this).find("img").attr("type")=="file"){//其他文件
					var fileUrl = $(this).find("img").attr("url");
					if(fileUrl){
						var newFileUrl = fileUrl
						window.open(newFileUrl);
					}
					else{
						return;
					}
				}else if($(this).find(".video-span").length>0){//语音文件
					var audioId = $(this).find(".video-span").find("audio").attr("id");
					var audio = document.getElementById(audioId);
					
					audio.onpause = function() {
						$(audio).parent(".video-span").find(".ico-voice").css("background","url(./images/v3.png) no-repeat");
					};
					if(audio.paused){
						audio.play();
						$(audio).parent(".video-span").find(".ico-voice").css("background","url(./images/voice1.gif) no-repeat");
						return;
					}else{
						audio.pause();
					}
				}else if($(this).find("img").length>0&&$(this).find("img").attr("type")=="picture"){//图片文件
					var fileUrl = $(this).find("img").attr("src");
					chatFileMsg.showFileMsg.showBigPicture(fileUrl);
				}else if($(this).find("img").length>0&&$(this).find("img").attr("type")=="location"){//位置消息
					var ImWin;
					var adress = $(this).find("a").attr("href");
					window.open(adress,"_blank",ImWin);
				}
			});
		},
		showBigPicture:function(url){//显示图片大图
			var $pictureWindow = $("#showChatPicture");
			var $pictureContent = $("#showChatPicture .showChatPicture-content");
			$pictureWindow.attr("style","display: block;");
			var preloader = new Image();
			$(preloader).load(function(evt){
				var meWidth = preloader.width, 
				meHeight = preloader.height,
				maxWidth = $pictureContent.width()-400,
				maxHeight = $pictureContent.height()-270;
				if(maxWidth<50){
					maxWidth = 50;
				}
				if(maxHeight<50){
					maxHeight = 50;
				}
				var percent = meWidth / meHeight;
				if(meWidth<=maxWidth&&meHeight<=maxHeight){//小图
					
				}else if(meWidth>maxWidth){//宽度大于最大宽度
					meWidth = maxWidth;
					meHeight = meWidth / percent;
					if(meHeight>maxHeight){//高度大于最大高度
						percent = maxHeight / meHeight;
						meWidth = meWidth*percent;
						meHeight = maxHeight;
					}
				}else if(meWidth<maxWidth){//宽度小于最大宽度
					if(meHeight>maxHeight){//高度大于最大高度
						percent = maxHeight / meHeight;
						meWidth = meWidth*percent;
						meHeight = maxHeight;
					}
				}
				meWidth = parseInt(meWidth);
				meHeight = parseInt(meHeight);
				if(meWidth<50&&meHeight<50){
					meWidth = 50;
					meHeight = meWidth / percent;
				}
				var picTop = ($pictureContent.height()-170-meHeight)/2,
				    picLeft = ($pictureContent.width()-meWidth)/2;
				chatFileMsg.steting.imgShowWidth = meWidth;
				chatFileMsg.steting.imgShowHeight = meHeight;
				$("#showChatPicture .pic-wrp").attr("style","width:"+meWidth+"px;height:"+meHeight+"px;top:"+picTop+"px;left:"+picLeft+"px;");
				$pictureWindow.find("img").attr("src",url);
				$pictureWindow.find("img").attr("data-original-width",preloader.width);
				$pictureWindow.find("img").attr("data-original-height",preloader.height);
				
				var imgId = url.split("GUID=")[url.split("GUID=").length-1];
				if(chatFileMsg.getItem.getPrevPicture(imgId)){//判断是否有上一张图片
					$("#showChatPicture .pic-button-left").addClass("pic-button-left-has");
				}else{
					$("#showChatPicture .pic-button-left").removeClass("pic-button-left-has");
				}
				if(chatFileMsg.getItem.getNextPicture(imgId)){//判断是否有下一张图片
					$("#showChatPicture .pic-button-right").addClass("pic-button-right-has");
				}else{
					$("#showChatPicture .pic-button-right").removeClass("pic-button-right-has");
				}
			});
			preloader.src = url;
		},
		showPrevPicture:function(){//查看上一张图片
			var url = $("#showChatPicture img").attr("src");
			var imgId = url.split("GUID=")[url.split("GUID=").length-1];
			var hasPrev = chatFileMsg.getItem.getPrevPicture(imgId);
			if(hasPrev){//判断是否有上一张图片
				chatFileMsg.steting.rotate = 0;//旋转度数置0
				$("#showChatPicture img").attr("style","transform: rotate(0deg);");
				var prevUrl = $(hasPrev).find("img[type='picture']").attr("src");
				chatFileMsg.showFileMsg.showBigPicture(prevUrl);
			}else{
				return;
			}
		},
		showNextPicture:function(){//查看下一张图片
			var url = $("#showChatPicture img").attr("src");
			var imgId = url.split("GUID=")[url.split("GUID=").length-1];
			var hasNext = chatFileMsg.getItem.getNextPicture(imgId);
			if(hasNext){//判断是否有下一张图片
				chatFileMsg.steting.rotate = 0;//旋转度数置0
				$("#showChatPicture img").attr("style","transform: rotate(0deg);");
				var nextUrl = $(hasNext).find("img[type='picture']").attr("src");
				chatFileMsg.showFileMsg.showBigPicture(nextUrl);
			}else{
				return;
			}
		},
		downloadPicture:function(){//下载图片
			var url = $("#showChatPicture img").attr("src");
			$(window).unbind('beforeunload');
			window.open(url);
		},
		rotatePicture:function(){//旋转图片
			chatFileMsg.steting.rotate = chatFileMsg.steting.rotate-90;
			$("#showChatPicture img").attr("style","transform: rotate("+chatFileMsg.steting.rotate+"deg);");
		},
		closeBigPicture:function(){//关闭显示窗
			$("#showChatPicture").attr("style","display: none;");
			chatFileMsg.steting.rotate = 0;//旋转度数置0
			$("#showChatPicture img").attr("style","transform: rotate(0deg);");
		}
	},
	chatFileMsg.getItem = {//获取
		getNextPicture:function(imgId){//获取下一张图片
			var imgItem = $("#"+imgId+"").parents(".message-content").parent(".clearfix");
			var hasNext = false;
			if(imgItem.nextAll().find("img[type=picture]").length > 0){
				hasNext=imgItem.nextAll().find("img[type=picture]").parents(".message-content").parent(".clearfix");
			}				
			return hasNext;
		},
		getPrevPicture:function(imgId){//获取上一张图片
			var imgItem = $("#"+imgId+"").parents(".message-content").parent(".clearfix");
			var hasPrev = false;
			if(imgItem.prevAll().find("img[type=picture]").length > 0){
				hasPrev=imgItem.prevAll().find("img[type=picture]").parents(".message-content").parent(".clearfix");
			}
			return hasPrev;
		}
	},
	chatFileMsg.imgChange = {//改变图片
		changeSize:function() {
			var imgWidth = $("#showChatPicture img").attr("data-original-width"),
				imgHeight = $("#showChatPicture img").attr("data-original-height"),
				newWidth,
				newHeight;
			var imgMaxWidth = imgWidth*5,
				imgMaxHeight = imgWidth*5,
				imgMinWidth = imgWidth/5,
				imgMinHeight = imgWidth/5;
			var percent = imgWidth / imgHeight;

			if(imgMinWidth>chatFileMsg.steting.imgShowWidth||imgMinHeight>chatFileMsg.steting.imgShowHeight){//若图片的1/5大于展示的宽高  取展示宽高
				imgMinWidth = chatFileMsg.steting.imgShowWidth;
				imgMinHeight = chatFileMsg.steting.imgShowHeight;
			}
			
			if(event.wheelDelta > 0){//滚轮向上滚动放大
				newWidth = $("#showChatPicture img").width()*1.2;
				newHeight = $("#showChatPicture img").height()*1.2;
				if(newWidth<imgMaxWidth&&newHeight<imgMaxHeight){//最大为原图的5倍
					$("#showChatPicture img").width(newWidth);
					$("#showChatPicture img").height(newHeight);
				}else{
					return;
				}
			}else{//缩小
				newWidth = $("#showChatPicture img").width()*0.8;
				newHeight = $("#showChatPicture img").height()*0.8;
				if(imgMinWidth<50){//宽度小于50
					imgMinWidth = 50;
					imgMinHeight = imgMinWidth / percent;
					if(imgMinHeight<50){//高度小于50
						percent = 50 / imgMinHeight;
						imgMinHeight = imgMinWidth*percent;
						imgMinHeight = 50;
					}
				}else if(imgMinWidth>50){//宽度小于最大宽度
					if(imgMinHeight<50){//高度大于最大高度
						percent = 50 / imgMinHeight;
						imgMinWidth = imgMinWidth*percent;
						imgMinHeight = 50;
					}
				}
				if(newWidth>imgMinWidth&&newHeight>imgMinHeight){//最小为原图的1/5倍
					$("#showChatPicture img").width(newWidth);
					$("#showChatPicture img").height(newHeight);
				}else if(imgMinWidth==chatFileMsg.steting.imgShowWidth){//最小值为展示值
					$("#showChatPicture img").width(chatFileMsg.steting.imgShowWidth);
					$("#showChatPicture img").height(chatFileMsg.steting.imgShowHeight);
					newWidth = chatFileMsg.steting.imgShowWidth;
					newHeight = chatFileMsg.steting.imgShowHeight;
				}else{
					return;
				}
			}
			var meWidth = newWidth,
				meHeight = newHeight;
			var picTop = ($("#showChatPicture .showChatPicture-content").height()-170-meHeight)/2,
				picLeft = ($("#showChatPicture .showChatPicture-content").width()-meWidth)/2;
			$("#showChatPicture .pic-wrp").attr("style","width:"+meWidth+"px;height:"+meHeight+"px;top:"+picTop+"px;left:"+picLeft+"px;");
		},
		changeMove:function(event){//移动状态置为true
			chatFileMsg.steting.move = true;
			var theDiv = $("#showChatPicture .pic-wrp");
			chatFileMsg.steting.mousedownx = event.pageX - theDiv.offset().left;
			chatFileMsg.steting.mousedowny = event.pageY - theDiv.offset().top;
			$("#showChatPicture img").css("cursor","move");
			$(document).on('mousemove',chatFileMsg.imgChange.drag);
			$(document).on('mouseup',chatFileMsg.imgChange.dragend);
		},
		drag:function(event){//鼠标移动事件
			event.preventDefault();
			event.stopPropagation();
			var imgItem = {width:0,height:0,picTop:0,picLeft:0};//图片元素的宽高和定位
			var theDiv = $("#showChatPicture .pic-wrp");
			//禁止拖放对象文本被选择
			window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

			imgItem.width = theDiv.width();
			imgItem.height = theDiv.height();
			imgItem.picTop = parseInt(event.pageY) - parseInt(chatFileMsg.steting.mousedowny);
			imgItem.picLeft = parseInt(event.pageX) - parseInt(chatFileMsg.steting.mousedownx);
			if (!chatFileMsg.steting.move){
				return false;
			}
			theDiv.attr("style","width:"+imgItem.width+"px;height:"+imgItem.height+"px;top:"+imgItem.picTop+"px;left:"+imgItem.picLeft+"px;");
		},
		dragend:function(event){//移除绑定事件  移动状态置为false
			$(document).off('mousemove',chatFileMsg.imgChange.drag);
			$(document).off('mouseup',chatFileMsg.imgChange.dragend);
			chatFileMsg.steting.move = false;
			$("#showChatPicture img").css("cursor","auto");
		}
	}	
})(this);

$(function () {
	$("#showChatPicture .pic-wrp").click(function(e){
		e.preventDefault();
		e.stopPropagation();
	});
	$("#showChatPicture .pic-button-list").click(function(e){
		e.preventDefault();
		e.stopPropagation();
	});
    $("#showChatPicture .pic-wrp img").mousedown(function () {//图片拖动
		chatFileMsg.imgChange.changeMove(event);
    });
});














