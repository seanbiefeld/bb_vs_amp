/*global Backbone */
var app = app || {};

(function ($) {
    'use strict';


    app.PeopleEditView = Backbone.View.extend({
        el: '#add-edit',
        events: {
            'submit .people-edit-form': 'saveItem',
            'click .delete': 'deleteItem',
            'click .cancel': 'cancelItem',
            'blur #email': 'autoGenerateAvatar',
            'change #avatar': 'updateAvatarImage'
        },
        item : null,
        cancelItem : function (e) {
            app.router.navigate('', {trigger:true});
        },
        deleteItem: function (e) {
            this.model.destroy({
                success: function () { 
                    app.router.navigate('', {trigger:true});
                }
            })
        },
        autoGenerateAvatar: function(e){
            var avatar = $('#avatar');

            if(!avatar.val()){
                avatar.val('http://robohash.org/'+$('#email').val()+'?set=set3&size=42x42');
                this.updateAvatarImage(e);
            }
        },
        updateAvatarImage: function(e){
            $('#avatarPreview').attr('src', $('#avatar').val());
        },
        render: function (person) { 
            var that = this;
            this.model = person;
            if(this.model) {
                this.model.fetch({
                    success: function (data) {    
                        var template = _.template($('#people-edit-template').html(), {data : data});
                        that.$el.empty().html(template);
                    }
                });
            } else {
                var template = _.template($('#people-edit-template').html(), {data : null});
                this.$el.empty().html(template);
            }
        },
        saveItem: function (e) {    
            var details = $(e.currentTarget).serializeObject();
            
            if(!this.model)
                this.model = new app.Person();

            if(details.id){
                details.id = parseInt(details.id);
            }

            this.model.on("invalid", function(model, error) {
              alert(error);
            });

            this.model.save(details, {
                success: function (data) {
                    app.router.navigate('', {trigger:true});
                },
                error: function(model, error) {
                    
                }
            });
            return false;
        }
    });

})(jQuery);

