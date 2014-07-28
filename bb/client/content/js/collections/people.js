/*global Backbone */
var app = app || {};

(function () {
	'use strict';

	 /* Collection */
	var People = Backbone.Collection.extend({
	    url : "/people"
	});

	app.people = new People();

})();
