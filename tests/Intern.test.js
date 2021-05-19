const intern = require("../lib/intern.js");

describe("intern", () => {
  it("should return the value of the constructor value", () => {
    const value = "school";
    const obj = new intern(value);
    expect(obj.getSchool()).toEqual("school");
  });

  it("should return the value of 'Intern' when calling getRole method", () => {
    const obj = new intern("test");
    expect(obj.getRole()).toEqual("Intern");
  });
});
