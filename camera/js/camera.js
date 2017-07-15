function $(elem) {
    return document.querySelector(elem);
}
// 获取媒体方法（旧方法）
navigator.getMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMeddia || navigator.msGetUserMedia;
  
var canvas = $('canvas'),
context = canvas.getContext('2d'),
video = $('video'),
snap = $('#snap'),
close = $('#close'),
upload = $('#upload'),
uploaded = $('#uploaded'),
mediaStreamTrack;
 
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
snap.addEventListener('click', function() {
    context.drawImage(video, 0, 0, 200, 150);
}, false);
 
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
 