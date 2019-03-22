const path = require('path');

module.exports = {
    entry: {
	    a: __dirname + "/src/main.js",
	    b: __dirname + "/src/main2.js"
	},
    output:{
        filename:'[name].js',  //打包后的名字
        path:__dirname + "/dist"   //路径
    },
    module:{
        rules: [
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules'},
            {test:/\.css$/,use:['style-loader','css-loader']}
        ]
    }
}