//创建数据源
function createDataITODialog(item){
	var data = {
		_name:'',
		value:{
			para:{
				id: '',
				name: '',
				host: '',
				port: '',
				username: '',
				password: '',
				column: []
			}
		}
	}
	$.extend(data,item);
	var config = {
		fileName: data._name || '',
		fileId: data.value.para.id || '',
		host: data.value.para.host || '',
		port: data.value.para.port || '',
		username: data.value.para.username || '',
		password: data.value.para.password || '',
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
    		element:'地址',
    		align: 'right'
    	},
        {
            id: 'host',
            textField: {
                text: config.host
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'端口',
    		align: 'right'
    	},
        {
            id: 'port',
            textField: {
                text: config.port
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'用户名',
    		align: 'right'
    	},
        {
            id: 'username',
            textField: {
                text: config.username
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'密码',
    		align: 'right'
    	},
        {
            id: 'password',
            textField: {
                text: config.password
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
            	host = formPane.v('host'),
            	port = formPane.v('port'),
            	username = formPane.v('username'),
            	password = formPane.v('password');

            var fieldId = 'ITOEntity_' + uuid(8);
            if(formPane.getItemById('fileId')){
            	fieldId = formPane.v('fileId')
            }
            if(editor.dataSetPanel.dataModel.getDataById('dataSetRoot/ITO云/' + fieldName) && editor.dataSetPanel.dataModel.getDataById('dataSetRoot/ITO云/' + fieldName).value.para.id != fieldId){
            	editor.showMessage('设备名称不能重复！');
        		return;
            }
            if(!fieldName || !host || !port || !username || !password){
        		editor.showMessage('数据必须填写完整！');
        		return;
        	}
            
			var addItem = {
				type : 'add',
				content: [{
					"id": fieldId,
					"name":fieldName,
					"type":"ITOData",
					"host":host,
					"port":port,
					"username": username,
					"password": password
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