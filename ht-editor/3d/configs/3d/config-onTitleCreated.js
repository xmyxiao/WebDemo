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
        if (inspector.type === 'scene' && title === '场景') {
        	addIntoJsFiles(inspector);
            addIntoJsToDisplay(inspector);
        }
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
            var files = inspector.getPropertyValue('userJsFiles');
			
			var panel = new ht.widget.BorderPane();
			var panel1 = new ht.widget.Panel(),
                panel2 = new ht.widget.Panel(),
                formPane1 = new ht.widget.FormPane(),
                formPane2 = new ht.widget.FormPane();
                
			var fileStrings = 'ht.js,ht-animation.js,ht-contextmenu.js,ht-astar.js,ht-autolayout.js,ht-cssanimation.js,ht-dashflow.js,ht-dialog.js,ht-edgetype.js,ht-flow.js,ht-forcelayout.js,ht-form.js,ht-historymanager.js,ht-htmlnode.js,ht-live.js,ht-menu.js,ht-modeling.js,ht-obj.js,ht-overview.js,ht-palette.js,ht-panel.js,ht-propertypane.js,ht-quickfinder.js,ht-rulerframe.js,ht-telecom.js,ht-ui.js,ht-vector.js,ht-webview3d.js,ht-xeditinteractor.js'
			var rowList = fileStrings.split(',')
			var rowListArr = [];
			for(var j = 0; j < rowList.length; j++){
				var item = {
					name : rowList[j],
					select : false
				}
				if(files && files.jsFiles){
					for(var k = 0; k < files.jsFiles.length; k++){
						if(files.jsFiles[k] === rowList[j]){
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
		                    label: rowListArr[i].name,
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
                contentHeight: 350,
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
                     label: '取消',
                     action: function() {
                        dialog.hide();
                     }
                },
                {
                    label: '确定',
                    action: function() {
                    	var jsPlugString = formPane2.v('jsPlugStr');
                    	var row =formPane1.getRows();
                    	var jsFilesArr = [];
                    	for(var m = 0; m < row.length; m++){
                    		if(row[m].items[0].checkBox.selected){
                    			jsFilesArr.push(row[m].items[0].checkBox.label)
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
                     label: '取消',
                     action: function() {
                        dialog.hide();
                     }
                },
                {
                    label: '确定',
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
})();
























