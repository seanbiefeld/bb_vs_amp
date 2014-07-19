// Todo Collection - todo-collection.js
var AmpCollection = require('ampersand-rest-collection');
var Todo = require('./todo');


module.exports = AmpCollection.extend({
    model: Todo,
    url: '/api/todo'
});