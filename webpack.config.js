//node module
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//配置文件
module.exports = {
    entry: {
        main: './app/assets/js/index.js',
        aboutus: './app/assets/js/about.js'
                   },               // 入口文件
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },              // 出口文件  name -> chunkname main and about
    module: {
        rules: [{
            // 格式
            test: /\.(sass|scss|css)$/,
            //順序是由下到上 sass > css > loader
            use: [{
                loader: MiniCssExtractPlugin.loader,
                options: {
                publicPath: './dist'
                }
            },
                //'style-loader', 會跟原本的衝突 
                'css-loader',
                'sass-loader'
            ],
        }]

    },  // 處裡對應模組
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./[name].css" //output 檔案名稱
        }),
        new HtmlWebpackPlugin({
            chunks : ['main'],  //選擇注入資源 chunk
            inject  : 'body', //預設<body> js </body>  head or body
            template : './src/index.html', 
            filename : 'index.html' //目的地
        })
    ],   // 對應的插件
    // devServer: {},           // 服務器配置
    mode: 'development'      // 開發模式配置
}