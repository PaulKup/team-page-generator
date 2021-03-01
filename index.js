const pageTemplate = require('./src/page-template');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
let pageInfo;

class Prompts {
    pageInfo = [];
    AddManager() {
        return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Manager's name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log("Enter Manager's name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Manager's id:",
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log("Enter Manager's id");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Manager's email:",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log("Enter Manager's email");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNum',
                message: "Manager's office number:",
                validate: officeNumInput => {
                    if (officeNumInput) {
                        return true
                    } else {
                        console.log("Enter Manager's office number:");
                        return false;
                    }
                }
            }
        ])
    }

    AddEngineer() {
        return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Engineer's name:"
            },
            {
                type: 'input',
                name: 'id',
                message: "Engineer's id:"
            },
            {
                type: 'input',
                name: 'email',
                message: "Engineer's email:"
            },
            {
                type: 'input',
                name: 'github',
                message: "Engineer's github username:"
            }
        ])
    }

    addIntern() {
        return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Intern's name:"
            },
            {
                type: 'input',
                name: 'id',
                message: "Intern's id:"
            },
            {
                type: 'input',
                name: 'email',
                message: "Intern's email:"
            },
            {
                type: 'input',
                name: 'school',
                message: "Intern's school:"
            }
        ])
    }

    AddEmployee() {
        addResponse = inquirer.prompt([{
            type: 'list',
            name: 'engineerOrIntern',
            message: "Would you like to add more team members or quit?",
            choices: ['Engineer', 'Intern', 'Quit']
        }, ])
        
    }
}


const prompts = new Prompts();

prompts.AddManager().then(data => {
    pageInfo = data;
    prompts.AddEmployee()
        .then(AddResponse => {
            console.log(AddResponse);
            //     if (info == 'Engineer') {
            //         engineerPrompt().then(engineerInfo => {
            //             data.push(engineerInfo);
            //         })
            //         } else if (info == 'Intern') {
            //             InternPrompt().then(InternInfo => {
            //                 data.push(InternInfo);
            //             })
            //         } else if (info == 'Quit') {
            //             return data;
            //         } else {
            //             AddEmployee();
            //         }
            // })
        });
});


// fs.writeFile('./dist/index.html', data, (err) => {
//     if (err) throw err;
// })

// const mike = new Employee('mike', '2', 'laskdjf');

// console.log(typeof (mike.getEmail()));