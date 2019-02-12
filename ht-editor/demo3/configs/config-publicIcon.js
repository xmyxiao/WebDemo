
//创建公共图标
function createPublicIconValue() {
    return {
        type: 'publicicon',
        buildUI: function(inspector, items, displayName, getter, setter) {
            inspector.addLabelInput(items, displayName, getter, setter);
        }
    };
}

//创建公共图标
function createPubilcIconTab(editor,V) {
    var pubilcIconTab = editor.pubilcIconTab = new ht.Tab();
    pubilcIconTab.setName('公共');
    editor.leftTopTabView.getTabModel().add(pubilcIconTab);
    pubilcIconTab.setView(createPublicIconPanel(editor, true));
    return pubilcIconTab;
}
//创建面板
function createPublicIconPanel(editor) {
    var fileIcon = 'custom/images/数据可视化.json';
    var pubilcIconPanel = editor.pubilcIconPanel = new hteditor.Explorer(editor, 'public', true);
    var json = returnIconData(pubilcIconPanel);
    //initPublicIconMenu();
    return pubilcIconPanel;
}
//数据
function returnIconData(pubilcIconPanel){
	
	pubilcIconPanel.editMenuNode = function(){
		var node = editor.pubilcIconPanel.accordion.sm().ld();
		editor.open(node);
	}
	editor.pubilcIconPanel.reloadList = function(){
    	var pubilcIconPanel = this;
    	var dataSetUrl = hteditor_config.publicIconGetUrl;
		$.ajax({
			type:"get",
			url:dataSetUrl,
			async:true,
			headers: {
	            'cookies':document.cookie
	       	},
			success:function(data){
				//这里的name在组件中作为id使用  修改后通过id获取的方法也要一起修改
				var publicIconData = data
	
				editor.pubilcIconPanel.parse(publicIconData);
				for(var i = 0; i < editor.pubilcIconPanel.accordion.getDataModel().getDatas()._as.length; i++){
					var item = editor.pubilcIconPanel.accordion.getDataModel().getDatas()._as[i]
					if(item.fileType !== 'root' && item.fileType !== 'dir' && item._name.indexOf('.json') > 0){
						item.fileType = 'icon';
						item._name = item._name.split('.json')[0];
						item._image = item.path + '/' + item._name + '.png';
					}
				}
				editor.pubilcIconPanel.accordion.isDroppableToDisplayView = true;
				//公共图标拖动到图纸
				editor.pubilcIconPanel.accordion.handleDropToEditView = function(view, fileNode, point, event) {
	                var node = new ht.Node();
	                node.setImage(fileNode.getImage());
	                node.p(point);
	                node.setDisplayName(fileNode.getName());
	                view.addData(node);
	        	};
				editor.pubilcIconPanel.accordion.onDataDoubleClicked = function(data,e){				
					//编辑
				    /*var userStr = getCookie("user");
				    if(!userStr){
				    	userStr = '{}'
				    }
				    var UserJson = JSON.parse(userStr);
				    if(!UserJson && UserJson.permission !== "admin"){
				    	return
				    }
			    	editor.pubilcIconPanel.editMenuNode();*/
			    }
				
				//return dataJson
			},
			error:function(){
				editor.showMessage('数据集获取失败！');
			}
		});
    }
	editor.pubilcIconPanel.reloadList();
}
//初始化公共图标右键菜单
function initPublicIconMenu(){
	var json = [
		{
            label: "从公共图标中移除",
            action: function(item) {
            	var q = editor.pubilcIconPanel.accordion.sm().ld();
            	
            },
            visible: function() {
				var q = editor.pubilcIconPanel.accordion.sm().ld();
				return !!q && q.fileType === 'icon'
			}
        }
        /*{
            label: "打开",
            action: function(item) {
            	var q = editor.pubilcIconPanel.accordion.sm().ld();
            	editor.open(q);
            },
            visible: function() {
				var q = editor.pubilcIconPanel.accordion.sm().ld();
				return !!q && (q.fileType === 'symbol' || q.fileType === 'display' || q.fileType === 'component')
			}
        },
        {
            label: "新建公共图标",
            action: function(item) {
               createDataSqlDialog();
            },
            visible: function() {
				return  editor.pubilcIconPanel.accordion.sm().editable
			}
        },
        {
            label: "拷贝",
            action: function(item) {
            	editor.pubilcIconPanel.copyFiles();
            }
        },
        {
            label: "粘贴",
            action: function(item) {
               editor.pubilcIconPanel.pasteFiles();
            }
        },
        {
            label: "重命名",
            action: function(item) {
            	var n = this;
            	var q = editor.pubilcIconPanel.accordion.sm().ld();

				q && q !== n.rootNode &&  editor.pubilcIconPanel.accordion.beginEditing(q)
            }
        },
        {
            label: "删除",
            action: function(item) {
                editor.pubilcIconPanel.deleteSelection(editor.pubilcIconPanel.accordion);
            },
            visible: function() {
				var q = editor.pubilcIconPanel.accordion.sm().ld();
				
				return q && editor.pubilcIconPanel.accordion.isEditable(q)
			}
        },
        {
            label: "导出",
            action: function(item) {
                var q = [],
					n = editor.pubilcIconPanel.accordion.sm();
				n.size() > 0 && (n.each(function(V) {
					q.push(V.url)
				}), editor.request("export", q))
            },
			visible: function() {
				var q = editor.pubilcIconPanel.accordion.sm().ld();
				return !!q && (q.fileType === 'symbol' || q.fileType === 'display' || q.fileType === 'component')
			}
        }*/
    ];
    var contextmenu = new ht.widget.ContextMenu(json);
	contextmenu.addTo(editor.pubilcIconPanel.accordion.getView());
}
//发布到公共图标
function sendIconToPublic(node){
	if(!node || node.fileType !== 'symbol'){
		return;
	}
	var dialog = new ht.widget.Dialog();
	var formPane = new ht.widget.FormPane();
	var fileUrlList = editor.pubilcIconPanel.accordion.dirs || [];
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

    dialog.setConfig({
        title: "发布到公共图标",
        closable: true,
        draggable: true,
        contentPadding: 10,
        width:260,
        height:120,
        content: formPane,
        buttons: [
            {
                label: "确定",
                action: function(button, e) {
                	var fileUrl = formPane.v('fileUrl');
                	if(!fileUrl || fileUrl === ''){
                		editor.showMessage('文件路径必须填写！');
                		return;
                	}

                	var fileUrlArr = fileUrl.split('/')
                	if(!fileUrlArr || fileUrlArr.length < 2 || fileUrlArr.indexOf('public') < 0){
                		editor.showMessage('文件路径不正确！');
                		return;
                	}
                	var saveUrl = fileUrl + "/" + node._name;
                	/*if(editor.getFileNode(saveUrl)){
                		editor.showMessage('文件名冲突！');
                		return;
                	}*/
                	editor['newSymbolView']();
                	editor.save('',saveUrl);
		            dialog.hide();
		            editor.pubilcIconPanel.reloadList();
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
