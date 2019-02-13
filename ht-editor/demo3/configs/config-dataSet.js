
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
    var fileIcon = 'custom/images/数据可视化.json';
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
    /*dataSetPanel.addMenuNode = function(item){
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
    }*/
    //编辑数据集
    dataSetPanel.editMenuNode = function(){
    	var panel = this;
    	var data = panel.accordion.sm().ld();
    	if(!data || data.fileType === 'dir'){
    		return;
    	}
    	var type = data.value.para.type;
    	if(type === 'MYSQL' || type === 'mysql'){
    		createDataSqlDialog(data);
    	}else if(type === 'HTTP' || type === 'http'){
    		createDataHttpDialog(data);
    	}else if(type === 'DATASOURCE' || type === 'dataSource'){
    		createDataSourceDialog(data);
    	}else if(type === 'ITOData' || type === 'itodata'){
    		createDataITODialog(data);
    	}else if(type === 'AnalogData' || type === 'analogData'){
    		createDataAnalogDialog(data);
    	}
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
				    headers: {
			            'cookies':document.cookie
			       	},
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
        /*{
            label: "新建数据源",
            action: function(item) {
                createDataSourceDialog();
            }
        },
        {
            label: "新建SQL实体",
            action: function(item) {
               createDataSqlDialog();
            }
        },*/
        {
            label: "新建接口实体",
            action: function(item) {
               createDataHttpDialog();
            }
        },
       /* {
            label: "新建ITO设备",
            action: function(item) {
               createDataITODialog();
            }
        },*/
        {
            label: "新建模拟数据",
            action: function(item) {
               createDataAnalogDialog();
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



