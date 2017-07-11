$(function(){
	/*jwplayer("myElement").setup({
	    playlist: [{
	        image: "img/player.jpg",
	        sources: [{
	            file: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
	        },{
	            file: ""
	        }]
	    }],
	    primary: "flash",
	    autostart: false,//自动播放
	    controls:true//显示控件按钮
	});*/
	jwplayer("myElement").setup({
		playlist: [{
	        "file": "rtmp://live.hkstv.hk.lxdns.com/live/hks"
	    },{
	        "file": "img/sintel.mp4"
	    }],
	    /*playlist: [{
	        image: "img/player.jpg",
	        sources: [{
	            file: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
	        },{
	            file: "img/sintel.mp4"
	        }]
	    }],*/
	    autostart:false,
	    overstretch:true,
	    width: "100%",
		ratio: "100%",
		responsive: true
	});
	//获取播放时间
	//jwplayer("myElement").getPosition();
	//跳转视频播放时间 
	//jwplayer("myElement").seek(120);
	/*
	jwplayer(0).playlistItem(1); //播放下标为1的视频

	jwplayer(0).playlistNext();//播放下一个视频

	jwplayer(0).playlistPrev();//播放上一个视频
	 * */
});
