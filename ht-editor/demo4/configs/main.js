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
	    	    
	    editor.mainPane._topView.setTopView(topBorderPaneView);
	    editor.mainPane._topView.setHeight('60');
	    //组件板块隐藏(根据权限)
	    var userStr = getCookie("user");
	    if(!userStr){
	    	userStr = '{}'
	    }
	    var UserJson = JSON.parse(userStr);
	    
	    if(!UserJson || UserJson.permission !== "admin"){
	    	//editor.leftTopTabView.remove(2);
	    	userPermission = false
	    }else{
	    	userPermission = true
	    }
	    //增加用户可创建图纸数
	    hteditor_config.displayNumber = 1;
	    //图纸右键不可见
	    //editor.displays.accordion.menu.getView().style.display = 'none'
	    //菜单不可见项目
	    editor.symbols.accordion.menu.setItemVisible('locateFile',false);
	    //editor.symbols.accordion.menu.setItemVisible('newFolder',false);
	    addEditorDrapEvent();
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
	                /*{
	                    label: "新建图纸",
	                    action: function(item) {
	                    	if(hteditor_config.displayNumber < 1){
	                    		editor.showMessage('创建图纸个数达到上限！');
	                    		return
	                    	}
	                    	createDisplaysDialog();
	                    }
	                },*/
	                {
	                    label: "新建图标",
	                    action: function(item) {
	                    	createSymbolsDialog();
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
			                window.open('http://bbs.gkiiot.com/');
			            }
	                },
	                {
	                    label: "使用说明",
	                    action: function(item) {
			                 window.open('http://bbs.gkiiot.com/');
			            }
	                },
	                {
	                    label: "发布日志",
	                    action: function(item) {
			                 window.open('http://bbs.gkiiot.com/');
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
		ht.Default.setImage('full_logo', "custom/images/全屏.json");
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
		ht.Default.setImage('top_left_logo', "custom/images/logo.json");
	    var logoSrc = 'top_left_logo';
		var json = [
	        {
	            icon: logoSrc
	        }
	    ];
	    
	    var menu = new ht.widget.Menu(json);
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
	    
	    ht.Default.setImage('tabIconDisplays', "custom/images/图纸.json");
	    ht.Default.setImage('tabIconSymbols', "custom/images/图标.json");
	    ht.Default.setImage('tabIconComponents', "custom/images/组件.json");
	    ht.Default.setImage('tabIconAssets', "custom/images/资源.json");
	    
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
		
})();

function createDisplaysDialog(){
	var dialog  = new ht.widget.Dialog();
	var formPane = new ht.widget.FormPane();
	var fileUrlList = editor.displays.accordion.dirs || [];
	var fileUrlName = [],fileUrlId = [];
	for(var i = 0; i < fileUrlList.length; i++){
		fileUrlName.push(fileUrlList[i].getName());
		fileUrlId.push(fileUrlList[i].getId());
	}
	formPane.addRow([
    	{
    		element:'文件路径',
    		align: 'right'
    	},
        {
            id: 'fileUrl',
            comboBox: {
            	value: '',
                values: fileUrlId,
                labels: fileUrlName
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'文件名称',
    		align: 'right'
    	},
        {
            id: 'fileName',
            textField: {
                text: ''
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'访问密码',
    		align: 'right'
    	},
        {
            id: 'filePassWord',
            textField: {
                text: ''
            }
        }
    ], [55, 0.1]);
    
    dialog.setConfig({
        title: "新增图纸",
        closable: true,
        draggable: true,
        width:260,
        height:160,
        contentPadding: 10,
        content: formPane,
        buttons: [
            {
                label: "确定",
                action: function(button, e) {
                	var fileUrl = formPane.v('fileUrl'),
                		fileName = formPane.v('fileName');
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
                	hteditor_config.displayNumber--;
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
    dialog.show();
}
function createSymbolsDialog(){
	var dialog = new ht.widget.Dialog();
	var formPane = new ht.widget.FormPane();
	var fileUrlList = editor.symbols.accordion.dirs || [];
	var fileUrlName = [],fileUrlId = [];
	for(var i = 0; i < fileUrlList.length; i++){
		//if(fileUrlList[i].getId() === hteditor_config.noPublicIconPath){
			fileUrlName.push(fileUrlList[i].getName());
			fileUrlId.push(fileUrlList[i].getId());
		//}
	}
	formPane.addRow([
    	{
    		element:'文件路径',
    		align: 'right'
    	},
        {
            id: 'fileUrl',
            comboBox: {
            	value: '',
                values: fileUrlId,
                labels: fileUrlName
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'文件名称',
    		align: 'right'
    	},
        {
            id: 'fileName',
            textField: {
                text: ''
            }
        }
    ], [55, 0.1]);
    dialog.setConfig({
        title: "新增图标",
        closable: true,
        draggable: true,
        contentPadding: 10,
        width:260,
        height:150,
        content: formPane,
        buttons: [
            {
                label: "确定",
                action: function(button, e) {
                	var fileUrl = formPane.v('fileUrl'),
                		fileName = formPane.v('fileName');
                	if(!fileName || fileName === '' || !fileUrl || fileUrl === ''){
                		editor.showMessage('文件路径与文件名称必须填写！');
                		return;
                	}
                	/*if(fileUrl !== hteditor_config.noPublicIconPath){
                		editor.showMessage('无法在公共图标中新增图标！');
                		return;
                	}*/
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
    dialog.show();
}
//拖动
function addEditorDrapEvent(){
    editor.assets.accordion.getView().ondragover = function(e){
		e.preventDefault();
	}
	editor.assets.accordion.getView().ondrop = function(e){
		e.preventDefault();
		var path = null;
		if(editor.assets.accordion.expandIds.length > 0){
			path = editor.assets.accordion.expandIds[0]
		}else if(editor.assets.currentDir){
			path = editor.assets.currentDir
		}
		if(!path){
			return;
		}
		var files = e.dataTransfer.files;
		for(var i = 0; i < files.length; i++){
			editor.uploadLocalFile(files[i],path);
		}
	}
	editor.symbols.accordion.getView().ondragover = function(e){
		e.preventDefault();
	}
	editor.symbols.accordion.getView().ondrop = function(e){
		e.preventDefault();
		var path = null;
		if(editor.symbols.accordion.expandIds.length > 0){
			path = editor.symbols.accordion.expandIds[0]
		}else if(editor.symbols.currentDir){
			path = editor.symbols.currentDir
		}
		if(!path){
			return;
		}
		var files = e.dataTransfer.files;
		for(var i = 0; i < files.length; i++){
			editor.uploadLocalFile(files[i],path);
		}
	}
}
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
//根据name获取cookie
function getCookie(name) {
	var cookies = decodeURIComponent(document.cookie);
	var list = cookies.split("; ");

	for(var i = 0; i < list.length; i++) {
		var arr = list[i].split("=");
		if(arr[0] == name){
			return decodeURIComponent(arr[1]);
		}
	}
  return "";
}












