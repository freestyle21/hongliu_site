/**
 * Write File
 */

'use strict';

var fs = require('fs');
var path = require('path');

// 默认append
module.exports = function(filename, content, callback) {
    var dirname = path.dirname(filename);
    if(!fs.existsSync(dirname)){//不存在就创建一个
        fs.mkdirSync(dirname);
    }
    fs.appendFile(filename, content, function(error) {

        if(error) {
            return false;
        }
        callback && callback();
    });
};
