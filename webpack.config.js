var webpack = require('webpack');
module.exports = {
  entry: './md5.js',
  output: {
    path: './build',
	filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}