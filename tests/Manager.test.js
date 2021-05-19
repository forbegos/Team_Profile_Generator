const manager = require("../lib/manager.js");

describe("manager", () => {
  it("should return the value of 'Manager' when calling getRole method", () => {
    const obj = new manager("officeNumber");
    expect(obj.getRole()).toEqual("Manager");
  });
});
