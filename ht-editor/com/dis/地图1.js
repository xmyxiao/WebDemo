{
  "v": "6.3.1",
  "p": {
    "background": "rgb(0,0,27)",
    "autoAdjustIndex": true,
    "hierarchicalRendering": true
  },
  "a": {
    "rotateAsClock": false,
    "connectActionType": null,
    "width": 0,
    "height": 0,
    "previewURL": "previews2D/189.html",
    "userJs": "",
    "onPostDeserialize": "__ht__function(json, dm, gv, datas) {// 禁止鼠标缩放\r\ngraphView.handleScroll = function () { };\r\n// 禁止 touch 下双指缩放\r\ngraphView.handlePinch = function () { };\r\n// 禁止平移\r\ngraphView.setPannable(false);\r\n// 禁止框选\r\ngraphView.setRectSelectable(false);\r\n// 隐藏滚动条\r\ngraphView.setScrollBarVisible(false);\r\n\r\n// 选中边框为0\r\ngraphView.getSelectWidth = function () { return 0; };\r\n// 禁止图元移动\r\ngraphView.setMovableFunc(function () { return false; });\r\n\r\nwindow.addEventListener('resize', function (e) {\r\n    graphView.fitContent();\r\n});\r\n\r\ndocument.addEventListener('click',function(e){\r\n    dataModel.removeDataByTag('dialogNode');\r\n})}"
  },
  "d": [
    {
      "c": "ht.Node",
      "i": 5828,
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
      "i": 5829,
      "p": {
        "displayName": "symbol",
        "image": "symbols/02244/symbol.json",
        "position": {
          "x": 960,
          "y": 543.78863
        },
        "width": 1920.39171,
        "height": 1080
      }
    },
    {
      "c": "ht.Block",
      "i": 5830,
      "p": {
        "displayName": "标题",
        "position": {
          "x": 960,
          "y": 39
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
      "i": 5831,
      "p": {
        "displayName": "中",
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 957.81369,
          "y": 40.18893
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
              "x": 4.95415,
              "y": 3.78863
            },
            {
              "x": 4.95415,
              "y": 34.74231
            },
            {
              "x": 617.97067,
              "y": 38.28538
            },
            {
              "x": 647.9976,
              "y": 76.58923
            },
            {
              "x": 1293.25691,
              "y": 76.58923
            },
            {
              "x": 1327.31312,
              "y": 38.28538
            },
            {
              "x": 1910.67322,
              "y": 38.28538
            },
            {
              "x": 1910.67322,
              "y": 3.78863
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
      "i": 5832,
      "p": {
        "displayName": "中",
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 960.39171,
          "y": 57.00037
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
              "x": 0.88105,
              "y": 36.00074
            },
            {
              "x": 640.25481,
              "y": 39.69616
            },
            {
              "x": 670.28175,
              "y": 78
            },
            {
              "x": 1315.54105,
              "y": 78
            },
            {
              "x": 1349.59726,
              "y": 39.69616
            },
            {
              "x": 1919.90238,
              "y": 39.69616
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
      "i": 5833,
      "p": {
        "displayName": "中",
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 960,
          "y": 56.83974
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
              "x": 0,
              "y": 36.02915
            },
            {
              "x": 594.70981,
              "y": 39.34649
            },
            {
              "x": 626.81996,
              "y": 77.65033
            },
            {
              "x": 1269.99604,
              "y": 77.65033
            },
            {
              "x": 1304.05227,
              "y": 39.34649
            },
            {
              "x": 1920,
              "y": 39.34649
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
      "i": 5834,
      "p": {
        "displayName": "中",
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 968.23308,
          "y": 50.15641
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
              "x": 487.0031,
              "y": 31.00449
            },
            {
              "x": 617.65798,
              "y": 31.00449
            },
            {
              "x": 649.77712,
              "y": 69.30833
            },
            {
              "x": 1293.13299,
              "y": 69.30833
            },
            {
              "x": 1327.19872,
              "y": 31.00449
            },
            {
              "x": 1449.46305,
              "y": 31.00449
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
      "i": 5835,
      "p": {
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 1493.60917,
          "y": 54.3916
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
              "x": 1694.59549,
              "y": 39.08412
            },
            {
              "x": 1319.79529,
              "y": 39.08412
            },
            {
              "x": 1292.62287,
              "y": 69.34309
            },
            {
              "x": 1666.96732,
              "y": 69.69908
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
      "i": 5836,
      "p": {
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 460.63886,
          "y": 54.80065
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
              "x": 664.21189,
              "y": 39.49316
            },
            {
              "x": 281.40169,
              "y": 39.49316
            },
            {
              "x": 257.06583,
              "y": 70.10813
            },
            {
              "x": 636.58373,
              "y": 70.10813
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
      "i": 5837,
      "p": {
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 1303.20668,
          "y": 57.65967
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
              "x": 1326.56807,
              "y": 42.35219
            },
            {
              "x": 1307.01773,
              "y": 42.70817
            },
            {
              "x": 1279.84531,
              "y": 72.96715
            },
            {
              "x": 1298.9399,
              "y": 72.96715
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
      "i": 5838,
      "p": {
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 641.34106,
          "y": 58.01565
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
              "x": 662.25338,
              "y": 42.70817
            },
            {
              "x": 645.04689,
              "y": 42.70817
            },
            {
              "x": 620.42874,
              "y": 73.32313
            },
            {
              "x": 638.13457,
              "y": 73.32313
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
      "i": 5839,
      "p": {
        "parent": {
          "__i": 5830
        },
        "position": {
          "x": 971.0821,
          "y": 31.93082
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
        "text": "EAP平台已安装服务器监控",
        "text.color": "#32D3EB",
        "text.align": "center",
        "text.font": "bold 12px Arial"
      }
    },
    {
      "c": "ht.Block",
      "i": 5840,
      "p": {
        "displayName": "地图",
        "position": {
          "x": 611.79937,
          "y": 556.54218
        },
        "width": 737.90747,
        "height": 903.97092
      }
    },
    {
      "c": "ht.Node",
      "i": 5841,
      "p": {
        "displayName": "装饰科技圆环",
        "parent": {
          "__i": 5840
        },
        "image": "symbols/3d场景用/装饰科技圆环.json",
        "position": {
          "x": 611.79937,
          "y": 639.5739
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
      "i": 5842,
      "p": {
        "displayName": "年度累计：",
        "parent": {
          "__i": 5840
        },
        "position": {
          "x": 612.57253,
          "y": 161.328
        },
        "width": 704.83041,
        "height": 113.54257
      }
    },
    {
      "c": "ht.Text",
      "i": 5843,
      "p": {
        "displayName": "年度累计：",
        "parent": {
          "__i": 5842
        },
        "position": {
          "x": 329.17978,
          "y": 129.55671
        },
        "width": 138.04491
      },
      "s": {
        "text": "今日监控（个）：",
        "text.color": "#60ACFC",
        "text.font": "16px \"Microsoft YaHei\""
      }
    },
    {
      "c": "ht.Node",
      "i": 5844,
      "p": {
        "displayName": "number-pane",
        "parent": {
          "__i": 5842
        },
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
          "x": 612.57253,
          "y": 186.94126
        },
        "width": 704.83041,
        "height": 62.31605
      },
      "a": {
        "ht.value": "999,999,999,999",
        "ht.gap": 9,
        "ht.color": "rgb(0,199,7)",
        "ht.digit": 0,
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          }
        ]
      }
    },
    {
      "c": "ht.Block",
      "i": 5845,
      "p": {
        "displayName": "实时告警趋势",
        "position": {
          "x": 1624.42391,
          "y": 382.73221
        },
        "width": 570,
        "height": 570.57124
      }
    },
    {
      "c": "ht.Block",
      "i": 5846,
      "p": {
        "parent": {
          "__i": 5845
        },
        "position": {
          "x": 1624.42391,
          "y": 383.01875
        },
        "width": 570,
        "height": 569.99815
      }
    },
    {
      "c": "ht.Node",
      "i": 5847,
      "p": {
        "parent": {
          "__i": 5846
        },
        "position": {
          "x": 1347.94599,
          "y": 380.24674
        },
        "width": 17.04416,
        "height": 548.64857
      },
      "s": {
        "shape": "roundRect",
        "shape.corner.radius": 10,
        "opacity": 0.8,
        "shape.background": "rgba(23,73,255,0)",
        "shape.border.color": "#979797",
        "shape.gradient": "spread.horizontal",
        "shape.gradient.color": "rgba(23,73,255,0.2)",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5848,
      "p": {
        "parent": {
          "__i": 5846
        },
        "position": {
          "x": 1900.90182,
          "y": 378.09578
        },
        "width": 17.04416,
        "height": 551.73795
      },
      "s": {
        "shape": "roundRect",
        "shape.corner.radius": 10,
        "opacity": 0.8,
        "shape.background": "rgba(23,73,255,0)",
        "shape.border.color": "#979797",
        "shape.gradient": "spread.horizontal",
        "shape.gradient.color": "rgba(23,73,255,0.2)",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5849,
      "p": {
        "parent": {
          "__i": 5846
        },
        "rotation": 1.5708,
        "position": {
          "x": 1624.42389,
          "y": 654.57002
        },
        "width": 26.8936,
        "height": 552.9558
      },
      "s": {
        "shape": "roundRect",
        "shape.corner.radius": 10,
        "opacity": 0.8,
        "shape.background": "rgba(23,73,255,0)",
        "shape.border.color": "#979797",
        "shape.gradient": "spread.horizontal",
        "shape.gradient.color": "rgba(23,73,255,0.2)",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5850,
      "p": {
        "parent": {
          "__i": 5846
        },
        "rotation": 1.5708,
        "position": {
          "x": 1624.17854,
          "y": 111.46748
        },
        "width": 26.8936,
        "height": 550.46614
      },
      "s": {
        "shape": "roundRect",
        "shape.corner.radius": 10,
        "opacity": 0.8,
        "shape.background": "rgba(23,73,255,0)",
        "shape.border.color": "#979797",
        "shape.gradient": "spread.horizontal",
        "shape.gradient.color": "rgba(23,73,255,0.2)",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Shape",
      "i": 5851,
      "p": {
        "parent": {
          "__i": 5846
        },
        "position": {
          "x": 1624.42389,
          "y": 382.83589
        },
        "width": 552.95586,
        "height": 546.33078,
        "segments": {
          "__a": [
            1,
            2,
            4,
            2,
            4,
            2,
            4,
            2,
            4,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1353.9958,
              "y": 109.6705
            },
            {
              "x": 1894.85199,
              "y": 109.6705
            },
            {
              "x": 1898.1915,
              "y": 109.6705
            },
            {
              "x": 1900.90182,
              "y": 117.31925
            },
            {
              "x": 1900.90182,
              "y": 126.75505
            },
            {
              "x": 1900.90182,
              "y": 638.91672
            },
            {
              "x": 1900.90182,
              "y": 648.35254
            },
            {
              "x": 1898.1915,
              "y": 656.00129
            },
            {
              "x": 1894.85199,
              "y": 656.00129
            },
            {
              "x": 1353.9958,
              "y": 656.00129
            },
            {
              "x": 1350.65447,
              "y": 656.00129
            },
            {
              "x": 1347.94596,
              "y": 648.35254
            },
            {
              "x": 1347.94596,
              "y": 638.91672
            },
            {
              "x": 1347.94596,
              "y": 126.75505
            },
            {
              "x": 1347.94596,
              "y": 117.31925
            },
            {
              "x": 1350.65447,
              "y": 109.6705
            },
            {
              "x": 1353.9958,
              "y": 109.6705
            },
            {
              "x": 1353.9958,
              "y": 109.6705
            }
          ]
        }
      },
      "s": {
        "type": "shape",
        "opacity": 1,
        "shape.background": "rgba(0,21,51,0.8)",
        "shape.border.width": 1,
        "shape.border.color": "#00ffff",
        "shape.dash.pattern": [
          16,
          16
        ],
        "shape.fill.rule": "evenodd",
        "shape.border.width.absolute": true
      }
    },
    {
      "c": "ht.Shape",
      "i": 5852,
      "p": {
        "parent": {
          "__i": 5845
        },
        "position": {
          "x": 1625.39338,
          "y": 103.35345
        },
        "width": 178.27948,
        "height": 11.8137,
        "segments": null,
        "points": {
          "__a": [
            {
              "x": 1714.53312,
              "y": 109.26029
            },
            {
              "x": 1693.05366,
              "y": 97.4466
            },
            {
              "x": 1557.7331,
              "y": 97.4466
            },
            {
              "x": 1536.25364,
              "y": 109.26029
            }
          ]
        }
      },
      "s": {
        "type": "shape",
        "opacity": 0.8,
        "shape.background": null,
        "shape.border.width": 1,
        "shape.border.color": "#00ffff",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Shape",
      "i": 5853,
      "p": {
        "parent": {
          "__i": 5845
        },
        "position": {
          "x": 1625.93036,
          "y": 113.55618
        },
        "width": 168.61371,
        "height": 27.92329,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            5
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1563.10296,
              "y": 99.59454
            },
            {
              "x": 1541.62351,
              "y": 112.48221
            },
            {
              "x": 1541.62351,
              "y": 114.63016
            },
            {
              "x": 1541.62351,
              "y": 127.51783
            },
            {
              "x": 1710.23722,
              "y": 127.51783
            },
            {
              "x": 1710.23722,
              "y": 114.63016
            },
            {
              "x": 1710.23722,
              "y": 112.48221
            },
            {
              "x": 1688.75777,
              "y": 99.59454
            },
            {
              "x": 1563.10296,
              "y": 99.59454
            }
          ]
        }
      },
      "s": {
        "type": "shape",
        "opacity": 1,
        "shape.background": "#032452",
        "shape.border.color": null,
        "shape.dash.pattern": [
          16,
          16
        ],
        "shape.fill.rule": "evenodd"
      }
    },
    {
      "c": "ht.Shape",
      "i": 5854,
      "p": {
        "parent": {
          "__i": 5845
        },
        "position": {
          "x": 1624.3194,
          "y": 100.66851
        },
        "width": 431.73703,
        "height": 5.36987,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2,
            2,
            5,
            1,
            2,
            2,
            2,
            2,
            5,
            1,
            2,
            2,
            2,
            2,
            5,
            1,
            2,
            2,
            2,
            2,
            5
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1412.74678,
              "y": 101.20549
            },
            {
              "x": 1408.45089,
              "y": 103.35345
            },
            {
              "x": 1490.07282,
              "y": 103.35345
            },
            {
              "x": 1494.36871,
              "y": 101.20549
            },
            {
              "x": 1412.74678,
              "y": 101.20549
            },
            {
              "x": 1494.36871,
              "y": 103.35345
            },
            {
              "x": 1530.88378,
              "y": 103.35345
            },
            {
              "x": 1541.62351,
              "y": 97.98358
            },
            {
              "x": 1505.10844,
              "y": 97.98358
            },
            {
              "x": 1494.36871,
              "y": 103.35345
            },
            {
              "x": 1707.01531,
              "y": 97.98358
            },
            {
              "x": 1717.75503,
              "y": 103.35345
            },
            {
              "x": 1754.27011,
              "y": 103.35345
            },
            {
              "x": 1743.53038,
              "y": 97.98358
            },
            {
              "x": 1707.01531,
              "y": 97.98358
            },
            {
              "x": 1835.89203,
              "y": 101.20549
            },
            {
              "x": 1754.27011,
              "y": 101.20549
            },
            {
              "x": 1758.566,
              "y": 103.35345
            },
            {
              "x": 1840.18791,
              "y": 103.35345
            },
            {
              "x": 1835.89203,
              "y": 101.20549
            }
          ]
        }
      },
      "s": {
        "type": "shape",
        "opacity": 1,
        "shape.background": "#26a9bd",
        "shape.border.color": null,
        "shape.dash.pattern": [
          16,
          16
        ],
        "shape.fill.rule": "evenodd"
      }
    },
    {
      "c": "ht.Text",
      "i": 5855,
      "p": {
        "parent": {
          "__i": 5845
        },
        "position": {
          "x": 1625.93036,
          "y": 113.48922
        },
        "width": 121.2766,
        "height": 28.05722
      },
      "s": {
        "text": "实时告警趋势",
        "text.color": "rgb(255,255,255)",
        "text.align": "center",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Shape",
      "i": 5856,
      "p": {
        "parent": {
          "__i": 5845
        },
        "position": {
          "x": 1625.90191,
          "y": 412.85071
        },
        "width": 491.33481,
        "height": 1,
        "segments": {
          "__a": [
            1,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1380.23451,
              "y": 412.85071
            },
            {
              "x": 1871.56932,
              "y": 412.85071
            }
          ]
        }
      },
      "s": {
        "shape.background": "#60ACFC",
        "shape.border.color": "rgba(51,153,255,0.5)",
        "shape.border.width": 1
      }
    },
    {
      "c": "ht.Text",
      "i": 5857,
      "p": {
        "parent": {
          "__i": 5845
        },
        "position": {
          "x": 1438.34629,
          "y": 158.2601
        },
        "width": 121.2766,
        "height": 28.05722
      },
      "s": {
        "text": "报警趋势（单位：百）",
        "text.color": "#00ccff",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Text",
      "i": 5858,
      "p": {
        "parent": {
          "__i": 5845
        },
        "position": {
          "x": 1438.34629,
          "y": 432.32209
        },
        "width": 121.2766,
        "height": 28.05722
      },
      "s": {
        "text": "报警雷达（单位：百）",
        "text.color": "#00ccff",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Block",
      "i": 5859,
      "p": {
        "displayName": "告警时间轴",
        "position": {
          "x": 1624.90237,
          "y": 860.38286
        },
        "width": 570,
        "height": 384.73003
      }
    },
    {
      "c": "ht.Block",
      "i": 5860,
      "p": {
        "parent": {
          "__i": 5859
        },
        "position": {
          "x": 1624.90237,
          "y": 862.74753
        },
        "width": 570,
        "height": 380.00068
      }
    },
    {
      "c": "ht.Node",
      "i": 5861,
      "p": {
        "parent": {
          "__i": 5860
        },
        "position": {
          "x": 1348.42446,
          "y": 860.89951
        },
        "width": 17.04416,
        "height": 365.7669
      },
      "s": {
        "shape": "roundRect",
        "shape.corner.radius": 10,
        "opacity": 0.8,
        "shape.background": "rgba(23,73,255,0)",
        "shape.border.color": "#979797",
        "shape.gradient": "spread.horizontal",
        "shape.gradient.color": "rgba(23,73,255,0.2)",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5862,
      "p": {
        "parent": {
          "__i": 5860
        },
        "position": {
          "x": 1901.38029,
          "y": 859.46553
        },
        "width": 17.04416,
        "height": 367.8265
      },
      "s": {
        "shape": "roundRect",
        "shape.corner.radius": 10,
        "opacity": 0.8,
        "shape.background": "rgba(23,73,255,0)",
        "shape.border.color": "#979797",
        "shape.gradient": "spread.horizontal",
        "shape.gradient.color": "rgba(23,73,255,0.2)",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5863,
      "p": {
        "parent": {
          "__i": 5860
        },
        "rotation": 1.5708,
        "position": {
          "x": 1624.90236,
          "y": 1043.78229
        },
        "width": 17.92912,
        "height": 552.9558
      },
      "s": {
        "shape": "roundRect",
        "shape.corner.radius": 10,
        "opacity": 0.8,
        "shape.background": "rgba(23,73,255,0)",
        "shape.border.color": "#979797",
        "shape.gradient": "spread.horizontal",
        "shape.gradient.color": "rgba(23,73,255,0.2)",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5864,
      "p": {
        "parent": {
          "__i": 5860
        },
        "rotation": 1.5708,
        "position": {
          "x": 1624.65701,
          "y": 681.71276
        },
        "width": 17.92912,
        "height": 550.46614
      },
      "s": {
        "shape": "roundRect",
        "shape.corner.radius": 10,
        "opacity": 0.8,
        "shape.background": "rgba(23,73,255,0)",
        "shape.border.color": "#979797",
        "shape.gradient": "spread.horizontal",
        "shape.gradient.color": "rgba(23,73,255,0.2)",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Shape",
      "i": 5865,
      "p": {
        "parent": {
          "__i": 5860
        },
        "position": {
          "x": 1624.90236,
          "y": 862.62562
        },
        "width": 552.95586,
        "height": 364.22171,
        "segments": {
          "__a": [
            1,
            2,
            4,
            2,
            4,
            2,
            4,
            2,
            4,
            2
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1354.47427,
              "y": 680.51476
            },
            {
              "x": 1895.33046,
              "y": 680.51476
            },
            {
              "x": 1898.66997,
              "y": 680.51476
            },
            {
              "x": 1901.38029,
              "y": 685.61395
            },
            {
              "x": 1901.38029,
              "y": 691.90451
            },
            {
              "x": 1901.38029,
              "y": 1033.34673
            },
            {
              "x": 1901.38029,
              "y": 1039.6373
            },
            {
              "x": 1898.66997,
              "y": 1044.73647
            },
            {
              "x": 1895.33046,
              "y": 1044.73647
            },
            {
              "x": 1354.47427,
              "y": 1044.73647
            },
            {
              "x": 1351.13294,
              "y": 1044.73647
            },
            {
              "x": 1348.42443,
              "y": 1039.6373
            },
            {
              "x": 1348.42443,
              "y": 1033.34673
            },
            {
              "x": 1348.42443,
              "y": 691.90451
            },
            {
              "x": 1348.42443,
              "y": 685.61395
            },
            {
              "x": 1351.13294,
              "y": 680.51476
            },
            {
              "x": 1354.47427,
              "y": 680.51476
            },
            {
              "x": 1354.47427,
              "y": 680.51476
            }
          ]
        }
      },
      "s": {
        "type": "shape",
        "opacity": 1,
        "shape.background": "rgba(0,21,51,0.8)",
        "shape.border.width": 1,
        "shape.border.color": "#00ffff",
        "shape.dash.pattern": [
          16,
          16
        ],
        "shape.fill.rule": "evenodd",
        "shape.border.width.absolute": true
      }
    },
    {
      "c": "ht.Shape",
      "i": 5866,
      "p": {
        "parent": {
          "__i": 5859
        },
        "position": {
          "x": 1625.87184,
          "y": 673.92469
        },
        "width": 178.27948,
        "height": 11.8137,
        "segments": null,
        "points": {
          "__a": [
            {
              "x": 1715.01158,
              "y": 679.83154
            },
            {
              "x": 1693.53212,
              "y": 668.01784
            },
            {
              "x": 1558.21156,
              "y": 668.01784
            },
            {
              "x": 1536.7321,
              "y": 679.83154
            }
          ]
        }
      },
      "s": {
        "type": "shape",
        "opacity": 0.8,
        "shape.background": null,
        "shape.border.width": 1,
        "shape.border.color": "#00ffff",
        "shape.dash.pattern": [
          16,
          16
        ]
      }
    },
    {
      "c": "ht.Shape",
      "i": 5867,
      "p": {
        "parent": {
          "__i": 5859
        },
        "position": {
          "x": 1626.40883,
          "y": 684.12742
        },
        "width": 168.61371,
        "height": 27.92329,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            2,
            5
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1563.58142,
              "y": 670.16578
            },
            {
              "x": 1542.10197,
              "y": 683.05345
            },
            {
              "x": 1542.10197,
              "y": 685.2014
            },
            {
              "x": 1542.10197,
              "y": 698.08907
            },
            {
              "x": 1710.71568,
              "y": 698.08907
            },
            {
              "x": 1710.71568,
              "y": 685.2014
            },
            {
              "x": 1710.71568,
              "y": 683.05345
            },
            {
              "x": 1689.23623,
              "y": 670.16578
            },
            {
              "x": 1563.58142,
              "y": 670.16578
            }
          ]
        }
      },
      "s": {
        "type": "shape",
        "opacity": 1,
        "shape.background": "#032452",
        "shape.border.color": null,
        "shape.dash.pattern": [
          16,
          16
        ],
        "shape.fill.rule": "evenodd"
      }
    },
    {
      "c": "ht.Shape",
      "i": 5868,
      "p": {
        "parent": {
          "__i": 5859
        },
        "position": {
          "x": 1624.79787,
          "y": 671.23975
        },
        "width": 431.73703,
        "height": 5.36987,
        "segments": {
          "__a": [
            1,
            2,
            2,
            2,
            2,
            5,
            1,
            2,
            2,
            2,
            2,
            5,
            1,
            2,
            2,
            2,
            2,
            5,
            1,
            2,
            2,
            2,
            2,
            5
          ]
        },
        "points": {
          "__a": [
            {
              "x": 1413.22524,
              "y": 671.77674
            },
            {
              "x": 1408.92935,
              "y": 673.92469
            },
            {
              "x": 1490.55128,
              "y": 673.92469
            },
            {
              "x": 1494.84717,
              "y": 671.77674
            },
            {
              "x": 1413.22524,
              "y": 671.77674
            },
            {
              "x": 1494.84717,
              "y": 673.92469
            },
            {
              "x": 1531.36224,
              "y": 673.92469
            },
            {
              "x": 1542.10197,
              "y": 668.55482
            },
            {
              "x": 1505.5869,
              "y": 668.55482
            },
            {
              "x": 1494.84717,
              "y": 673.92469
            },
            {
              "x": 1707.49377,
              "y": 668.55482
            },
            {
              "x": 1718.23349,
              "y": 673.92469
            },
            {
              "x": 1754.74857,
              "y": 673.92469
            },
            {
              "x": 1744.00884,
              "y": 668.55482
            },
            {
              "x": 1707.49377,
              "y": 668.55482
            },
            {
              "x": 1836.37049,
              "y": 671.77674
            },
            {
              "x": 1754.74857,
              "y": 671.77674
            },
            {
              "x": 1759.04446,
              "y": 673.92469
            },
            {
              "x": 1840.66638,
              "y": 673.92469
            },
            {
              "x": 1836.37049,
              "y": 671.77674
            }
          ]
        }
      },
      "s": {
        "type": "shape",
        "opacity": 1,
        "shape.background": "#26a9bd",
        "shape.border.color": null,
        "shape.dash.pattern": [
          16,
          16
        ],
        "shape.fill.rule": "evenodd"
      }
    },
    {
      "c": "ht.Text",
      "i": 5869,
      "p": {
        "parent": {
          "__i": 5859
        },
        "position": {
          "x": 1626.40883,
          "y": 684.06045
        },
        "width": 121.2766,
        "height": 28.05722
      },
      "s": {
        "text": "告警时间轴",
        "text.color": "rgb(255,255,255)",
        "text.align": "center",
        "text.font": "14px arial, sans-serif"
      }
    },
    {
      "c": "ht.Node",
      "i": 5870,
      "p": {
        "displayName": "雷达图",
        "dataBindings": {
          "a": {
            "indicator": {
              "fieldName": "FC5",
              "id": "5"
            },
            "dataValue": {
              "fieldName": "FC6",
              "id": "6"
            }
          }
        },
        "image": "symbols/图表/雷达图.json",
        "position": {
          "x": 1710.78466,
          "y": 543.01783
        },
        "width": 321.56931,
        "height": 250
      },
      "a": {
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          },
          {
            "name": "CPU",
            "description": "CPU"
          },
          {
            "name": "Memory",
            "description": "内存"
          },
          {
            "name": "Space",
            "description": "磁盘空间"
          },
          {
            "name": "Inode",
            "description": "inode"
          },
          {
            "name": "Server",
            "description": "服务器时间"
          },
          {
            "name": "RunTime",
            "description": "运行时间"
          }
        ],
        "itemColor": "rgb(48,242,120)"
      }
    },
    {
      "c": "ht.Node",
      "i": 5871,
      "p": {
        "displayName": "基础折线图",
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
        "image": "symbols/图表/基础折线图.json",
        "position": {
          "x": 1635.75542,
          "y": 279.28926
        },
        "width": 472.58474,
        "height": 214.57403
      },
      "a": {
        "lineSmooth": true,
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5872,
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
          "x": 620.42874,
          "y": 597.64846
        },
        "width": 883.73152,
        "height": 758.60139
      },
      "a": {
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          }
        ],
        "icon.clickfunc": "__ht__function(event,data,viwe,point,width,height,item){\r\n    ht.Default.setImage('dialogAlarm', 'public/其它/告警绑定.json');\r\n    var alarmNode = new ht.Node();\r\n    alarmNode.setImage('dialogAlarm');\r\n    var mapNode = dataModel.getDataById(data._id)\r\n\talarmNode.setSize(100, 100);\r\n    var nodeX = mapNode.getRect().x + item.rect[0]/(1130/mapNode.getRect().width) + width/2;\r\n    var nodeY = mapNode.getRect().y - 50 + item.rect[1]/(970/mapNode.getRect().height) + height/2;\r\n    alarmNode.setPosition(nodeX,nodeY);    \r\n    alarmNode.setTag('dialogNode');\r\n\tdataModel.add(alarmNode);\r\n    debugger;\r\n}"
      }
    },
    {
      "c": "ht.Node",
      "i": 5873,
      "p": {
        "displayName": "日期",
        "image": "symbols/21448/日期.json",
        "position": {
          "x": 1760.26617,
          "y": 71.28521
        },
        "width": 248.67162,
        "height": 42.25759
      },
      "a": {
        "time": "10:51",
        "week": "星期一",
        "date": "2019-03-18"
      }
    },
    {
      "c": "ht.Node",
      "i": 5874,
      "p": {
        "displayName": "label",
        "dataBindings": {
          "a": {
            "itemValue": {
              "fieldName": "CPU",
              "id": "8"
            }
          }
        },
        "image": "symbols/21448/label.json",
        "position": {
          "x": 1475,
          "y": 484.16359
        }
      },
      "a": {
        "itemColor": "rgb(247,247,247)",
        "itemValue": "12",
        "titleValue": "CPU：",
        "titleColor": "rgb(51,153,255)",
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          },
          {
            "name": "CPU",
            "description": "CPU"
          },
          {
            "name": "Memory",
            "description": "内存"
          },
          {
            "name": "Space",
            "description": "磁盘空间"
          },
          {
            "name": "Inode",
            "description": "inode"
          },
          {
            "name": "Server",
            "description": "服务器时间"
          },
          {
            "name": "RunTime",
            "description": "运行时间"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5875,
      "p": {
        "displayName": "label",
        "dataBindings": {
          "a": {
            "itemValue": {
              "fieldName": "Memory",
              "id": "9"
            }
          }
        },
        "image": "symbols/21448/label.json",
        "position": {
          "x": 1475,
          "y": 511.32253
        }
      },
      "a": {
        "titleValue": "内存：",
        "itemValue": "11",
        "itemColor": "rgb(247,247,247)",
        "titleColor": "rgb(51,153,255)",
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          },
          {
            "name": "CPU",
            "description": "CPU"
          },
          {
            "name": "Memory",
            "description": "内存"
          },
          {
            "name": "Space",
            "description": "磁盘空间"
          },
          {
            "name": "Inode",
            "description": "inode"
          },
          {
            "name": "Server",
            "description": "服务器时间"
          },
          {
            "name": "RunTime",
            "description": "运行时间"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5876,
      "p": {
        "displayName": "label",
        "dataBindings": {
          "a": {
            "itemValue": {
              "fieldName": "Space",
              "id": "10"
            }
          }
        },
        "image": "symbols/21448/label.json",
        "position": {
          "x": 1475,
          "y": 536.32253
        }
      },
      "a": {
        "titleValue": "磁盘空间：",
        "itemValue": "13",
        "itemColor": "rgb(247,247,247)",
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          },
          {
            "name": "CPU",
            "description": "CPU"
          },
          {
            "name": "Memory",
            "description": "内存"
          },
          {
            "name": "Space",
            "description": "磁盘空间"
          },
          {
            "name": "Inode",
            "description": "inode"
          },
          {
            "name": "Server",
            "description": "服务器时间"
          },
          {
            "name": "RunTime",
            "description": "运行时间"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5877,
      "p": {
        "displayName": "label",
        "dataBindings": {
          "a": {
            "itemValue": {
              "fieldName": "Inode",
              "id": "11"
            }
          }
        },
        "image": "symbols/21448/label.json",
        "position": {
          "x": 1475,
          "y": 560.64675
        }
      },
      "a": {
        "itemColor": "rgb(247,247,247)",
        "titleValue": "磁盘inode：",
        "itemValue": "10",
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          },
          {
            "name": "CPU",
            "description": "CPU"
          },
          {
            "name": "Memory",
            "description": "内存"
          },
          {
            "name": "Space",
            "description": "磁盘空间"
          },
          {
            "name": "Inode",
            "description": "inode"
          },
          {
            "name": "Server",
            "description": "服务器时间"
          },
          {
            "name": "RunTime",
            "description": "运行时间"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5878,
      "p": {
        "displayName": "label",
        "dataBindings": {
          "a": {
            "itemValue": {
              "fieldName": "Server",
              "id": "12"
            }
          }
        },
        "image": "symbols/21448/label.json",
        "position": {
          "x": 1475,
          "y": 586.93423
        }
      },
      "a": {
        "itemColor": "rgb(247,247,247)",
        "titleValue": "服务器时间：",
        "itemValue": "9",
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          },
          {
            "name": "CPU",
            "description": "CPU"
          },
          {
            "name": "Memory",
            "description": "内存"
          },
          {
            "name": "Space",
            "description": "磁盘空间"
          },
          {
            "name": "Inode",
            "description": "inode"
          },
          {
            "name": "Server",
            "description": "服务器时间"
          },
          {
            "name": "RunTime",
            "description": "运行时间"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5879,
      "p": {
        "displayName": "label",
        "dataBindings": {
          "a": {
            "itemValue": {
              "fieldName": "RunTime",
              "id": "13"
            }
          }
        },
        "image": "symbols/21448/label.json",
        "position": {
          "x": 1475,
          "y": 613.88152
        }
      },
      "a": {
        "itemColor": "rgb(247,247,247)",
        "titleValue": "运行时间：",
        "itemValue": "7",
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          },
          {
            "name": "CPU",
            "description": "CPU"
          },
          {
            "name": "Memory",
            "description": "内存"
          },
          {
            "name": "Space",
            "description": "磁盘空间"
          },
          {
            "name": "Inode",
            "description": "inode"
          },
          {
            "name": "Server",
            "description": "服务器时间"
          },
          {
            "name": "RunTime",
            "description": "运行时间"
          }
        ]
      }
    },
    {
      "c": "ht.Node",
      "i": 5880,
      "p": {
        "displayName": "table",
        "dataBindings": {
          "a": {
            "ht.dataSource": {
              "fieldName": "FC7",
              "id": "7"
            }
          }
        },
        "image": "symbols/ht/table.json",
        "position": {
          "x": 1631.20954,
          "y": 867.57215
        },
        "width": 485.33756,
        "height": 296.22684
      },
      "s": {
        "2d.movable": false
      },
      "a": {
        "ht.headHeight": 40,
        "ht.rowHeight": 50,
        "ht.cellPadding": 6,
        "ht.showHead": false,
        "ht.dataSource": [
          {
            "time": "2019-03-01\n     17:10:10",
            "local": "symbols/21448/link.json",
            "desc": "北京电视台\nIP:192.168.7.136 n内存负载"
          },
          {
            "time": "2019-03-01\n     17:10:10",
            "local": "symbols/21448/link.json",
            "desc": "北京电视台\nIP:192.168.7.136 n内存负载"
          }
        ],
        "ht.columns": [
          {
            "key": "time",
            "displayName": "时间",
            "width": 100,
            "bodyColor": "rgb(51,153,255)"
          },
          {
            "align": "center",
            "displayName": "图标",
            "key": "local",
            "isIcon": true,
            "type": "icon",
            "width": 50
          },
          {
            "key": "desc",
            "displayName": "说明",
            "width": 0.1,
            "bodyColor": "rgb(255,255,255)"
          }
        ],
        "ht.hoverBackground": "rgba(255,255,255,0)",
        "ht.borderWidth": 0,
        "ht.translateY": 0,
        "ht.rowLineWidth": 0,
        "ht.scrollBarWidth": 8,
        "ht.translateX": 0,
        "ht.showScrollBar": true,
        "ht.scrollBarColor": "rgba(49,210,235,0.39)",
        "ht.autoHideScrollBar": false,
        "ht.columnLineWidth": 0,
        "ht.bodyBackground": "rgba(124,146,156,0)",
        "ht.bodyTextColor": "rgb(61,61,61)",
        "ht.headTextColor": "rgb(61,61,61)",
        "ht.headbackground": "rgb(186,186,186)",
        "ht.headFont": "bold 14px sans-serif, arial",
        "ht.bodyFont": "14px sans-serif, arial",
        "dataSetName": "地图测试数据",
        "dataSet": "AnalogEntity_P1Wr80Tk",
        "dataItem": [
          {
            "name": "FC1",
            "description": "城市点"
          },
          {
            "name": "FC2",
            "description": "年度累计"
          },
          {
            "name": "FC3",
            "description": "折线图横轴"
          },
          {
            "name": "FC4",
            "description": "折线图数据"
          },
          {
            "name": "FC5",
            "description": "雷达图指示器"
          },
          {
            "name": "FC6",
            "description": "雷达图数据"
          },
          {
            "name": "FC7",
            "description": "列数据"
          }
        ]
      }
    }
  ],
  "modified": "Mon Mar 18 2019 10:51:57 GMT+0800 (中国标准时间)",
  "contentRect": {
    "x": -2,
    "y": 0,
    "width": 1924,
    "height": 1083.78863
  }
}