{
  "v": "6.3.1",
  "p": {
    "background": "rgb(0,0,27)",
    "autoAdjustIndex": true,
    "hierarchicalRendering": true
  },
  "a": {
    "rotateAsClock": false,
    "connectActionType": "HostParent",
    "width": 0,
    "height": 0,
    "previewURL": "previews2D/215.html",
    "onPostDeserialize": "__ht__function(json, dm, gv, datas) {// 禁止鼠标缩放\r\ngraphView.handleScroll = function () { };\r\n// 禁止 touch 下双指缩放\r\ngraphView.handlePinch = function () { };\r\n// 禁止平移\r\ngraphView.setPannable(false);\r\n// 禁止框选\r\ngraphView.setRectSelectable(false);\r\n// 隐藏滚动条\r\ngraphView.setScrollBarVisible(false);\r\n\r\n// 选中边框为0\r\ngraphView.getSelectWidth = function () { return 0; };\r\n// 禁止图元移动\r\ngraphView.setMovableFunc(function () { return false; });\r\n\r\nwindow.addEventListener('resize', function (e) {\r\n    graphView.fitContent();\r\n});\r\n\r\ndocument.addEventListener('click',function(e){\r\n    dataModel.removeDataByTag('dialogNode');\r\n})}"
  },
  "d": [
    {
      "c": "ht.Node",
      "i": 3490,
      "p": {
        "displayName": "yk",
        "image": "assets/背景图/yk.jpg",
        "position": {
          "x": 726.08478,
          "y": 723.5784
        },
        "anchor": {
          "x": 0.37822,
          "y": 0.66998
        },
        "width": 1920,
        "height": 1080
      },
      "s": {
        "opacity": 1,
        "2d.selectable": false
      }
    },
    {
      "c": "ht.Node",
      "i": 3491,
      "p": {
        "displayName": "symbol",
        "image": "symbols/02244/symbol.json",
        "position": {
          "x": 942.2952,
          "y": 560.2908
        }
      }
    },
    {
      "c": "ht.Block",
      "i": 3492,
      "p": {
        "displayName": "标题",
        "position": {
          "x": 959.98113,
          "y": 40.15608
        },
        "width": 1920,
        "height": 77.99999
      },
      "s": {
        "body.color": ""
      }
    },
    {
      "c": "ht.Shape",
      "i": 3493,
      "p": {
        "displayName": "中",
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 957.79482,
          "y": 41.34501
        },
        "width": 1905.71906,
        "height": 72.8006,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 4.93528,
              "y": 4.94471
            },
            {
              "x": 4.93528,
              "y": 35.89839
            },
            {
              "x": 617.9518,
              "y": 39.44146
            },
            {
              "x": 647.97873,
              "y": 77.74531
            },
            {
              "x": 1293.23804,
              "y": 77.74531
            },
            {
              "x": 1327.29425,
              "y": 39.44146
            },
            {
              "x": 1910.65435,
              "y": 39.44146
            },
            {
              "x": 1910.65435,
              "y": 4.94471
            }
          ]
        }
      },
      "s": {
        "shape.background": "rgb(2,11,26)",
        "shape.border.color": "rgb(41,155,217)",
        "shape.gradient.color": "rgba(0,0,0,0.40)",
        "opacity": 0.61,
        "2d.selectable": false
      }
    },
    {
      "c": "ht.Shape",
      "i": 3494,
      "p": {
        "displayName": "中",
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 960.37284,
          "y": 58.15645
        },
        "width": 1919.02133,
        "height": 41.99926,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2,
            2,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 0.86218,
              "y": 37.15682
            },
            {
              "x": 640.23594,
              "y": 40.85224
            },
            {
              "x": 670.26288,
              "y": 79.15608
            },
            {
              "x": 1315.52218,
              "y": 79.15608
            },
            {
              "x": 1349.57839,
              "y": 40.85224
            },
            {
              "x": 1919.88351,
              "y": 40.85224
            }
          ]
        }
      },
      "s": {
        "shape.background": null,
        "shape.border.color": "rgba(41,155,217,0.51)",
        "shape.border.width": 2,
        "shape.gradient.color": null,
        "opacity": 0.61,
        "2d.selectable": false
      }
    },
    {
      "c": "ht.Shape",
      "i": 3495,
      "p": {
        "displayName": "中",
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 959.98113,
          "y": 57.99582
        },
        "width": 1920,
        "height": 41.62119,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2,
            2,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": -0.01887,
              "y": 37.18523
            },
            {
              "x": 594.69094,
              "y": 40.50257
            },
            {
              "x": 626.80109,
              "y": 78.80641
            },
            {
              "x": 1269.97717,
              "y": 78.80641
            },
            {
              "x": 1304.0334,
              "y": 40.50257
            },
            {
              "x": 1919.98113,
              "y": 40.50257
            }
          ]
        }
      },
      "s": {
        "shape.background": "rgba(255,255,255,0)",
        "shape.border.color": "rgba(41,155,217,0.51)",
        "shape.border.width": 2,
        "shape.gradient.color": "rgba(255,255,255,0.4)",
        "opacity": 0.61,
        "2d.selectable": false
      }
    },
    {
      "c": "ht.Shape",
      "i": 3496,
      "p": {
        "displayName": "中",
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 968.21421,
          "y": 51.31249
        },
        "width": 962.45995,
        "height": 38.30385,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2,
            2,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 486.98423,
              "y": 32.16057
            },
            {
              "x": 617.63911,
              "y": 32.16057
            },
            {
              "x": 649.75825,
              "y": 70.46441
            },
            {
              "x": 1293.11412,
              "y": 70.46441
            },
            {
              "x": 1327.17985,
              "y": 32.16057
            },
            {
              "x": 1449.44418,
              "y": 32.16057
            }
          ]
        }
      },
      "s": {
        "shape.background": "rgba(255,255,255,0)",
        "shape.border.color": "rgb(67,176,222)",
        "shape.border.width": 2,
        "shape.gradient.color": "rgba(255,255,255,0.4)",
        "opacity": 0.61,
        "2d.selectable": false
      }
    },
    {
      "c": "ht.Shape",
      "i": 3497,
      "p": {
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 1493.5903,
          "y": 55.54768
        },
        "width": 401.97263,
        "height": 30.61496,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1694.57662,
              "y": 40.2402
            },
            {
              "x": 1319.77642,
              "y": 40.2402
            },
            {
              "x": 1292.604,
              "y": 70.49917
            },
            {
              "x": 1666.94845,
              "y": 70.85516
            }
          ]
        }
      },
      "s": {
        "shape.background": "rgba(51,153,255,0.18)",
        "shape.border.color": "#979797",
        "shape.gradient": "linear.northeast",
        "shape.gradient.color": "rgba(46,83,148,0.00)"
      }
    },
    {
      "c": "ht.Shape",
      "i": 3498,
      "p": {
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 460.61999,
          "y": 55.95673
        },
        "scale": {
          "x": -1,
          "y": 1
        },
        "width": 407.14606,
        "height": 30.61496,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 664.19302,
              "y": 40.64924
            },
            {
              "x": 281.38282,
              "y": 40.64924
            },
            {
              "x": 257.04696,
              "y": 71.26421
            },
            {
              "x": 636.56486,
              "y": 71.26421
            }
          ]
        }
      },
      "s": {
        "shape.background": "rgba(51,153,255,0.18)",
        "shape.border.color": "#979797",
        "shape.gradient": "linear.northeast",
        "shape.gradient.color": "rgba(46,83,148,0.00)"
      }
    },
    {
      "c": "ht.Shape",
      "i": 3499,
      "p": {
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 1303.18781,
          "y": 58.81575
        },
        "width": 46.72275,
        "height": 30.61496,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1326.5492,
              "y": 43.50827
            },
            {
              "x": 1306.99886,
              "y": 43.86425
            },
            {
              "x": 1279.82644,
              "y": 74.12323
            },
            {
              "x": 1298.92103,
              "y": 74.12323
            }
          ]
        }
      },
      "s": {
        "shape.background": "#60ACFC",
        "shape.border.color": "#979797"
      }
    },
    {
      "c": "ht.Shape",
      "i": 3500,
      "p": {
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 641.32219,
          "y": 59.17173
        },
        "scale": {
          "x": -1,
          "y": 1
        },
        "width": 41.82464,
        "height": 30.61496,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 662.23451,
              "y": 43.86425
            },
            {
              "x": 645.02802,
              "y": 43.86425
            },
            {
              "x": 620.40987,
              "y": 74.47921
            },
            {
              "x": 638.1157,
              "y": 74.47921
            }
          ]
        }
      },
      "s": {
        "shape.background": "#60ACFC",
        "shape.border.color": "#979797"
      }
    },
    {
      "c": "ht.Text",
      "i": 3501,
      "p": {
        "parent": {
          "__i": 3492
        },
        "position": {
          "x": 971.06323,
          "y": 33.0869
        },
        "anchor": {
          "x": 0.5,
          "y": 0.41691
        },
        "scale": {
          "x": 3,
          "y": 3
        },
        "width": 620.82131,
        "height": 25.52974
      },
      "s": {
        "text": " EAP开发者平台驾驶舱",
        "text.color": "#32D3EB",
        "text.align": "center",
        "text.font": "bold 12px Arial"
      }
    },
    {
      "c": "ht.Block",
      "i": 3502,
      "p": {
        "displayName": "地图",
        "position": {
          "x": 948.16006,
          "y": 560.2908
        },
        "width": 737.90747,
        "height": 914.97092
      }
    },
    {
      "c": "ht.Node",
      "i": 3503,
      "p": {
        "displayName": "装饰科技圆环",
        "parent": {
          "__i": 3502
        },
        "image": "symbols/3d场景用/装饰科技圆环.json",
        "position": {
          "x": 948.16006,
          "y": 648.82253
        },
        "width": 737.90747,
        "height": 737.90747
      },
      "s": {
        "opacity": 0.5
      }
    },
    {
      "c": "ht.Block",
      "i": 3504,
      "p": {
        "displayName": "年度累计：",
        "parent": {
          "__i": 3502
        },
        "position": {
          "x": 669.54047,
          "y": 127.80534
        },
        "width": 138.04491,
        "height": 50
      }
    },
    {
      "c": "ht.Text",
      "i": 3505,
      "p": {
        "displayName": "年度累计：",
        "parent": {
          "__i": 3504
        },
        "position": {
          "x": 669.54047,
          "y": 127.80534
        },
        "width": 138.04491
      },
      "s": {
        "text": "在线活沃用户数（个）：",
        "text.color": "#60ACFC",
        "text.font": "16px \"Microsoft YaHei\""
      }
    },
    {
      "c": "ht.Block",
      "i": 3506,
      "p": {
        "displayName": "平台创作统计",
        "position": {
          "x": 245.88104,
          "y": 237.96715
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Node",
      "i": 3507,
      "p": {
        "displayName": "EAP框",
        "parent": {
          "__i": 3506
        },
        "image": "symbols/02244/EAP框.json",
        "position": {
          "x": 245.88104,
          "y": 237.96715
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Text",
      "i": 3508,
      "p": {
        "parent": {
          "__i": 3506
        },
        "position": {
          "x": 245.88104,
          "y": 99.58263
        },
        "height": 28.82404
      },
      "s": {
        "text": "平台创作统计",
        "text.color": "rgb(255,255,255)",
        "text.align": "center",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Block",
      "i": 3509,
      "p": {
        "displayName": "行业统计",
        "position": {
          "x": 245.88104,
          "y": 571.06304
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Node",
      "i": 3510,
      "p": {
        "displayName": "EAP框",
        "parent": {
          "__i": 3509
        },
        "image": "symbols/02244/EAP框.json",
        "position": {
          "x": 245.88104,
          "y": 571.06304
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Text",
      "i": 3511,
      "p": {
        "parent": {
          "__i": 3509
        },
        "position": {
          "x": 245.88104,
          "y": 432.67852
        },
        "height": 28.82404
      },
      "s": {
        "text": "行业统计 ",
        "text.color": "rgb(255,255,255)",
        "text.align": "center",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Block",
      "i": 3512,
      "p": {
        "displayName": "热门产品",
        "position": {
          "x": 245.88104,
          "y": 904.15893
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Node",
      "i": 3513,
      "p": {
        "displayName": "EAP框",
        "parent": {
          "__i": 3512
        },
        "image": "symbols/02244/EAP框.json",
        "position": {
          "x": 245.88104,
          "y": 904.15893
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Text",
      "i": 3514,
      "p": {
        "parent": {
          "__i": 3512
        },
        "position": {
          "x": 245.88104,
          "y": 765.77441
        },
        "height": 28.82404
      },
      "s": {
        "text": "热门产品",
        "text.color": "rgb(255,255,255)",
        "text.align": "center",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Block",
      "i": 3515,
      "p": {
        "displayName": "微服务统计",
        "position": {
          "x": 1675,
          "y": 237.96715
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Node",
      "i": 3516,
      "p": {
        "displayName": "EAP框",
        "parent": {
          "__i": 3515
        },
        "image": "symbols/02244/EAP框.json",
        "position": {
          "x": 1675,
          "y": 237.96715
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Text",
      "i": 3517,
      "p": {
        "parent": {
          "__i": 3515
        },
        "position": {
          "x": 1675,
          "y": 99.58263
        },
        "height": 28.82404
      },
      "s": {
        "text": "微服务统计",
        "text.color": "rgb(255,255,255)",
        "text.align": "center",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Block",
      "i": 3518,
      "p": {
        "displayName": "用户类型统计",
        "position": {
          "x": 1675,
          "y": 571.06304
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Node",
      "i": 3519,
      "p": {
        "displayName": "EAP框",
        "parent": {
          "__i": 3518
        },
        "image": "symbols/02244/EAP框.json",
        "position": {
          "x": 1675,
          "y": 571.06304
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Text",
      "i": 3520,
      "p": {
        "parent": {
          "__i": 3518
        },
        "position": {
          "x": 1675,
          "y": 432.67852
        },
        "height": 28.82404
      },
      "s": {
        "text": "用户类型统计",
        "text.color": "rgb(255,255,255)",
        "text.align": "center",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Block",
      "i": 3521,
      "p": {
        "displayName": "实时用户日志",
        "position": {
          "x": 1675,
          "y": 904.15893
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Node",
      "i": 3522,
      "p": {
        "displayName": "EAP框",
        "parent": {
          "__i": 3521
        },
        "image": "symbols/02244/EAP框.json",
        "position": {
          "x": 1675,
          "y": 904.15893
        },
        "width": 470,
        "height": 320
      }
    },
    {
      "c": "ht.Text",
      "i": 3523,
      "p": {
        "parent": {
          "__i": 3521
        },
        "position": {
          "x": 1675,
          "y": 765.77441
        },
        "height": 28.82404
      },
      "s": {
        "text": "实时用户日志",
        "text.color": "rgb(255,255,255)",
        "text.align": "center",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Node",
      "i": 3524,
      "p": {
        "displayName": "日期",
        "image": "symbols/21448/日期.json",
        "position": {
          "x": 1801.52655,
          "y": 20.61402
        },
        "width": 234.32272,
        "height": 39.08412
      },
      "a": {
        "time": "17:05",
        "week": "星期一",
        "date": "2019-03-18"
      }
    },
    {
      "c": "ht.Node",
      "i": 3525,
      "p": {
        "displayName": "地图",
        "dataBindings": {
          "a": {
            "icon.points": {
              "fieldName": "FC1",
              "id": "1"
            }
          }
        },
        "image": "symbols/地图/地图.json",
        "position": {
          "x": 971.06323,
          "y": 591.49198
        },
        "width": 928,
        "height": 814
      },
      "a": {
        "dataSetName": "地图数据2",
        "dataSet": "AnalogEntity_YxgJmGWK",
        "dataItem": [
          {
            "name": "FC1",
            "description": "地图点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "柱图X轴数据"
          },
          {
            "name": "FC4",
            "description": "柱图数据"
          },
          {
            "name": "FC5",
            "description": "环图数据"
          },
          {
            "name": "FC6",
            "description": "柱图Y轴数据"
          },
          {
            "name": "FC11",
            "description": "Y轴柱图数据"
          },
          {
            "name": "FC7",
            "description": "列表数据"
          },
          {
            "name": "FC8",
            "description": "折柱图X轴"
          },
          {
            "name": "FC9",
            "description": "柱图数据"
          },
          {
            "name": "FC10",
            "description": "折线图数据"
          }
        ],
        "icon.clickfunc": "__ht__function(event,data,viwe,point,width,height,item){\r\n    ht.Default.setImage('dialogAlarm', 'public/其它/告警绑定.json');\r\n    var alarmNode = new ht.Node();\r\n    alarmNode.setImage('dialogAlarm');\r\n    var mapNode = dataModel.getDataById(data._id)\r\n\talarmNode.setSize(100, 100);\r\n    var nodeX = mapNode.getRect().x + item.rect[0]/(1130/mapNode.getRect().width) + width/2;\r\n    var nodeY = mapNode.getRect().y - 50 + item.rect[1]/(970/mapNode.getRect().height) + height/2;\r\n    alarmNode.setPosition(nodeX,nodeY);    \r\n    alarmNode.setTag('dialogNode');\r\n\tdataModel.add(alarmNode);\r\n    debugger;\r\n}"
      }
    },
    {
      "c": "ht.Node",
      "i": 3526,
      "p": {
        "displayName": "number-pane",
        "dataBindings": {
          "a": {
            "ht.value": {
              "fieldName": "FC2",
              "id": "2"
            }
          }
        },
        "image": "symbols/basic/number-pane.json",
        "position": {
          "x": 960.44052,
          "y": 183.28261
        },
        "width": 959.11896,
        "height": 56.22096
      },
      "a": {
        "ht.value": "999,999,999,999",
        "ht.gap": 12,
        "ht.color": "rgb(0,199,7)",
        "dataSetName": "地图数据2",
        "dataSet": "AnalogEntity_YxgJmGWK",
        "dataItem": [
          {
            "name": "FC1",
            "description": "地图点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "柱图X轴数据"
          },
          {
            "name": "FC4",
            "description": "柱图数据"
          },
          {
            "name": "FC5",
            "description": "环图数据"
          },
          {
            "name": "FC6",
            "description": "柱图Y轴数据"
          },
          {
            "name": "FC11",
            "description": "Y轴柱图数据"
          },
          {
            "name": "FC7",
            "description": "列表数据"
          },
          {
            "name": "FC8",
            "description": "折柱图X轴"
          },
          {
            "name": "FC9",
            "description": "柱图数据"
          },
          {
            "name": "FC10",
            "description": "折线图数据"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 3527,
      "p": {
        "displayName": "基础柱形图",
        "dataBindings": {
          "a": {
            "xAxisData": {
              "fieldName": "FC3",
              "id": "3"
            },
            "lineData": {
              "fieldName": "FC4",
              "id": "4"
            }
          }
        },
        "image": "symbols/图表/基础柱形图.json",
        "position": {
          "x": 245.88105,
          "y": 248.56331
        },
        "width": 419.44464,
        "height": 241.51594
      },
      "a": {
        "dataSetName": "地图数据2",
        "dataSet": "AnalogEntity_YxgJmGWK",
        "dataItem": [
          {
            "name": "FC1",
            "description": "地图点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "柱图X轴数据"
          },
          {
            "name": "FC4",
            "description": "柱图数据"
          },
          {
            "name": "FC5",
            "description": "环图数据"
          },
          {
            "name": "FC6",
            "description": "柱图Y轴数据"
          },
          {
            "name": "FC11",
            "description": "Y轴柱图数据"
          },
          {
            "name": "FC7",
            "description": "列表数据"
          },
          {
            "name": "FC8",
            "description": "折柱图X轴"
          },
          {
            "name": "FC9",
            "description": "柱图数据"
          },
          {
            "name": "FC10",
            "description": "折线图数据"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 3528,
      "p": {
        "displayName": "环形饼图",
        "dataBindings": {
          "a": {
            "itemData": {
              "fieldName": "FC5",
              "id": "4"
            }
          }
        },
        "image": "symbols/图表/环形饼图.json",
        "position": {
          "x": 235.75052,
          "y": 581.87078
        },
        "width": 449.73895,
        "height": 298.38452
      },
      "a": {
        "chart.colors": [
          "#3399ff",
          "#feb64d",
          "#32d3eb",
          "#ff7c7c"
        ],
        "lineColor": [
          "rgb(51,153,255)",
          "rgb(255,187,70)",
          "rgb(49,210,235)",
          "rgb(255,125,125)",
          "#91c7ae",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ],
        "itemData": [
          {
            "value": 200,
            "name": "营销标保1"
          },
          {
            "value": 200,
            "name": "营销标保2"
          },
          {
            "value": 200,
            "name": "营销标保3"
          },
          {
            "value": 200,
            "name": "营销标保4"
          }
        ],
        "dataSetName": "地图数据2",
        "dataSet": "AnalogEntity_YxgJmGWK",
        "dataItem": [
          {
            "name": "FC1",
            "description": "地图点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "柱图X轴数据"
          },
          {
            "name": "FC4",
            "description": "柱图数据"
          },
          {
            "name": "FC5",
            "description": "环图数据"
          },
          {
            "name": "FC6",
            "description": "柱图Y轴数据"
          },
          {
            "name": "FC11",
            "description": "Y轴柱图数据"
          },
          {
            "name": "FC7",
            "description": "列表数据"
          },
          {
            "name": "FC8",
            "description": "折柱图X轴"
          },
          {
            "name": "FC9",
            "description": "柱图数据"
          },
          {
            "name": "FC10",
            "description": "折线图数据"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 3529,
      "p": {
        "displayName": "环形饼图",
        "dataBindings": {
          "a": {
            "itemData": {
              "fieldName": "FC5",
              "id": "15"
            }
          }
        },
        "image": "symbols/图表/环形饼图.json",
        "position": {
          "x": 1674.75052,
          "y": 586.87078
        },
        "width": 449.73895,
        "height": 298.38452
      },
      "a": {
        "chart.colors": [
          "#3399ff",
          "#feb64d",
          "#32d3eb",
          "#ff7c7c"
        ],
        "lineColor": [
          "rgb(51,153,255)",
          "rgb(255,187,70)",
          "rgb(49,210,235)",
          "rgb(255,125,125)",
          "#91c7ae",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ],
        "itemData": [
          {
            "value": 200,
            "name": "营销标保1"
          },
          {
            "value": 200,
            "name": "营销标保2"
          },
          {
            "value": 200,
            "name": "营销标保3"
          },
          {
            "value": 200,
            "name": "营销标保4"
          }
        ],
        "dataSetName": "地图数据2",
        "dataSet": "AnalogEntity_YxgJmGWK",
        "dataItem": [
          {
            "name": "FC1",
            "description": "地图点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "柱图X轴数据"
          },
          {
            "name": "FC4",
            "description": "柱图数据"
          },
          {
            "name": "FC5",
            "description": "环图数据"
          },
          {
            "name": "FC6",
            "description": "柱图Y轴数据"
          },
          {
            "name": "FC11",
            "description": "Y轴柱图数据"
          },
          {
            "name": "FC7",
            "description": "列表数据"
          },
          {
            "name": "FC8",
            "description": "折柱图X轴"
          },
          {
            "name": "FC9",
            "description": "柱图数据"
          },
          {
            "name": "FC10",
            "description": "折线图数据"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 3530,
      "p": {
        "displayName": "table",
        "dataBindings": {
          "a": {
            "ht.dataSource": {
              "fieldName": "FC7",
              "id": "6"
            }
          }
        },
        "image": "symbols/ht/table.json",
        "position": {
          "x": 1681.83973,
          "y": 917.27723
        },
        "width": 435.56052,
        "height": 274.18159
      },
      "a": {
        "ht.columns": [
          {
            "key": "region",
            "displayName": "地区",
            "align": "left",
            "width": 100
          },
          {
            "key": "channel",
            "displayName": "渠道",
            "align": "left",
            "width": 100
          },
          {
            "key": "info",
            "displayName": "成交信息",
            "align": "left",
            "width": 0.1
          },
          {
            "key": "Cost",
            "displayName": "费用",
            "align": "left",
            "width": 100
          }
        ],
        "ht.dataSource": [
          {
            "region": "福州",
            "channel": "京东",
            "info": "趁先生购买了B产品",
            "Cost": "1200"
          },
          {
            "region": "无锡",
            "channel": "天猫",
            "info": "刘女士购买了C产品",
            "Cost": "800"
          },
          {
            "region": "福州",
            "channel": "京东",
            "info": "趁先生购买了B产品",
            "Cost": "1200"
          },
          {
            "region": "无锡",
            "channel": "天猫",
            "info": "刘女士购买了C产品",
            "Cost": "800"
          }
        ],
        "ht.headbackground": "rgba(0,0,0,0)",
        "ht.bodyBackground": "rgba(0,32,87,0)",
        "ht.headTextColor": "rgb(247,247,247)",
        "ht.bodyTextColor": "rgb(247,247,247)",
        "ht.rowLineWidth": 1,
        "ht.rowLineColor": "rgba(212,212,212,0.3)",
        "dataSetName": "地图数据2",
        "dataSet": "AnalogEntity_YxgJmGWK",
        "dataItem": [
          {
            "name": "FC1",
            "description": "地图点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "柱图X轴数据"
          },
          {
            "name": "FC4",
            "description": "柱图数据"
          },
          {
            "name": "FC5",
            "description": "环图数据"
          },
          {
            "name": "FC6",
            "description": "柱图Y轴数据"
          },
          {
            "name": "FC11",
            "description": "Y轴柱图数据"
          },
          {
            "name": "FC7",
            "description": "列表数据"
          },
          {
            "name": "FC8",
            "description": "折柱图X轴"
          },
          {
            "name": "FC9",
            "description": "柱图数据"
          },
          {
            "name": "FC10",
            "description": "折线图数据"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 3531,
      "p": {
        "displayName": "Y轴柱状图",
        "dataBindings": {
          "a": {
            "yAxisData": {
              "fieldName": "FC6",
              "id": "7"
            },
            "lineData": {
              "fieldName": "FC11",
              "id": "8"
            }
          }
        },
        "image": "symbols/图表/Y轴柱状图.json",
        "position": {
          "x": 253.54082,
          "y": 917.27723
        },
        "width": 441.04082,
        "height": 274.18159
      },
      "a": {
        "dataSetName": "地图数据2",
        "dataSet": "AnalogEntity_YxgJmGWK",
        "dataItem": [
          {
            "name": "FC1",
            "description": "地图点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "柱图X轴数据"
          },
          {
            "name": "FC4",
            "description": "柱图数据"
          },
          {
            "name": "FC5",
            "description": "环图数据"
          },
          {
            "name": "FC6",
            "description": "柱图Y轴数据"
          },
          {
            "name": "FC11",
            "description": "Y轴柱图数据"
          },
          {
            "name": "FC7",
            "description": "列表数据"
          },
          {
            "name": "FC8",
            "description": "折柱图X轴"
          },
          {
            "name": "FC9",
            "description": "柱图数据"
          },
          {
            "name": "FC10",
            "description": "折线图数据"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 3532,
      "p": {
        "displayName": "折柱图",
        "dataBindings": {
          "a": {
            "xAxis": {
              "fieldName": "FC8",
              "id": "9"
            },
            "barData": {
              "fieldName": "FC9",
              "id": "10"
            },
            "lineData": {
              "fieldName": "FC10",
              "id": "11"
            }
          }
        },
        "image": "symbols/图表/折柱图.json",
        "position": {
          "x": 1678.52286,
          "y": 252.003
        },
        "width": 447.54468,
        "height": 276.0167
      },
      "a": {
        "lineColor": [
          "rgb(51,153,255)",
          "rgb(255,187,70)",
          "rgb(49,210,235)",
          "rgb(255,125,125)",
          "#91c7ae",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ],
        "itemColor": [
          "rgb(49,210,235)",
          "#2f4554",
          "#61a0a8",
          "#d48265",
          "#91c7ae",
          "#749f83",
          "#ca8622",
          "#bda29a",
          "#6e7074",
          "#546570",
          "#c4ccd3"
        ],
        "barName": "销量",
        "barMin": 0,
        "barMax": 2500,
        "barInterval": 500,
        "dataSetName": "地图数据2",
        "dataSet": "AnalogEntity_YxgJmGWK",
        "dataItem": [
          {
            "name": "FC1",
            "description": "地图点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "柱图X轴数据"
          },
          {
            "name": "FC4",
            "description": "柱图数据"
          },
          {
            "name": "FC5",
            "description": "环图数据"
          },
          {
            "name": "FC6",
            "description": "柱图Y轴数据"
          },
          {
            "name": "FC11",
            "description": "Y轴柱图数据"
          },
          {
            "name": "FC7",
            "description": "列表数据"
          },
          {
            "name": "FC8",
            "description": "折柱图X轴"
          },
          {
            "name": "FC9",
            "description": "柱图数据"
          },
          {
            "name": "FC10",
            "description": "折线图数据"
          }
        ],
        "barAxisName": "销量",
        "lineAxisName": "个数",
        "barFormatter": "个",
        "lineFormatter": "个",
        "lineName": "线图",
        "lineMin": 0,
        "lineMax": 999,
        "lineInterval": 200
      }
    }
  ],
  "modified": "Mon Mar 18 2019 17:05:40 GMT+0800 (中国标准时间)",
  "contentRect": {
    "x": -17.7048,
    "y": 0,
    "width": 1939.68593,
    "height": 1100.2908
  }
}