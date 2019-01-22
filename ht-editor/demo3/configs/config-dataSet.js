
//数据集
function createDataSetValue() {
    return {
        type: 'custom',
        buildUI: function(inspector, items, displayName, getter, setter) {
            inspector.addLabelInput(items, displayName, getter, setter);
        }
    };
}

//创建数据集面板
function createDataSetTab(editor) {
    var dataSetTab = editor.dataSetTab = new ht.Tab();
    dataSetTab.setName('数据');
    editor.leftTopTabView.getTabModel().add(dataSetTab);
    dataSetTab.setView(createDataSetPanel(editor, true));
    initDataSetMenu();
    return dataSetTab;
}

function createDataSetPanel(editor) {
    var fileIcon = 'symbols/demo/icon/数据可视化.json';
    var dataSetPanel = editor.dataSetPanel = new hteditor.Explorer(editor, 'dataSetRoot', true);
    var json = returnData(dataSetPanel);
    
    
    //新增文件夹
    dataSetPanel.addMenuFile = function(){
    	var S = hteditor.getString;
    	var dialog = new ht.widget.Dialog();
		var formPane = new ht.widget.FormPane();
        formPane.addRow([
	        {
	            id: 'fileName',
	            textField: {
	                text: ''
	            }
	        }
	    ], [223]);
	    var buttons = [{
	        label: S('OK'),
	        action: function() {
	            var fieldName = formPane.v('fileName');
	            if(!fieldName || fieldName === '' ){
            		editor.showMessage('文件名称必须填写！');
            		return;
            	}
	           	$.ajax({
	            	url : hteditor_config.dataSetUrl,  
				    type : "POST",
				    dataType:'json',
				    async : true,   //同步：false，异步：true 
				    data : {
				    	name : fieldName
				    },
				    success : function(data){
				    	editor.dataSetPanel.reloadList();
				    },
				    fail : function(data){
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
	        title: '新文件夹名',
	        draggable: true,
	        width:250,
	        height:100,
	        contentPadding: 4,
	        content: formPane,
	        buttons: buttons,
	        buttonsAlign: 'right'
	    });
        dialog.show();
    }
    //新增/编辑 数据集
    dataSetPanel.addMenuNode = function(item){
    	var dir = editor.dataSetPanel.currentDir;
    	if(item && item.fileType === 'dir'){
    		item = ''
    	}
    	if(!dir){
    		editor.showMessage('请选中一个文件夹！');
    		return;
    	}
    	var type = dir.split('dataSetRoot/')[1];
    	if(type === 'SQL' || type === 'sql'){
    		createDataSqlDialog(item);
    	}else if(type === 'HTTP' || type === 'http'){
    		createDataHttpDialog(item);
    	}
    }
    //编辑数据集
    dataSetPanel.editMenuNode = function(){
    	var panel = this;
    	var data = panel.accordion.sm().ld();
    	if(!data || data.fileType === 'dir'){
    		return;
    	}
    	panel.addMenuNode(data);
    }
    //删除数据集
    dataSetPanel.delMenuNode = function(){
    	var panel = this;
    	var data = panel.accordion.sm().ld();
    	if(!data || data.fileType === 'dir'){
    		return;
    	}
    	var title = '删除[' + data._name + ']';
    	var S = hteditor.getString;
    	var dialog = new ht.widget.Dialog();
		var formPane = new ht.widget.FormPane();
        formPane.addRow(['确定删除选中内容？'], [0.1]);
	    var buttons = [{
	        label: S('OK'),
	        action: function() {
	        	var addItem = {
					type : 'delete',
					content: [{
						"id":  data.value.para.id,
						"name":'',
						"type":"",
						"host":'',
						"port":'',
						"username": '',
						"password": '',
						"database": '',
						"sql":''
					}]
				}
	        	addItem.content[0].column = [];

	           	$.ajax({
	            	url : hteditor_config.dataSetUrl + 'dir',  
				    type : "POST",
				    async : true,
				    contentType: "application/json; charset=utf-8",
			    	dataType:'json',
			    	data : JSON.stringify(addItem),
				    success : function(data){
				    	editor.dataSetPanel.reloadList();
				    },
				    fail : function(data){
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
	        title: title,
	        draggable: true,
	        width:250,
	        height:100,
	        contentPadding: 4,
	        content: formPane,
	        buttons: buttons,
	        buttonsAlign: 'right'
	    });
        dialog.show();
    }
    dataSetPanel.reloadList = function(){
    	var dataExplorer = this;
    	var reJson = returnData();
    }
    dataSetPanel.accordion.onDataDoubleClicked = function(data,e){
    	editor.dataSetPanel.editMenuNode();
    }
    return dataSetPanel;
}
//初始化数据集右键菜单
function initDataSetMenu(){
	var json = [
        /*{
            label: "新建文件夹",
            action: function(item) {
                editor.dataSetPanel.addMenuFile();
            }
        },*/
        {
            label: "新建数据集",
            action: function(item) {
                editor.dataSetPanel.addMenuNode();
            }
        },
        {
            label: "编辑",
            action: function(item) {
                editor.dataSetPanel.editMenuNode();
            }
        },
        {
            label: "删除",
            action: function(item) {
                editor.dataSetPanel.delMenuNode();
            }
        }
    ];
    var contextmenu = new ht.widget.ContextMenu(json);
	contextmenu.addTo(editor.dataSetPanel.accordion.getView());
}

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
    formPane.addRow([
    	{
    		element:'数据库',
    		align: 'right'
    	},
        {
            id: 'database',
            textField: {
                text: config.database
            }
        }
    ], [55, 0.1]);
    /*formPane.addRow([
    	{
    		element:'数据源',
    		align: 'right'
    	},
    	{
            unfocusable: true,
            id: 'dataSource',
            comboBox: {
                values: [1, 2, 3, 4],
                labels: ['数据源1', '数据源2', '数据源3', '数据源4']
            }
        }
        
    ], [55, 0.1]);*/
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
            textArea: {
                text: config.sql
            }
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
		            	host = formPane.v('host'),
		            	port = formPane.v('port'),
		            	username = formPane.v('username'),
		            	password = formPane.v('password'),
		            	database = formPane.v('database'),
		            	sql = formPane.v('sql');
		            var fieldId = '';
		            if(formPane.getItemById('fileId')){
		            	fieldId = formPane.v('fileId')
		            }
		            if(!fieldName || !host || !port || !username || !password || !database || !sql){
		        		editor.showMessage('数据必须填写完整！');
		        		return;
		        	}
					var addItem = {
						type : 'add',
						content: {
							"id": fieldId,
							"name":fieldName,
							"type":"mysql",
							"host":host,
							"port":port,
							"username": username,
							"password": password,
							"database": database,
							"sql":sql,
							"column":[
								
							]
						}
					}
					
		           	$.ajax({
		            	url : hteditor_config.dataSetUrl + 'test',
					    type : "POST",
					    async : true,
					    contentType: "application/json; charset=utf-8",
					    dataType:'json',
					    data : JSON.stringify(addItem),
					    success : function(data){
					    	editor.showMessage(data.msg);
					    },
					    fail : function(data){
					    	editor.showMessage(data.msg);
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
            	host = formPane.v('host'),
            	port = formPane.v('port'),
            	username = formPane.v('username'),
            	password = formPane.v('password'),
            	database = formPane.v('database'),
            	sql = formPane.v('sql');
            var fieldId = uuid();
            if(formPane.getItemById('fileId')){
            	fieldId = formPane.v('fileId')
            }else{
            	
            }
            if(editor.dataSetPanel.dataModel.getDatas('dataSetRoot/SQL/' + fieldName) && editor.dataSetPanel.dataModel.getDataById('dataSetRoot/SQL/' + fieldName).value.para.id != fieldId){
            	editor.showMessage('数据集名称不能重复！');
        		return;
            }
            if(!fieldName || !host || !port || !username || !password || !database || !sql){
        		editor.showMessage('数据必须填写完整！');
        		return;
        	}
            
			var addItem = {
				type : 'add',
				content: [{
					"id": fieldId,
					"name":fieldName,
					"type":"mysql",
					"host":host,
					"port":port,
					"username": username,
					"password": password,
					"database": database,
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
			    data : JSON.stringify(addItem),
			    success : function(data){
			    	editor.dataSetPanel.reloadList();
			    },
			    fail : function(data){
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
        height:500,
        contentPadding: 4,
        content: formPane,
        buttons: buttons,
        buttonsAlign: 'right'
    });
    dialog.show();
}

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
    ], [60, 0.1]);
    formPane.addRow([
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
				paramName: config.addtionParam.name,
				paramValue: config.addtionParam.paramValue
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
	}, null], [50, 50, .1])
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
            	fieldType = formPane.v('httpType'),
            	username = formPane.v('username'),
            	password = formPane.v('password'),
            	httpUrl = formPane.v('httpUrl');
            	
            if(editor.dataSetPanel.dataModel.getDatas('dataSetRoot/HTTP/' + fieldName) && editor.dataSetPanel.dataModel.getDataById('dataSetRoot/SQL/' + fieldName).value.para.id != fieldId){
            	editor.showMessage('数据集名称不能重复！');
        		return;
            }
            if(!fieldName || !httpUrl || !fieldType || !username || !password){
        		editor.showMessage('数据必须填写完整！');
        		return;
        	}

            var fieldId = uuid();
            if(formPane.getItemById('id')){
            	fieldId = formPane.v('id')
            }
            var addItem = {
				type : 'add',
				content: [{
					"id": fieldId,
					"name":fieldName,
					"type":"http",
					"host":httpUrl,
					"port":'',
					"username": username,
					"password": password,
					"httpType": fieldType,
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
			addItem.content[0].addtionParam = [];
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
			
           	$.ajax({
            	url : hteditor_config.dataSetUrl + 'dir',
			    type : "POST",
			    async : true,
			   	contentType: "application/json; charset=utf-8",
			    dataType:'json',
			    data : JSON.stringify(addItem),
			    success : function(data){
			    	editor.dataSetPanel.reloadList();
			    },
			    fail : function(data){
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
    //var splitView = new ht.widget.SplitView(formPane, tablePane, 'v', 55)
    dialog.setConfig({
        title: config.title,
        draggable: true,
        width:450,
        height:450,
        contentPadding: 4,
        content: formPane,
        buttons: buttons,
        buttonsAlign: 'right'
    });
    dialog.show();
}
//数据
function returnData(){
	var fileIcon = 'symbols/demo/icon/数据可视化.json';
	var dataSetUrl = hteditor_config.dataSetUrl + 'info';
	$.ajax({
		type:"get",
		url:dataSetUrl,
		async:true,
		success:function(data){
			var reJson = [
			{
				'type':'dir',
				'name':'HTTP',
				'child':[
					
				]
			},
			{
				'type':'dir',
				'name':'SQL',
				'child':[
					
				]
			}
			]
			for(i in data.msg){
				if(data.msg[i].type === 'mysql'){
					reJson[1].child.push(data.msg[i]);
				}else if(data.msg[i].type === 'http'){
					reJson[0].child.push(data.msg[i]);
				}
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
			
		}
	});
}
