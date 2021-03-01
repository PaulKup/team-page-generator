
const pageTemplate = employeeInfo => {
    let xtraInfo;
    return employeeInfo
      .map(employee => {
        if (employee.role == 'manager') {
          xtraInfo = 'Office number: ' + employee.officeNumber;
        } else if (employee.role == 'engineer') {
          xtraInfo = 'GitHub: ' + employee.github;
        } else {
          xtraInfo = 'School: ' + employee.school;
        }
        return `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title bg-primary">${employee.name}</h5>
              <h6 class="card-subtitle mb-2 bg-primary">${employee.role}</h6>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${employee.id}</li>
                  <li class="list-group-item">Email: ${employee.email}</li>
                  <li class="list-group-item">${xtraInfo}</li>
              </ul>
            </div>
          </div>`;
      })
      .join('');
  };
  module.exports = pageTemplate;