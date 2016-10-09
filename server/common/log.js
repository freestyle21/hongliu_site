/**!
 * Log System
 * @Data: 2015/09/15
 */

"use strict";

var bunyan = require('bunyan');
var util = require('./util');
var config = null;

// if(true) {
if(util.isProductionEnv()) {
    config = {
        name: 'nsky-bus',
        streams: [{
            level: 'info',
            path: '/home/xiaoju/app/logs/nsky-bus-info.log'
        },{
            level: 'error',
            path: '/home/xiaoju/app/logs/nsky-bus-error.log'
        },{
            level: 'warn',
            path: '/home/xiaoju/app/logs/nsky-bus-trace.log',
        }]
    }
} else {
    config = {
        name: 'nsky-bus',
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
}

var log = bunyan.createLogger(config);

module.exports = log;
