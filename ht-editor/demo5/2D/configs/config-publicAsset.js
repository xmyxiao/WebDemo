
//创建公共资源
function createPublicAssetValue() {
    return {
        type: 'publicasset',
        buildUI: function(inspector, items, displayName, getter, setter) {
            inspector.addLabelInput(items, displayName, getter, setter);
        }
    };
}

//创建公共资源
function createPubilcAssetTab(editor,V) {
	ht.Default.setImage('tabAssetPublic', "custom/images/公共资源.json");
    var pubilcAssetTab = editor.pubilcAssetTab = new ht.Tab();
    pubilcAssetTab.setName('');
    pubilcAssetTab.setIcon('tabAssetPublic');
    pubilcAssetTab.setToolTip('图标');
    editor.leftTopTabView.getTabModel().add(pubilcAssetTab,4);
    pubilcAssetTab.setView(createPublicAssetPanel(editor, true));
    return pubilcAssetTab;
}
//创建面板
function createPublicAssetPanel(editor) {
    var fileIcon = 'custom/images/数据可视化.json';
    var pubilcAssetPanel = editor.pubilcAssetPanel = new hteditor.Explorer(editor, 'publicAsset', false);
    var json = returnAssetData(pubilcAssetPanel);
    //initPublicIconMenu();
    return pubilcAssetPanel;
}
//数据
function returnAssetData(pubilcAssetPanel){
	
	pubilcAssetPanel.editMenuNode = function(){
		var node = editor.pubilcAssetPanel.accordion.sm().ld();
		editor.open(node);
	}
	editor.pubilcAssetPanel.reloadList = function(){
    	var pubilcAssetPanel = this;
    	var dataSetUrl = hteditor_config.publicAssetGetUrl;
		$.ajax({
			type:"get",
			url:dataSetUrl,
			async:true,
			headers: {
	            'cookies':document.cookie
	       	},
			success:function(data){
				//这里的name在组件中作为id使用  修改后通过id获取的方法也要一起修改
				var publicAssetData = data
	
				editor.pubilcAssetPanel.parse(publicAssetData);
				for(var i = 0; i < editor.pubilcAssetPanel.accordion.getDataModel().getDatas()._as.length; i++){
					var item = editor.pubilcAssetPanel.accordion.getDataModel().getDatas()._as[i]
					if(item.fileType !== 'root' && item.fileType !== 'dir' ){
						item.fileType = 'image';
						item._image = item.path + '/' + item._name;
					}
				}
				editor.pubilcAssetPanel.accordion.isDroppableToDisplayView = true;
				//公共图标拖动到图纸
				/*editor.pubilcIconPanel.accordion.handleDropToEditView = function(view, fileNode, point, event) {
	                var node = new ht.Node();
	                node.setImage(fileNode.getImage());
	                node.p(point);
	                node.setDisplayName(fileNode.getName());
	                view.addData(node);
	        	};*/
				editor.pubilcAssetPanel.accordion.onDataDoubleClicked = function(data,e){
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
	editor.pubilcAssetPanel.reloadList();
}
//初始化公共图标右键菜单
function initPublicIconMenu(){
	var json = [
		{
            label: "从公共资源中移除",
            action: function(item) {
            	var q = editor.pubilcAssetPanel.accordion.sm().ld();
            	
            },
            visible: function() {
				var q = editor.pubilcAssetPanel.accordion.sm().ld();
				return !!q && q.fileType === 'image'
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
	contextmenu.addTo(editor.pubilcAssetPanel.accordion.getView());
}
//发布到公共资源
function sendAssetToPublic(){

	var list = [];
	editor.assets.accordion.sm().each(function(node){
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
		url : hteditor_config.pushAssetToPublic,  
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
	    	editor.pubilcAssetPanel.reloadList();
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
