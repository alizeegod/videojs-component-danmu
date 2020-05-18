/**
 * Author: zhangqiang
 * Create Time: 2020-05-18 15:53
 * Description:
 */

const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    output: {
        path: path.join(__dirname, '../dist'),
        publicPath: "",
        filename: "./[name]-1.0.0.min.js"
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            // 'utils': path.resolve(__dirname, './src/utils')
        }
    },
    module: {
        rules: [
            // {
            //     test: require.resolve('comment-core-library'),
            //     use: [
            //         {
            //             loader: "expose-loader",
            //             options: 'CommentManagerCore'
            //         }
            //     ]
            // },
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
            },{
                test: /\.(less|css)(\?.*)?$/,
                use: [
                    {
                        loader: 'style-loader',
                    },{
                        loader: 'css-loader',
                    },{
                        loader: 'less-loader',
                    }
                ]
            },{
                test: /\.html$/,
                include: path.resolve(__dirname, '../packages'),
                use: [{
                    loader: 'html-loader',
                    options: {

                    }
                }]
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {
                compress: {
                    drop_console: true
                }
            }
        }),
        new webpack.ProvidePlugin({
            CommentManager: 'comment-core-library'
        })
    ]
}
