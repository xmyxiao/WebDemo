$(function(){
	jwplayer("myElement").setup({
	    playlist: [{
	        image: "img/player.jpg",
	        sources: [{
	            file: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
	        },{
	            file: ""
	        }]
	    }],
	    height: 360,
	    primary: "flash",
	    autostart: true,//自动播放
	    controls:false,//不显示控件按钮
	    width: 640
	});
	//获取播放时间
	//jwplayer("myElement").getDuration();
	//跳转视频播放时间 
	//jwplayer("myElement").seek(120);
});
