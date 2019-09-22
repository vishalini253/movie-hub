var path = require('path');
var HtmlWebpackPlugin =  require('html-webpack-plugin');

module.exports = {
    entry : './index.js',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js'
    },
    module : {
        rules : [
            {test : /\.(jsx)$/, use:'babel-loader'},
            {test : /\.(js)$/, use:'babel-loader', exclude: /node_modules/},
            {test : /\.css$/, use:['style-loader', 'css-loader']},
            {test: /\.(html)$/, use: 'html-loader'},
            {test: /\.(jpe?g|png|gif|svg)$/, use:['url-loader', 'image-webpack-loader']},
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: false,
        historyApiFallback: true,
        stats: 'minimal'
    },    
    mode:'development',
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'index.html'
        })
    ]

}