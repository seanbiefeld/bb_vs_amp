/*global app, me, $*/
// This app view is responsible for rendering all content that goes into
// <html>. It's initted right away and renders itself on DOM ready.

// This view also handles all the 'document' level events such as keyboard shortcuts.
var View = require('ampersand-view');
var _ = require('underscore');


module.exports = View.extend({
    //template: templates.body,
    
    initialize: function () {
    },
    events: {
        
    },
    render: function () {
        // some additional stuff we want to add to the document head
        $(this.el).append($("<div class=\"container\"><div class=\"sixteen columns\"><h1 class=\"remove-bottom\" style=\"margin-top: 40px\">Demo</h1><h5> ( ಠ_ಠ ) </h5><hr/></div><div class=\"sixteen columns\"><div id=\"list\"><div class=\"two columns alpha\"><h3>People</h3></div><div class=\"fourteen columns omega\"></div><table><thead><tr><th></th><th>Email</th><th></th></tr></thead><tbody role=\"people-list\"></tbody></table></div><div id=\"add-edit\"></div></div></div><script type=\"text/template\" id=\"people-list-template\"><tr><td><img src=\"<%= avatar %>\"/></td><td><%= email %></td><td><a class=\"btn\" href=\"#/people/delete/<%= id %>\">Delete</a></td></tr></script><script type=\"text/template\" id=\"people-edit-template\"><form class=\"people-edit-form\"><legend class=\"sixteen columns\"><h3>Add a New Person</h3></legend><div class=\"five columns alpha\"><label for=\"email\">Email</label><input type=\"email\" id=\"email\" name=\"email\" placeholder=\"someone@gmail.com\" value=\"<%= email %>\"/></div><div class=\"six columns omega\"><p class=\"three columns alpha\"><label for=\"name\">Avatar</label><input type=\"url\" id=\"avatar\" name=\"avatar\" placeholder=\"www.avatar.com/avatar.png\" value=\"<%= avatar %>\"/></p><p class=\"three columns omega\"><img id=\"avatarPreview\"></img></p></div><hr/><input id=\"create\" type=\"button\" class=\"btn\" value=\"Create\"/></form></script>"));
        return this;
    }
});
