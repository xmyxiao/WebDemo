
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
    var json = returnData();
    
    dataSetPanel.parse(json);
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
	            	url : hteditor_config.detailedDataSetUrl,  
				    type : "POST",
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
    	if(!data){
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
	           	$.ajax({
	            	url : hteditor_config.detailedDataSetUrl,  
				    type : "POST",
				    async : true,
				    data : {
				    	path : data.value.para.path
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
    	dataExplorer.parse(reJson);
    }
    dataSetPanel.accordion.onDataDoubleClicked = function(data,e){
    	editor.dataSetPanel.editMenuNode();
    }
    return dataSetPanel;
}
//初始化数据集右键菜单
function initDataSetMenu(){
	var json = [
        {
            label: "新建文件夹",
            action: function(item) {
                editor.dataSetPanel.addMenuFile();
            }
        },
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
				dataSource: '',
				sql: ''
			}
		}
	}
	$.extend(data,item);
	var config = {
		fileName: data._name || '',
		dataSource: data.value.para.dataSource || '',
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
        
    ], [55, 0.1]);
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
	            	console.log(1)
	            }
	        }
	    }
    ],[55, 0.1],25);
    
    var buttons = [{
        label: S('OK'),
        action: function() {
            var fieldName = formPane.v('fileName'),
            	dataSource = formPane.v('dataSource'),
            	sql = formPane.v('sql');
            	
            if(!fieldName || fieldName === '' ){
        		editor.showMessage('数据集名称必须填写！');
        		return;
        	}
            if(!dataSource || dataSource === '' ){
        		editor.showMessage('数据源必须填写！');
        		return;
        	}
            if(!sql || sql === '' ){
        		editor.showMessage('SQL语句必须填写！');
        		return;
        	}
           	$.ajax({
            	url : hteditor_config.detailedDataSetUrl,  
			    type : "POST",
			    async : true,
			    data : {
			    	fieldName : fieldName,
			    	dataSource : dataSource,
			    	sql : sql
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
        title: config.title,
        draggable: true,
        width:300,
        height:270,
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
				httpUrl: '',
				addtionParam: [
					{
						name:'参数名',
						type: 'POST',
						value: '值'
					}
				]
			}
		}
	}
	$.extend(data,item);
	var config = {
		fileName: data._name || '',
		httpUrl: data.value.para.httpUrl || '',
		addtionParam: data.value.para.addtionParam || ''
	}
	if(item){
		config.title = '编辑数据集';
	}else{
		config.title = '新增数据集';
	}
	
	var S = hteditor.getString;
	var dialog = new ht.widget.Dialog();
	var formPane = new ht.widget.FormPane();
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
                text: config.httpUrl
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
			width: 80
        },
        {
            accessType: "attr",
			align: "center",
			displayName: "获取方式",
			editable: true,
			enum: ['GET','POST'],
			name: "paramType",
			tag: "paramType",
			width: 80
        },
        {
            accessType: "attr",
			align: "center",
			displayName: "参数值",
			editable: true,
			enum: undefined,
			name: "paramValue",
			tag: "paramValue",
			width: 80
        }
    ]);
    if(config.addtionParam){
    	for(var i = 0; i < config.addtionParam.length; i++){
    		var V = new ht.Data;
			V.a({
				paramName: config.addtionParam.name,
				paramType: config.addtionParam.type,
				paramValue: config.addtionParam.paramValue
			}), 
			tableModel.add(V)
    	}
    }
    formPane.addRow([tablePane], [.1], .1);
    formPane.addRow([{
		button: {
			label: '添加',
			onClicked: function() {
				var V = new ht.Data;
				V.a({
					paramName: "param",
					paramType: "GET"
				}), 
				tableModel.add(V)
			}
		}
	}, {
		button: {
			label: '删除',
			onClicked: function() {
				tableView.removeSelection()
			}
		}
	}, null], [50, 50, .1])
    var buttons = [{
        label: S('OK'),
        action: function() {
            var fieldName = formPane.v('fileName'),
            	httpUrl = formPane.v('httpUrl');
            	
            if(!fieldName || fieldName === '' ){
        		editor.showMessage('数据集名称必须填写！');
        		return;
        	}
            if(!httpUrl || httpUrl === '' ){
        		editor.showMessage('接口地址必须填写！');
        		return;
        	}
			addtionParam = [];
			if(tableModel.getDatas().length > 0){
				tableModel.getDatas().forEach(function(node){
					var item = {
						name: node.a('paramName'),
						type: node.a('paramType'),
						value: node.a('paramValue')
					}
					addtionParam.push(item)
				})
			}
			
           	$.ajax({
            	url : hteditor_config.detailedDataSetUrl,  
			    type : "POST",
			    async : true,
			    data : {
			    	fieldName : fieldName,
			    	httpUrl : httpUrl,
			    	addtionParam : addtionParam
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
    //var splitView = new ht.widget.SplitView(formPane, tablePane, 'v', 55)
    dialog.setConfig({
        title: config.title,
        draggable: true,
        width:300,
        height:270,
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
	var reJson = [
	{
		'type':'dir',
		'name':'HTTP',
		'child':[
			{
				'type':'data',
				'name':'数据集1',
				'para':{
	            	'httpUrl': '',
	            	'addtionParam': []
	           }
			},
			{
				'type':'data',
				'name':'数据集2',
				'para':{
	            	'httpUrl': '',
	            	'addtionParam': []
	            }
			}
		]
	},
	{
		'type':'dir',
		'name':'SQL',
		'child':[
			{
				'type':'data',
				'name':'数据集3',
				'para':{
	            	'dataSource': '',
	            	'sql': ''
	            }
			},
			{
				'type':'data',
				'name':'数据集4',
				'para':{
	            	'dataSource': '',
	            	'sql': ''
	            }
			}
		]
	}
	]
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
					item.para = reJson[i].child[j].para;
					dataJson[reJson[i].name][reJson[i].child[j].name] = item;
				}
			}
		}
	}
	return dataJson
}
