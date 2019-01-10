window.isPracticing = window.location.host.indexOf('hightopo') >= 0;
//主要配置
window.hteditor_config = {
	//编辑器渲染位置
	container : "containerId",
    //color_select: '#FF7733',
    //默认为 treeList 的树列表模式，增加 accordion 单层展开模式
    explorerMode: 'accordion',
	//语言
    locale: 'zh',
    // importDataBindingsButtonVisible: false,
    // scenesVisible: true,
    // modelsVisible: true,
    //组件可见
    componentsVisible: !isPracticing,
    //图纸可编辑
    displaysEditable: !isPracticing,
    //图标可编辑
    symbolsEditable: !isPracticing,
    //组件可编辑
    componentsEditable: !isPracticing,
    //资源可编辑
    assetsEditable: !isPracticing,
    //文件可编辑
    locateFileEnabled: !isPracticing,
	//编辑字体时的默认内容
    fontPreview: '测试文本',
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
