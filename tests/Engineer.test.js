const engineer = require("../lib/engineer.js");

describe("engineer", () => {
  it("should return a new object", () => {
    const value = "test";
    const obj = new engineer(value);
    expect(typeof obj === "object");
  });

  it("should return the value of 'Engineer' when calling getRole method", () => {
    const obj = new engineer("test");
    expect(obj.getRole()).toEqual("Engineer");
  });
});
