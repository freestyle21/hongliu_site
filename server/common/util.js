/**
 * Node Server Util Tool
 */

'use strict';


module.exports = {
    getURLQueryString: function(url) {
        var query_string = {};
        var query = url.substring(url.indexOf('?') + 1);

        var vars = query.split("&");

        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split("=");

            if(!pair[0] || (typeof pair[0] != 'string')) {
                continue;
            }

            if (typeof query_string[pair[0]] === "undefined") {
                // If first entry with this name
                query_string[pair[0]] = decodeURIComponent(pair[1]);
            } else if (typeof query_string[pair[0]] === "string") {
                // If second entry with this name
                var arr = [ query_string[pair[0]],decodeURIComponent(pair[1]) ];
                query_string[pair[0]] = arr;
            } else {
                // If third or later entry with this name
                query_string[pair[0]].push(decodeURIComponent(pair[1]));
            }

        }
        return query_string;
    },
    getCookieFromStr: function(str, name) {
        var arr,reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if(arr = str.match(reg)) {
            return unescape(arr[2]);
        } else {
            return '';
        }
    },
    getCookieObj: function(str){
        var cookieObj = {},
            cookieSplit = [],
            cookieArr= str.split(";");

        for(var i = 0,len = cookieArr.length; i < len; i++) {
            if(cookieArr[i]) {
                cookieSplit = cookieArr[i].split("=");
                cookieObj[cookieSplit[0]]=cookieSplit[1];
            }
        }
        return cookieObj;
    },

    // 判断是否是测试环境
    isDevelopmentEnv: function() {
        var app = require('../index');
        if(app.env == 'development') {
            return true;
        } else {
            return false;
        }
    },
    // 判断是否是测试环境
    isProductionEnv: function() {
        var app = require('../index');
        if(app.env == 'production') {
            return true;
        } else {
            return false;
        }
    },

    getClientIp: function(req) {
        var ip = req.headers['x-forwarded-for'] ||
             req.connection.remoteAddress ||
             req.socket.remoteAddress ||
             req.connection.socket.remoteAddress;

        return ip;
    },

    // 设置cookie实效
    setCookieExpire: function(cookie) {
        cookie.set('nsky_bus_sso_token', 'expired', {httpOnly: false});
    }
};
