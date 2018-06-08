const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
module.exports = {
    entry:'./src/main.js',//入口js
    output:{
        filename:'build.js',  //打包后的名字
        path:path.resolve('./dist')   //路径
    },
    mode:'none',
    module:{
        rules: [
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules'},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.vue$/,use:'vue-loader'}
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new VueLoaderPlugin()
    ]
}