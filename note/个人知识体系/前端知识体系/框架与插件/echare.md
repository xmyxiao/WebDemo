**echart  环形图中间文字分组**</br>
　　[graphic.elements](https://echarts.apache.org/zh/option.html#graphic.elements)</br>
```javascript
	option = {
		graphic: {
	        elements: [{  // elements 可以多项
	            type: 'text', //通过不同top值可以设置上下显示
	            left: 'center',
	            top: '45%',
	            style: {
	                text: '环图中添加颜色'+'\n'+'和series平级',
	                textAlign: 'center',
	                fill: 'blue', //文字的颜色
	                width: 30,
	                height: 30,
	                fontSize: 20,
	                fontFamily: "Microsoft YaHei"
	            }
	        }]
	    },
	    series: []
	}
```

**echart 折线图控制层级**</br>
　　[通过z来控制层级](https://echarts.apache.org/zh/option.html#series-line.z)

**echart 更换主题**</br>
　　不是动态改变的话就直接在init事件里面定义theme</br>
　　动态改变的话需要先dispose，注销实例，然后再通过初始化实例来设置主题</br>