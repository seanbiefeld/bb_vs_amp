var Collection = require('ampersand-rest-collection'),
Person = require('./person');


module.exports = Collection.extend({
    model: Person,
    url: '/api/people'
});
