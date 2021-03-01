const employeeCard = require('./src/page-template');

const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

let employee = [
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
const data = employeeCard(employee);
console.log(typeof(data));

fs.writeFile('./dist/index.html', data, (err) => {
    if(err) throw err;
})
