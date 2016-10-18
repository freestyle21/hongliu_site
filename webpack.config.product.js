var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(__dirname, 'client/index.js')
  ],

  resolve: {
    extensions: ['', '.js', '.jsx'],
    fallback: path.join(__dirname, "node_modules")
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: [require.resolve('babel-preset-es2015')],
        plugins: [require.resolve('babel-plugin-transform-runtime')]
      },
      exclude: /node_modules/,
      include: __dirname
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap&-restructuring!' + 'autoprefixer-loader!' + 'less?sourceMap'
      )
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        'css?sourceMap!' + 'autoprefixer-loader'
      )
    }]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
}
