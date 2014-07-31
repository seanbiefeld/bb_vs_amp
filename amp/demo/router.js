/*global me, app*/
var Router = require('ampersand-router');
var PeopleView = require('./views/peopleView');


module.exports = Router.extend({
    routes: {
        'demo': 'people',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
    people: function () {
        this.trigger('newPage', new PeopleView({            
            collection: app.people
        }));
    },

    catchAll: function () {
        this.redirectTo('/demo');
    }
});
