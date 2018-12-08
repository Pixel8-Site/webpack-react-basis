const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './.src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {presets: ["@babel/preset-react"]}
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, "public/js"),
    publicPath: '/js/',
    filename: 'index.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
  }
};
