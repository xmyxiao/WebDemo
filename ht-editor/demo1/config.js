window.isPracticing = window.location.host.indexOf('hightopo') >= 0;

window.hteditor_config = {
	container : "containerId",
    // color_select: '#FF7733',
    color_dark: '#7c7c7c',
    explorerMode: 'accordion',
    leftSplitViewPosition: '265',
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
    fontPreview: '图扑软件 - Hightopo',
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
    drawAccordionTitle: function(g, rect, data, view, option) {
        var isHover = option.isHover,
            isExpanded = option.isExpanded,
            hoverColor = option.hoverColor,
            selectColor = option.selectColor,
            label = view.getLabel(data);

        var x = rect.x,
            y = rect.y,
            width = rect.width,
            height = rect.height;

        if (isHover) {     
            g.fillStyle = hoverColor;
            g.fillRect(x, y, width, height);
        }
        g.strokeStyle = selectColor;
        g.beginPath();
        if (isExpanded) {
            g.moveTo(x + 6, y + height / 2 + 2 - 6);
            g.lineTo(x + 14, y + height / 2 + 2);
            g.lineTo(x + 22, y + height / 2 + 2 - 6);
        }
        else {
            g.lineWidth = 2;
            g.moveTo(x + 6, y + height / 2);
            g.lineTo(x + 22, y + height / 2);
        }
        g.stroke();
        if (label) {
            ht.Default.drawText(g, label, 'bold 14px Arial', 'rgb(61,61,61)', x + 28, y, width - 28, height, 'left', 'middle');
        }
    },
    accordionMutex: true,
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
