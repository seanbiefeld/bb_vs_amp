var _ = require('underscore');


var people = [
    {
        id: 1,
        name: 'Han Solo',
        email: 'han.solo@somefakeemail.com',
        avatar: 'http://robohash.org/han.solo@somefakeemail.com?set=set3&size=42x42',
        dateOfBirth: new Date(1988, 10, 18),
        preferredPhoneType: 'mobile',
        phoneNumber: '555-444-3333',
        gender: 'male',
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        hobbies: [
            'hiking',
            'skiing'
        ]
    },
    {
        id: 2,
        name: 'Malcolm Reynolds',
        email: 'mal.reynolds@somefakeemail.com',
        avatar: 'http://robohash.org/mal.reynolds@somefakeemail.com?set=set3&size=42x42',
        dateOfBirth: new Date(1978, 11, 22),
        preferredPhoneType: 'mobile',
        phoneNumber: '545-447-3657',
        gender: 'male',
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        hobbies: [
            'acting',
            'jogging'
        ]
    },
    {
        id: 3,
        name: 'Phillip J. Fry',
        email: 'phil.fry@somefakeemail.com',
        avatar: 'http://robohash.org/phil.fry@somefakeemail.com?set=set3&size=42x42',
        dateOfBirth: new Date(1979, 5, 15),
        preferredPhoneType: 'mobile',
        phoneNumber: '599-447-6783',
        gender: 'male',
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        hobbies: [
            'video games',
            'beer'
        ]
    },
    {
        id: 4,
        name: 'Turanga Leela',
        email: 'turanga.leela@somefakeemail.com',
        avatar: 'http://robohash.org/uranga.leela@somefakeemail.com?set=set3&size=42x42',
        dateOfBirth: new Date(1981, 1, 8),
        preferredPhoneType: 'mobile',
        phoneNumber: '345-454-3343',
        gender: 'female',
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        hobbies: [
            'piloting',
            'cyclopting'
        ]
    },
    {
        id: 5,
        name: 'Diana Troi',
        email: 'diana.troi@somefakeemail.com',
        avatar: 'http://robohash.org/turanga.leela@somefakeemail.com?set=set3&size=42x42',
        dateOfBirth: new Date(1978, 3, 14),
        preferredPhoneType: 'mobile',
        phoneNumber: '434-678-5432',
        gender: 'female',
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        hobbies: [
            'psychology',
            'spa'
        ]
    },
    {
        id: 6,
        name: 'Max Payne',
        email: 'max.payne@somefakeemail.com',
        avatar: 'http://robohash.org/max.payne@somefakeemail.com?set=set3&size=42x42',
        dateOfBirth: new Date(1988, 10, 18),
        preferredPhoneType: 'mobile',
        phoneNumber: '555-444-3333',
        gender: 'male',
        bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        hobbies: [
            'hiking',
            'skiing'
        ]
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

