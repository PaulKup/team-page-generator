const pageTemplate = require('./src/page-template');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const inquirer = require('inquirer');
const fs = require('fs');
let pageInfo = [];
    let ManagerPrompt = () => {
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
        ]).then(data => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNum);
            manager.role = manager.getRole()
            AddEmployee(manager);
            EmployeePrompt();
        })
    }

    let EngineerPrompt = () => {
        return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Engineer's name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log("Enter Engineer's name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Engineer's id:",
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log("Enter Engineer's id");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Engineer's email:",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log("Enter Engineer's email");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: "Engineer's github username:",
                validate: github => {
                    if (github) {
                        return true
                    } else {
                        console.log("Enter Engineer's github username");
                        return false;
                    }
                }
            }
        ]).then(data => {
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            engineer.role = engineer.getRole();
            AddEmployee(engineer);
            EmployeePrompt();
        })
    }

    let InternPrompt = () => {
        return inquirer.prompt([{
                type: 'input',
                name: 'name',
                message: "Intern's name:",
                validate: nameInput => {
                    if (nameInput) {
                        return true
                    } else {
                        console.log("Enter Intern's name");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: "Intern's id:",
                validate: idInput => {
                    if (idInput) {
                        return true
                    } else {
                        console.log("Enter Intern's id");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: "Intern's email:",
                validate: emailInput => {
                    if (emailInput) {
                        return true
                    } else {
                        console.log("Enter Intern's email");
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'school',
                message: "Intern's school:",
                validate: school => {
                    if (school) {
                        return true
                    } else {
                        console.log("Enter Intern's school");
                        return false;
                    }
                }
            }
        ]).then(data => {
            const intern = new Intern(data.name, data.id, data.email, data.school);
            intern.role = intern.getRole();
            AddEmployee(intern);
            EmployeePrompt();
        })
    }

    let EmployeePrompt = () => {
        return inquirer.prompt([{
            type: 'list',
            name: 'engineerOrIntern',
            message: "Would you like to add more team members or quit?",
            choices: ['Engineer', 'Intern', 'finish building my team']
        }, ]).then(data => {
            switch (data.engineerOrIntern) {
                case "Engineer":
                    console.log("here");
                    EngineerPrompt();
                    break;
                case "Intern":
                    InternPrompt();
                    break;
                default:
                    const newPage = pageTemplate(pageInfo);
                    fs.writeFile('./dist/index.html', newPage, (err) => {
                        if (err) throw err;
                    })
            }
        })
           
    }

    let AddEmployee = (data) => {
       return pageInfo.push(data);
    }


ManagerPrompt()

