'use strict';
var _ = require('lodash');

let map = _.curry((f, arr) => arr.map(f));

let getUserName = (user) => user.name;

let data = [
    {name: 'A'},
    {name: 'B'},
    {name: 'C'}
];

let getAllUserName = map(getUserName);
console.log(getAllUserName(data));