var getAdminEmails = function(users) {
  var emails = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].role === 'admin') {
      emails.push(users[i].email);
    }
  }
  return emails;
}

var data = [
  {name: 'Developer 1', email: 'developer1@company.com', role: 'admin'},
  {name: 'Developer 2', email: 'developer2@company.com', role: 'admin'},
  {name: 'Developer 3', email: 'developer3@company.com', role: 'developer'},
  {name: 'Developer 4', email: 'developer4@company.com', role: 'developer'},
  {name: 'Developer 5', email: 'developer5@company.com', role: 'developer'},
  {name: 'Developer 6', email: 'developer6@company.com', role: 'admin'},
  {name: 'Developer 7', email: 'developer7@company.com', role: 'developer'}  
];


console.log(getAdminEmails(data));