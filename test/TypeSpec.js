describe('app', function () {
    var app;
    beforeEach(function () {
        app = require('../app');
    });
    it('is a function', function () {
        console.assert(typeof app === 'function');
    });
});
