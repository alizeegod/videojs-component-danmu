/**
 * Author: zhangqiang
 * Create Time: 2020-05-18 15:53
 * Description:
 */

const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base');
const htmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: process.env.NODE_ENV,
    target: 'web',
    entry: {
        index: [
            path.join(__dirname, '../example/js/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, '../example/dist'),
        publicPath: "",
        filename: "./[name].[hash].js"
    },
    devServer: {
        port: 8000,
        host:'0.0.0.0',
        overlay:{
            errors:true

        },
        // open:true  //每次都打开一个网页
        hot:true //只渲染一个组件
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            },{
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        }),
        new htmlWebpackPlugin({
            template: 'example/index.html',
            filename: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
})
