var View = require('ampersand-view'),
    _ = require('underscore'),
    Person = require('../models/person');

module.exports = View.extend({
    initialize: function(){
        this.model = new Person();
        app.addPersonView = this;
        $('#create').on('click', this, this.createPerson);
        $('#email').on('change', this, this.updateEmail);
        $('#avatar').on('change', this, this.updateAvatar);
    },
    render: function(){

        if(this.model){
            this.model = new Person();
        }

    	$(this.el).find('#email').val('');
        $(this.el).find('#avatar').val('');
        $(this.el).find('#avatarPreview').attr('src', '');
    },
    createPerson: function (event) {

        var view = event.data;

        app.people.create(view.model, {
            success: function () {
                app.peopleView.render(true);
                view.render();
            },
            error: function () { 
                alert('There was an error adding the Person'); 
            },
        });
        return false;
    },
    autoGenerateAvatar: function(event){
        var avatar = $('#avatar'),
        view = event.data;

        if(!avatar.val()){
            avatar.val('http://robohash.org/'+$('#email').val()+'?set=set3&size=42x42');
            view.updateAvatar(event);
        }
    },
    updateAvatar: function(event){
        var avatarInput = $('#avatar'),
        view = event.data;

        view.model.avatar = avatarInput.val();

        $('#avatarPreview').attr('src', avatarInput.val());
    },
    updateEmail: function(event){
        var emailInput = $('#email'),
        view = event.data;

        view.model.email = emailInput.val();

        if(view.model.email)
            view.autoGenerateAvatar(event);
    },
});
