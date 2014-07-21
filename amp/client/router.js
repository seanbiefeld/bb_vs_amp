/*global me, app*/
var Router = require('ampersand-router');
var CollectionDemo = require('./pages/collection-demo');
var PersonAddPage = require('./pages/person-add');
var PersonEditPage = require('./pages/person-edit');
var PersonViewPage = require('./pages/person-view');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'collections': 'collectionDemo',
        'person/add': 'personAdd',
        'person/:id': 'personView',
        'person/:id/edit': 'personEdit',
        '(*path)': 'catchAll'
    },

    // ------- ROUTE HANDLERS ---------
   
    collectionDemo: function () {
        this.trigger('newPage', new CollectionDemo({
            model: me,
            collection: app.people
        }));
    },

    personAdd: function () {
        this.trigger('newPage', new PersonAddPage());
    },

    personEdit: function (id) {
        this.trigger('newPage', new PersonEditPage({
            id: id
        }));
    },

    personView: function (id) {
        this.trigger('newPage', new PersonViewPage({
            id: id
        }));
    },

    catchAll: function () {
        this.redirectTo('collections');
    }
});
