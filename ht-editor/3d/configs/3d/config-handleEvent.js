(function() {

    window.hteditor_config.handleEvent = function(editor, type, params) {
        var S = hteditor.getString;
        //console.log(type)
        if (type === 'editor3dCreated') {
            handleEditorCreated(editor);
            //editorStyleChange(editor);
        }
        else if (type === 'sceneSaving') {
        	var id = params.url;
        	var item = editor.scenes.list.dm().getDataById(id);
        	if(item && item._styleMap.appid){
        		var urlStr = 'previews3D/' + item._styleMap.appid + '.html';
        		params.scene.dm().a('previewURL',urlStr);
        	}
        }else if(type === 'sceneSaved'){
        	debugger;
        	var sendData = {
        		url : params.path
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
    };
    //样式调整
    function editorStyleChange(editor){
    	var leftTopTabView = editor.leftTopTabView;
		leftTopTabView.setTabPosition('left');
	    leftTopTabView.setTabHeight(45);
	    
	    leftTopTabView.setTabGap(5);
	    leftTopTabView.getTitleDiv().style.borderRight = '1px solid #e4e4e4';
    }
    //
    function handleEditorCreated(editor) {
    	editor.addEventListener(function(event) {
            if (event.type === 'fileRenaming') {
            	//图纸禁止改名
                if (event.params.data.fileType === 'scene') {
                    event.params.preventDefault = true;
                }
            }else if(event.type === 'explorerUpdated' && event.params.explorer.rootDir === 'scenes'){
            	var list = event.params.explorer.list.getDataModel().getDatas()._as;
            	for(var i = 0; i < list.length; i++){
            		if(list[i].fileType === 'scene' && list[i].getName().split('_').length > 1){
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
					var openJson = 'scenes/' + UserJson.pid + '/' + UserJson.appid +'_'+ UserJson.file+'.json'
					editor.open(openJson);
					if(hteditor_config.firstLoad){
						setInspectorSetEditable(openJson,UserJson);
					}
				}
            }
        });
        editor3d.scenes.list.menu.getView().style.display = 'none';
        editor3d.scenes.tree.menu.getView().style.display = 'none';
    }
    
    function setInspectorSetEditable(url,UserJson){
		setTimeout(function(){
			if(editor3d.inspector && editor3d.inspector.getRows()[3]){
				editor3d.selectFileNode(url);
				editor3d.inspector.getRows()[6].items[1].element.setEditable(false);
				//改
				if(hteditor_config.firstLoad && editor3d.inspector.getPropertyValue('previewURL') !== 'previews3D/' + UserJson.appid + '.html'){
					editor3d.inspector.setPropertyValue('previewURL','previews2D/' + UserJson.appid + '.html');
					editor3d.save()
				}
				hteditor_config.firstLoad = false;
			}else{
				setInspectorSetEditable(url,UserJson);
			}
		},1500);
	}
    
})();
























