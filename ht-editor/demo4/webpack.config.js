const path = require('path');

module.exports = {
    entry: {
	    indexAll: __dirname + "/main/index.js",
	    //previewsAll: __dirname + "/main/previews.js",
	    subConfigsAll: __dirname + "/main/subConfigs.js"
	},
    output:{
        filename:'[name].js',
        path:__dirname + "/dist"
    },
    mode: 'development',
    node: {
        fs: 'empty'
    },
    module:{
        rules: [
            {test:/\.js$/,use:'babel-loader',exclude:'/node_modules'},
            {test:/\.css$/,use:['style-loader','css-loader'],exclude:'/node_modules'}
        ]
    }
}