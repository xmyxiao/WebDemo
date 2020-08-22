**rtmp协议下的直播**</br>
　　流媒体常用格式分为rtsp、rtmp、hls</br>
　　rtsp使用较少，但是监控摄像头所传输的文件格式就是rtsp</br>
　　一般rtsp使用要先安装vlc软件，而且只有ie支持这个模式</br>

　　rtmp一般使用 Flash Player 作为播放器客户端  一般电脑都有安装  所以能实现无插件的直播</br>
　　不过一般情况下 Flash Player在安卓手机上需要安装插件   安卓4.2.2开始不支持flash插件</br>
　　而苹果设备直接不支持flash所以在手机直播上仍然存在问题</br>
　　不会丢包  就是说在网络不好的情况下会先缓存包文件  在网络好的时候发送</br>
　　rtmp  可以使用jwplayer进行转换为flash来播放</br>

　　hls支持html5播放  苹果支持的播放格式  但是延迟比较高  不适合互动的直播</br>
　　http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8</br>
　　这个为hls的直播地址  苹果支持的格式 但是pc端想要播放需要安装插件</br>