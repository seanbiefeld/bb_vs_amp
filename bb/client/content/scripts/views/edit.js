var PeopleEditView = Backbone.View.extend({
    el: '.page',
    events: {
        'submit .people-edit-form': 'saveItem',
        'click .delete': 'deleteItem',
        'click .cancel': 'cancelItem'
    },
    item : null,
    cancelItem : function (e) {
        router.navigate('', {trigger:true});
    },
    deleteItem: function (e) {
        this.item.destroy({
            success: function () { 
                router.navigate('', {trigger:true});
            }
        })
    },
    render: function (options) { 
        var that = this;
        if(options.id) {
            this.item = new Person({id: options.id});
            this.item.fetch({
                success: function (data) {    
                    var template = _.template($('#people-edit-template').html(), {data : data});
                    that.$el.html(template);
                }
            });
        } else {
            var template = _.template($('#people-edit-template').html(), {data : null});
            this.$el.html(template);
        }
    },
    saveItem: function (e) {    
        var details = $(e.currentTarget).serializeObject(); 
        var person = new Person();
        person.save(details, {
            success: function (data) {
                router.navigate('', {trigger:true});
            }
        });
        return false;
    }
});
 
var peopleEditView = new PeopleEditView();
