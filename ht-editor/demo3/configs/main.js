(function() {
	window.handleEditorCreated = function(editor) {
		
		var view = editor.mainPane.getView();
	    view.style.left = '0';
	    view.style.top = '0';
	    view.style.right = '0';
	    view.style.bottom = '0';
	    view.style.background = '#fff';
	    
	    var topBorderPane = window.topBorderPane = new ht.widget.BorderPane(),
	    	topBorderPaneView = topBorderPane.getView(),
	    	topLogo = createTopLogo(),
	    	topRightTool = createTopRightTool(),
	    	topMenu = createTopMenu();
	    topBorderPaneView.style.left = '0';
	    topBorderPaneView.style.top = '0';
	    topBorderPaneView.style.right = '0';
	    topBorderPaneView.style.bottom = '30px';
	    
	    topBorderPane.setLeftView(topLogo);
	    topBorderPane.setCenterView(topMenu);
	    topBorderPane.setRightView(topRightTool,'85');
	    
	    changeEditorLeftView();
	    document.getElementById('displaysContent').style.display = 'block';
	    document.getElementById('symbolsContent').style.display = 'block';
	    createDisplaysDialog();
	    createSymbolsDialog();
	    	    
	    editor.mainPane._topView.setTopView(topBorderPaneView);
	    editor.mainPane._topView.setHeight('60');
	    //组件板块隐藏(根据权限)
	    editor.leftTopTabView.remove(2);
	    
	    document.body.appendChild(view);
	    window.addEventListener('resize', function (e) {
	    	editor.mainPane.iv();
	        setTimeout(function(){
	        	topBorderPane.iv();
	        },100);
	        
	    }, false);
	}
	//顶部左侧菜单
	function createTopMenu(){
		var json = [
	        {
	            label: "文件",
	            items: [
	                {
	                    label: "新建图纸",
	                    action: function(item) {
	                    	editor.displaysDialog.show();
	                    	document.querySelector(".displaysfileUrl").value = 'displays/';
							document.querySelector(".displaysfileName").value = '';
	                        //editor['newDisplayView']();
	                    }
	                },
	                {
	                    label: "新建图标",
	                    action: function(item) {
	                    	editor.symbolsDialog.show();
	                    	document.querySelector(".symbolsfileUrl").value = 'symbols/';
							document.querySelector(".symbolsfileName").value = '';
	                        //editor['newSymbolView']();
	                    }
	                },
	                {
	                    label: "新建组件",
	                    action: function(item) {
	                        editor['newComponent']();
	                    }
	                }
	            ]
	        },
	        {
	            label: "编辑",
	            items: [
	                {
	                    label: "拷贝",
	                    action: function(item) {
	                        editor['copy']();
	                    }
	                },
	                {
	                    label: "粘贴",
	                    action: function(item) {
	                        editor['paste']();
	                    }
	                }
	            ]
	        },
	        {
	            label: "窗口",
	            action: function(item) {
	                alert(item.label);
	            }
	        },   
	        {
	            label: "帮助",
	            items: [
	                {
	                    label: "联系我们",
	                    action: function(item) {
			                window.open('http://wlw.fdauto.com/');
			            }
	                },
	                {
	                    label: "使用说明",
	                    action: function(item) {
			                 window.open('http://wlw.fdauto.com/');
			            }
	                },
	                {
	                    label: "发布日志",
	                    action: function(item) {
			                 window.open('http://wlw.fdauto.com/');
			            }
	                }
	            ]
	        }
	    ];
	    
	    var menu = new ht.widget.Menu(json);
	    menu.enableGlobalKey();
	    var menuView = menu.getView();
	    menuView.style.background = '#535353';
	    menu.setHoverBackground('#535353')
	    return menu;
	}
	//顶部右侧工具条
	function createTopRightTool(){
		ht.Default.setImage('full_logo', "symbols/icon-ht/全屏.json");
		var toolbar = new ht.widget.Toolbar([
		    {
	            icon: 'editor.toggleleft',
				id: "toggleLeft",
				toolTip: "显示/隐藏 左侧",
				unfocusable: true,
				action: function (){
	            	editor.toggleLeft();
	            },
		    },
		    'separator',
		    {
				icon: 'editor.toggleright',
				id: "toggleRight",
				toolTip: "显示/隐藏 右侧",
				unfocusable: true,
				action: function (){
	            	editor.toggleRight();
	            },
		    },
		    'separator',
		    {
				icon: 'full_logo',
				id: "fullScreen",
				toolTip: "全屏",
				unfocusable: true,
				action: function (){
	            	ht.Default.toggleFullscreen(editor.mainPane);
	            },
		    }
	    ]);
	
	    toolbar.enableToolTip();
	    toolbar.setItemGap(6);
	    //toolbar.setStickToRight(true);
	    toolbar.setSeparatorColor('#717171');
	
	
	    toolbarView = toolbar.getView();
	    toolbarView.style.background = '#535353';
	    return toolbar;                
	}
	//顶部logo
	function createTopLogo(){
		ht.Default.setImage('top_left_logo', "symbols/icon-ht/logo.json");
	    var logoSrc = 'top_left_logo';
		var json = [
	        {
	            icon: logoSrc
	        }
	    ];
	    
	    var menu = new ht.widget.Menu(json);
	    menu.enableGlobalKey();
	    menu.setLayout('iconsonly');
	
	    var menuView = menu.getView();
	    menuView.style.background = '#535353';
		menuView.style.paddingLeft = '10px';
	    menu.setHoverBackground('#535353')
	    return menu;
	}
	//leftTopTabView 样式调整
	function changeEditorLeftView(){
		var leftTopTabView = editor.leftTopTabView;
		leftTopTabView.setTabPosition('left');
	    leftTopTabView.setTabHeight(45);
	    leftTopTabView.setTabGap(5);
	    leftTopTabView.getTitleDiv().style.borderRight = '1px solid #e4e4e4';
	    
	    var displaysTab = editor.displaysTab,
	    	symbolsTab = editor.symbolsTab,
	    	componentsTab = editor.componentsTab,
	    	assetsTab = editor.assetsTab;
	    
	    //displaysTab.setIcon();
	    
	    ht.Default.setImage('tabIconDisplays', "symbols/icon-ht/图纸.json");
	    ht.Default.setImage('tabIconSymbols', "symbols/icon-ht/图标.json");
	    ht.Default.setImage('tabIconComponents', "symbols/icon-ht/组件.json");
	    ht.Default.setImage('tabIconAssets', "symbols/icon-ht/资源.json");
	    
	    displaysTab.setName('');
	    displaysTab.setIcon('tabIconDisplays');
	    displaysTab.setToolTip('图纸');
	    
	    symbolsTab.setName('');
	    symbolsTab.setIcon('tabIconSymbols');
	    symbolsTab.setToolTip('图标');
	    
 		componentsTab.setName('');
	    componentsTab.setIcon('tabIconComponents');
	    componentsTab.setToolTip('组件');
	    
	    assetsTab.setName('');
	    assetsTab.setIcon('tabIconAssets');
	    assetsTab.setToolTip('资源');		
	}
	
	function createDisplaysDialog(){
		var dialog = editor.displaysDialog = new ht.widget.Dialog();
		
        dialog.setConfig({
            title: "新增图纸",
            closable: true,
            draggable: true,
            contentPadding: 10,
            content: document.getElementById("displaysContent"),
            buttons: [
                {
                    label: "确定",
                    action: function(button, e) {
                    	var fileUrl = dialog.getView().querySelector(".displaysfileUrl").value,
                    		fileName = dialog.getView().querySelector(".displaysfileName").value;
                    	if(!fileName || fileName === '' || !fileUrl || fileUrl === ''){
                    		editor.showMessage('文件路径与文件名称必须填写！');
                    		return;
                    	}
                    	var fileUrlArr = fileUrl.split('/')
                    	if(!fileUrlArr || fileUrlArr.length < 2 || fileUrlArr.indexOf('displays') < 0){
                    		editor.showMessage('文件路径不正确！');
                    		return;
                    	}
                    	var saveUrl = fileUrl + "/" + fileName + ".json";
                    	if(editor.getFileNode(saveUrl)){
                    		editor.showMessage('文件名冲突！');
                    		return;
                    	}
                    	editor['newDisplayView']();
                    	editor.save('',saveUrl);
			            dialog.hide();
			        }
                },
                {
                    label: "取消",
                    action: function(button, e) {
			            dialog.hide();
			        }
                }
            ],
            buttonsAlign: "right"
        });
	}
	
	function createSymbolsDialog(){
		var dialog = editor.symbolsDialog = new ht.widget.Dialog();
		
        dialog.setConfig({
            title: "新增图标",
            closable: true,
            draggable: true,
            contentPadding: 10,
            content: document.getElementById("symbolsContent"),
            buttons: [
                {
                    label: "确定",
                    action: function(button, e) {
                    	var fileUrl = dialog.getView().querySelector(".symbolsfileUrl").value,
                    		fileName = dialog.getView().querySelector(".symbolsfileName").value;
                    	if(!fileName || fileName === '' || !fileUrl || fileUrl === ''){
                    		editor.showMessage('文件路径与文件名称必须填写！');
                    		return;
                    	}
                    	if(fileUrl === hteditor_config.publicIconPath){
                    		editor.showMessage('无法在公共图标中新增图标！');
                    		return;
                    	}
                    	var fileUrlArr = fileUrl.split('/')
                    	if(!fileUrlArr || fileUrlArr.length < 2 || fileUrlArr.indexOf('symbols') < 0){
                    		editor.showMessage('文件路径不正确！');
                    		return;
                    	}
                    	var saveUrl = fileUrl + "/" + fileName + ".json";
                    	if(editor.getFileNode(saveUrl)){
                    		editor.showMessage('文件名冲突！');
                    		return;
                    	}
                    	editor['newSymbolView']();
                    	editor.save('',saveUrl);
			            dialog.hide();
			        }
                },
                {
                    label: "取消",
                    action: function(button, e) {
			            dialog.hide();
			        }
                }
            ],
            buttonsAlign: "right"
        });
	}
})();

function guid() {
    var guid = "";
    for (var i = 1; i <= 32; i++){
      var n = Math.floor(Math.random()*16.0).toString(16);
      guid +=   n;
      if((i==8)||(i==12)||(i==16)||(i==20))
        guid += "-";
    }
    return guid; 
}
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
 
    if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
    } else {
      // rfc4122, version 4 form
      var r;
 
      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';
 
      // Fill in random data.  At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random()*16;
          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
        }
      }
    }
 
    return uuid.join('');
}
/*
function ajax(options){
    var xhr = null;
    var params = formsParams(options.data);
    //创建对象
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest()
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    // 连接
    if(options.type == "GET"){
        xhr.open(options.type,options.url + "?"+ params,options.async);
        xhr.send(null)
    } else if(options.type == "POST"){
        xhr.open(options.type,options.url,options.async);
        xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        xhr.send(params);
    }
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200 && typeof options.success === 'function'){
            options.success(xhr.responseText);
        }else if(xhr.readyState == 4 && xhr.status >= 400 && typeof options.fail === 'function'){
        	options.fail(xhr);
        }
    }
    function formsParams(data){
        var arr = [];
        for(var prop in data){
            arr.push(prop + "=" + data[prop]);
        }
        return arr.join("&");
    }
}*/












