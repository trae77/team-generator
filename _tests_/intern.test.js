const Intern = require("../intern");

describe("test to see if intern is created properly", () => {
  it("intern test name", () => {
    var test = new Intern("name", "4", "yo@gmail.com", "vanderbilt");
    expect(test.name).toBe("name");
  });
  it("intern test id", () => {
    var test = new Intern("name", "4", "yo@gmail.com", "vanderbilt");

    expect(test.id).toBe("4");
  });
  it("intern test email", () => {
    var test = new Intern("name", "4", "yo@gmail.com", "vanderbilt");;

    expect(test.email).toBe("yo@gmail.com");
  });
  it("intern test email", () => {
    var test = new Intern("name", "4", "yo@gmail.com", "vanderbilt");

    expect(test.school).toBe("vanderbilt");
  })
});
