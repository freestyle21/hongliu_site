/**
 * Node Http Method
 */

'use strict';
let koaRequest = require('koa-request');
let querystring = require('querystring');
let parse = require('co-body');
let fs = require('fs');
let moment = require('moment');

let HttpResponse = require('./httpResponse');
let util = require('./util');
let cfg = require('../config/config');
let goDataConfig = cfg.goDataApi;

function getCommonConfig (url, cookie, data, method) {
    return {
        body: data && JSON.stringify(data),
        method: method || "GET",
        uri: url,
        headers: {
            "Content-Type": 'application/json',
            "Content-Length": Buffer.byteLength(JSON.stringify(data) || '', 'utf8'),
            "Cookie": cookie || ''
        }
    };
}
function getCommonPath () {
    return 'http://' + (util.isDevelopmentEnv() ? goDataConfig.devHost : goDataConfig.host)
        + ':' + goDataConfig.port;
}

module.exports = {
    httpRequest: function(type) {
        return function *(next) {
            let log = require('./log');
            let respone = null;
            let postArr = [];
            let postData = yield parse(this, { limit: '100kb' }) || null,
                url = getCommonPath() + this.originalUrl,
                cookie = this.req.headers && this.req.headers.cookie;

            // 当地理围栏大于30个节点时，解析出来是Object而不是Array。临时处理下
            if(!(postData.coordinate instanceof Array)) {
                for(let prop in postData.coordinate) {
                    postArr.push(postData.coordinate[prop]);
                }
                postData.coordinate = postArr;
            }

            let config = getCommonConfig(url, cookie, postData, type || 'get');
            log.info('Node GET Request Config: ' + JSON.stringify(config));

            if(type == 'DELETE') {
                respone = yield koaRequest.del(config);
            } else if(type == 'PUT') {
                respone = yield koaRequest.put(config);
            } else if(type == 'POST') {
                respone = yield koaRequest.post(config);
            }
            HttpResponse(respone, this);
            yield * next;
        }
    },
    getRequest: function(callback) {
        return function *(next) {
            let log = require('../common/log');
            let cookie = this.req.headers && this.req.headers.cookie,
                url = getCommonPath() + this.originalUrl;

            let config = getCommonConfig(url, cookie);
            // console.log(config);
            log.info('Node GET Request Config: ' + JSON.stringify(config));

            let reponse = yield koaRequest(config);

            callback && callback.bind(this)(reponse);
            HttpResponse(reponse, this);
            yield next;
        }
    },

    /**
     *  sug package for cors.
     */
    sugRequest: function(callback) {
        return function*(next) {
            let log = require('../common/log');
            let getParam = this.request.query;
            let urlString = goDataConfig.sug + querystring.stringify(getParam);

            let config = getCommonConfig(urlString);

            log.info('Node GET Request Config: ' + JSON.stringify(config));

            let reponse = yield koaRequest(config);
            HttpResponse(reponse, this);

            callback && callback.bind(this)(reponse);
            yield next;
        }
    },

    /**
     * export bus info
     */ 
    exportInfo: function (callback) {
        return function*(next) {
            let log = require('../common/log');
            let getParam = this.request.query;
            let urlString = getCommonPath() + this.originalUrl;

            let cookie = this.req.headers && this.req.headers.cookie;

            let config = getCommonConfig(urlString, cookie);

            log.info('Node GET Request Config: ' + JSON.stringify(config));

            let reponseContent = yield koaRequest(config)

            let filename = 'bus' + '-' + moment().format('YYYYMMDDhms') + '.csv';

            // 如果没有exports目录则创建目录
            if (!fs.existsSync(process.cwd() + '/exports/')){
                fs.mkdirSync(process.cwd() + '/exports/');
            }

            function saveFile(callback) {
                fs.writeFile('exports/' + filename, reponseContent.body, function(error) {
                    var result = '';
                    if(error) {
                        // 出错了
                        result = {
                            code: 405,
                            message: '写入文件出错',
                            data: null
                        };
                    } else {
                        result = {
                            code: 200,
                            message: 'success',
                            data: {
                                fileurl: filename
                            }
                        };
                    }
                    callback(null, result);
                });
            }
            this.body = yield saveFile;

            yield * next
        }
    }
};
