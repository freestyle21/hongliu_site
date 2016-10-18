var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  entry: [
    'webpack-hot-middleware/client?path=http://localhost:8001/__webpack_hmr',
    path.resolve(__dirname, 'client/index.js')
  ],

  resolve: {
    alias: {},
    extensions: ['', '.js', '.jsx'],
    fallback: path.join(__dirname, "client")
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/client/'
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
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css?$/,
        loader: 'style-loader!css-loader',
        include: __dirname
    }, {
        test: /\.(woff|eot|ttf)$/i,
        loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'
    }, {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'image?{bypassOnDebug: true, progressive:true, \
                  optimizationLevel: 3, pngquant:{quality: "65-80", speed: 4}}',
              // url-loader更好用，小于10KB的图片会自动转成dataUrl，
              // 否则则调用file-loader，参数直接传入
              'url?limit=10000&name=img/[hash:8].[name].[ext]',
        ]
    }]
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('[name].css')
  ]
}
