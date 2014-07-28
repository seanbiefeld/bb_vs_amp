/*global Backbone */
var app = app || {};

(function () {
    'use strict';

	function AppView(){
	 
	   this.show = function(view, options) {
	    if (this.currentView){
	      this.currentView.remove();
	      //this.currentView.unbind();
	    }
	 
	    this.currentView = view;
	    this.currentView.render(options);
	 
	    //$("#page").html(this.currentView.el.innerHTML);
	  }
	 
	}

	app.AppView = new AppView();

})();
