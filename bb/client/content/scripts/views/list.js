var PeopleListView = Backbone.View.extend({
    el: '.page',
    render: function () { 
        var people = new People();
        var that = this;
        people.fetch({
            success: function (data) {
                var template = _.template($('#people-list-template').html(), {data : data.models});
                that.$el.html(template);
            }
        });
    }
});

var peopleListView = new PeopleListView();
