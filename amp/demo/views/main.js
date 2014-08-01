var View = require('ampersand-view'),
    _ = require('underscore'),
    AddPersonView = require('./person-add');

module.exports = View.extend({
    initialize: function () {
        app.mainView = this;
    },
    events: {
        
    },
    render: function () {
        // some additional stuff we want to add to the document head
        $(this.el).append($("<div class=\"container\"><div class=\"sixteen columns\"><h1 class=\"remove-bottom\" style=\"margin-top: 40px\">Ampersand.js Demo</h1> <h3> &gt;--( ಠ_ಠ )--&lt; </h3><hr/></div><div id=\"add\" class=\"sixteen columns\"><form><legend class=\"sixteen columns\"><h3>Add a New Person</h3></legend><div class=\"eight columns alpha\"><label for=\"email\">Email</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"someone@gmail.com\" /></div><div class=\"eight columns omega\"><p class=\"five columns alpha\"><label for=\"name\">Avatar</label><input type=\"url\" id=\"avatar\" name=\"avatar\" placeholder=\"www.avatar.com/avatar.png\" /></p><p class=\"three columns omega\"><img style=\"width: 42px;height: 42px\" id=\"avatarPreview\"></img></p></div><input id=\"create\" type=\"button\" class=\"btn\" value=\"Create\"/><hr/></form></div><div class=\"sixteen columns\"><div id=\"list\"><div class=\"two columns alpha\"><h3>People</h3></div><div class=\"fourteen columns omega\"></div><table><thead><tr><th></th><th>Email</th><th></th></tr></thead><tbody id=\"people-list\" role=\"people-list\"></tbody></table><hr /></div></div></div><script type=\"text/template\" id=\"people-list-template\"><tr><td><img style=\"width: 42px;height: 42px\" src=\"<%= avatar %>\"/></td><td><%= email %></td><td><button type=\"button\" class=\"btn\" data-id=\"<%= id %>\" id=\"delete\">Delete</button></td></tr></script>"));

        app.addPersonView = new AddPersonView({
            el: $("#add")[0]
        });

        return this;
    }
});
