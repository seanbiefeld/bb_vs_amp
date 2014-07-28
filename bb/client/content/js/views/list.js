/*global Backbone */
var app = app || {};

(function ($) {
    'use strict';


    /* View */
    app.PeopleListView = Backbone.View.extend({
        el: '#list',
        events: {
            'click #addNewPerson': 'addNewPerson'
        },
        addNewPerson: function() {
            window.location = '#/people_new';
        },
        render: function () { 
            var that = this;
            app.people.fetch({
                success: function (data) {
                    var template = _.template($('#people-list-template').html(), {data : data.models});
                    that.$el.empty().html(template);
                }
            });
        }
    });

})(jQuery);
