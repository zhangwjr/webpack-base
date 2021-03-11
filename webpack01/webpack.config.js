const path = require('path'); 
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  // 入口
  entry: {
    index: "./src/index.js",
    test: "./src/test.js"
  },
  // 出口
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname,"./dist")
  },
  // 模块
  module:{
    // 规则
    rules:[
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]//css-loader在数组最后面,会先执行
      }
    ]
  },
  // 用来指定当前的构建环境
  mode: "development",//production none  一共三种模式
  // 插件   自动生产html文件，关联资源文件
  plugins: [
    new htmlWebpackPlugin({
      title: 'index页面',
      template: './src/index.html',
      filename: 'index.html',
      chunks: ["index","test"],//关联index.js  test.js
    }),
    new htmlWebpackPlugin({
      title: 'test页面',
      template: './src/test.html',
      filename: 'test.html',
      chunks: ["test"],//只关联test.js
    }),
  ]
}