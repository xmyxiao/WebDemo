//创建数据源
function createDataAnalogDialog(item){
	var data = {
		_name:'',
		value:{
			para:{
				id: '',
				name: '',
				jsonType: '',
				jsonStr: '',
				column: []
			}
		}
	}
	$.extend(data,item);
	var config = {
		fileName: data._name || '',
		fileId: data.value.para.id || '',
		jsonType: data.value.para.jsonType || '',
		jsonStr: data.value.para.jsonStr || '',
		column: data.value.para.column || []
	}
	if(item){
		config.title = '编辑模拟数据';
	}else{
		config.title = '新增模拟数据';
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
    		element:'数据类型',
    		align: 'right'
    	},
        {
            id: 'jsonType',
            comboBox: {
            	value: config.jsonType || 'json',
                values: ['json'],
                labels: ['json']
            }
        }
    ], [55, 0.1]);
    formPane.addRow([
    	{
    		element:'json',
    		vAlign: 'top',
    		align: 'right'
    	},
        {
            id: 'jsonStr',
            element: new hteditor.CodeEditor({
                value: config.jsonStr,
                language: 'javascript',
                minimap: {
                    enabled: false
                }
            })
        }
    ], [55, 0.1],150);
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
			width: 210
        },
        {
            accessType: "attr",
			align: "center",
			displayName: "字段名称",
			editable: true,
			enum: undefined,
			name: "fileDes",
			tag: "fileDes",
			width: 210
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
            	jsonType = formPane.v('jsonType'),
            	jsonStr = formPane.v('jsonStr');

            var fieldId = 'AnalogEntity_' + uuid(8);
            if(formPane.getItemById('fileId')){
            	fieldId = formPane.v('fileId')
            }
            if(editor.dataSetPanel.dataModel.getDataById('dataSetRoot/模拟数据/' + fieldName) && editor.dataSetPanel.dataModel.getDataById('dataSetRoot/模拟数据/' + fieldName).value.para.id != fieldId){
            	editor.showMessage('数据名称不能重复！');
        		return;
            }
            if(!fieldName || !jsonType || !jsonStr){
        		editor.showMessage('数据必须填写完整！');
        		return;
        	}
            
			var addItem = {
				type : 'add',
				content: [{
					"id": fieldId,
					"name":fieldName,
					"type":"analogData",
					"jsonType":jsonType,
					"jsonStr":jsonStr
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
    }];
    dialog.setConfig({
        title: config.title,
        draggable: true,
        width:500,
        height:450,
        contentPadding: 4,
        content: formPane,
        buttons: buttons,
        buttonsAlign: 'right'
    });
    dialog.show();
}