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
	    
	    editor.leftTopTabView.setTabPosition('left');
	    editor.leftTopTabView.setTabHeight(45);
	    editor.leftTopTabView.setTabGap(2);
	    editor.leftTopTabView.getTitleDiv().style.borderRight = '1px solid #e4e4e4';
	    
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
	
	function createTopMenu(){
		var json = [
	        {
	            label: "文件",
	            items: [
	                {
	                    label: "新建图纸",
	                    action: function(item) { 
	                        editor['newDisplayView']();
	                    }
	                },
	                {
	                    label: "新建图标",
	                    action: function(item) {
	                        editor['newSymbolView']();
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
	
	function createTopRightMenu(){
		ht.Default.setImage('full_logo', "assets/icon-ht/全屏.json");
	    var logoSrc = 'full_logo';
		var json = [
	        {
	        	label: '',
	            icon: logoSrc
	        },
	        {
	        	label: '',
	            icon: logoSrc
	        },
	        {
	        	label: '',
	            icon: logoSrc,
	            action: function(item) {
	                editor['fullScreen']();
	            }
	        }
	    ];
	    
	    var menu = new ht.widget.Menu(json);
	    menu.enableGlobalKey();
	    menu.setHeaderItemHGap('10');
	    menu.setLayout('iconsonly');
	    menu.setHoverBackground('#535353');
	    
	    var menuView = menu.getView();
	    menuView.style.background = '#535353';
	
	   	menuView.childNodes[0].className = 'header header-right'
	
	    return menu;
	}
	
	function createTopRightTool(){
		ht.Default.setImage('full_logo', "assets/icon-ht/全屏.json");
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
	
	function createTopLogo(){
		ht.Default.setImage('top_left_logo', "assets/icon-ht/logo.json");
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
})();














