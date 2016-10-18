/**
 * Page Router & Ajax API.
 */

'use strict';

module.exports = function(app) {
    app.get('/', function* (next) {
        yield this.render('./views/index')
    })
}