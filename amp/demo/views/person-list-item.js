var View = require('ampersand-view');
var _ = require('underscore');

module.exports = View.extend({
    //template: $('#people-list-template'),//_.template($('#people-list-template').html()),
    events: {
        'click [role=action-delete]': 'handleRemoveClick'
    },
    render: function(el){
    	el.containerEl.append(_.template($('#people-list-template').html())(this.model));
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    }
});
