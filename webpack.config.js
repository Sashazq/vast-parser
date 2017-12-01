const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

let webpack = require('webpack')
let pkg = require('./package.json')

module.exports = {
  target: 'web',
  entry: path.resolve(__dirname, 'src/index.js'),
  devtool: 'eval',
  module: {
    rules: [
      {
        // set up standard-loader as a preloader
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      },
      {
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /(node_modules)/
      },
      {
        enforce: 'post',
        test: /\.js$/,
        loaders: ['es3ify-loader'],
        exclude: [
          /(node_modules)/
        ]
      }
    ]
  },
  stats: {
    colors: true,
    // reasons: true,
    // modules: false,
    chunks: false
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'DevPage',
      chunks: [],
      filename: 'index.html',
      template: './index.html'
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${pkg.name}.min.js`,
    chunkFilename: `${pkg.name}.bundle.js`,
    library: `VASTParser`,
    libraryTarget: 'umd'
  },
  devServer: {
    contentBase: './dist',
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: true,
      assets: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      children: false,
      cached: false,
      reasons: false,
      source: false,
      errorDetails: true,
      chunkOrigins: false
    }
  }
}
