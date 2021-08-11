const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname,"./dist")
  },
  resolveLoader:{
    modules: ['./node_modules','./myLoaders']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"]
      },
      {
        test: /\.less$/,
        // use: ["style-loader","css-loader","postcss-loader","less-loader"]
        // use: [
        //   path.resolve(__dirname,'./myLoaders/kkb.style.loader.js'),
        //   path.resolve(__dirname,'./myLoaders/kkb.css.loader.js'),
        //   path.resolve(__dirname,'./myLoaders/kkb.less.loader.js')
        // ],
        use: ["kkb-style-loader","kkb-css-loader","kkb-less-loader"]
      },
      {
        test: /\.js$/,
        use: [
          // path.resolve(__dirname, './myLoaders/replace.loader.js'),
          'replace-loader',
          {
            // loader: path.resolve(__dirname,'./myLoaders/replace.loader.async.js'),
            loader: 'replace-loader-async',
            options: {
              name: '采购云'
            }
          }
        ]
      }
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