//创建数据源
function createDataSourceDialog(item){
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
				database: ''
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
		database: data.value.para.database || ''
	}
	if(item){
		config.title = '编辑数据源';
	}else{
		config.title = '新增数据源';
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
            comboBox: {
            	value: config.database || 'mysql',
                values: ['mysql', 'mysql2'],
                labels: ['mysql', 'mysql2']
            }
        }
    ], [55, 0.1]);
    
    var buttons = [{
        label: S('OK'),
        action: function() {
            var fieldName = formPane.v('fileName'),
            	host = formPane.v('host'),
            	port = formPane.v('port'),
            	username = formPane.v('username'),
            	password = formPane.v('password'),
            	database = formPane.v('database');

            var fieldId = 'DataSource_' + uuid(8);
            if(formPane.getItemById('fileId')){
            	fieldId = formPane.v('fileId')
            }
            if(editor.dataSetPanel.dataModel.getDataById('dataSetRoot/数据源/' + fieldName) && editor.dataSetPanel.dataModel.getDataById('dataSetRoot/数据源/' + fieldName).value.para.id != fieldId){
            	editor.showMessage('数据源名称不能重复！');
        		return;
            }
            if(!fieldName || !host || !port || !username || !password || !database){
        		editor.showMessage('数据必须填写完整！');
        		return;
        	}
            
			var addItem = {
				type : 'add',
				content: [{
					"id": fieldId,
					"name":fieldName,
					"type":"dataSource",
					"host":host,
					"port":port,
					"username": username,
					"password": password,
					"database": database
				}]
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
        width:350,
        height:250,
        contentPadding: 4,
        content: formPane,
        buttons: buttons,
        buttonsAlign: 'right'
    });
    dialog.show();
}