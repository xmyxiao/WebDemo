//创建数据源
function createDataITODialog(item){
	var data = {
		_name:'',
		value:{
			para:{
				id: '',
				name: '',
				productKey: '',
				productPassWord: '',
				equKey: '',
				yunUrl: '',
				column: []
			}
		}
	}
	$.extend(data,item);
	var config = {
		fileName: data._name || '',
		fileId: data.value.para.id || '',
		productKey: data.value.para.productKey || '',
		productPassWord: data.value.para.productPassWord || '',
		equKey: data.value.para.equKey || '',
		yunUrl: data.value.para.yunUrl || '',
		column: data.value.para.column || []
	}
	if(item){
		config.title = '编辑ITO设备';
	}else{
		config.title = '新增ITO设备';
	}
	
	var S = hteditor.getString;
	var dialog = new ht.widget.Dialog();
	var formPane = new ht.widget.FormPane();
	if(item){
		formPane.addRow([
	        {
    			element:'ID',
    			align: 'right'
    		},
	        {
	        	id: 'fileId',
	            textField: {
	                text: config.fileId,
	                editable: false
	            }
	        }
	    ], [55, 0.1]);
	}
	
    formPane.addRow([
    	{
    		element:'名称',
    		align: 'right'
    	},
        {
            id: 'fileName',
            textField: {
                text: config.fileName
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'产品Key',
    		align: 'right'
    	},
        {
            id: 'productKey',
            textField: {
                text: config.productKey
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'产品密钥',
    		align: 'right'
    	},
        {
            id: 'productPassWord',
            textField: {
                text: config.productPassWord
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'设备Key',
    		align: 'productKey'
    	},
        {
            id: 'equKey',
            textField: {
                text: config.productKey
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'云地址',
    		align: 'right'
    	},
        {
            id: 'yunUrl',
            textField: {
                text: config.yunUrl
            }
        }
    ], [55, 0.1]);
    
     //配置字段
    var paraTableModel = new ht.DataModel;
    var paraTablePane =  new ht.widget.TablePane(paraTableModel);
    var paraTableView = paraTablePane.getTableView();
    paraTablePane.getView().style.border = hteditor_config.color_line + " solid 1px";
    paraTablePane.addColumns([
        {
            accessType: "attr",
			align: "center",
			displayName: "字段ID",
			editable: true,
			enum: undefined,
			name: "fileName",
			tag: "fileName",
			width: 170
        },
        {
            accessType: "attr",
			align: "center",
			displayName: "字段名称",
			editable: true,
			enum: undefined,
			name: "fileDes",
			tag: "fileDes",
			width: 170
        }
    ]);
    if(config.column){
    	for(var i = 0; i < config.column.length; i++){
    		for(key in config.column[i]){
    			var V = new ht.Data;
				V.a({
					fileName: key,
					fileDes: config.column[i][key]
				}), 
				paraTableModel.add(V)
    		}
    	}
    }
    formPane.addRow([paraTablePane], [.1], .1);
    formPane.addRow([{
		button: {
			label: '添加字段',
			onClicked: function() {
				var V = new ht.Data;
				V.a({
					fileName: "",
					fileDes: ""
				}), 
				paraTableModel.add(V)
			}
		}
	}, {
		button: {
			label: '删除字段',
			onClicked: function() {
				paraTableView.removeSelection()
			}
		}
	}, null], [50, 50, .1])
    
    
    var buttons = [{
        label: S('OK'),
        action: function() {
            var fieldName = formPane.v('fileName'),
            	productKey = formPane.v('productKey'),
            	productPassWord = formPane.v('productPassWord'),
            	equKey = formPane.v('equKey'),
            	yunUrl = formPane.v('yunUrl');

            var fieldId = 'ITOEntity_' + uuid(8);
            if(formPane.getItemById('fileId')){
            	fieldId = formPane.v('fileId')
            }
            if(editor.dataSetPanel.dataModel.getDataById('dataSetRoot/ITO云/' + fieldName) && editor.dataSetPanel.dataModel.getDataById('dataSetRoot/ITO云/' + fieldName).value.para.id != fieldId){
            	editor.showMessage('设备名称不能重复！');
        		return;
            }
            if(!fieldName || !productKey || !productPassWord || !equKey || !yunUrl){
        		editor.showMessage('数据必须填写完整！');
        		return;
        	}
            
			var addItem = {
				type : 'add',
				content: [{
					"id": fieldId,
					"name":fieldName,
					"type":"ITOData",
					"productKey":productKey,
					"productPassWord":productPassWord,
					"equKey": equKey,
					"yunUrl": yunUrl
				}]
			}
			
			addItem.content[0].column = [];
			if(paraTableModel.getDatas().length > 0){
				paraTableModel.getDatas().forEach(function(node){
					var item = {}
					if(node.a('fileName')){
						item[node.a('fileName')] = node.a('fileDes');
						addItem.content[0].column.push(item);
					}
				})
			}
			
           	$.ajax({
            	url : hteditor_config.dataSetUrl + 'dir',  
			    type : "POST",
			    contentType: "application/json; charset=utf-8",
			    headers: {
		            'cookies':document.cookie
		       	},
			    dataType:'json',
			    data : JSON.stringify(addItem),
			    success : function(data){
			    	editor.dataSetPanel.reloadList();
			    },
			    error : function(data){
			    	editor.showMessage(data);
			    }
            });
            dialog.hide();
        }
    },{
        label: S('Cancel'),
        action: function() {
            dialog.hide();
        }
    },{
        label: '数据测试',
        action: function() {
        	var fieldId = '';
            if(formPane.getItemById('fileId')){
            	fieldId = formPane.v('fileId')
            }
            if(!fieldId){
            	return
            }
            var userStr = getCookie("user");
	    	if(!userStr){
	    		return
	    	}
		    var UserJson = JSON.parse(userStr);
		    var dataDialog = new ht.widget.Dialog();
		    var O = location.hostname + ':10000';
		    var socket = io.connect(O);
		    var name = UserJson.name;
		    var dataBtn = [{
		    	label: '关闭',
		        action: function() {
		        	socket.emit('closeConnection',name);
		        	socket.close();
		            dataDialog.hide();
		        }
		    }]
		    dataDialog.setConfig({
		        title: '数据测试',
		        draggable: true,
		        width:450,
		        height:250,
		        contentPadding: 4,
		        content: '<div id="itoDataDialog" style="width:100%;height:100%;overflow-y: auto;"></dvi>',
		        buttons: dataBtn,
		        buttonsAlign: 'right'
		    });
		    dataDialog.show();
            
		    socket.on("connect", function() {
		    	var content = $("#itoDataDialog");
		    	var html = '<p>连接</p>';
		    	if(!content.is(":visible")){
		    		return;
		    	}
		    	content.append(html);
			})
		    
		    socket.emit('explore',[fieldId],name);
			socket.on(name + "/data", function(data) {
		    	var content = $("#itoDataDialog");
		    	var html = '<p>'+data+'</p>';
		    	if(!content.is(":visible")){
		    		return;
		    	}
		    	content.append(html);
			})
		    socket.on("disconnect", function() {
				var content = $("#itoDataDialog");
		    	var html = '<p>断开</p>';
		    	if(!content.is(":visible")){
		    		return;
		    	}
		    	content.append(html);
			})
        }
    }];
    dialog.setConfig({
        title: config.title,
        draggable: true,
        width:400,
        height:320,
        contentPadding: 4,
        content: formPane,
        buttons: buttons,
        buttonsAlign: 'right'
    });
    dialog.show();
}