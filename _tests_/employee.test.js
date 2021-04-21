const Employee = require("../employee");

describe("test to see if employee is created properly", () => {
  it("employee test name", () => {
    var test = new Employee("name", "4", "yo@gmail.com");

    expect(test.name).toBe("name");
  });
  it("employee test id", () => {
    var test = new Employee("name", "4", "yo@gmail.com");

    expect(test.id).toBe("4");
  });
  it("employee test email", () => {
    var test = new Employee("name", "4", "yo@gmail.com");

    expect(test.email).toBe("yo@gmail.com");
  });
});
