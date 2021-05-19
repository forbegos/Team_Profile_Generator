const engineer = require("../lib/engineer.js");

describe("engineer", () => {
  it("should return the value of the constructor value", () => {
    const value = "test";
    const obj = new engineer(value);
    expect(obj.getGitHub()).toEqual("test");
  });

  it("should return the value of 'Engineer' when calling getRole method", () => {
    const obj = new engineer("test");
    expect(obj.getRole()).toEqual("Engineer");
  });
});
