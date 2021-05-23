const employee = require("./employee");

class Engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    // const type = "Engineer";
  }

  getGitHub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
