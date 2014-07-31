/*global console*/
var path = require('path'),
    express = require('express'),
    config = require('getconfig'),
    semiStatic = require('semi-static'),
    app = express(),
    api = require('./fakeApi');

// a little helper for fixing paths for various environments
var fixPath = function (pathString) {
    return path.resolve(path.normalize(pathString));
};


// -----------------
// Configure express
// -----------------
app.use(express.compress());
// we only want to expose tests in dev
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.static(path.join(__dirname, 'client/content')));

// routes to serve the static HTML files
app.get('/', function(req, res) {
    res.sendfile('./client/index.html');
});

// Set up our little demo API
app.get('/api/people', api.list);
app.get('/api/people/:id', api.get);
app.delete('/api/people/:id', api.delete);
app.put('/api/people/:id', api.update);
app.post('/api/people', api.add);

// listen for incoming http requests on the port as specified in our config
app.listen(config.http.port);
console.log("People book is running at: http://localhost:" + config.http.port + " Yep. That\'s pretty awesome.");
