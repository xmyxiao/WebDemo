/**
 * data.setDataBindings({
 *     p: {
 *         name: { id: 'M001' },
 *         icon: {
 *             id: 'M002',
 *             func: function(value) {
 *                 if (value > 70) {
 *                     return 'symbols/scada/alarm.json';
 *                 }
 *                 if (value > 50) {
 *                     return 'symbols/scada/warning.json';
 *                 }
 *                 return 'symbols/scada/normal.json';
 *             }
 *         }
 *     },
 *     s: {
 *         'shape.background': {
 *             id: 'M002'
 *             func: function(value) {
 *                 if (value > 70) {
 *                     return 'red';
 *                 }
 *                 if (value > 50) {
 *                     return 'yellow';
 *                 }
 *                 return 'green';
 *             }
 *         }
 *         'shape.border.width': { id: 'M003' },
 *     },
 *     a: {
 *         'pressure': { id: 'M004' },
 *         'temperature': { id: 'M005' },
 *         'volume': { id: 'M006' }
 *     }
 * });
 */
window.hteditor_config.dataBindings = {

    onButtonClicked: function(data, accessType, name) {
    	if(accessType === 'a' && data.a('dataSet')){
    		var dataSetId = data.a('dataSet');
    		var selectDataSet = null;
    		var list = editor.dataSetPanel.itemList;
    		for(var i = 0; i < list.length; i++){
    			if(list[i] && list[i].child && list[i].child.length > 0){
    				for(var j = 0; j < list[i].child.length; j++){
    					if(list[i].child[j].id == dataSetId){
    						selectDataSet = list[i].child[j];
    						break;
    					}
    				}
    			}
    		}
    		if(selectDataSet){
    			var para = selectDataSet;
	    		var dataItem = [];
	    		for(var i = 0; i < para.column.length; i++){
	    			for(key in para.column[i]){
	    				var item = {
		    				name: key,
		    				description: para.column[i][key]
		    			};
	    				dataItem.push(item);
	    			}
	    		}
	    		data.a('dataSet').dataItem = dataItem;
				createBindDialog(data,accessType,name,dataItem);
    		}else{
    			createBindDialog(data, accessType, name);
    		}
		}else{
			createBindDialog(data, accessType, name);
		}
    }
};

function createBindDialog(data, accessType, name,fileJson){
	var dataBindings = data.getDataBindings();
    var id = '';
    var fName = '';
    var func = null;
    if (dataBindings && dataBindings[accessType] && dataBindings[accessType][name]) {
        id = dataBindings[accessType][name].id;
        func = dataBindings[accessType][name].func;
        fName = dataBindings[accessType][name].fieldName;
    }
	
    var S = hteditor.getString;
    var formPane = new ht.widget.FormPane();
    formPane.addRow([
        S('Property'),
        {
            textField: {
                text: name,
                editable: false
            }
        }
    ], [60, 0.1]);
    if(fileJson){
    	var dataArr = fileJson;
    	var dataStr = [],dataVal = [];
    	dataDes = dataArr.map(function(item,index){
					return item.description
				  })
    	dataName= dataArr.map(function(item,index){
					return item.name
				  })
    	formPane.addRow([
            '绑定字段',
            {
            	id: 'dataField',
            	unfocusable: true,
                comboBox: {
                    values: dataName,
                    labels : dataDes,
                    value : fName
                }
            }
        ], [60, 0.1]);
    }

    formPane.addRow([
        S('Id'),
        {
            id: 'input',
            textField: {
                text: id
            }
        }
    ], [60, 0.1]);
    formPane.addRow([
        {
            element: S('Func'),
            vAlign: 'top'
        },
        {
            id: 'textArea',
            element: new hteditor.CodeEditor({
                value: hteditor.stringifyFunction(func),
                language: 'javascript',
                minimap: {
                    enabled: false
                }
            })
        }
    ], [50, 0.1], 0.1);

    var dialog = new ht.widget.Dialog();
    var buttons = [{
        label: S('Cancel'),
        action: function() {
            dialog.hide();
        }
    }, {
        label: S('OK'),
        action: function(fileJson,a,b,fileJson) {
            var id = formPane.v('input');
            var fieldName = '';
            if(formPane.getItemById('dataField')){
            	fieldName = formPane.v('dataField');
            }
            var func = formPane.v('textArea');
            var dataBindings = data.getDataBindings();
            if (!dataBindings) {
                dataBindings = {};
            }
            if (!dataBindings[accessType]) {
                dataBindings[accessType] = {};
            }
            if (!dataBindings[accessType][name]) {
                dataBindings[accessType][name] = {};
            }
            if (fieldName && data.a('dataSet').dataItem) {
            	var dataArr = data.a('dataSet').dataItem;
                dataBindings[accessType][name].fieldName = fieldName;
            }
            if (!id) {
                delete dataBindings[accessType][name];
            }
            else {
                dataBindings[accessType][name].id = id;
                dataBindings[accessType][name].func = hteditor.parseFunction(func);
            }
            data.setDataBindings(dataBindings);
            data.fp('dataBindings', true, false);
            dialog.hide();
        }
    }];
    dialog.setConfig({
        title: S('BindingId'),
        draggable: true,
        width: 400,
        height: 400,
        contentPadding: 4,
        content: formPane,
        buttons: buttons,
        buttonsAlign: 'right'
    });
    dialog.show();
    formPane.getViewById('input').setFocus();
}
