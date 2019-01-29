(function() {

    window.hteditor_config.handleEvent = function(editor, type, params) {
    	//console.log(type);
        var S = hteditor.getString;
        if (type === 'editorCreated') {
            handleEditorCreated(editor);
            //createPointsTab(editor);
            createDataSetTab(editor);
        }
        else if (type === 'displayViewCreated' || type === 'displayViewOpened') {
            addPrintSelectionItem(params.displayView.displayTree, 'editor.displayTree');
            addPrintSelectionItem(params.displayView.graphView, 'editor.displayView.graphView');
            addSkewTranlateItem(params.displayView.graphView, 'editor.displayView.graphView');
            // params.displayView.graphView.getEditInteractor().setStyle('anchorVisible', false);
            // params.displayView.graphView.getEditInteractor().setStyle('connectGuideVisible', false);
        }
        else if (type === 'symbolViewCreated' || type === 'symbolViewOpened') {
            addPrintSelectionItem(params.symbolView.symbolList, 'editor.symbolList');
            addPrintSelectionItem(params.symbolView.graphView, 'editor.symbolView.graphView');
        }
        else if (type === 'displayViewSaving') {
            // if (!params.displayView.dm.size()) {
            //     window.alert(S('NothingToBeSaved'));
            //     params.preventDefault = true;
            // }
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
            icon: 'symbols/basic/ht.json',
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
        // Prevent some files from being renamed, moved or deleted
        //删除事件   可以设置公共图标和文件夹不可删除
        editor.addEventListener(function(event) {
            if (event.type === 'fileRenaming' ||
                event.type === 'fileMoving' ||
                event.type === 'fileDeleting') {
                if (event.params.url === 'symbols/basic/ht.json' ||
                    event.params.url === 'symbols/basic' ||
                    event.params.url === 'displays/basic') {
                    event.params.preventDefault = true;
                }
            }
        });

        editor.displays.list.menu.setItemVisible('open', false);
        editor.symbols.list.menu.setItemVisible('open', false);
        editor.symbols.list.menu.setItemVisible('insert', false);
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

})();
























