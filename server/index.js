/*
 * HongLiu Server
 *
 * @date 2016/09/24
*/

'use strict';

const path    = require('path')
const koa     = require('koa')
const logger  = require('koa-logger')
const router  = require('koa-router')
const json    = require('koa-json')
const render  = require('koa-views')
const serve   = require('koa-static')
const cors    = require('kcors')
const webpack = require('webpack')
const etag    = require('koa-etag');
const conditional = require('koa-conditional-get');
const gzip    = require('koa-gzip');

const app = koa()

const routesInstance = require('./routes/index')

// middleware
app.use(logger())

app.use(gzip());
app.use(conditional());
app.use(etag());
// Access-Control-Allow-Origin:*
app.use(cors());

app.use(json());

// webpack
const webpackDevMiddleware = require('koa-webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig        = require('../webpack.config')
const compiler = webpack(webpackConfig)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: webpackConfig.output.publicPath }))
app.use(function* (next) {
  yield webpackHotMiddleware(compiler).bind(null, this.req, this.res)
  yield next
})

// serve files from ./client
app.use(serve(path.join(__dirname, '../')))
   .use(render(path.join(__dirname, "./"), {
        map: {
           html: 'ejs'
        }
   }))
   .use(router(app))

routesInstance(app)

module.exports = app
