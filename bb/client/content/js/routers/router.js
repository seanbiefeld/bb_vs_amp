/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	/* Router */
	var Router = Backbone.Router.extend({
	    routes: {
	      "": "home", 
	      "people_edit/:id": "edit",
	      "people_new": "edit",
	    }
	});

	app.router = new Router;
    app.router.on('route:home', function() { 

    	if(app.currentEditView)
    		app.currentEditView.hide();

    	if(!app.currentListView)
    		app.currentListView = new app.PeopleListView();
      	
      	app.currentListView.render();
    })
    app.router.on('route:edit', function(id) {

    	if(app.currentListView)	
    		app.currentListView.hide();

    	if(!app.currentEditView)
    		app.currentEditView = new app.PeopleEditView();

    	app.currentEditView.render(id);
    })
    Backbone.history.start();

})();
