const manager = require("../lib/manager.js");

describe("manager", () => {
  it("should return a new object of manager", () => {
    const value = 12;
    const obj = new manager(value);
    expect(typeof obj === "object");
  });

  it("should return the value of 'Manager' when calling getRole method", () => {
    const obj = new manager("officeNumber");
    expect(obj.getRole()).toEqual("Manager");
  });
});
