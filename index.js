// GIVEN a command-line application that accepts user input
// -> will need to implement inquirer -> done
// WHEN I am prompted for my team members and their information
// Define requires
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");

const inquirer = require("inquirer");
const fs = require("fs");

const engineer = false;
const intern = false;
const addEmployee = false;

// Start the app with initial input
function askBasicQuestions() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter the team's manager name:",
        name: "name",
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
    .then((responses) => {
      buildEmployee(responses);
    });
}

function buildEmployee(responses) {
  const manager = new Manager(
    responses.name,
    responses.id,
    responses.email,
    responses.officeNumber
  );

  if (responses.newEmployee) {
    inquirer
      .prompt([
        {
          type: "checkbox",
          message: "What type of employee would like to add next:",
          choices: ["Engineer", "Intern", "None"],
          name: "empType",
        },
      ])
      .then((response) => {
        console.log(response.empType[0]);
        switch (response.empType[0]) {
          case "Engineer":
            // buildEngineer(responses)
            console.log("buildEngineer");
            break;
          case "Intern":
            // buildIntern(responses);
            console.log("buildIntern");
            break;
          default:
            console.log(manager);
        }
      });
  }
}

askBasicQuestions();

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
