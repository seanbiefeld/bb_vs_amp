/*global Backbone */
var app = app || {};

(function () {
    'use strict';

    /* Model */
    app.Person = Backbone.Model.extend({
        defaults : {
            name : "",
            email : "",
            avatar : "",
            dateOfBirth : {

            },
            preferredPhoneType : "",
            phoneNumber : "",
            gender : "",
            bio : "",
            hobbies : [

                ]
        },
        urlRoot : "/people",
        validate : function(attributes, options){
            if (!attributes.email) {
                return 'Please fill email field.';
            }
            if (!attributes.name) {
                return 'Please fill name field.';
            }
        }
    });

})();
