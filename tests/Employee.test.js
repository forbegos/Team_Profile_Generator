const employee = require("../lib/employee.js");

describe("employee", () => {
  it("should return a new object of employee", () => {
    const name = "name";
    const id = "id";
    const email = "email";
    const obj = new employee(name, id, email);
    expect(typeof obj === "object");
  });

  it("should return the value of 'Employee' when calling getRole method", () => {
    const name = "name";
    const id = "id";
    const email = "email";
    const obj = new employee(name, id, email);
    expect(obj.getRole()).toEqual("Employee");
  });

  it("should return the value of 'email' when calling getEmail method", () => {
    const name = "name";
    const id = "id";
    const email = "email";
    const obj = new employee(name, id, email);
    expect(obj.getEmail()).toEqual(email);
  });

  it("should return the value of 'id' when calling getId method", () => {
    const name = "name";
    const id = "id";
    const email = "email";
    const obj = new employee(name, id, email);
    expect(obj.getId()).toEqual(id);
  });

  it("should return the value of 'name' when calling getId method", () => {
    const name = "name";
    const id = "id";
    const email = "email";
    const obj = new employee(name, id, email);
    expect(obj.getName()).toEqual(name);
  });
});
