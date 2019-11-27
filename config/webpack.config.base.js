const path = require('path')
const webpack = require('webpack')
const webpackNodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const utils = require('./util')

const webpackConfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: path.join(utils.APP_PATH, 'index.js')
  },
  output: {
    path: utils.DIST_PATH,
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: [path.join(__dirname, 'node_modules')]
      }
    ]
  },
  externals: [webpackNodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': (process.env.NODE_ENV === 'production' || 
        process.env.NODE_ENV === 'prod') ? 'production' : 'development'
      }
    })
  ],
  node: {
    console: false,
    global: true,
    process: true,
    __filename: 'mock',
    __dirname: 'mock',
    Buffer: true,
    setImmediate: true,
    path: true
  }
}

module.exports = webpackConfig
