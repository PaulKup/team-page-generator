const pageTemplate = require('./src/page-template');
// const Employee = require('./lib/Employee');
// const Engineer = require('./lib/Engineer');
// const Intern = require('./lib/Intern');
// const Manager = require('./lib/Manager');
// const inquirer = require('inquirer');
const fs = require('fs');
// let pageInfo = [];
//     let ManagerPrompt = () => {
//         return inquirer.prompt([{
//                 type: 'input',
//                 name: 'name',
//                 message: "Manager's name:",
//                 validate: nameInput => {
//                     if (nameInput) {
//                         return true
//                     } else {
//                         console.log("Enter Manager's name");
//                         return false;
//                     }
//                 }
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: "Manager's id:",
//                 validate: idInput => {
//                     if (idInput) {
//                         return true
//                     } else {
//                         console.log("Enter Manager's id");
//                         return false;
//                     }
//                 }
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: "Manager's email:",
//                 validate: emailInput => {
//                     if (emailInput) {
//                         return true
//                     } else {
//                         console.log("Enter Manager's email");
//                         return false;
//                     }
//                 }
//             },
//             {
//                 type: 'input',
//                 name: 'officeNum',
//                 message: "Manager's office number:",
//                 validate: officeNumInput => {
//                     if (officeNumInput) {
//                         return true
//                     } else {
//                         console.log("Enter Manager's office number:");
//                         return false;
//                     }
//                 }
//             }
//         ]).then(data => {
//             const manager = new Manager(data.name, data.id, data.email, data.officeNum);
//             manager.role = manager.getRole()
//             AddEmployee(manager);
//             EmployeePrompt();
//         })
//     }

//     let EngineerPrompt = () => {
//         return inquirer.prompt([{
//                 type: 'input',
//                 name: 'name',
//                 message: "Engineer's name:"
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: "Engineer's id:"
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: "Engineer's email:"
//             },
//             {
//                 type: 'input',
//                 name: 'github',
//                 message: "Engineer's github username:"
//             }
//         ]).then(data => {
//             const engineer = new Engineer(data.name, data.id, data.email, data.github);
//             engineer.role = engineer.getRole();
//             AddEmployee(engineer);
//             EmployeePrompt();
//         })
//     }

//     let InternPrompt = () => {
//         return inquirer.prompt([{
//                 type: 'input',
//                 name: 'name',
//                 message: "Intern's name:"
//             },
//             {
//                 type: 'input',
//                 name: 'id',
//                 message: "Intern's id:"
//             },
//             {
//                 type: 'input',
//                 name: 'email',
//                 message: "Intern's email:"
//             },
//             {
//                 type: 'input',
//                 name: 'school',
//                 message: "Intern's school:"
//             }
//         ]).then(data => {
//             const intern = new Intern(data.name, data.id, data.email, data.school);
//             intern.role = intern.getRole();
//             AddEmployee(intern);
//             EmployeePrompt();
//         })
//     }

//     let EmployeePrompt = () => {
//         return inquirer.prompt([{
//             type: 'list',
//             name: 'engineerOrIntern',
//             message: "Would you like to add more team members or quit?",
//             choices: ['Engineer', 'Intern', 'Quit']
//         }, ]).then(data => {
//             switch (data.engineerOrIntern) {
//                 case "Engineer":
//                     console.log("here");
//                     EngineerPrompt();
//                     break;
//                 case "Intern":
//                     InternPrompt();
//                     break;
//                 default:
//                     console.log(pageInfo);
//                     const newPage = pageTemplate(pageInfo);
//                     fs.writeFile('./dist/index.html', newPage, (err) => {
//                         if (err) throw err;
//                     })
//             }
//         })
           
//     }

//     let AddEmployee = (data) => {
//        return pageInfo.push(data);
//     }


// ManagerPrompt()

let newPage = [
    {
      name: 'Mike',
      id: '1',
      email: 'guy@place.com',
      officeNumber: '2',
      role: 'Manager'
    },
    {
      name: 'Steve',
      id: '3',
      email: 'dude@place.com',
      github: 'PaulKup',
      role: 'Engineer'
    },
    {
      name: 'Phil',
      id: '7',
      email: 'kupiszewskist1@gmail.com',
      school: 'University of American Samoa',
      role: 'Intern'
    }
  ]
  newPage = pageTemplate(newPage);

fs.writeFile('./dist/index.html', newPage, (err) => {
    if (err) throw err;
})