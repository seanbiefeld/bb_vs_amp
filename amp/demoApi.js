var _ = require('underscore');


var people = [
    {
        id: 1,
        email: 'han.solo@somefakeemail.com',
        avatar: 'http://robohash.org/han.solo@somefakeemail.com?set=set3&size=42x42'
    },
    {
        id: 2,      
        email: 'mal.reynolds@somefakeemail.com',
        avatar: 'http://robohash.org/mal.reynolds@somefakeemail.com?set=set3&size=42x42'
    },
    {
        id: 3,
        email: 'phil.fry@somefakeemail.com',
        avatar: 'http://robohash.org/phil.fry@somefakeemail.com?set=set3&size=42x42'
    },
    {
        id: 4,
        email: 'turanga.leela@somefakeemail.com',
        avatar: 'http://robohash.org/uranga.leela@somefakeemail.com?set=set3&size=42x42'
    },
    {
        id: 5,
        email: 'diana.troi@somefakeemail.com',
        avatar: 'http://robohash.org/turanga.leela@somefakeemail.com?set=set3&size=42x42'
    },
    {
        id: 6,       
        email: 'max.payne@somefakeemail.com',
        avatar: 'http://robohash.org/max.payne@somefakeemail.com?set=set3&size=42x42'
    }
];
var id = 7;

function get(id) {
    return _.findWhere(people, {id: parseInt(id + '', 10)});
}

exports.list = function (req, res) {
    res.send(people);
};

exports.add = function (req, res) {
    var person = req.body;
    person.id = id++;
    people.push(person);
    res.status(201).send(person);
};

exports.get = function (req, res) {
    var found = get(req.params.id);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.delete = function (req, res) {
    var found = get(req.params.id);
    if (found) people = _.without(people, found);
    res.status(found ? 200 : 404);
    res.send(found);
};

exports.update = function (req, res) {
    var found = get(req.params.id);
    if (found) _.extend(found, req.body);
    res.status(found ? 200 : 404);
    res.send(found);
};

