'use strict';

const prop = p => x => x[p];
const map = f => arr => arr.map(f);
const filter = f => list => list.filter(f);
const propEq = v => p => x => prop(p)(x) === v;
const compose = (f, g) => x => f(g(x));

let getAdminEmails = compose(map(prop('email')), filter(propEq('admin')('role')));

let getDeveloperNames = compose(map(prop('name')), filter(propEq('developer')('role')));


let data = [
  {name: 'Developer 1', email: 'developer1@company.com', role: 'admin'},
  {name: 'Developer 2', email: 'developer2@company.com', role: 'admin'},
  {name: 'Developer 3', email: 'developer3@company.com', role: 'developer'},
  {name: 'Developer 4', email: 'developer4@company.com', role: 'developer'},
  {name: 'Developer 5', email: 'developer5@company.com', role: 'developer'},
  {name: 'Developer 6', email: 'developer6@company.com', role: 'admin'},
  {name: 'Developer 7', email: 'developer7@company.com', role: 'developer'}  
];


console.log(getAdminEmails(data));
console.log(getDeveloperNames(data));
                        


                  