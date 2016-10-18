/**
 * 服务器入口文件
 *
 */

var http = require('http');
var app  = require('../index');
var config = require('../config/config');

var server = http.createServer(app.callback());
server.listen(config.port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * HTTP 服务错误事件处理
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // 处理特定错误
  switch (error.code) {
    case 'EACCES':
      console.error('Port ' + server.port + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error('Port ' + server.port + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * HTTP 服务监听事件处理
 */

function onListening() {
    // log.info('=========== Start Bus! ==========');

    // log.info('Listening on port ' + server.address().port);
    console.log('Listening on port ' + server.address().port)
}
