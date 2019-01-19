window.isPracticing = window.location.host.indexOf('hightopo') >= 0;
//主要配置
window.hteditor_config = {
	//container : "containerId",
    // color_select: '#FF7733',
    // explorerMode: 'accordion',
    locale: 'zh',
    // importDataBindingsButtonVisible: false,
    // scenesVisible: true,
    // modelsVisible: true,
    componentsVisible: !isPracticing,
    displaysEditable: !isPracticing,
    symbolsEditable: !isPracticing,
    componentsEditable: !isPracticing,
    assetsEditable: !isPracticing,
    locateFileEnabled: !isPracticing,
	//编辑字体时的默认内容
    fontPreview: '图扑软件 - Hightopo',
	//属性组默认是否展开状态
    expandedTitles: {
        TitleExtension: false
    },
    subConfigs: [
        'custom/configs/config-points.js',
        'custom/configs/config-handleEvent.js',
        'custom/configs/config-valueTypes.js',
        'custom/configs/config-dataBindings.js',
        'custom/configs/config-connectActions.js',
        'custom/configs/config-inspectorFilter.js',
        'custom/configs/config-customProperties.js',
        'custom/configs/config-onTitleCreating.js',
        'custom/configs/config-onTitleCreated.js',
        'custom/configs/config-onMainToolbarCreated.js',
        'custom/configs/config-onMainMenuCreated.js',
        'custom/configs/config-onRightToolbarCreated.js'
    ],
    libs: [
        'custom/libs/echarts.js'
    ],
    handleInsertSceneFileToGraphView: function(displayView, fileNode, point) {
        const node = new ht.Node();
        node.a('sceneURL', fileNode.url);
        node.setImage('symbols/html/scene.json')
        if (point) {
            node.p(point.x, point.y);
        }
        else {
            const rect = displayView.graphView.getViewRect();
            if (rect) {
                node.p(rect.x + rect.width/2, rect.y + rect.height/2);
            }
        }
        node.setDisplayName(hteditor.fileNameToDisplayName(fileNode.url));
        displayView.addData(node);
    },
    handleInsertModelFileToGraphView: function(displayView, fileNode, point) {
        const node = new ht.Node();
        node.a('modelURL', fileNode.url);
        node.setImage('symbols/html/obj.json')
        if (point) {
            node.p(point.x, point.y);
        }
        else {
            const rect = displayView.graphView.getViewRect();
            if (rect) {
                node.p(rect.x + rect.width/2, rect.y + rect.height/2);
            }
        }
        node.setDisplayName(hteditor.fileNameToDisplayName(fileNode.url));
        displayView.addData(node);
    }
};
