window.isPracticing = window.location.host.indexOf('hightopo') >= 0;

window.hteditor_config = {
    // color_select: '#FF7733',
    locale: 'zh',
    locateFileEnabled: !isPracticing,
    componentsVisible: !isPracticing,
    displaysModifiable: !isPracticing,
    symbolsModifiable: !isPracticing,
    componentsModifiable: !isPracticing,
    assetsModifiable: !isPracticing,
    fontPreview: '图扑软件 - Hightopo',
    scenesVisible: true,

    // 为 socket.io 提供路径映射
    // urlPrefix: '2d/',

    // saveSymbolCustomDefaultValue: true,
    // saveCompCustomDefaultValue: true,
    expandedTitles: {
        TitleExtension: false
    },
    subConfigs: [
        'custom/configs/2d/config-handleEvent.js',
        'custom/configs/2d/config-connectActions.js',
        'custom/configs/2d/config-inspectorFilter.js',
        'custom/configs/2d/config-onMainToolbarCreated.js',
        'custom/configs/2d/config-onMainMenuCreated.js',
        'custom/configs/2d/config-onRightToolbarCreated.js',

        'custom/configs/config-points.js',
        'custom/configs/config-valueTypes.js',
        'custom/configs/config-dataBindings.js',
        'custom/configs/config-customProperties.js'
    ],
    // explorerMode: 'accordion',
    libs: [
        'custom/libs/echarts.js',
        'vs/loader.js',
        'vs/editor/editor.main.nls.js',
        'vs/editor/editor.main.js'
    ],
    appendDisplayConnectActionTypes: ['HostParent', 'CreateEdge', 'CopySize'],
    appendSymbolConnectActionTypes: ['CopySize'],
    appendConnectActions: {
        CopySize: {
            action: function(gv, source, target) {
                if (source instanceof ht.Node && target instanceof ht.Node) {
                    source.setWidth(target.getWidth());
                    source.setHeight(target.getHeight());
                }
            },
            extraInfo: {
                visible: function (gv) {
                    return gv.sm().ld() instanceof ht.Node;
                }
            }
        },
        HostParent: {
            action: function(gv, source, target) {
                if (source instanceof ht.Node && target instanceof ht.Node) {
                    gv.dm().beginTransaction();
                    if (source instanceof ht.Node) source.setHost(target);
                    source.setParent(target);
                    gv.dm().endTransaction();
                }
            },
            extraInfo: {
                delete: {
                    visible: function(gv) {
                        var data = gv.sm().ld();
                        return data instanceof ht.Node && (data.getHost() || data.getParent());
                    },
                    action: function(gv, source) {
                        if (source instanceof ht.Node) {
                            gv.dm().beginTransaction();
                            source.setHost(undefined);
                            source.setParent(undefined);
                            gv.dm().endTransaction();
                        }
                    }
                },
                visible: function (gv) {
                    return gv.sm().ld() instanceof ht.Node;
                }
            }
        },
        CreateEdge: {
            action: function(gv, source, target) {
                if (source instanceof ht.Node && target instanceof ht.Node) {
                    var edge = new ht.Edge(source, target);
                    gv.editView.addData(edge, false, false, true);
                }
            },
            extraInfo: {
                visible: function (gv) {
                    return gv.sm().ld() instanceof ht.Node;
                }
            }
        }
    }
};
