
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
    pubilcIconTab.setName('图标');
    editor.leftTopTabView.getTabModel().add(pubilcIconTab,1);
    pubilcIconTab.setView(createPublicIconPanel(editor, true));
    return pubilcIconTab;
}
//创建面板
function createPublicIconPanel(editor) {
    var fileIcon = 'custom/images/数据可视化.json';
    var pubilcIconPanel = editor.pubilcIconPanel = new hteditor.Explorer(editor, 'public', false);
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
						item.fileType = 'symbol';
						item._name = item._name.split('.json')[0];
						item._image = item.path + '/' + item._name + '.png';
					}
				}
				editor.pubilcIconPanel.accordion.isDroppableToDisplayView = true;
				//公共图标拖动到图纸
				/*editor.pubilcIconPanel.accordion.handleDropToEditView = function(view, fileNode, point, event) {
	                var node = new ht.Node();
	                node.setImage(fileNode.getImage());
	                node.p(point);
	                node.setDisplayName(fileNode.getName());
	                view.addData(node);
	        	};*/
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
function sendIconToPublic(){

	var list = [];
	editor.symbols.accordion.sm().each(function(node){
		list.push(node.getId());
		list.push(node.getImage());
	})
	if(list.length < 1){
		return;
	}
	var iconData = {
		data:list
	}
	$.ajax({
		url : hteditor_config.pushIconToPublic,  
	    type : "POST",
	    async : true,
	    headers: {
            'cookies':document.cookie
       	},
	    contentType: "application/json; charset=utf-8",
    	dataType:'json',
	    data : JSON.stringify(iconData),
	    success : function(data){
	    	if(data.msg){
	    		editor.showMessage(data.msg)
	    	}else{
	    		editor.showMessage('发布成功')
	    	}
	    	editor.pubilcIconPanel.reloadList();
	    },
	    error : function(data){
	    	if(data.msg){
	    		editor.showMessage(data.msg)
	    	}else{
	    		editor.showMessage('发布成功')
	    	}
	    }
	});
}
