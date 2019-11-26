const path = require('path')
const webpackNodeExternals = require('webpack-node-externals')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpackConfig = {
  target: 'node',
  mode: 'development',
  devtool: 'eval-source-map',
  entry: {
    server: path.join(__dirname, 'src/index.js')
  },
  output: {
    path: path.join(__dirname, './dist'),
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
  plugins: [new CleanWebpackPlugin()],
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
