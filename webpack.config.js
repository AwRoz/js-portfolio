const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const copyWebpackPlugin = require ('copy-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    resolve:{
        extensions:['.js']
    },
    module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader'
            }
          },
          {
            test: /\.css$/i,
            use:[MiniCssExtractPlugin.loader,'css-loader'],
          },
          {
            test: /\.png$/,
            type:'asset/resource'
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            title: 'My App',
            template: './public/index.html',
            filename: './index.html'
        }),
        new miniCssExtractPlugin(),
        new copyWebpackPlugin({
          patterns:[
            {
              from: path.resolve(__dirname,'src','assets/images'),
              to:'assets/images'
            }
          ]
        })
      ]
}