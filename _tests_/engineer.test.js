const Engineer = require("../engineer");

describe("test to see if engineer is created properly", () => {
  it("engineer test name", () => {
    var test = new Engineer("name", "4", "yo@gmail.com");

    expect(test.name).toBe("name");
  });
  it("engineer test id", () => {
    var test = new Engineer("name", "4", "yo@gmail.com");

    expect(test.id).toBe("4");
  });
  it("engineer test email", () => {
    var test = new Engineer("name", "4", "yo@gmail.com");

    expect(test.email).toBe("yo@gmail.com");
  });
    it("engineer test github", () => {
        var test = new Engineer("name", "4", "yo@gmail.com", "yo");
    
        expect(test.github).toBe("yo");
  });

});
