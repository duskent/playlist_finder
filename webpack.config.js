'use strict'

var path = require('path')
var webpack = require('webpack')

module.exports = {
  devServer: {
    contentBase: './dist'
  },

  entry: [
    './src/client/index.jsx'
  ],


  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'dist')
  },

  module: {

    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.svg/,
        loader: 'file-loader'
      },
      {
        test: /\.(png|jpe?g|eot|ttf|woff2?)$/,
        loader: 'file-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx']
  }
}
