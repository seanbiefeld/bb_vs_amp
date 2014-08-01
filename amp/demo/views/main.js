var View = require('ampersand-view');
var _ = require('underscore');

module.exports = View.extend({
    initialize: function () {
        app.mainView = this;
    },
    events: {
        
    },
    render: function () {
        // some additional stuff we want to add to the document head
        $(this.el).append($("<div class=\"container\"><div class=\"sixteen columns\"><h1 class=\"remove-bottom\" style=\"margin-top: 40px\">Ampersand.js Demo</h1> <h3> &gt;--( ಠ_ಠ )--&lt; </h3><hr/></div><div class=\"sixteen columns\"><div id=\"list\"><div class=\"two columns alpha\"><h3>People</h3></div><div class=\"fourteen columns omega\"></div><table><thead><tr><th></th><th>Email</th><th></th></tr></thead><tbody id=\"people-list\" role=\"people-list\"></tbody></table></div><div id=\"add\" class=\"sixteen columns\"><form class=\"people-edit-form\"><legend class=\"sixteen columns\"><h3>Add a New Person</h3></legend><div class=\"five columns alpha\"><label for=\"email\">Email</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"someone@gmail.com\" /></div><div class=\"six columns omega\"><p class=\"three columns alpha\"><label for=\"name\">Avatar</label><input type=\"url\" id=\"avatar\" name=\"avatar\" placeholder=\"www.avatar.com/avatar.png\" /></p><p class=\"three columns omega\"><img id=\"avatarPreview\"></img></p></div><hr/><input id=\"create\" type=\"button\" class=\"btn\" value=\"Create\"/></form></div></div></div><script type=\"text/template\" id=\"people-list-template\"><tr><td><img src=\"<%= avatar %>\"/></td><td><%= email %></td><td><button type=\"button\" class=\"btn\" data-id=\"<%= id %>\" id=\"delete\">Delete</button></td></tr></script>"));

        //app.addPersonView = new AddPersonView();

        return this;
    }
});
