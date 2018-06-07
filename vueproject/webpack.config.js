//webpack 必须采用commonjs写法  这里的path是node的内置模块
let path = require('path');//专门用于处理路径  传入一个相对路径  传出一个绝对路径
console.log(path.resolve('./path'));  //以当前路径解析一个绝对路径
let htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:'./src/main.js',  //打包的入口文件  webpack会自动查找相关依赖进行打包  多个使用对象
	output:{
		filename:'build.js',  //打包后的名字
		path:path.resolve('./dist')   //必须是一个绝对路径
	},
  //模块解析规则
  //js 匹配所有的js文件 用babel-loader转义  排除掉mode_modules
  module:{
    rules: [
      {test:/\.js$/,use:'babel-loader',exclude:'/node_modules'},
      //use 时从右往左写  这里表示先解析成css-loader插入到style-loader
      {test:/\.css$/,use:['style-loader','css-loader']},
      {test:/\.vue$/,use:'vue-loader'}
    ]
  },
  plugins:[
    new htmlWebpackPlugin({//自动插入到dist目录中
      template:'./src/index.html'//使用模板
      //filename:'file'  可以改变文件名
    })
  ]
}
