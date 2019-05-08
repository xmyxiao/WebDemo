(function() {

    var isHandling = false;
    window.hteditor_config.onTitleCreated = function(editor, params) {
        if (!isHandling) {
            isHandling = true;
            handleTitleCreated(editor, params);
            isHandling = false;
        }
    };

    function handleTitleCreated(editor, params) {
        var title = params.title;
        var oldTitle = params.oldTitle;
        var inspector = params.inspector;
        if (inspector.type === 'display' && title === 'TitleBasic') {
        	addIntoJsFiles(inspector);
            addIntoJsToDisplay(inspector);
        }
		
        /*if (inspector.type === 'data' && title === 'TitleBasic') {
            var items = [];
            var label = 'HIGHTOPO';
            var toolTip = 'www.hightopo.com';
            var icon = null;
            var count = 0;
            var onClicked = function() {
                button.setLabel('图扑软件' + (count ? (' + ' + count) : ''));
                count++;
            };
            var button = hteditor.createButton(label, toolTip, icon, onClicked);
            items.push('彩蛋');
            items.push(button);
            var rowInfo = inspector.addRow(items, [hteditor.config.indent, 0.1]);
            rowInfo.visible = function(inspector) {
                var data = inspector.data;
                if (data instanceof ht.Node && !data.s('shape')) {
                    if (data.getImage() === 'assets/ht.png' ||
                        data.getImage() === 'assets/ht.svg' ||
                        data.getImage() === 'assets/图扑软件.png'){
                        return true;
                    }
                }
                return false;
            }
            rowInfo.onPropertyChanged = function(event, inspector) {
                if (event.property === 'image') {
                    inspector.filterPropertiesLater();
                }
            };
            // inspector.addPropertyChangeHandler(function(event) {
            //     if (event.property === 'image') {
            //         inspector.filterPropertiesLater();
            //     }
            // });
        }*/
    }
    //增加js文件引用
    function addIntoJsFiles(inspector){
    	var S = hteditor.getString;
        var indent = hteditor.config.indent;

        var items = [];
        items.push('引用脚本');
        var label = '编辑';
        var toolTip = null;
        var icon = null;
        var onClicked = function(a,b,c,d) {
            var dialog = new ht.widget.Dialog();
            var formPane = new ht.widget.FormPane();
            var nodeUrl = editor.mainTabView.currentTab.getView().url;
            var files = inspector.getPropertyValue('userJsFiles');
			
			var panel = new ht.widget.BorderPane();
			var panel1 = new ht.widget.Panel(),
                panel2 = new ht.widget.Panel(),
                formPane1 = new ht.widget.FormPane(),
                formPane2 = new ht.widget.FormPane();
                
			var fileItems = [
				{
					"name": "ht-animation.js",
					"label" : "animation动画扩展包"
				},
				{
					"name": "ht-contextmenu.js",
					"label" : "contextmenu右键菜单扩展包"
				},
				{
					"name": "ht-astar.js",
					"label" : "astar扩展包"
				},
				{
					"name": "ht-autolayout.js",
					"label" : "autolayout自动布局扩展包"
				},
				{
					"name": "ht-dashflow.js",
					"label" : "dashflow虚线流动扩展包"
				},
				{
					"name": "ht-flow.js",
					"label" : "flow流动扩展包"
				},
				{
					"name": "ht-forcelayout.js",
					"label" : "forcelayout弹力布局扩展包"
				},
				{
					"name": "ht-historymanager.js",
					"label" : "historymanager撤销和重做扩展包"
				},
				{
					"name": "ht-htmlnode.js",
					"label" : "HtmlNode扩展包"
				},
				{
					"name": "ht-live.js",
					"label" : "live交互式图元扩展包"
				},
				{
					"name": "ht-menu.js",
					"label" : "menu菜单扩展包"
				},
				{
					"name": "ht-modeling.js",
					"label" : "modeling建模扩展包"
				},
				{
					"name": "ht-overview.js",
					"label" : "overview鹰眼扩展包"
				},
				{
					"name": "ht-palette.js",
					"label" : "palette组件面板扩展包"
				},
				{
					"name": "ht-panel.js",
					"label" : "panel面板容器扩展包"
				},
				{
					"name": "ht-propertypane.js",
					"label" : "propertypane属性面板扩展包"
				},
				{
					"name": "ht-quickfinder.js",
					"label" : "quickfinder快速查询器扩展包"
				},
				{
					"name": "ht-rulerframe.js",
					"label" : "rulerframe刻度尺扩展包"
				},
				{
					"name": "ht-telecom.js",
					"label" : "telecom电信扩展包"
				},
				/*{
					"name": "ht-cssanimation.js",
					"label" : "cssanimation CSS动画扩展包"
				},
				{
					"name": "ht-dialog.js",
					"label" : "dialog对话框扩展包"
				},
				{
					"name": "ht-edgetype.js",
					"label" : "edgetype连线类型扩展包"
				},
				{
					"name": "ht-form.js",
					"label" : "form表单扩展包"
				},
				{
					"name": "ht-ui.js",
					"label" : "UI扩展包"
				},
				{
					"name": "ht-vector.js",
					"label" : "vector扩展包"
				},
				{
					"name": "ht-obj.js",
					"label" : "OBJ扩展包"
				},*/
				{
					"name": "ht-webview3d.js",
					"label" : "webview3d扩展包"
				},
				{
					"name": "ht-xeditinteractor.js",
					"label" : "xeditinteractor编辑交互扩展包"
				}
			]
			var rowListArr = [];
			for(var j = 0; j < fileItems.length; j++){
				var item = {
					name : fileItems[j].name,
					label : fileItems[j].label,
					select : false
				}
				if(files && files.jsFiles){
					for(var k = 0; k < files.jsFiles.length; k++){
						if(files.jsFiles[k] === fileItems[j].name){
							item.select = true;
						}
					}
				}
				rowListArr.push(item)
			}
			for(var i = 0; i < rowListArr.length; i++){
				formPane1.addRow([
	           		{
		                checkBox: {
		                    label: rowListArr[i].label,
		                    name: rowListArr[i].name,
		                    selected: rowListArr[i].select,
		                    onClicked: function(e){
		                    	var row =formPane1.getRows();
		                    	for(var n = 0; n < row.length; n++){
		                    		if(this.getLabel() === row[n].items[0].checkBox.label){
		                    			row[n].items[0].checkBox.selected = this.isSelected();
		                    		}
		                    	}
                            }
		                }
		            }
	           	],[0.1])
			}
			var jsPlugString = ''
			if(files && files.jsPlugString){
				jsPlugString = files.jsPlugString
			}

           	formPane2.addRow([
		    	{
		    		element:'外部文件',
		    		vAlign: 'top',
		    		align: 'right'
		    	},
		        {
		            id: 'jsPlugStr',
		            element: new hteditor.CodeEditor({
		                value: jsPlugString,
		                language: 'javascript',
		                minimap: {
		                    enabled: false
		                }
		            })
		        }
		    ], [60, 0.1],0.1);
            panel1.setConfig({
                title: "选择库文件",
                titleBackground:hteditor_config.color_dark,
                borderWidth:0,
                minimizable:false,
                buttons:[],
                flowLayout: true,
                contentHeight: 240,
                content: formPane1
            });
            panel2.setConfig({
                title: "引入外部文件",
                titleBackground:hteditor_config.color_dark,
                borderWidth:0,
                flowLayout: true,
                minimizable:false,
                buttons:[],
                contentHeight: 150,
                content: formPane2
            });
            panel.setTopView(panel1)
            panel.setBottomView(panel2)
            var buttons = [];
            buttons.push(
                {
                     label: S('Cancel'),
                     action: function() {
                        dialog.hide();
                     }
                },
                {
                    label: S('OK'),
                    action: function() {
                    	var jsPlugString = formPane2.v('jsPlugStr');
                    	var row =formPane1.getRows();
                    	var jsFilesArr = [];
                    	for(var m = 0; m < row.length; m++){
                    		if(row[m].items[0].checkBox.selected){
                    			jsFilesArr.push(row[m].items[0].checkBox.name)
                    		}
                    	}
                    	var userJsFiles = {
                    		jsFiles: jsFilesArr,
                    		jsPlugString: jsPlugString
                    	}
                    	inspector.setPropertyValue('userJsFiles', userJsFiles);
                    	dialog.hide();
                    }
                }
            );
            dialog.setConfig({
                title: '引用脚本',
                draggable: true,
                closable:true,
                maximizable:true,
		        width: 650,
		        height: 500,
                contentPadding: 0,
                borderWidth: 0,
                content: panel,
                buttons: buttons,
                buttonsAlign: 'right'
            });
            dialog.show();
        };
        var button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push(button);
        inspector.addRow(items, [indent, 0.1, 40, 20]);
    }
    //添加js注入
	function addIntoJsToDisplay(inspector){
		var S = hteditor.getString;
        var indent = hteditor.config.indent;

        var items = [];
        items.push('用户脚本');

        var label = '编辑';
        var toolTip = null;
        var icon = null;
        var onClicked = function(a,b,c,d) {
            var dialog = new ht.widget.Dialog();
            var formPane = new ht.widget.FormPane();
            var nodeUrl = editor.mainTabView.currentTab.getView().url;
            var func = inspector.getPropertyValue('userJs');

            formPane.addRow([
		        {
		            id: 'textArea',
		            element: new hteditor.CodeEditor({
		                value: func,
		                language: 'javascript',
		                theme:'vs-dark',
		                minimap: {
		                    enabled: false
		                }
		            })
		        }
		    ], [0.1],0.1);
            
            var buttons = [];
            buttons.push(
                {
                     label: S('Cancel'),
                     action: function() {
                        dialog.hide();
                     }
                },
                {
                    label: S('OK'),
                    action: function() {
                    	var func = formPane.v('textArea');
                    	inspector.setPropertyValue('userJs', func);
                        dialog.hide();
                    }
                }
            );
            dialog.setConfig({
                title: '用户脚本',
                draggable: true,
                closable:true,
                maximizable:true,
		        width: 650,
		        height: 500,
                contentPadding: 0,
                borderWidth: 0,
                content: formPane,
                buttons: buttons,
                buttonsAlign: 'right'
            });
            dialog.show();
        };
        var button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push(button);
        inspector.addRow(items, [indent, 0.1, 40, 20]);
	}
    function addPropertiesToDisplay(inspector) {
        var S = hteditor.getString;
        var indent = hteditor.config.indent;

        var dialog = createDialog(inspector);

        var items = [];
        var label = '定时器';
        var toolTip = '设置定时器';
        var icon = null;
        var onClicked = function() {
            updateTimers(inspector, dialog);
            dialog.show();
        };
        var button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push('定时器');
        items.push(button);
        inspector.addRow(items, [indent, 0.1]);

    }

    function updateTimers(inspector, dialog) {
        var timers = inspector.getPropertyValue('timers');
        dialog.tableModel.clear();
        if (timers) {
            timers.forEach(function(timer) {
                var data = new ht.Data();
                data.a('func', timer.func);
                data.a('interval', timer.interval);
                dialog.tableModel.add(data);
            });
        }
    }

    function commitTimers(inspector, dialog) {
        var timers = [];
        dialog.tableModel.each(function(data) {
            timers.push({
                func: data.a('func'),
                interval: data.a('interval')
            });
        });
        inspector.setPropertyValue('timers', timers);
    }

    function createDialog(inspector) {
        var tableModel = new ht.DataModel();
        var tablePane = new ht.widget.TablePane(tableModel);
        var tableView = this.tableView = tablePane.getTableView();
        tableView.setEditable(true);
        tablePane.getView().style.border = hteditor_config.color_line + ' solid 1px';
        tablePane.addColumns([
            {
                name: 'func',
                accessType: 'attr',
                width: 200,
                displayName: '函数名称',
                editable: true
            },
            {
                name: 'interval',
                accessType: 'attr',
                valueType: 'int',
                width: 140,
                displayName: '周期（单位：毫秒）',
                editable: true
            }
        ]);

        var formPane = new ht.widget.FormPane();

        formPane.addRow([
            {
                button: {
                    label: '添加',
                    onClicked: function() {
                        var data = new ht.Data();
                        data.a('func', 'action');
                        data.a('interval', 500);
                        tableModel.add(data);
                    }
                }
            },
            {
                button: {
                    label: '删除',
                    onClicked: function() {
                        tableView.removeSelection();
                    }
                }
            }
        ],
        [40, 40]);

        formPane.addRow([tablePane], [0.1], 0.1)
        var dialog = new ht.widget.Dialog();
        var buttons = [];
        buttons.push({
             label: '确定',
             action: function() {
                commitTimers(inspector, dialog);
                dialog.hide();
             }
        });
        buttons.push({
             label: '取消',
             action: function() {
                dialog.hide();
             }
        });
        dialog.setConfig({
            title: '设置定时器',
            closable: true,
            draggable: true,
            width: 400,
            height: 300,
            contentPadding: 6,
            resizeMode: "wh",
            maximizable: true,
            content: formPane,
            buttons: buttons,
            buttonsAlign: 'right'
        });

        dialog.tableModel = tableModel;
        return dialog;
    }
})();
























