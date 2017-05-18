<!DOCTYPE html>
<html>
    <head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
        <title>提问端</title>
        <!-- 公共css -->
		<link rel="stylesheet" href="css/lib/normalize.css">
		<link rel="stylesheet" href="css/font/iconfont.css" type="text/css">
		<link rel="stylesheet" href="css/lib/default.css" />
		<link rel="shortcut icon" href="images/favicon.ico" type="image/x-icon" />
		<!-- 公共css结束 -->
		<!-- 页面css -->
		<link rel="stylesheet" href="css/customservicemrg.css" type="text/css">
		<link rel="stylesheet" href="css/message.css" type="text/css">
		<!-- 页面css结束 -->
    </head>
    <body>
    	<div style="display: none;">
    		<input type="text" id="userJid" value="" />
    		<input type="password" id="userPass" value="" />
    		<input type="text" id="toJid" value="">
    		<input type="password" id="httpAddress" value=${httpAddress} />
			<input type="password" id="fileAddress" value=${fileAddress} />
    	</div>
    	<!-- 客服页面主体 -->
    	<div id="customservicemrg" class="clearfix">
    		<!-- 左侧侧边栏 -->
    		<div id="webImSidebar" class="ui-fl">
    			<!-- 个人信息 -->
    			<div class="sidebar-header">
    				<h1 class="sidebar-title">在线客服系统</h1>
    				<div class="sidebar-user">
						<div class="avatar">
							<img class="img" src="images/webwxgeticon.jpg">
						</div>
						<div class="info">
							<h3 class="nickname">
								<span class="sidebar-user-name ui-textellipsis" data-bind="text:userName">人事客服/21656</span>
								<span class="sidebar-user-state ui-textellipsis"></span>
								<span class="sidebar-user-number ui-textellipsis">9865856365</span>
							</h3>
						</div>
					</div>
    			</div>
    			<!-- 个人信息结束 -->
    			<!-- 搜索框 -->
    			<div class="sidebar-body">
    				<div class="sidebar-search">
						<i class="sidebar-search-icon iconfont icon-sousuo"></i>
						<input type="text" value="" class="frm-search" id="persionSearch" placeholder="搜索">
					</div>
    			</div>
    			<!-- 搜索框结束 -->
				<!-- 聊天列表 -->
				<div class="sidebar-list ui-scroll-bar-styleFc" id="chatList">
					
				</div>
				<!-- 聊天列表结束 -->
				<!-- 团队列表 -->
				<div class="sidebar-list ui-scroll-bar-styleFc" id="groupList" style="display: none;">
					
				</div>
				<!-- 团队列表结束 -->
				<!-- 最近列表 -->
				<div class="sidebar-list ui-scroll-bar-styleFc" id="latelyList" style="display: none;">
					
				</div>
				<!-- 最近列表结束 -->
    		</div>
    		<!-- 左侧侧边栏结束 -->
    		<!-- 聊天窗主体 -->
    		<div id="webImMain" class="ui-fl">
    			<h2 class="main-header">在线客服公众号</h2>
    			<!-- 消息显示 -->
    			<div class="main-content">
    				<div class="main-content-body ui-scroll-bar-styleFc">
    					<div class="main-content-chat">
    						<div class="chat-history system-message">
    							<span class="content">
    								<a class="system-history" href="javascript:void(0);">点击加载更多</a>
    							</span>
    						</div>
    						<div class="chat-history-end system-message">
    							<span class="content">
    								<hr class="in-bl system-line" size="1" color="#e5e8ea" style="margin-right: 10px;" />
    								<span class="system-history-end">以上是历史消息</span>
    								<hr class="in-bl system-line" size="1" color="#e5e8ea" style="margin-left: 10px;" />
    							</span>
    						</div>
    						<div class="chat-time system-message">
    							<span class="content">
    								<span class="in-bl system-time">13:01</span>
    							</span>
    						</div>
    						<div class="message-other clearfix">
    							<div class="in-bl message-content">
    								<span class="message-time" style="display:none;">2017-04-10 11:31:09</span>
    								<div class="message-bubble">
    									<span class="bubble-text">wenb</span>
    								</div>
    							</div>
    							<img src="images/webwxgeticon.jpg" class="photo-other">
    						</div>
    						<div class="message-me clearfix">
    							<img src="images/webwxgeticon.jpg" class="photo-other">
    							<div class="in-bl message-content">
    								<span class="message-time" style="display:none;">2017-04-10 11:31:09</span>
    								<div class="message-bubble">
    									<span class="bubble-text">wenb</span>
    								</div>
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
    			<!-- 消息显示结束 -->
    			<!-- 输入框 -->
    			<div class="main-text clearfix">
    				<!-- 输入框头部 -->
    				<div class="main-toolbar">
						<a class="main-toolbar-items" id="webFace" href="javascript:void(0);" title="表情">
							<i class="in-bl main-toolbar-icon main-toolbar-face iconfont icon-biaoqing4"></i>
						</a>
						<a class="in-bl main-toolbar-items main-toolbar-file" href="javascript:void(0);" title="图片和文件">
							<i class="in-bl main-toolbar-icon main-toolbar-pic iconfont icon-tupian"></i>
							<input type="file" name="" id="file">
							<input type="button" name="" id="upLoad" value="upLoad" />
						</a>
						<a class="main-toolbar-items main-toolbar-evaluate" href="javascript:void(0);" title="满意度">
							<i class="in-bl main-toolbar-icon main-toolbar-face iconfont icon-xin"></i>
							<span>满意度评价</span>
						</a>
						<div class="face-panel">
							<div class="face-expression">
							<ul>
								<li><a href="javascript:void(0)" id="qq-show">QQ表情</a></li>
							</ul>
							<div class="face-show">
								<div class="face-content face-content-sel">
									
								</div>
							</div>
							</div>
						</div>
					</div>
					<!-- 输入框头部结束 -->
					<div class="ui-fr main-send">  
    					<a href="javascript:void(0);" class="in-bl main-send-text" id="msgSend">发送</a>
    				</div>
    				<div contenteditable="true" class="ui-fl main-text-msg" id="msgText"></div>
    			</div>
    			<!-- 输入框结束 -->
    		</div>
    		<!-- 聊天窗主体结束 -->
    		<!-- 右侧常见问题列表 -->
    		<div id="webImProblem" class="ui-fl">
    			<h2 class="problem-header">常见问题</h2>
    			<div class="problem-content">
    				<h3 class="problem-content-title">全部问题</h3>
    				<div class="sidebar-search">
						<i class="sidebar-search-icon iconfont icon-sousuo"></i>
						<input type="text" value="" class="frm-search" id="problemSearch" placeholder="请输入关键字搜索..">
					</div>
					<div class="problem-empty">
						<i class="iconfont icon-kongshuju"></i>
					</div>
					
    			</div>
    		</div>
    		<!-- 右侧常见问题列表结束 -->
    		<!-- 页尾 -->
	    	<div class="ui-fl webImFoot">
	    		技术支持：@2000-2100福州奥迈软件有限公司
	    	</div>
	    	<!-- 页尾结束 -->
    	</div>
    	<!-- 客服页面主体结束 -->
    	<!-- 图片展示 -->
    	<div id="showChatPicture" style="display:none;">
			<div class="showChatPicture-overlay"></div>
			<div class="showChatPicture-content">
				<div class="pic-container">
					<div class="pic-wrp" draggable="true">
						<img src="" onmousewheel="chatFileMsg.imgChange.changeSize()" />
						<a href="javascript:void(0);" class="img-preview-close" title="关闭" onclick="chatFileMsg.showFileMsg.closeBigPicture();">
							<i class="web-wechat-close-window"></i>
						</a>
					</div>
				</div>
				<div class="pic-button-container">
					<ul class="pic-button-list">
						<li class="pic-button-item">
							<a onclick="chatFileMsg.showFileMsg.showPrevPicture()" href="javascript:void(0);" title="查看上一个">
								<i class="pic-button-ico pic-button-left"></i>
							</a>
						</li>
						<li class="pic-button-item">
							<a onclick="chatFileMsg.showFileMsg.downloadPicture()" href="javascript:void(0);" title="下载图片">
								<i class="pic-button-ico pic-button-download"></i>
							</a>
						</li>
						<li class="pic-button-item">
							<a onclick="chatFileMsg.showFileMsg.rotatePicture()" href="javascript:void(0);" title="旋转图片">
		                    <i class="pic-button-ico pic-button-rotate"></i>
		                </a>
						</li>
						<li class="pic-button-item">
							<a onclick="chatFileMsg.showFileMsg.showNextPicture()" href="javascript:void(0);" title="查看下一个">
								<i class="pic-button-ico pic-button-right"></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 图片展示结束 -->
    </body>
    <!-- 插件js -->
    <script type="text/javascript" src="js/lib/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="js/lib/strophe.js"></script>
    <script type="text/javascript" src="js/lib/knockout-3.4.1.js"></script>
    <script type="text/javascript" src="js/lib/plupload.full.min.js"></script>
    <script type="text/javascript" src="js/lib/md5.js"></script>
    <script type="text/javascript" src="js/lib/makePy.min.js"></script>
    <script type="text/javascript" src="js/lib/jquery.lazyload.js"></script>
    
    <!-- 插件js结束 -->
    <!-- 页面js -->
    <script type="text/javascript" src="js/webim/IM.js"></script>
    <script type="text/javascript" src="js/webim/webim.js"></script>
    <script type="text/javascript" src="js/webim/page.js"></script>
    <script type="text/javascript" src="js/webim/fileMsg.js"></script>
    <!-- 页面js结束 -->
</html>