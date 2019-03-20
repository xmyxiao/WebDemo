function nearMinutesTime(count) {
    var m = new Date();
    var result = [];
    for (var i = 0; i < count; i++) {
      var date = new Date(
        m.getTime() - 10000 * Math.floor(Math.random() * 60)
      );
      var str =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
        ":" +
        (date.getMinutes() < 10
          ? "0" + date.getMinutes()
          : date.getMinutes()) +
        ":" +
        (date.getSeconds() < 10
          ? "0" + date.getSeconds()
          : date.getSeconds());
      result.push(str);
    }
    result.sort();
    return result;
  }
  var nearMinutesTimeData=nearMinutesTime(10)
  var nearMinutesTimeData1=nearMinutesTime(10)
  Mock.Random.extend({
    nearMinutesTime:function(){
        return nearMinutesTimeData.shift()
    },

  })
Mock.mock({
    "list": [
        {
            "name": "FC1",
            "value": [
                {
                    name: "福州",
                    iconColor: "@rgb"
                },
                {
                    name: "乌鲁木齐",
                    iconColor: "@rgb"
                },
                {
                    name: "南京",
                    iconColor: "@rgb"
                },
                {
                    name: "哈尔滨",
                    iconColor: "@rgb"
                },
                {
                    name: "南昌",
                    iconColor: "@rgb"
                },
                {
                    name: "呼和浩特",
                    iconColor: "@rgb"
                }
            ]
        },
        {
            "name": "FC2",
            "value": "@natural(1,15),@natural(100,999),@natural(100,999)"
        },
        {
            "name": "FC3",
            "value": [
                "福州",
                "乌鲁木齐",
                "南京",
                "哈尔滨",
                "南昌",
                "呼和浩特"
            ]
        },
        {
            "name": "FC4",
            "value": [
                416,
                273,
                173,
                281,
                149
            ]
        },
        {
            "name": "FC5",
            "value": [
                {
                    name: "矿业",
                    value: 132
                },
                {
                    name: "制造",
                    "value": 237
                },
                {
                    name: "电力",
                    "value": 121
                },
                {
                    name: "教育",
                    "value": 131
                },
                {
                    name: "纺织",
                    "value": 98
                }
            ]
        },
        {
            "name": "FC6",
            "value": [
                "安全生产管理系统",
                "设备管理系统",
                "生产管理系统",
                "基础设施监控系统",
                "考试系统"
            ]
        },
        {
            "name": "FC7",
            "value|7": [
                {
                    "region": "@city",
                    "channel": "@cfirst **",
                    "info": "@ip",
                    "Cost": "@nearMinutesTime"
                }
            ]
        },
        {
            "name": "FC8",
            "value": [
                "短信服务",
                "快递服务",
                "二维码服务",
                "车牌服务"
            ]
        },
        {
            "name": "FC9",
            "value": [
                13,
                18,
                20,
                6
            ]
        },
        {
            "name": "FC10",
            "value|4": [
                20
            ]
        },
        {
            "name": "FC11",
            "value": [
                22,
                18,
                35,
                17,
                49
            ]
        }, {
            "name": "FC12",
            "value": [
                {
                    "name": "VIP会员",
                    "value": 228
                },
                {
                    "name": "高级会员",
                    "value": 216
                },
                {
                    "name": "普通会员",
                    "value": 321
                },
                {
                    "name": "试用会员",
                    "value": 431
                },
                {
                    "name": "游客",
                    "value": "@natural(100,515)"
                }
            ]
        }
    ]
})




function nearMinutesTime(count) {
    var m = new Date();
    var result = [];
    for (var i = 0; i < count; i++) {
      var date = new Date(
        m.getTime() - 10000 * Math.floor(Math.random() * 60)
      );
      var str =
        (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
        ":" +
        (date.getMinutes() < 10
          ? "0" + date.getMinutes()
          : date.getMinutes()) +
        ":" +
        (date.getSeconds() < 10
          ? "0" + date.getSeconds()
          : date.getSeconds());
      result.push(str);
    }
    result.sort();
    return result;
  }
  var nearMinutesTimeData=nearMinutesTime(10)
  var nearMinutesTimeData1=nearMinutesTime(10)
  Mock.Random.extend({
    nearMinutesTime:function(){
        return nearMinutesTimeData.shift()
    },
    nearMinutesTime1:function(){
        return nearMinutesTimeData1.shift()
    }
  })

Mock.mock({
  "list": [
      {
          "name": "FC1",
          "value": [{
              name: "福州",
              iconColor: "@rgb"
          },
          {
              name: "乌鲁木齐",
              iconColor: "@rgb"
          },
          {
              name: "南京",
              iconColor: "@rgb"
          },
          {
              name: "哈尔滨",
              iconColor: "@rgb"
          },
          {
              name: "南昌",
              iconColor: "@rgb"
          },
          {
              name: "呼和浩特",
              iconColor: "@rgb"
          }]
      },
      {
          "name": "FC2",
          "value": "@natural(1,15),@natural(100,999),@natural(100,999)"
      },
      {
          "name": "FC3",
          "value|6": ["@nearMinutesTime"]
      },
      {
          "name": "FC4",
          "value|6": ["@natural(1,48)"]
      },
      {
          "name": "FC5",
          "value": [
              {
                  "text": "CPU",
                  "max": 150
              },
              {
                  "text": "内存",
                  "max": 100
              },
              {
                  "text": "磁盘",
                  "max": 100
              }
          ]
      },
      {
          "name": "FC6",
          "value": ["@natural(10,90)","@natural(10,90)","@natural(40,60)"]
      },
      {
          "name": "FC7",
          "value|7": [
              {
                  "time": "@date\n     @nearMinutesTime1",
                  "local": "symbols/21448/link.json",
                  "desc": "@city\n@ip n内存负载"
              }
          ]
      },
      {
          "name": "CPU",
          "value": 120
      },
      {
          "name": "Memory",
          "value": 118
      },
      {
          "name": "Space",
          "value": 130
      },
      {
          "name": "Inode",
          "value": 100
      },
      {
          "name": "Server",
          "value": 99
      },
      {
          "name": "RunTime",
          "value": 70
      }
  ]
})




