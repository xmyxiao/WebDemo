//创建sql弹出框
function createDataSqlDialog(item){
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
				database: '',
				sql: '',
				dataSource: '',
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
		database: data.value.para.database || '',
		dataSource: data.value.para.dataSource || '',
		column: data.value.para.column || [],
		sql: data.value.para.sql || ''
	}
	if(item){
		config.title = '编辑数据集';
	}else{
		config.title = '新增数据集';
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
    
    
    var dataSourceList = editor.dataSetPanel.accordion.getDataModel().getDataById('dataSetRoot/数据源').getChildren()._as;
    var dataSourceIds = [],dataSourceNames = [];
    if(dataSourceList && dataSourceList.length > 0){
    	for(var i = 0; i < dataSourceList.length; i++){
    		dataSourceIds.push(dataSourceList[i].getId());
    		dataSourceNames.push(dataSourceList[i].getName());
    	}
    }
    
    formPane.addRow([
    	{
    		element:'数据源',
    		align: 'right'
    	},
    	{
            unfocusable: true,
            id: 'dataSource',
            comboBox: {
                values: dataSourceIds,
                labels: dataSourceNames,
                value: config.dataSource,
            }
        }
        
    ], [55, 0.1]);
   	var tableModel = new ht.DataModel;
    var tablePane =  new ht.widget.TablePane(tableModel);
    var tableView = tablePane.getTableView();
    tablePane.getView().style.border = hteditor_config.color_line + " solid 1px";
    tablePane.addColumns([
        {
            accessType: "attr",
			align: "center",
			displayName: "字段ID",
			editable: true,
			enum: undefined,
			name: "fileName",
			tag: "fileName",
			width: 180
        },
        {
            accessType: "attr",
			align: "center",
			displayName: "字段名称",
			editable: true,
			enum: undefined,
			name: "fileDes",
			tag: "fileDes",
			width: 180
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
				tableModel.add(V)
    		}
    	}
    }
    formPane.addRow([tablePane], [.1], .1);
    formPane.addRow([{
		button: {
			label: '添加字段',
			onClicked: function() {
				var V = new ht.Data;
				V.a({
					fileName: "",
					fileDes: ""
				}), 
				tableModel.add(V)
			}
		}
	}, {
		button: {
			label: '删除字段',
			onClicked: function() {
				tableView.removeSelection()
			}
		}
	}, null], [50, 50, .1])
    formPane.addRow([
    	{
    		element:'SQL语句',
    		vAlign: 'top',
    		align: 'right'
    	},
        {
            id: 'sql',
            element: new hteditor.CodeEditor({
                value: config.sql,
                language: 'sql',
                minimap: {
                    enabled: false
                }
            })
        }
    ], [55, 0.1],100);
    formPane.addRow([
    	{
    		element:'测试',
    		align: 'right'
    	},
    	{
	        unfocusable: true,
	        button: {
	            label: '测试连接',
	            orientation: 'v',
	            width: 120,
	            onClicked:function(e){
	            	var fieldName = formPane.v('fileName'),
		            	/*host = formPane.v('host'),
		            	port = formPane.v('port'),
		            	username = formPane.v('username'),
		            	password = formPane.v('password'),
		            	database = formPane.v('database'),*/
		            	dataSource = formPane.v('dataSource'),
		            	sql = formPane.v('sql');
		            var fieldId = 'SqlEntity_' + uuid(8);
		            if(formPane.getItemById('fileId')){
		            	fieldId = formPane.v('fileId')
		            }
		            if(!fieldName || !dataSource || !sql){
		        		editor.showMessage('数据必须填写完整！');
		        		return;
		        	}
		            var dataSourceItem = editor.dataSetPanel.accordion.getDataModel().getDataById(dataSource).value.para;
		            if(!dataSourceItem){
		            	editor.showMessage('无效的数据集！');
		        		return;
		            }
					var addItem = {
						"id": fieldId,
						"name":fieldName,
						"type":"mysql",
						"host":dataSourceItem.host,
						"port":dataSourceItem.port,
						"username": dataSourceItem.username,
						"password": dataSourceItem.password,
						"database": dataSourceItem.database,
						"sql":sql
					}
					if(!editor.dataSetPanel.disabledDiv){
						editor.dataSetPanel.disabledDiv = ht.Default.createDisabledDiv('custom/images/加载.json');
						editor.dataSetPanel.disabledDiv.style.top = 0;
						editor.dataSetPanel.disabledDiv.style.left = 0;
						editor.dataSetPanel.disabledDiv.style.right = 0;
						editor.dataSetPanel.disabledDiv.style.bottom = 0;
						editor.dataSetPanel.disabledDiv.style.zIndex = 100;
						document.body.appendChild(editor.dataSetPanel.disabledDiv);
					}
					editor.dataSetPanel.disabledDiv.style.display = 'block';
		           	$.ajax({
		            	url : hteditor_config.dataSetUrl + 'test',
					    type : "POST",
					    async : true,
					    headers: {
				            'cookies':document.cookie
				       	},
					    contentType: "application/json; charset=utf-8",
					    dataType:'json',
					    data : JSON.stringify(addItem),
					    success : function(data){
					    	if(editor.dataSetPanel.disabledDiv){
					    		editor.dataSetPanel.disabledDiv.style.display = 'none';
					    	}
					    	if(data.message){
					    		editor.showMessage(data.message);
					    	}else if(data.length){
					    		editor.showMessage('测试成功');
					    	}
					    },
					    error : function(data){
					    	if(editor.dataSetPanel.disabledDiv){
					    		editor.dataSetPanel.disabledDiv.style.display = 'none';
					    	}
					    	editor.showMessage(data);
					    }
		            });
	            }
	        }
	    }
    ],[55, 0.1],25);
    
    var buttons = [{
        label: S('OK'),
        action: function() {
            var fieldName = formPane.v('fileName'),
            	/*host = formPane.v('host'),
            	port = formPane.v('port'),
            	username = formPane.v('username'),
            	password = formPane.v('password'),
            	database = formPane.v('database'),*/
            	dataSource = formPane.v('dataSource'),
            	sql = formPane.v('sql');
            var fieldId = 'SqlEntity_' + uuid(8);
            if(formPane.getItemById('fileId')){
            	fieldId = formPane.v('fileId')
            }
            if(editor.dataSetPanel.dataModel.getDataById('dataSetRoot/SQL实体/' + fieldName) && editor.dataSetPanel.dataModel.getDataById('dataSetRoot/SQL实体/' + fieldName).value.para.id != fieldId){
            	editor.showMessage('数据集名称不能重复！');
        		return;
            }
            if(!fieldName || !dataSource || !sql){
        		editor.showMessage('数据必须填写完整！');
        		return;
        	}
            var dataSourceItem = editor.dataSetPanel.accordion.getDataModel().getDataById(dataSource).value.para;
            if(!dataSourceItem){
            	editor.showMessage('无效的数据集！');
        		return;
            }
			var addItem = {
				type : 'add',
				content: [{
					"id": fieldId,
					"name":fieldName,
					"type":"mysql",
					"host":dataSourceItem.host,
					"port":dataSourceItem.port,
					"username": dataSourceItem.username,
					"password": dataSourceItem.password,
					"database": dataSourceItem.database,
					"dataSource": dataSource,
					"sql":sql
				}]
			}
			addItem.content[0].column = [];
			if(tableModel.getDatas().length > 0){
				tableModel.getDatas().forEach(function(node){
					var item = {}
					item[node.a('fileName')] = node.a('fileDes')
					addItem.content[0].column.push(item);
				})
			}
           	$.ajax({
            	url : hteditor_config.dataSetUrl + 'dir',  
			    type : "POST",
			    contentType: "application/json; charset=utf-8",
			    dataType:'json',
			    headers: {
		            'cookies':document.cookie
		       	},
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
        width:450,
        height:400,
        contentPadding: 4,
        content: formPane,
        buttons: buttons,
        buttonsAlign: 'right'
    });
    dialog.show();
}
//http实体弹出框
function createDataHttpDialog(item){
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
				database: '',
				sql: '',
				httpType: '',
				addtionParam: [],
				column: []
			}
		}
	}
	$.extend(data,item);
	var config = {
		fileName: data._name || '',
		fileId: data.value.para.id || '',
		host: data.value.para.host || '',
		type: data.value.para.httpType || '',
		port: data.value.para.port || '',
		username: data.value.para.username || '',
		password: data.value.para.password || '',
		database: data.value.para.database || '',
		addtionParam: data.value.para.addtionParam || [],
		column: data.value.para.column || [],
		sql: data.value.para.sql || ''
	}

	if(item){
		config.title = '编辑接口实体';
	}else{
		config.title = '新增接口实体';
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
    /*formPane.addRow([
    	{
    		element:'接口地址',
    		align: 'right'
    	},
        {
            id: 'httpUrl',
            textField: {
                text: config.host
            }
        }
    ], [60, 0.1]);
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
    ], [60, 0.1]);
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
    ], [60, 0.1]);
    formPane.addRow([
    	{
    		element:'获取方式',
    		align: 'right'
    	},
        {
            unfocusable: true,
            id: 'httpType',
            comboBox: {
            	value: config.type || 'GET',
                values: ['GET', 'POST'],
                labels: ['GET', 'POST']
            }
        }
    ], [60, 0.1]);
    
    var tableModel = new ht.DataModel;
    var tablePane =  new ht.widget.TablePane(tableModel);
    var tableView = tablePane.getTableView();
    tablePane.getView().style.border = hteditor_config.color_line + " solid 1px";
    tablePane.addColumns([
        {
            accessType: "attr",
			align: "center",
			displayName: "参数",
			editable: true,
			enum: undefined,
			name: "paramName",
			tag: "paramName",
			width: 170
        },
        {
            accessType: "attr",
			align: "center",
			displayName: "参数值",
			editable: true,
			enum: undefined,
			name: "paramValue",
			tag: "paramValue",
			width: 170
        }
    ]);
    if(config.addtionParam){
    	for(var i = 0; i < config.addtionParam.length; i++){
    		var V = new ht.Data;
			V.a({
				paramName: config.addtionParam[i].name,
				paramValue: config.addtionParam[i].value
			}), 
			tableModel.add(V)
    	}
    }
    formPane.addRow([tablePane], [.1], .1);
    formPane.addRow([{
		button: {
			label: '添加参数',
			align:'right',
			onClicked: function() {
				var V = new ht.Data;
				V.a({
					paramName: "param"
				}), 
				tableModel.add(V)
			}
		}
	}, {
		button: {
			label: '删除参数',
			onClicked: function() {
				tableView.removeSelection()
			}
		}
	}, null], [50, 50, .1])*/
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
            var fieldName = formPane.v('fileName');
         
            var fieldId = 'InfcEntity_' + uuid(8);
            if(formPane.getItemById('fileId')){
            	fieldId = formPane.v('fileId')
            }
            if(editor.dataSetPanel.dataModel.getDataById('dataSetRoot/接口实体/' + fieldName) && editor.dataSetPanel.dataModel.getDataById('dataSetRoot/接口实体/' + fieldName).value.para.id != fieldId){
            	editor.showMessage('数据集名称不能重复！');
        		return;
            }
            if(!fieldName){
        		editor.showMessage('数据必须填写完整！');
        		return;
        	}
            var addItem = {
				type : 'add',
				content: [{
					"id": fieldId,
					"name":fieldName,
					"type":"http",
					"host":'',
					"port":'',
					"username": '',
					"password": '',
					"httpType": '',
					"database": '',
					"sql":''
				}]
			}
			addItem.content[0].column = [];
			if(paraTableModel.getDatas().length > 0){
				paraTableModel.getDatas().forEach(function(node){
					var item = {}
					if(node.a('fileName')){
						item[node.a('fileName')] = node.a('fileDes')
						addItem.content[0].column.push(item);
					}
				})
			}
			/*addItem.content[0].addtionParam = [];
			if(tableModel.getDatas().length > 0){
				tableModel.getDatas().forEach(function(node){
					if(node.a('paramName')){
						var item = {
							name: node.a('paramName'),
							value: node.a('paramValue')
						}
						addItem.content[0].addtionParam.push(item)
					}
					
				})
			}
			*/
           	$.ajax({
            	url : hteditor_config.dataSetUrl + 'dir',
			    type : "POST",
			    async : true,
			   	contentType: "application/json; charset=utf-8",
			    dataType:'json',
			    headers: {
		            'cookies':document.cookie
		       	},
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
		        content: '<div id="dataDialog" style="width:100%;height:100%;overflow-y: auto;"></dvi>',
		        buttons: dataBtn,
		        buttonsAlign: 'right'
		    });
		    dataDialog.show();
            
		    socket.on("connect", function() {
		    	var content = $("#dataDialog");
		    	var html = '<p>连接</p>';
		    	if(!content.is(":visible")){
		    		return;
		    	}
		    	content.append(html);
			})
		    
		    socket.emit('explore',[fieldId],name);
			socket.on(name + "/data", function(data) {
		    	var content = $("#dataDialog");
		    	var html = '<p>'+data+'</p>';
		    	if(!content.is(":visible")){
		    		return;
		    	}
		    	content.append(html);
			})
		    socket.on("disconnect", function() {
				var content = $("#dataDialog");
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
        width:450,
        height:250,
        contentPadding: 4,
        content: formPane,
        buttons: buttons,
        buttonsAlign: 'right'
    });
    dialog.show();
}
//数据
function returnData(){
	var userStr = getCookie("user");
	if(!userStr){
		userStr = '{}'
	}
	var UserJson = JSON.parse(userStr);
	var fileIcon = 'custom/images/数据可视化.json';
	var dataSetUrl = hteditor_config.dataSetUrl + 'info';
	$.ajax({
		type:"get",
		url:dataSetUrl,
		async:true,
		data:{
			name:UserJson.name
		},
		success:function(data){
			//这里的name在组件中作为id使用  修改后通过id获取的方法也要一起修改
			var reJson = [
			{
				'type':'dir',
				'name':'接口实体',
				'dataType':'HTTP',
				'child':[
					
				]
			},
			/*{
				'type':'dir',
				'name':'SQL实体',
				'dataType':'SQL',
				'child':[
					
				]
			},
			{
				'type':'dir',
				'name':'数据源',
				'dataType':'DataSource',
				'child':[
					
				]
			},*/
			/*{
				'type':'dir',
				'name':'ITO云',
				'dataType':'ITOData',
				'child':[
					
				]
			},*/
			{
				'type':'dir',
				'name':'模拟数据',
				'dataType':'ANALOG',
				'child':[
					
				]
			}
			]
			for(i in data.msg){
				if(data.msg[i].type === 'http'){
					reJson[0].child.push(data.msg[i]);
				}/*else if(data.msg[i].type === 'ITOData'){
					reJson[1].child.push(data.msg[i]);
				}*/else if(data.msg[i].type === 'analogData'){
					reJson[1].child.push(data.msg[i]);
				}
				/*if(data.msg[i].type === 'mysql'){
					reJson[1].child.push(data.msg[i]);
				}else if(data.msg[i].type === 'http'){
					reJson[0].child.push(data.msg[i]);
				}else if(data.msg[i].type === 'dataSource'){
					reJson[2].child.push(data.msg[i]);
				}else if(data.msg[i].type === 'ITOData'){
					reJson[3].child.push(data.msg[i]);
				}else if(data.msg[i].type === 'analogData'){
					reJson[4].child.push(data.msg[i]);
				}*/
			}
			editor.dataSetPanel.itemList = reJson;
			var dataJson = {};
			for(var i = 0; i < reJson.length; i++){
				if(reJson[i].type === 'dir'){
					dataJson[reJson[i].name] = {}
					if(reJson[i].child && reJson[i].child.length > 0){
						for(var j = 0; j < reJson[i].child.length; j++){
							var item = {
								fileType: 'set', 
								fileIcon: fileIcon
							}
							item.para = reJson[i].child[j];
							dataJson[reJson[i].name][reJson[i].child[j].name] = item;
						}
					}
				}
			}
			editor.dataSetPanel.parse(dataJson);
			return dataJson
		},
		error:function(){
			editor.showMessage('数据集获取失败！');
		}
	});
}