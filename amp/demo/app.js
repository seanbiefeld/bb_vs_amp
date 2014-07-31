/*global app, me, $*/
var _ = require('underscore');
//var config = require('clientconfig');

var Router = require('./router');
//var tracking = require('./helpers/metrics');
var MainView = require('./views/main');
//var Me = require('./models/me');
var People = require('./models/people');


module.exports = {
    // this is the the whole app initter
    blastoff: function () {
        var self = window.app = this;

        // create our global 'me' object and an empty collection for our people models.
        this.people = new People();

        // init our URL handlers and the history tracker
        this.router = new Router();

        // wait for document ready to render our main view
        // this ensures the document has a body, etc.
        $( document ).ready((function () {
            // init our main view
            var mainView = new MainView({ el: document.body });

            // ...and render it
            mainView.render();

            // we have what we need, we can now start our router and show the appropriate page
            self.router.history.start({pushState: true, root: '/'});
        }));
    },

};

// run it
module.exports.blastoff();
