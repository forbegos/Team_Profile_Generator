const employee = require("./employee");

class Intern extends employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    // const type = "Intern";
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
