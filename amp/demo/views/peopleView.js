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
        app.peopleView = view;

        if (!this.collection.length) {
            this.fetchCollection(function(){
                view.render(false);
            });
        }
        
    },
    render: function (rehydrate) {

        var view = this;
        var renderIt =
        function() {
            $(view.el).html('');
            
            if(view.collection.length) {
                view.renderCollection(view.collection, PersonView, $('[role="people-list"]')); 
            } else {
                $(view.el).html('<tr><td colspan="2"><p>No People were found</p></td></tr>')
            }
        }

        if(rehydrate){
            this.fetchCollection(function(){
                renderIt();
            });

        } else {
            renderIt();
        }
        
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
