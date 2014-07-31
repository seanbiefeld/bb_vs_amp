var View = require('ampersand-view');
var PersonView = require('../views/person-list-item');
var _ = require('underscore');

module.exports = View.extend({
    pageTitle: 'collection demo',
    template: {},//,
    events: {
        'click #create': 'add'
    },
    initialize: function(){

        var view = this;

        if (!this.collection.length) {
            this.fetchCollection(function(){
                view.render();
            });
        }
        
    },
    render: function () {
        //this.renderWithTemplate();
        this.renderCollection(this.collection, PersonView, $('[role="people-list"]'));
        
    },
    fetchCollection: function (callback) {
        this.collection.fetch({
            success: function(resp){
                callback();
            },
            error: function(resp){
                alert("error: " + resp);
            }
        });
        return false;
    }
});
