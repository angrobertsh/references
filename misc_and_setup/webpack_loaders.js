var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: "./js/entry.js",
  output: {
    path: path.join(__dirname, 'js'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: [/\.html$/],
        loader: 'html-loader'
      },
      {
        test: [/\.css$/],
        loader: 'css-loader'
      },
      {
        test: /\.exec\.js$/,
        use: [ 'script-loader' ]
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"]
  }
};
