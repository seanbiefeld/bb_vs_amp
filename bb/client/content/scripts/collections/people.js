var People = Backbone.Collection.extend({
    url : "/api/people",
    model: Person
});