const intern = require("../lib/intern.js");

describe("intern", () => {
  it("should return a new object of intern", () => {
    const value = "school";
    const obj = new intern(value);
    expect(typeof obj === "object");
  });

  it("should return the value of 'Intern' when calling getRole method", () => {
    const obj = new intern("test");
    expect(obj.getRole()).toEqual("Intern");
  });
});
