window.hasRequestUserJson = true;
window.hteditor_config = {
	//explorerMode: 'accordion',
    //leftSplitViewPosition: '265',
    locale: 'zh',
    promptBeforeClosing: true,
    indent: 110,
    imageSize: 400,
    firstLoad: true,
    publicIconSaveEndUrl: '/displays/saveAfter',
    // 为 socket.io 提供路径映射
    // urlPrefix: '2d/',

    // 配置编辑器扩展，运行于 client.js 加载前
    subConfigs: [
        'custom/configs/3d/config-onEditor3dCreated.js',

		'custom/configs/3d/config-handleEvent.js',
        'custom/configs/config-points.js',
        'custom/configs/config-valueTypes.js',
        'custom/configs/config-dataBindings.js',
        'custom/configs/config-customProperties.js',
        'custom/configs/3d/config-onTitleCreated.js'
        
    ],

    // 配置运行时依赖类库，运行于 client.js 加载后，
    // 一般放置需要与运行时共享的通用类库
    libs: [
        'custom/libs/gaolu-modeling.js',
        'custom/libs/gaolu-dialog.js',
        'vs/loader.js',
        'vs/editor/editor.main.nls.js',
        'vs/editor/editor.main.js',
        'custom/libs/NewWebSocketService.js'
    ],
    serviceClass:'NewWebSocketService',
    drawAccordionTitle: function(g, rect, data, view, option) {
        var isHover = option.isHover,
            isExpanded = option.isExpanded,
            hoverColor = option.hoverColor,
            selectColor = option.selectColor,
            label = view.getLabel(data);
		
		var fontColor = 'rgb(61,61,61)',
			itemCloseBg = '#f1f1f1';
		
        var x = rect.x,
            y = rect.y,
            width = rect.width,
            height = rect.height;
        
        g.beginPath();
        if (isExpanded) {  //展开
        	g.strokeStyle = '#fff';
        	fontColor = '#fff'
           	g.moveTo(x + 16, y + height / 2 + 3);
           	g.lineTo(x + 22, y + height / 2 - 3);
           	g.lineTo(x + 28, y + height / 2 + 3);
           
           	g.fillStyle = selectColor;
           	g.fillRect(x+5, y+3, width-10, height-3);
           	
        }
        else {   //合并
        	g.strokeStyle = 'rgb(61,61,61)';
        	fontColor = 'rgb(61,61,61)',
            g.lineWidth = 2;
            g.moveTo(x + 16, y + height / 2 - 3);
            g.lineTo(x + 22, y + height / 2 + 3);
            g.lineTo(x + 28, y + height / 2 - 3);
            
            g.fillStyle = itemCloseBg;
           	g.fillRect(x+5, y+3, width-10, height-3);
        }
        
        if (isHover) {
            g.fillStyle = hoverColor;
            g.fillRect(x+5, y+3, width-10, height-3);
        }
        g.stroke();
        if (label) {
            ht.Default.drawText(g, label, 'bold 14px Arial', fontColor, x + 32, y, width - 32, height, 'left', 'middle');
        }
    },
    accordionMutex: true
};
