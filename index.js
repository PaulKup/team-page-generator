const pageTemplate = require('./src/page-template');
const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');
const fs = require('fs');

let employees = [
    {
        name: 'Mike',
        role: 'manager',
        id: '1',
        email: 'kshjdklfjh',
        officeNumber: '2'
    },
    {
        name: 'Phil',
        role: 'engineer',
        id: '1',
        email: 'kshjdklfjh',
        github: 'dsafsdfsd'
    },
    {
        name: 'Mike',
        role: 'student',
        id: '1',
        email: 'kshjdklfjh',
        school: '2'
    }
];
const data = pageTemplate(employees);

fs.writeFile('./dist/index.html', data, (err) => {
    if(err) throw err;
})

const mike = new Employee('mike', '2', 'laskdjf');

console.log(typeof(mike.getEmail()));