
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
    	var data = {
    		_name:'',
    		value:{
    			para:{
    				type: '',
    				path: '',
    				para: '',
    				port: ''
    			}
    		}
    	}
    	$.extend(data,item);
    	var config = {
    		fileName: data._name || '',
    		fileType: data.value.para.type || '',
    		filePath: data.value.para.path || '',
    		filePara: data.value.para.para || '',
    		filePara: data.value.para.port || ''
    	}
    	if(data){
    		config.title = '编辑数据集';
    	}else{
    		config.title = '新增数据集';
    	}
    	var S = hteditor.getString;
    	var dialog = new ht.widget.Dialog();
		var formPane = new ht.widget.FormPane();
        formPane.addRow([
        	'名称',
	        {
	            id: 'fileName',
	            textField: {
	                text: config.fileName
	            }
	        }
	    ], [30, 0.1]);
	    
	    formPane.addRow([
        	'类型',
	        {
	            id: 'fileType',
	            textField: {
	                text: config.fileType
	            }
	        }
	    ], [30, 0.1]);
	    formPane.addRow([
        	'路径',
	        {
	            id: 'filePath',
	            textField: {
	                text: config.filePath
	            }
	        }
	    ], [30, 0.1]);
	    formPane.addRow([
        	'参数',
	        {
	            id: 'filePara',
	            textField: {
	                text: config.filePara
	            }
	        }
	    ], [30, 0.1]);
	    
	    var buttons = [{
	        label: S('OK'),
	        action: function() {
	            var fieldName = formPane.v('fileName'),
	            	fileType = formPane.v('fileType'),
	            	filePath = formPane.v('filePath'),
	            	filePara = formPane.v('filePara');
	            if(!fieldName || fieldName === '' ){
            		editor.showMessage('数据集名称必须填写！');
            		return;
            	}
	            if(!fileType || fileType === '' ){
            		editor.showMessage('数据集类型必须填写！');
            		return;
            	}
	            if(!filePath || filePath === '' ){
            		editor.showMessage('数据集路径必须填写！');
            		return;
            	}
	           	$.ajax({
	            	url : hteditor_config.detailedDataSetUrl,  
				    type : "POST",
				    async : true,
				    data : {
				    	fieldName : fieldName,
				    	fileType : fileType,
				    	filePath : filePath,
				    	filePara : filePara,
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
	        width:250,
	        height:170,
	        contentPadding: 4,
	        content: formPane,
	        buttons: buttons,
	        buttonsAlign: 'right'
	    });
        dialog.show();
    }
    //编辑数据集
    dataSetPanel.editMenuNode = function(){
    	var panel = this;
    	var data = panel.accordion.sm().ld();
    	if(!data){
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
	            	'type': 'http',
	            	'path': 'root/http',
	            	'port': '8080'
	            }
			},
			{
				'type':'data',
				'name':'数据集2',
				'para':{
	            	'type': 'http',
	            	'path': 'root/http',
	            	'port': '8080'
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
	            	'type': 'sql',
	            	'path': 'root/sql',
	            	'port': ''
	            }
			},
			{
				'type':'data',
				'name':'数据集4',
				'para':{
	            	'type': 'sql',
	            	'path': 'root/sql',
	            	'port': ''
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
