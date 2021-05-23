// GIVEN a command-line application that accepts user input
// -> will need to implement inquirer -> done
// WHEN I am prompted for my team members and their information
// Define requires
// const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const inquirer = require("inquirer");
const fs = require("fs");
const { formatWithOptions } = require("util");

let isManager = true;
let isEngineer = false;
let isIntern = false;

let employees = [];

function askQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the team's manager name:",
        name: "name",
        when: isManager,
      },
      {
        type: "input",
        message: "Please enter the engineer's name:",
        name: "name",
        when: isEngineer,
      },
      {
        type: "input",
        message: "Please enter the engineer's Github user name:",
        name: "github",
        when: isEngineer,
      },
      {
        type: "input",
        message: "Please enter the team's intern's name:",
        name: "name",
        when: isIntern,
      },
      {
        type: "input",
        message: "Please enter the intern's School  name:",
        name: "school",
        when: isIntern,
      },
      {
        type: "input",
        message: "Please enter the employee's ID:",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter the employee's email address:",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter the employee's office number:",
        name: "officeNumber",
        when: isManager,
      },
      {
        type: "confirm",
        message: "Do you need to add another employee:",
        name: "newEmployee",
      },
    ])
    .then((response) => {
      manageResponses(response);
    });
}

function buildEngineer(response) {
  const engineer = new Engineer(
    response.name,
    response.id,
    response.email,
    response.github
  );
  employees.push(engineer);
}
function buildIntern(response) {
  const intern = new Intern(
    response.name,
    response.id,
    response.email,
    response.school
  );
  employees.push(intern);
}

function buildManager(response) {
  const manager = new Manager(
    response.name,
    response.id,
    response.email,
    response.officeNumber
  );
  employees.push(manager);
}

function manageResponses(response) {
  // Check type of employee
  if (isManager) {
    buildManager(response);
  } else if (isEngineer) {
    buildEngineer(response);
  } else {
    buildIntern(response);
  }
  // Check if add another employee
  if (response.newEmployee) {
    inquirer
      .prompt([
        {
          type: "checkbox",
          message: "What type of employee would like to add next:",
          choices: ["Engineer", "Intern", "None"],
          name: "empType",
        },
      ])
      .then((answer) => {
        console.log(answer.empType[0]);

        switch (answer.empType[0]) {
          case "Engineer":
            isEngineer = true;
            isManager = false;
            isIntern = false;
            console.log("buildEngineer");
            askQuestions();
            break;
          case "Intern":
            isEngineer = false;
            isManager = false;
            isIntern = true;
            console.log("buildIntern");
            askQuestions();
            break;
          default:
            console.log(employees);
            console.log("program end");
        }
      });
  } else {
    console.log(employees);
    console.log("generating html");
    generateHTML();
  }
}

function generateHTML() {
  let card = "";
  for (let i = 0; i < employees.length; i++) {
    console.log(employees[i].getRole());
    if (employees[i].getRole() === "Manager") {
      card += `
      <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-1">
            <h4 class="my-0 fw-normal">${employees[i].name}</h4>
            <h4 class="my-0 fw-normal">${employees[i].getRole()}</h4>
          </div>
          <div class="card-body">
            <p class="card-title pricing-card-title">${employees[i].email}</p>
          </div>
        </div>`;
    } else if (employees[i].getRole() === "Intern") {
      card += `
      <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-1">
            <h4 class="my-0 fw-normal">${employees[i].name}</h4>
            <h4 class="my-0 fw-normal">${employees[i].getRole()}</h4>
          </div>
          <div class="card-body">
            <p class="card-title pricing-card-title">${employees[i].email}</p>
          </div>
        </div>`;
    } else if (employees[i].getRole() === "Engineer") {
      card += `
      <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-1">
            <h4 class="my-0 fw-normal">${employees[i].name}</h4>
            <h4 class="my-0 fw-normal">${employees[i].getRole()}</h4>
          </div>
          <div class="card-body">
            <p class="card-title pricing-card-title">${employees[i].email}</p>
          </div>
        </div>`;
    }
  }

  let html = `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./assets/css/style.css" />
    <title>Team Profile Generator</title>
  </head>

  <header>
    <h1 class="display-5 fw-bold text-center">My Team</h1>
  </header>

  <body>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
      <div class="col">
        ${card}
      </div>
    </div>
  </body>
</html>`;

  fs.writeFile("index.html", html, (err) =>
    err ? console.log(err) : console.log("HTML file created succesfully")
  );
}

askQuestions();
// generateHTML();

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated
