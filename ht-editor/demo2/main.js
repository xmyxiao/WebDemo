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
	    
	    document.body.appendChild(view);
	    window.addEventListener('resize', function (e) {
	    	editor.mainPane.iv();
	        setTimeout(function(){
	        	topBorderPane.iv();
	        },50);
	        
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
	                    	document.querySelector(".displaysfileUrl").value = 'displays/basic';
							document.querySelector(".displaysfileName").value = '';
	                        //editor['newDisplayView']();
	                    }
	                },
	                {
	                    label: "新建图标",
	                    action: function(item) {
	                    	editor.symbolsDialog.show();
	                    	document.querySelector(".symbolsfileUrl").value = 'symbols/basic';
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
	//底部logo
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














