var path = require('path')
var webpack = require('webpack')

var PROJECT_PATH = path.join(__dirname, 'client')

module.exports = {
    entry: {
        // create two library bundles, one with jQuery and
        // another with Angular and related libraries
        'base': ['lodash', 'jquery', 'moment', 'react-redux', 'redux', 'react-autobind', 'classnames', 'react', 'react-dom', 'nsky-ant', 'react-router', 'history']
    },

    output: {
        filename: '[name].bundle.js',
        path: PROJECT_PATH,

        // The name of the global variable which the library's
        // require() function will be assigned to
        library: '[name]_lib',
    },

    plugins: [
        new webpack.DllPlugin({
            // The path to the manifest file which maps between
            // modules included in a bundle and the internal IDs
            // within that bundle
            path: path.join(PROJECT_PATH, '[name]-manifest.json'),
            // The name of the global variable which the library's
            // require function has been assigned to. This must match the
            // output.library option above
            name: '[name]_lib'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false }
        })
    ],
}
