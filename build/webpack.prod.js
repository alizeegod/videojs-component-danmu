/**
 * Author: zhangqiang
 * Create Time: 2020-05-18 15:53
 * Description:
 */

const webpack = require('webpack');
const path = require('path');
const baseConfig = require('./webpack.base');
const merge = require('webpack-merge');

module.exports = merge(baseConfig, {
    mode: process.env.NODE_ENV,
    entry: {
        videojsdanmu: [
            path.join(__dirname, '../src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: "",
        filename: "./[name]-1.0.0.min.js"
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
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
    ]
})
