var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
    url: '/api/people',
    props: {
        id: 'any',
        email: ['string', true, ''],
        avatar: ['string', true, '']
    },
    session: {
        selected: ['boolean', true, false]
    },
    derived: {
        autoAvatar: {
            deps: ['email'],
            fn: function () {
                return 'http://robohash.org/' + encodeURIComponent(this.email) + '?size=42x42';
            }
        },
        viewUrl: {
            deps: ['id'],
            fn: function () {
                return '/person/' + this.id;
            }
        }
    }
});
