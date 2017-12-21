// shared config (dev and prod)
const {resolve} = require('path');
const {CheckerPlugin} = require('awesome-typescript-loader');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const srcPath = resolve(__dirname, '../../src');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    context: srcPath,
    module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-runtime']
                    }
                },
                {
                    loader: 'awesome-typescript-loader',
                }
            ],
        },
        {
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                },
                'postcss-loader',
            ],
        },
        {
            test: /\.scss$/,
            use: [
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 2
                    }
              },
              'postcss-loader',
              'sass-loader',
            ],
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        hash: 'sha512',
                        digest: 'hex',
                        name: 'img/[hash].[ext]'
                    }
                },
               {
                   loader: 'image-webpack-loader',
                   options: {
                       bypassOnDebug: true,
                       optipng: {
                           optimizationLevel: 7,
                       },
                       gifsicle: {
                           interlaced: false
                       }
                   }
               }
            ],
        },
    ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new CheckerPlugin(),
        new StyleLintPlugin(),
        new HtmlWebpackPlugin({
            template: srcPath + '/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
    ]
};
