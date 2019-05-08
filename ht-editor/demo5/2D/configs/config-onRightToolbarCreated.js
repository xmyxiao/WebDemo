(function() {

    window.hteditor_config.onRightToolbarCreated = function(editor) {
		if(!editor.userMenu){
			createUserMenu();
		}
		if(!editor.shareMenu){
			createShareMenu();
		}
        // Hide some items from right toolbar
        editor.rightToolbar.setItemVisible('zoomIn', false);
        editor.rightToolbar.setItemVisible('zoomOut', false);
        editor.rightToolbar.setItemVisible('toggleBoth', false);
        editor.rightToolbar.setItemVisible('toggleLeft', false);
        editor.rightToolbar.setItemVisible('toggleRight', false);
        
		editor.rightToolbar._view.style.borderBottom = '1px solid #a0a0a1';
        // Add some items to right toolbar
        editor.rightToolbar.addItem(createReleaseItem());
        editor.rightToolbar.addItem(createShareItem());
        editor.rightToolbar.addItem(createReturnItem());
        editor.rightToolbar.addItem(createUserInfoItem());
    };
    
    function createReleaseItem(){
    	var id = 'release';
        var toolTip = '发布';
        var iconName = 'custom/images/发布.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
        	editor.preview();
        };
        return item;
    }
    
    function createShareItem(){
    	var id = 'share';
        var toolTip = '分享';
        var iconName = 'custom/images/分享.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
        	var toolLeft = editor.rightToolbar.getView().style.width.split("px")[0] - 40;
        	editor.shareMenu.showOnView(editor.rightToolbar,toolLeft,30);
        };
        return item;
    }
    
	function createReturnItem(){
		var id = 'urlReturn';
        var toolTip = '返回';
        var iconName = 'custom/images/撤消.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
        	
        };
        return item;
	}
	
    function createUserInfoItem() {
        var id = 'userInfo';
        var toolTip = '我的账户';
        var iconName = 'custom/images/user.json';
        var item = hteditor.createItem(id, toolTip, iconName);
        item.action = function() {
        	var toolLeft = editor.rightToolbar.getView().style.width.split("px")[0];
        	editor.userMenu.showOnView(editor.rightToolbar,toolLeft,30);
        };
        return item;
    }
    //用户菜单
    function createUserMenu(){
    	var userStr = getCookie("user");
    	if(!userStr){
    		return
    	}
	    var UserJson = JSON.parse(userStr);

    	var json = [
	        {
	            label: UserJson.name,
	            action: function(item) {
	                
	            }
	        },
	        {
	            label: UserJson.level || '普通用户',
	            action: function(item) {
	                
	            }
	        },
	        {
	            label: "详情",
	            action: function(item) {
	                window.open('http://wlw.fdauto.com/');
	            }
	        },
	        {
	            label: "升级",
	            action: function(item) {
	                window.open('http://wlw.fdauto.com/');
	            }
	        }
	    ];
	    var hideUserMenu = function(e){
	    	var n = editor.userMenu;
            n.isShowing() && !n.getView().contains(e.target) && n.hide();
	    }
	    editor.userMenu = new ht.widget.ContextMenu(json);
	    window.addEventListener("touchstart", hideUserMenu, !1);
        window.addEventListener("mousedown", hideUserMenu, !1);
    }
    //分享菜单
    function createShareMenu(){
    	var userStr = getCookie("user");
    	if(!userStr){
    		return
    	}
	    var UserJson = JSON.parse(userStr);
    	var json = [
	        {
	            label: '分享到微信',
	            action: function(item) {
	                showWeixinCode();
	            }
	        },
	        {
	            label: '分享到新浪微博',
	            action: function(item) {
	            	if(!editor.currentView){
						return
					}
					var nodeUrl = editor.currentView.url;
					var item = editor.displays.accordion.dm().getDataById(nodeUrl)
			    	if(item && item._styleMap.appid){
			    		var urlStr = 'previews2D/' + item._styleMap.appid + '.html';
			    	}
					var codeStr = location.href + urlStr;
	            	var width = 600,
      					height = 600,
      					top = (screen.height-height)/2,
      					left = (screen.width-width)/2,
      					pic = location.href + UserJson.name + '/' + item.getImage();
      				
	                var shareUrl = 'http://v.t.sina.com.cn/share/share.php?&appkey=895033136';     //真实的appkey，必选参数 
			    	shareUrl += '&url='+ encodeURIComponent(codeStr);     //参数url设置分享的内容链接|默认当前页location，可选参数
			    	shareUrl += '&title=' + encodeURIComponent(document.title);    //参数title设置分享的标题|默认当前页标题，可选参数
			    	shareUrl += '&source=' + encodeURIComponent('');
			    	shareUrl += '&sourceUrl=' + encodeURIComponent('');
			    	shareUrl += '&content=' + 'utf-8';   //参数content设置页面编码gb2312|utf-8，可选参数
			    	shareUrl += '&pic=' + encodeURIComponent(pic);  //参数pic设置图片链接|默认为空，可选参数
			    	window.open(shareUrl,'_blank','width='+width+',height='+height+',top='+top+',left='+left+',toolbar=no,menubar=no,scrollbars=no, resizable=1,location=no,status=0');
	            }
	        }
	    ];
	    var hideShareMenu = function(e){
	    	var n = editor.shareMenu;
            n.isShowing() && !n.getView().contains(e.target) && n.hide();
	    }
	    editor.shareMenu = new ht.widget.ContextMenu(json);
	    window.addEventListener("touchstart", hideShareMenu, !1);
        window.addEventListener("mousedown", hideShareMenu, !1);
    }
    
    //显示微信二维码
    function showWeixinCode(){
		if(!editor.currentView){
			return
		}
		var nodeUrl = editor.currentView.url;
		var item = editor.displays.accordion.dm().getDataById(nodeUrl)
    	if(item && item._styleMap.appid){
    		var urlStr = 'previews2D/' + item._styleMap.appid + '.html';
    	}
		var codeStr = location.href + urlStr;
		
    	var dialog  = new ht.widget.Dialog();
    	dialog.setConfig({
	        title: "二维码",
	        closable: true,
	        draggable: true,
	        width:230,
	        height:280,
	        contentPadding: 10,
	        content: '<div id="weixinCode"></div>',
	        buttons: [
	            {
	                label: "关闭",
	                action: function(button, e) {
			            dialog.hide();
			        }
	            }
	        ],
	        buttonsAlign: "right"
	    });
	    dialog.show();
	    var qrcode = new QRCode(document.getElementById("weixinCode"), {
			text: codeStr,
			width: 200,
			height: 200,
			colorDark : "#000000",
			colorLight : "#ffffff",
			correctLevel : QRCode.CorrectLevel.H
		});
    }
    
})();


