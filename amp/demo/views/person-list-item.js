var View = require('ampersand-view');
var _ = require('underscore');

module.exports = View.extend({
    events: {
       
    },
    render: function(el){
    	var currentEl = $(_.template($('#people-list-template').html())(this.model));
    	currentEl.find('#delete').on('click', this, this.deletePerson)
    	el.containerEl.append(currentEl);
    },
    deletePerson: function (event) {
        
		var view = event.data;

        view.model.destroy({
            success: function () {
                alert('Peron destroyed!');
                app.peopleView.render(true);
            },
            error: function () { 
                alert('There was an error destroying the Person'); 
            },
        });
        return false;
    }
});
