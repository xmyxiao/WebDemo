(function() {
	
    var isHandling = false;
    window.hteditor_config.onTitleCreating = function(editor, params) {
        if (!isHandling) {
            isHandling = true;
            handleTitleCreating(editor, params);
            isHandling = false;
        }
    };

    function handleTitleCreating(editor, params) {
        var title = params.title;
        var oldTitle = params.oldTitle;
        var inspector = params.inspector;
		//仅图元有绑定数据集
        if (inspector.type === 'data' && oldTitle === 'TitleBasic') {
            addPropertiesToSymbol(inspector);
        }
    }

    function addPropertiesToSymbol(inspector) {
        var S = hteditor.getString;
        var indent = hteditor.config.indent;

        inspector.addTitle('绑定数据集');

        var items = [];
        items.push('选择数据集');
        var textField = new ht.widget.TextField();
        textField.setEditable(false);
        items.push(textField);

        var label = S('Pick');
        var toolTip = null;
        var icon = null;
        var onClicked = function() {
            var dataModel = new ht.DataModel();
            var tree = new ht.widget.TreeView(dataModel);
            var testTreeNode = editor.dataSetPanel.itemList
            for (var i = 0; i < testTreeNode.length; i++){
            	var parent = new ht.Data();
                parent.setName(testTreeNode[i].name);
                parent.setIcon('symbols/basic/ht.json');
                dataModel.add(parent);
                if(testTreeNode[i].child){
                	for (var j = 0; j < testTreeNode[i].child.length; j++) {
	                    var child = new ht.Data();
	                    child.setName(testTreeNode[i].child[j].name);
	                    child.setParent(parent);
	                    child.para = testTreeNode[i].child[j].para;
	                    dataModel.add(child);
	                }
                }
            }
            /*for (var i = 0; i < 3; i++) {
                var parent = new ht.Data();
                parent.setName('data-' + i);
                parent.setIcon('symbols/basic/ht.json');
                dataModel.add(parent);
                for (var j = 0; j < 3; j++) {
                    var child = new ht.Data();
                    child.setName('data-' + i + '-' + j);
                    child.setParent(parent);
                    dataModel.add(child);
                }
            }*/
            tree.expandAll();
            dataModel.sm().setSelectionMode('single');

            var formPane = new ht.widget.FormPane();
            formPane.addRow([
                tree
            ], [0.1], 0.1);

            var dialog = new ht.widget.Dialog();
            var buttons = [];
            buttons.push(
                {
                     label: S('Cancel'),
                     action: function() {
                        dialog.hide();
                     }
                },
                {
                    label: S('OK'),
                    action: function() {
                        var data = dataModel.sm().ld();
                        var value = data ? data.para : undefined;
                        inspector.setPropertyValue('dataSet', value);
                        dialog.hide();
                    }
                }
            );
            dialog.setConfig({
                title: '选择数据集',
                draggable: true,
                width: 200,
                height: 300,
                contentPadding: 0,
                content: formPane,
                buttons: buttons,
                buttonsAlign: 'right'
            });
            dialog.show();
        };
        var button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push(button);

        /*label = null;
        toolTip = 'HT for Web';
        icon = 'symbols/demo/gas/red.json';
        onClicked = function() { setTimeout(function() {
            alert('HIGHTOPO is AWESOME!!!');
        }, 20)};
        button = hteditor.createButton(label, toolTip, icon, onClicked);
        items.push(button);*/

        inspector.addRow(items, [indent, 0.1, 40, 20]);

        /*inspector.addCustomProperty({
            property: 'test.name',
            name: 'Name',
            valueType: 'String'
        });

        inspector.addCustomProperty({
            property: 'test.description',
            name: 'Description',
            valueType: 'Multiline'
        });*/

        inspector.addUpdateHandler(function() {
            textField.setText(inspector.getPropertyValue('dataSet') || '')
        });
    }

})();









