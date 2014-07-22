var Person = Backbone.Model.extend({
    defaults : {
        id : 0,
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
    urlRoot : "/api/people"
});
    