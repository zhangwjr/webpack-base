const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname,"./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      },{
        test: /\.less$/,
        use: ["style-loader","css-loader","postcss-loader","less-loader"]
      },
    ]
  },
  mode: "development",
  plugins:[
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
    })
  ]
}