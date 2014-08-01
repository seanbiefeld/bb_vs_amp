var View = require('ampersand-view');
var _ = require('underscore');
var Person = require('../models/person')

module.exports = View.extend({
    el: ("#add"),
    initialize: function(){
        this.model = new Person();
    },
    events: {
        'click #create': 'createPerson'
    },
    bindings: {
        'model.email': {
            selector: "#email"
        },
        'model.avatar': {
            selector: "#avatar"
        }
    },
    render: function(){
    	
    },
    create: function () {
        this.model.destroy();
        return false;
    }
});
