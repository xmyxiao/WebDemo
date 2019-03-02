(function() {

    window.hteditor_config.handleEvent = function(editor, type, params) {
    	//console.log(type);
        var S = hteditor.getString;
        if (type === 'editorCreated') {
            handleEditorCreated(editor);
            //createPointsTab(editor);
            createDataSetTab(editor);
            createPubilcIconTab(editor);
        }
        else if (type === 'displayViewCreated') {
            addPrintSelectionItem(params.displayView.displayTree, 'editor.displayTree');
            addPrintSelectionItem(params.displayView.graphView, 'editor.displayView.graphView');
            addSkewTranlateItem(params.displayView.graphView, 'editor.displayView.graphView');
            // params.displayView.graphView.getEditInteractor().setStyle('anchorVisible', false);
            // params.displayView.graphView.getEditInteractor().setStyle('connectGuideVisible', false);
        }
        else if(type === 'displayViewOpened'){
        }
        else if(type === 'displayViewReloading'){
        }
        else if(type === 'displayViewDataModelChanged'){
        }
        else if(type === 'inspectorCreated'){
        	
        }
        else if (type === 'symbolViewCreated' || type === 'symbolViewOpened') {
            addPrintSelectionItem(params.symbolView.symbolList, 'editor.symbolList');
            addPrintSelectionItem(params.symbolView.graphView, 'editor.symbolView.graphView');
        }
        else if (type === 'displayViewSaving') {
        	var saveJson = params.displayView.dm.getDatas()._as;
        	var savePublic = {
        		data : []
        	};
        	var id = editor.currentView.url
        	var item = editor.displays.accordion.dm().getDataById(id)
        	if(item && item._styleMap.appid){
        		var urlStr = 'previews2D/' + item._styleMap.appid + '.html';
        		params.displayView.dm.a('previewURL',urlStr);
        	}
        	
        	//params.displayView.dm.a('userCookie',JSON.stringify(JSON.parse(getCookie('user'))));
        	if(saveJson && saveJson.length){
        		for(var i = 0; i < saveJson.length; i++){
        			var item = saveJson[i];
        			if(item._image && item._image.indexOf('public/') > -1){
        				savePublic.data.push(item._image);
        				//item._image = item._image.replace('public','temporary');
        				//hteditor_config.publicIconChange = true
        			}
        		}
        	}
        	if(savePublic.data.length > 0){
        		$.ajax({
	            	url : hteditor_config.publicIconSaveUrl,  
				    type : "POST",
				    async : true,
				    headers: {
			            'cookies':document.cookie
			       	},
				    contentType: "application/json; charset=utf-8",
			    	dataType:'json',
			    	data : JSON.stringify(savePublic),
				    success : function(data){
				    	
				    },
				    error : function(){
				    	editor.showMessage('保存失败！');
				    }
	            });
        	}
            // if (!params.displayView.dm.size()) {
            //     window.alert(S('NothingToBeSaved'));
            //     params.preventDefault = true;
            // }
        }
        else if(type === 'displayViewSaved'){
        	var sendData = {
        		url : params.url
        	}
    		$.ajax({
            	url : hteditor_config.publicIconSaveEndUrl,  
			    type : "POST",
			    async : true,
			    headers: {
		            'cookies':document.cookie
		       	},
			    contentType: "application/json; charset=utf-8",
		    	dataType:'json',
		    	data: JSON.stringify(sendData),
			    success : function(data){
			    	
			    },
			    error : function(){
			    	//editor.showMessage('失败！');
			    }
           	});
        }
        else if (type === 'symbolViewSaving') {
            // if (!params.symbolView.dm.size()) {
            //     window.alert(S('NothingToBeSaved'));
            //     params.preventDefault = true;
            // }
        }
        else if (type === 'paste') {
            params.datas.forEach(function(data) {
                var dataBindings = data.getDataBindings();
                if (dataBindings) {
                    // update attrs
                    for (var name in dataBindings.a) {
                        var db = dataBindings.a[name];
                        db.id = db.id + '_copied';
                    }
                    // update styles
                    for (var name in dataBindings.s) {
                        var db = dataBindings.s[name];
                        db.id = db.id + '_copied';
                    }
                    // update properties
                    for (var name in dataBindings.p) {
                        var db = dataBindings.p[name];
                        db.id = db.id + '_copied';
                    }
                }
            });
        }
    };

    function addPrintSelectionItem(view, name) {
        var items = view.menu.getItems();
        items.push('separator');
        items.push({
            label: hteditor.getString('PrintSelection'),
            visible: function() {
                if (view instanceof ht.widget.TabView) {
                    return view.getTabModel().getSelectionModel().size() > 0;
                }
                else {
                    return view.getSelectionModel().size() > 0;
                }
            },
            background: function() {
                return '#F7F7F7';
            },
            action: function() {
                console.log(name + ' selection:[');
                if (view instanceof ht.widget.TabView) {
                    view.getTabModel().getSelectionModel().each(function(data) {
                        console.log(data);
                    });
                }
                else {
                    view.getSelectionModel().each(function(data) {
                        console.log(data);
                    });
                }
                console.log(']');
            }
        });
    }

    var skewImage = 'symbols/basic/skew-image.json';
    function addSkewTranlateItem(view) {
        var items = view.menu.getItems();
        items.splice(-1, 0, {
            label: '轴侧切换',
            visible: function() {
                return view.sm().size() > 0;
            },
            action: function() {
                view.sm().each(function(data) {
                    if (data.getClassName() === 'ht.Node' && !data.s('shape')) {
                        var image = data.getImage();
                        if (image === skewImage) {
                            data.setImage(data.a('skew.image') || 'node_image');
                        }
                        else {
                            data.a('skew.image', image);
                            data.setImage(skewImage);
                        }
                    }
                });
            }
        });

    }

    function handleEditorCreated(editor) {
    	editor.addEventListener(function(event) {
            if (event.type === 'fileRenaming') {
            	//图纸禁止改名
                if (event.params.data.fileType === 'display') {
                    event.params.preventDefault = true;
                }
            }else if(event.type === 'explorerUpdated' && event.params.explorer.rootDir === 'displays'){
            	var list = event.params.explorer.accordion.getDataModel().getDatas()._as;
            	for(var i = 0; i < list.length; i++){
            		if(list[i].fileType === 'display' && list[i].getName().split('_').length > 1){
            			//图纸改名
            			list[i]._styleMap.appid = list[i]._styleMap.label.split('_')[0];
						list[i]._styleMap.label = list[i]._styleMap.label.split('_')[1];
						list[i].setName(list[i]._styleMap.label + '.json');
            		}
            	}
            	if(hteditor_config.firstLoad){
					var userStr = getCookie("user");
					if(!userStr){
						userStr = '{}'
					}
					var UserJson = JSON.parse(userStr);
					var openJson = 'displays/' + UserJson.pid + '/' + UserJson.appid +'_'+ UserJson.file+'.json'
					editor.open(openJson);
					if(hteditor_config.firstLoad){
						setInspectorSetEditable(openJson,UserJson);
					}
					
					/*setTimeout(function(){
						editor.selectFileNode(openJson);
						editor.inspector.getRows()[3].items[1].element.setEditable(false);
						//改
						if(hteditor_config.firstLoad && editor.inspector.getPropertyValue('previewURL') !== 'previews2D/' + UserJson.appid + '.html'){
							editor.inspector.setPropertyValue('previewURL','previews2D/' + UserJson.appid + '.html');
							editor.save()
						}
						hteditor_config.firstLoad = false;
					},1500);*/
				}
				window.disabledDiv.style.display = 'none';
            }
        });
        // Prevent some files from being renamed, moved or deleted

        editor.displays.list.menu.setItemVisible('open', false);
        editor.displays.list.menu.setItemVisible('locateFile', false);
        editor.displays.list.menu.setItemVisible('newFolder', false);
        editor.displays.list.menu.setItemVisible('newDisplayView', false);

        editor.symbols.list.menu.setItemVisible('open', false);
        editor.symbols.list.menu.setItemVisible('insert', false);
       	editor.symbols.accordion.menu.getItemById('newSymbolView').action = function(){
        	createSymbolsDialog();
        }
       	editor.symbols.accordion.menu._items.push(createPublishedItem());
        
        editor.components.list.menu.setItemVisible('open', false);
        editor.components.list.menu.setItemVisible('insert', false);
        editor.assets.list.menu.setItemVisible('insert', false);

        // Add print item
        addPrintSelectionItem(editor.displays.tree, 'editor.displays.tree');
        addPrintSelectionItem(editor.displays.list, 'editor.displays.list');
        addPrintSelectionItem(editor.symbols.tree, 'editor.symbols.tree');
        addPrintSelectionItem(editor.symbols.list, 'editor.symbols.list');
        addPrintSelectionItem(editor.components.tree, 'editor.components.tree');
        addPrintSelectionItem(editor.components.list, 'editor.components.list');
        addPrintSelectionItem(editor.assets.tree, 'editor.assets.tree');
        addPrintSelectionItem(editor.assets.list, 'editor.assets.list');
        addPrintSelectionItem(editor.mainTabView, 'editor.mainTabView');

        // // Remove components tab
        // editor.leftTopTabView.remove(editor.componentsTab);

        // // Rearrange toolbar items
        // var mainItems = editor.mainToolbar.getItems();
        // var rightItems = editor.rightToolbar.getItems();
        // editor.mainToolbar.setItems([mainItems[0], editor.rightToolbar.removeItemById('save')]);
        // editor.rightToolbar.setItems(mainItems.slice(1).concat(rightItems));

        // // Draw extra icon on file list
        // var fileList = editor.displays.list;
        // fileList.addTopPainter(function(g) {
        //     var htIcon = ht.Default.getImage('symbols/basic/ht.json');
        //     fileList.getDataModel().each(function(file) {
        //         if (fileList.isVisible(file)) {
        //             if (fileList.getLayoutType() === 'list') {
        //                 var x = 0;
        //                 var y = file.p().y - fileList.getRowHeight() / 2;
        //                 var width = fileList.getWidth();
        //                 var height = fileList.getRowHeight();
        //                 g.fillStyle = 'yellow';
        //                 g.beginPath();
        //                 g.rect(width - 16, y, 16, 16);
        //                 g.fill();
        //                 ht.Default.drawStretchImage(g, htIcon, 'uniform', width - 16, y, 16, 16);
        //             }
        //             else {
        //                 var rect = file.getRect();
        //                 g.fillStyle = 'yellow';
        //                 g.beginPath();
        //                 g.rect(rect.x + rect.width - 16, rect.y, 16, 16);
        //                 g.fill();
        //                 ht.Default.drawStretchImage(g, htIcon, 'uniform', rect.x + rect.width - 16, rect.y, 16, 16);
        //             }
        //         }
        //     });
        // });

        // Add a custom tab to show more information
        // addCustomTab(editor);

        // Disable symbol editing
        // var oldOpen = editor.open;
        // editor.open = function(fileNode) {
        //     if (fileNode && fileNode.fileType === 'symbol') {
        //         return;
        //     }
        //     oldOpen.apply(editor, arguments);
        // }
    }
	//发布到公共资源
	function createPublishedItem(){
		var item = {
			id: "published",
			label: '发布到公共资源',
			action: function() {
				var node = editor.symbols.accordion.sm().ld();
				sendIconToPublic();
			},
			visible: function() {
				var q = editor.symbols.getFileListView().sm().ld();
				return !!q && q.fileType === 'symbol';
			}
		}
		return item;
	}

    // function addCustomTab(editor) {
    //     var tabView = new ht.widget.TabView();
    //     var styleTab = new ht.Tab();
    //     styleTab.setName('Style Properties');
    //     styleTab.setView(editor.inspectorPane);
    //     tabView.getTabModel().add(styleTab);

    //     var customFormPane = new ht.widget.FormPane();
    //     var customTab = new ht.Tab();
    //     customTab.setName('Custom Properties');
    //     customTab.setView(customFormPane);
    //     tabView.getTabModel().add(customTab);

    //     tabView.getTabModel().sm().ss(styleTab);
    //     editor.rightTopBorderPane.setCenterView(tabView);

    //     var dm;
    //     var data;
    //     var updaters = [];
    //     editor.addEventListener(function(event) {
    //         if (event.type === 'tabUpdated') {
    //             if (dm) {
    //                 dm.sm().removeSelectionChangeListener(updateCustomFormPane);
    //                 dm.removeDataPropertyChangeListener(handlePropertyChange);
    //             }
    //             dm = editor.displayView ? editor.displayView.dm : null;
    //             if (dm) {
    //                 dm.sm().addSelectionChangeListener(updateCustomFormPane);
    //                 dm.addDataPropertyChangeListener(handlePropertyChange);
    //             }
    //             updateCustomFormPane();
    //         }
    //     });

    //     function updateCustomFormPane() {
    //         customFormPane.clear();
    //         if (dm) {
    //             data = dm.sm().ld();
    //             updates = [];
    //             if (data) {
    //                 // add Id row
    //                 var getter = function() {
    //                     return data.getId();
    //                 };
    //                 var setter = null;
    //                 createTextField('Id', getter, setter);

    //                 // Add name row
    //                 getter = function() {
    //                     if (data) {
    //                         return data.getDisplayName() || '';
    //                     }
    //                     return '';
    //                 };
    //                 setter = function(value) {
    //                     if (data) {
    //                         data.setDisplayName(value);
    //                     }
    //                 };
    //                 createTextField('Name', getter, setter);

    //                 var index = 0;
    //                 data.eachChild(function(child) {
    //                     createChildInfo(child, index++);
    //                 });
    //             }
    //         }
    //         updateProperties();
    //     }

    //     function createTextField(name, getter, setter) {
    //         var textField = new ht.widget.TextField();
    //         customFormPane.addRow([name, textField], [70, 0.1]);
    //         updaters.push(function() {
    //             textField.setValue(getter());
    //         });
    //         if (setter) {
    //             var input = textField.getElement();
    //             input.onblur = function() {
    //                 setter(input.value);
    //             };
    //             input.onkeydown = function(event) {
    //                 if (ht.Default.isEnter(event)) {
    //                     setter(input.value);
    //                 }
    //             };
    //         }
    //         else {
    //             textField.setEditable(false);
    //         }
    //     }

    //     function createChildInfo(child, index) {
    //         var title = { element: ' > Child-' + index, font: 'bold 12px arial, sans-serif' };
    //         customFormPane.addRow([title], [0.1], null, { background: '#F7F7F7' });

    //         // add Id row
    //         var getter = function() {
    //             return child.getId();
    //         };
    //         var setter = null;
    //         createTextField('Id', getter, setter);

    //         // Add name row
    //         getter = function() {
    //             return child.getDisplayName() || '';
    //         };
    //         setter = function(value) {
    //             child.setDisplayName(value);
    //         };
    //         createTextField('Name', getter, setter);
    //     }

    //     function handlePropertyChange(event) {
    //         if (event.data === data) {
    //             updateProperties();
    //         }
    //     }

    //     function updateProperties() {
    //         if (data) {
    //             updaters.forEach(function(updater) {
    //                 updater();
    //             });
    //         }
    //     }
    // }
	function setInspectorSetEditable(url,UserJson){
		setTimeout(function(){
			if(editor.inspector && editor.inspector.getRows()[3]){
				editor.selectFileNode(url);
				editor.inspector.getRows()[3].items[1].element.setEditable(false);
				//改
				if(hteditor_config.firstLoad && editor.inspector.getPropertyValue('previewURL') !== 'previews2D/' + UserJson.appid + '.html'){
					editor.inspector.setPropertyValue('previewURL','previews2D/' + UserJson.appid + '.html');
					editor.save()
				}
				hteditor_config.firstLoad = false;
			}else{
				setInspectorSetEditable(url,UserJson);
			}
		},1500);
	}
})();
























