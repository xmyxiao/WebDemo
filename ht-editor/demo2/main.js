
function handleEditorCreated(editor) {
    document.body.style.background = '#ccc';

    editor.mainSplitView.setLeftView(editor.mainTabView);
    
    var view = editor.mainPane.getView();
    view.style.left = '370px';
    view.style.top = '30px';
    view.style.right = '0';
    view.style.bottom = '0';
    view.style.background = 'white';
    document.body.appendChild(view);
   
	
    editor.leftTopTabView.select(1);
    var test = editor.displays.getView();
    test.style.position = "absolute";
    test.style.left = '0';
    test.style.top = '30px';
    test.style.width = '370px';
    test.style.bottom = '0';
	document.getElementById('leftPanel').appendChild(test);
    window.addEventListener('resize', function() {
        editor.mainPane.iv();
        palette.iv();
    });

    editor.addEventListener(function(event){
        var params = event.params;
        if (event.type === 'displayViewSaving') {
            var data = listView.dm().getDataByTag(params.url);
            data.a('content', params.displayView.content);
            data.setIcon(hteditor.snapshot(params.displayView.graphView));
            params.preventDefault = true;
            params.displayView.dirty = false;
        }
        if (event.type === 'symbolViewSaving') {
            var data = listView.dm().getDataByTag(params.url);
            data.a('content', params.symbolView.content);
            data.setIcon(hteditor.snapshot(params.symbolView.graphView));
            params.preventDefault = true;
            params.symbolView.dirty = false;
        }
        if (event.type === 'componentViewSaving') {
            var data = listView.dm().getDataByTag(params.url);
            data.a('content', params.componentView.content);
            data.setIcon(hteditor.snapshot(params.componentView.graphView));
            params.preventDefault = true;
            params.componentView.hide();
        }
    });
}

function leftClick(){
	var test = editor.symbols.list.getDataModel();
	var test1 = test.getDataById('symbols/3d场景用/长沙站区域.json');
	var test2 = test.getDataById('symbols/3d场景用/长沙站区域.png');
	$.ajax({
		type:"get",
		url:test1.url,
		async:true,
		scope : test1,
		success:function(data){
			var type = this.scope.fileType;
	        var url = this.scope.url;
	        var name = this.scope._styleMap.label;
	        var json = data;
	        editor.openByJSON(type, url, name, json);
		},
		error:function(data){
			
		}
	});
}






















