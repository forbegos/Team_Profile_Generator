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

let isManager = true;
let isEngineer = false;
let isIntern = false;

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
  console.log(engineer);
}
function buildIntern(response) {
  const intern = new Intern(
    response.name,
    response.id,
    response.email,
    response.school
  );
  console.log(intern);
}

function buildManager(response) {
  const manager = new Manager(
    response.name,
    response.id,
    response.email,
    response.officeNumber
  );
  console.log(manager);
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
            console.log("program end");
        }
      });
  }
}

askQuestions();

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
