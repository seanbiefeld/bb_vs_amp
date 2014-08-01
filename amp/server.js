/*global console*/
var path = require('path');
var express = require('express');
var helmet = require('helmet');
var Moonboots = require('moonboots');
var config = require('getconfig');
var semiStatic = require('semi-static');
var stylizer = require('stylizer');
var templatizer = require('templatizer');
var app = express();

// a little helper for fixing paths for various environments
var fixPath = function (pathString) {
    return path.resolve(path.normalize(pathString));
};


// -----------------
// Configure express
// -----------------
app.use(express.compress());
app.use(express.static(fixPath('public')));
// we only want to expose tests in dev
if (config.isDev) {
    app.use(express.static(fixPath('test/assets')));
    app.use(express.static(fixPath('test/spacemonkey')));
}
app.use(express.bodyParser());
app.use(express.cookieParser());

// ---------------------------------------------------
// Configure Moonboots to serve our client application
// ---------------------------------------------------

var demoApp = new Moonboots({
    jsFileName: 'demo',
    cssFileName: 'demo',
    main: fixPath('demo/app.js'),
    developmentMode: config.isDev,
    libraries: [
        fixPath('demo/libraries/jquery.js')
    ],
    stylesheets: [
        fixPath('public/css/demo.css')
    ],
    browserify: {
        debug: false
    },
    server: app
});

// Set up our little demo API
var api = require('./demoApi');//require('./fakeApi');
app.get('/api/people', api.list);
app.get('/api/people/:id', api.get);
app.delete('/api/people/:id', api.delete);
app.put('/api/people/:id', api.update);
app.post('/api/people', api.add);

// Enable the functional test site in development
if (config.isDev) {
    app.get('/test*', semiStatic({
        folderPath: fixPath('test'),
        root: '/test'
    }));
}

// use a cookie to send config items to client
var clientSettingsMiddleware = function (req, res, next) {
    res.cookie('config', JSON.stringify(config.client));
    next();
};

// configure our main route that will serve our moonboots app
app.get('*', clientSettingsMiddleware, demoApp.html());

// listen for incoming http requests on the port as specified in our config
app.listen(config.http.port);
console.log("demo is running at: http://localhost:" + config.http.port + " Yep. That\'s pretty awesome.");
