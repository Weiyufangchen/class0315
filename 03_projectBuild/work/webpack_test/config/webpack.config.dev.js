/*
  webpack的配置文件，当你执行webpack默认找到配置文件webpack.config.js

  通过webpack --display-modules 能查看所有任务执行情况
 */
const {resolve} = require('path');
//提取css成单独文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");
//创建一个html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清除指定目录的插件
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
  //入口
  entry: './src/js/app.js',
  //输出
  output: {
    path: resolve(__dirname, '../build'),  //输出目录
    filename: './js/built.js'   //输出文件名
  },
  //配置loader
  module: {
    rules: [
      //less转css
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          //如果需要，可以在 less-loader 之前将 resolve-url-loader 链接进来
          use: ['css-loader', 'less-loader']
        })
      },
      //图片转换
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,   //8 * 1024 8kb以下的图片转化为base64格式
              publicPath: '../images',  //样式中图片路径
              outputPath: './images'   //输出的文件路径
            }
          }
        ]
      }
    ]
  },
  //配置插件
  plugins: [
    new ExtractTextPlugin('./css/built.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',  //文件名
      template: 'src/index.html'  //以指定html文件为模板去创建html文件
    })
  ],
  //服务器热更新功能
  devServer: {
    contentBase: __dirname,
    compress: true,  //以gzip格式压缩
    port: 3000,  //端口号
    open: true
  }
};

