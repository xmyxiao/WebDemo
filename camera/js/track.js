//  无法直接使用  仅用于记录
var mediaStreamTrack,userFaceCheck;
userFaceCheck = {
	time : 5,
	errTime : 0,
	imgUrl : "",
	checkFun: null,
	errorDialog : false,
	list : [],
	tracker : null,
	isCanCheck : true
}
userFaceCheck.showErrorMsg = function(msg){
	if(userFaceCheck.errorDialog){
		return;
	}
	$("#aceCarmeMsg").text(msg);
	userFaceCheck.errTime += 1;
	if(userFaceCheck.errTime >= 5){
		userFaceCheck.time = 0;
		userFaceCheck.errorDialog = true;
		showMsgText("检测错误次数过多，请重新采集");
	}
}
//开始采集
function cameraInit(item){
	var $collectionBtn =  $(item);
	var $showMsg = $(".face-carme-title");
	var isCanmera = cameraCanInit();
	if(isCanmera){
		$showMsg.attr("style","visibility: visible;");
		$collectionBtn.attr("style","visibility:hidden;");
		$("#aceCarmeMsg").text("");
		userFaceCheck.time = 5;
		userFaceCheck.errTime = 0;
		userFaceCheck.imgUrl = "";
		userFaceCheck.checkFun = null;
		userFaceCheck.errorDialog = false;
		if(userFaceCheck.list == 0){
			faceCollection();
		}
		userFaceCheck.list = [];
		userFaceCheck.isCanCheck = true;
		$("#faceImgList").empty();
		
	}
}
//判断是否支持拍照
function cameraCanInit(){
	var userAgent = navigator.userAgent;
	if(!userAgent){
		alert("此浏览器不支持拍照功能，建议使用Chrome47及以上版本！");
		return false;
	}
	if(userAgent.indexOf("Chrome") < 0 && userAgent.indexOf("Opera") < 0){ //限制浏览器
		alert("此浏览器不支持拍照功能，建议使用Chrome47及以上版本！");
		return false;
	}
	navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMeddia || navigator.msGetUserMedia;
	if((navigator.mediaDevices && navigator.mediaDevices.getUserMedia) || (navigator.getMedia)){
		//实际网页拍照功能  需要canvas与video标签
		var video = $('#faceCarmeVideo')[0],
		canvas = $('#faceCarmeCanvas')[0],
		context = canvas.getContext('2d');
		if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia){
			navigator.mediaDevices.getUserMedia({
				video : true,
				audio : true
			}).then(function(stream){
				mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[1];
				video.src = (window.URL || window.webkitURL).createObjectURL(stream);
			    video.play();
			}).catch(function(err){
				console.log(err);
				if(err.name == "DevicesNotFoundError"){
		    		alert("请接入设备");
		    		return false;
		   		}
			});
		}
		else if(navigator.getMedia){
			navigator.getMedia({
				video : true
			},function(stream){
				mediaStreamTrack = stream.getTracks()[0];
				video.src = (window.URL || window.webkitURL).createObjectURL(stream);
			    video.play();
			},function(err){
				console.log(err);
				if(err.name == "DevicesNotFoundError"){
		    		alert("请接入设备");
		    		return false;
		   		}
			});
		}			
	}else{
		alert("此浏览器不支持拍照功能，请更换浏览器！");
		return false;
	}
	return true;
}
//人脸检测
function faceCollection() {
	var video = document.getElementById('faceCarmeVideo');
    var canvas = document.getElementById('faceCarmeCanvas');
    var context = canvas.getContext('2d');

    var tracker = new tracking.ObjectTracker('face');
    tracker.setInitialScale(4);
    tracker.setStepSize(2);
    tracker.setEdgesDensity(0.1);

    userFaceCheck.tracker = tracking.track('#faceCarmeVideo', tracker, { camera: true });
    tracker.on('track', function(event) {
    	
    	context.clearRect(0, 0, canvas.width, canvas.height);
    	
        event.data.forEach(function(rect) {
            context.strokeStyle = '#a64ceb';
            context.strokeRect(rect.x, rect.y, rect.width, rect.height);
            context.font = '11px Helvetica';
            context.fillStyle = "#fff";
            context.fillText('x: ' + rect.x + 'px', rect.x + rect.width + 5, rect.y + 11);
            context.fillText('y: ' + rect.y + 'px', rect.x + rect.width + 5, rect.y + 22);
            if(userFaceCheck.time >= 1){
            	cameraUp();
        	}
        });
    });

};
//拍照
function cameraUp(){
	var video = $('#faceCarmeVideo')[0],
	canvas = $('#faceCarmeCanvas')[0],
	context = canvas.getContext('2d');
	
	if(!userFaceCheck.isCanCheck){
		return;
	}
	
	if(userFaceCheck.checkFun){
		window.clearInterval(userFaceCheck.checkFun);
	}
	
	userFaceCheck.isCanCheck = false;
	
	userFaceCheck.checkFun = window.setInterval(setUserCheckTrue,500);
	
	context.drawImage(video,0,0,320,240);
	var imgData = canvas.toDataURL('image/png');
	var imgUpData = imgData.split("data:image/png;base64,")[1];
	userFaceCheck.imgUrl = imgData;
	$.ajax({
		type:"post",
		url:userFaceCheckUrl,
		data:{
			base64String : imgUpData
		},
		success : function(data){
			var reData = JSON.parse(data);
			if(reData.msg){
				userFaceCheck.showErrorMsg(reData.msg);
				return;
			}
			if(reData.fImageId != ""){
				userFaceCheck.time -= 1 ;
				reData.faces = JSON.parse(reData.face_token);
				if(reData.faces.length != 1){
					userFaceCheck.showErrorMsg("检测到人脸不唯一，请调整摄像头确保仅有一张人脸。");
					if(!userFaceCheck.errorDialog){
						userFaceCheck.time += 1 ;
					}
					return;
				}
				if(isArrRepeat(reData.fImageId,userFaceCheck.list)){
					$("#aceCarmeMsg").text("请转换姿势");
					userFaceCheck.time += 1 ;
					return;
				}
				if(userFaceCheck.time < 0){
					return;
				}
				$("#aceCarmeMsg").text("");
				var item = {
					token : reData.faces[0].face_token,
					id : reData.fImageId,
					fPhotoId : reData.fPhotoId,
					savePath : reData.fSavePath
				}
				userFaceCheck.list.push(item);
				var htmlImg = '<img src='+userFaceCheck.imgUrl+' style="width: 100px;height: 75px;margin: 10px 4px;" />';
				$("#faceImgList").append(htmlImg);
				if(userFaceCheck.time < 1){
					//tracker.off("track");
					$("#aceCarmeMsg").text("图片采集完成");
					stopCamera();
					//video.src = "";
					$(".btn-upload-dialog").attr("style","visibility: visible;").text("重新采集");
					$(".face-carme-title").attr("style","visibility:hidden;");
					if(userFaceCheck.checkFun){
						window.clearInterval(userFaceCheck.checkFun);
					}
				}
			}else{
				userFaceCheck.showErrorMsg("验证失败");
			}
		},
		error : function(data){
			userFaceCheck.showErrorMsg("验证失败");
		}
	});
}
function setUserCheckTrue(){
	if(typeof userFaceCheck == "object"){
		userFaceCheck.isCanCheck = true;
	}
}
function newGuid() {
	var guid = "";
	for (var i = 1; i <= 32; i++) {
		var n = Math.floor(Math.random() * 16.0).toString(16);
		guid += n;
		if ((i == 8) || (i == 12) || (i == 16) || (i == 20))
			guid += "-";
	}
	return guid;
}
//将人脸数据填到表格中
function setImgDataToPage(){
	if(userFaceCheck.list.length != 5){
		return;
	}
	var imgData = [];
	for(var i = 0; i < userFaceCheck.list.length; i++){
		/*var item = {	 
			fFaceToken : userFaceCheck.list[i].token,
			fSavePath : userFaceCheck.list[i].savePath,
			fImageId : userFaceCheck.list[i].id
		}*/
		imgData.push(userFaceCheck.list[i].fPhotoId);
	}
	$("#list").val(imgData.join(",")); 
	$(".btn-upload-form").text("重新采集");
}
function isArrRepeat(id,arr){
	if(arr.length > 0){
		for(var i = 0; i < arr.length; i++){
			if(id == arr[i].id){
				return true;
			}
		}
	}
	return false;
}
//停止监听
function stopCamera(){
	if(userFaceCheck.tracker){
		userFaceCheck.tracker.stop();
		var canvas = document.getElementById('faceCarmeCanvas');
	    var context = canvas.getContext('2d');
	    context.clearRect(0, 0, canvas.width, canvas.height);
	}
}
