window.hteditor_config.customProperties = {
    display: [
        {
            valueType: 'Function',
            name: 'Init Function',
            property: 'custom.initFunc',
            defaultValue: function(gv) { console.info('This is GraphView init Function!'); }
        },
        {
            valueType: 'String',
            name: 'Page Name',
            property: 'pageName',
            defaultValue: ''
        }
    ],
    data: [
        {
            valueType: 'Color',
            name: 'Custom Color',
            property: 'custom.color',
            defaultValue: 'yellow',
            dataBinding: true
        }
    ],
    scene: [
        {
            valueType: 'CustomType',
            name: 'Custom Type',
            property: 'custom.type'
        },
        {
            valueType: 'Function',
            name: 'Init Function',
            property: 'custom.initFunc',
            defaultValue: function(g3d) { console.info('This is Graph3dView init Function!'); }
        }
    ],
    symbol: [
        {
            valueType: 'Color',
            name: 'Custom Color',
            property: 'custom.color',
            defaultValue: 'orange',
            dataBinding: true
        },
        {
            valueType: 'CustomType',
            name: 'Custom Type',
            property: 'custom.type'
        },
        {
            valueType: 'String',
            name: 'Custom Name',
            property: 'test.name',
        }
    ],
    comp: [
        {
            valueType: 'Color',
            name: 'Custom Color',
            property: 'custom.color',
            defaultValue: 'blue',
            accessType: 'a',
            dataBinding: true
        }
    ]
};

// The following is just for testing

(function() {
    return;
    var valueTypes = {
        'Int': ['整形', -679],
        'Number': ['数字', 34.56],
        'PositiveNumber': ['正数', 98],
        'String': ['字符串', '图扑软件'],
        'Image': ['图片', 'assets/ht.png'],
        'URL': ['路径', 'assets/图扑软件.png'],
        'Multiline': ['多行文本', 'HT for Web\nwww.hightopo.com'],
        'Boolean': ['布尔', 'true'],
        'Color': ['颜色', 'red'],
        'Function': ['函数', function() { console.log('Everything you need to create cutting-edge 2D and 3D visualization') } ],
        'Object': ['对象', { firstName: 'eric',  lastName: 'lin' } ],
        'ObjectArray': ['对象数组', [ { company: 'Hightopo' }, { product: 'HT for Web' } ]],
        'StringArray': ['字符串数组', ['Eric', 'Emily', 'Ben']],
        'NumberArray': ['数字数组', [55, 66, 77]],
        'ColorArray': ['颜色数组', ['red', 'green', 'blue']],
        'Opacity': ['透明度', 0.5],
        'Percentage': ['百分比', 0.618],
        'Gradient': ['渐进', 'radial.center'],
        'FillRule': ['填充规则', 'evenodd'],
        'ClipDirection': ['裁切方向', 'bottom'],
        'CapStyle': ['线帽样式', 'round'],
        'JoinStyle': ['交汇样式', 'bevel'],
        'Align': ['水平对齐', 'right'],
        'VAlign': ['垂直对齐', 'top'],
        'Stretch': ['拉伸', 'uniform'],
        'Angle': ['角度', Math.PI/4],
        'Direction': ['方向', 'v']
    }
    var customProperties = window.hteditor_config.customProperties = {};
    ['display', 'data', 'symbol', 'comp'].forEach(function(key) {
        customProperties[key] = [];
        for (var valueType in valueTypes) {
            var v = valueTypes[valueType];
            customProperties[key].push({
                valueType: valueType,
                name: '【' + v[0] + '】',
                property: 'test.' + valueType,
                defaultValue: v[1],
                dataBinding: true
            });
        }
    });
})();
