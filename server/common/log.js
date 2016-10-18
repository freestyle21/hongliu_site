/**!
 * Log System
 * @Data: 2015/09/15
 */

"use strict";

var bunyan = require('bunyan');
var util = require('./util');
var config = null;

config = {
    name: 'hongliu',
    streams: [{
        level: 'info',
        stream: process.stdout            // log INFO and above to stdout
    },{
        level: 'error',
        stream: process.stdout            // log INFO and above to stdout
    },{
        level: 'warn',
        stream: process.stdout
    }]
};

var log = bunyan.createLogger(config);

module.exports = log;
