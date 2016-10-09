/**
 * Node Server Base Http.
 */

'use strict';


module.exports = function (response, ctx) {
    var log = require('./log');
    var util = require('./util');

    log.info('Java Response: ' + response.body);
    try {
        var info = JSON.parse(response.body);

        if(info.code == 302) {
            util.setCookieExpire(ctx.cookies);
            var url = info.data + '?service=http://' + ctx.req.headers.host;
            ctx.body = {
                code: 302,
                message: 'success',
                data: url
            };
        } else if(info.code == 403) {
            ctx.body = {
                code: 403,
                message: 'success',
            };
        } else {
            
            ctx.body = info;
        }
    } catch(e) {
        // log.error('Rrong Java Response When Get Data');
        ctx.body = response.body;
    }
};
