//node module
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');

const webpack  = require('webpack');

//配置文件
module.exports = {
    entry: path.join(__dirname,'app','assets','js',index.js),               // 入口文件
    watch:true,
    output: {
        path: path.resolve(__dirname, 'dist/assets/js'),
        filename: '[name].bundle.js'
    },              // 出口文件  name -> chunkname main and about
    module: {
        rules: [
        //babel loader
        {
            // test:/.jsx?$/,
            test: /\.(js)$/,
            include:[
                path.resolve(__dirname,'app')
            ],
            // exclude: /(node_modules)/,
            exclude:[
                path.resolve(__dirname,'node_modules')
            ],
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }],
        },
    ]

    },  // 處裡對應模組
    resolve:{
        extensions:['.json','.js','.jsx'],
        alias:{
            vue:'vue/dist/vue.js '
        }
    },
    plugins: [
         //清理舊的檔案
        new CleanWebpackPlugin(),
        //css
        // new MiniCssExtractPlugin({
        //     filename: "./[name].css" //output 檔案名稱
        // }),
        // new HtmlWebpackPlugin({
        //     chunks : ['main'],  //選擇注入資源 chunk
        //     inject  : 'body', //預設<body> js </body>  head or body
        //     template : './src/index.html', 
        //     filename : 'index.html' //目的地
        // }),
         //全域載入jq
         new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
          })
    ],   // 對應的插件
    devtool:'source-map',
    devServer: {
        contentBase: path.join(__dirname,'./dist'),
        host: 'localhost',
        port: 3000,
        // 指定首頁檔案
        index: 'index.html',
        open: true
    },           // 服務器配置
    mode: 'development'      // 開發模式配置
}