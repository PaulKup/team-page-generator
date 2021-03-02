const EmployeeCardConstructor = employeeInfo => {
  let extraInfo;
  return employeeInfo
    .map(employee => {
      if (employee.role == 'Manager') {
        xtraInfo = 'Office number: ' + employee.officeNumber;
      } else if (employee.role == 'Engineer') {
        xtraInfo = "GitHub: <a href='https://github.com/" + employee.github + "'target='_blank'>github.com/" + employee.github + "</a>";
      } else {
        xtraInfo = 'School: ' + employee.school;
      }
      return `<div class="card m-4" style="width: 18rem;">
          <div class="card-body">
          <div class="bg-primary text-white">
          <h5 class="card-title text-center">${employee.name}</h5>
          <h6 class="card-subtitle mb-2 text-center">${employee.role}</h6>
          </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${employee.id}</li>
                <li class="list-group-item">Email: <a href = "mailto: ${employee.email}">${employee.email}</a></li>
                <li class="list-group-item">${xtraInfo}</li>
            </ul>
          </div>
        </div>`;
    })
    .join('')}



const pageTemplate = employeeInfo => {
    return `
    <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
  <header>
    <h1 class="bg-primary text-white d-flex justify-content-center p-3">My Team</h1>
  </header>
  <main class="d-flex flex-wrap justify-content-around">
  ${ EmployeeCardConstructor(employeeInfo) }
  </main>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
  </body>
  </html>
    `;
  };
  module.exports = pageTemplate;