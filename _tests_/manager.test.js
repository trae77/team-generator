const Manager = require("../manager");

describe("test to see if manager is created properly", () => {
  it("manager test name", () => {
    var test = new Manager("name", "4", "yo@gmail.com", "7");

    expect(test.name).toBe("name");
  });
  it("manager test id", () => {
    var test = new Manager("name", "4", "yo@gmail.com", "7");

    expect(test.id).toBe("4");
  });
  it("manager test email", () => {
    var test = new Manager("name", "4", "yo@gmail.com", "7");

    expect(test.email).toBe("yo@gmail.com");
  });
  it("manger test email", () => {
    var test = new Manager("name", "4","yo@gmail.com", "7");

    expect(test.officenumber).toBe("7");
  });
});
