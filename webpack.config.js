var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var extractCSS = new ExtractTextPlugin('css/bundle.css');

module.exports = {
  // context: path.resolve('src'),
  devtool: 'source-map',
  entry: {
    main: ['./src/main.js']
  },
  output: {
    // filename: '[name].js',
    filename: 'js/bundle.js',
    path: path.join(__dirname, 'public'),
    publicPath: '/public/'
  },
  // watch: true,
  devServer: {
    contentBase: 'public',
    hot: true
  },
  plugins: [
    extractCSS,
    // new ExtractTextPlugin('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components|bower)/,
        loader: 'babel',
        include: path.join(__dirname, 'src'),
        // loader: 'react-hot!babel',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['transform-decorators-legacy'],
        }
      }, {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: extractCSS.extract(['css', 'sass']),
        // loader: 'style!css!sass!',
        // loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        // loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
