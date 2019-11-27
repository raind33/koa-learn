const webpackMerge = require('webpack-merge')

const webpackBaseConfig = require('./webpack.config.base')

const webpackConfig = webpackMerge(webpackBaseConfig, {
  mode: 'development',
  devtool: 'cheap-source-map',
  stats: {
    children: false
  }
})

module.exports = webpackConfig