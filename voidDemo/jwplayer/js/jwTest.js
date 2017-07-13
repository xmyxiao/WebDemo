//目前使用版本为6.6
$(function(){
	//单文件
	/*jwplayer("myElement").setup({
	    playlist: [{
	        image: "img/player.jpg",
	        sources: [{
	            file: "rtmp://live.hkstv.hk.lxdns.com/live/hks"
	        }]
	    }],
	    primary: "flash",
	    autostart: false,//自动播放
	    controls:true//显示控件按钮
	});*/
	//多文件
	jwplayer("myElement").setup({
	    playlist: [
	        {
	        	image : "img/player.jpg",
	        	title : "rtmp文件",
	        	description : "rtmp直播流视频",
	            file : "rtmp://live.hkstv.hk.lxdns.com/live/hks"
	        },{
	        	image: "img/player.jpg",
	        	title : "本地mp4文件",
	        	description : "本地文件播放测试",
	            file: "img/sintel.mp4"
	        }
	    ],
	    autostart:false,
	    overstretch:true,
	    width: "100%",
	    aspectratio : "16:9",
		ratio: "100%",
		responsive: true,
		displaytitle:false,
		listbar : {
			position : "right",
			size : "20%"
		}
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
