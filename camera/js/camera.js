(function(global){
	var camera;
	function $(elem) {
	    return document.querySelector(elem);
	}
	camera = global.camera = {
		//判断浏览器
		init : function(){
			var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
		    var isOpera = userAgent.indexOf("Opera") > -1;
		    if (isOpera) {
		    	alert("此浏览器不支持网页拍照,请使用chrome47及以上版本");
		        return true;
		    }; //判断是否Opera浏览器
		    
		    if (userAgent.indexOf("Chrome") > -1){
		  		navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMeddia || navigator.msGetUserMedia;
				if((navigator.mediaDevices && navigator.mediaDevices.getUserMedia) || (navigator.getMedia)){
					camera.WebCamera();
				}else{
					alert("此浏览器不支持网页拍照,请使用chrome47及以上版本");
		 			return true;
				}
		 	}else{
		 		alert("此浏览器不支持网页拍照,请使用chrome47及以上版本");
		 		return true;
		 	}
		},
		//网页调用摄像头
		WebCamera : function(){
			// 获取媒体方法（旧方法）
			navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMeddia || navigator.msGetUserMedia;
			  
			var canvas = $('canvas'),
			context = canvas.getContext('2d'),
			video = $('video'),
			snap = $('#snap'),
			close = $('#close'),
			upload = $('#upload'),
			uploaded = $('#uploaded');
			 
			// 获取媒体方法（新方法）
			// 使用新方法打开摄像头
			if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
			    navigator.mediaDevices.getUserMedia({
			        video: true,
			        audio: true
			    }).then(function(stream) {
			        console.log(stream);
			        mediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[1];
			
			        video.src = (window.URL || window.webkitURL).createObjectURL(stream);
			        video.play();
			    }).catch(function(err) {
			    	console.log(err);
			    	if(err.name == "DevicesNotFoundError"){
			    		alert("请接入设备");
			    		return true;
			    	}
			    })
			}
			// 使用旧方法打开摄像头
			else if (navigator.getMedia) {
			    navigator.getMedia({
			        video: true
			    }, function(stream) {
			        mediaStreamTrack = stream.getTracks()[0];
			        video.src = (window.URL || window.webkitURL).createObjectURL(stream);
			        video.play();
			    }, function(err) {
			        console.log(err);
			    });
			}
			 
			// 截取图像
			/*snap.addEventListener('click', function() {
			    context.drawImage(video, 0, 0, 200, 150);
			}, false);*/
			 
			// 关闭摄像头
			close.addEventListener('click', function() {
			    mediaStreamTrack && mediaStreamTrack.stop();
			}, false);
			 
			// 上传截取的图像
			upload.addEventListener('click', function() {
				var snapData = canvas.toDataURL('image/png');
				uploaded.src = "data:image/png;" + snapData;
			    /*jQuery.post('/uploadSnap.php', {
			        snapData: canvas.toDataURL('image/png')
			        }).done(function(rs) {
			            rs = JSON.parse(rs);
			 
			            console.log(rs);
			 
			            uploaded.src = rs.path;
			        }).fail(function(err) {
			            console.log(err);
			        });*/
			}, false);
		}
	}	
})(this);

var mediaStreamTrack;
function $(elem) {
    return document.querySelector(elem);
}
//拍照
function carmup(){
	var canvas = $('canvas'),
		context = canvas.getContext('2d'),
		video = $('video');
	context.drawImage(video, 0, 0, 200, 150);
	var snapData = canvas.toDataURL('image/png'),
	uploaded = $('#uploaded');
	uploaded.src = "data:image/png;" + snapData;
}
