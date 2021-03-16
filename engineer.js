const Employee = require('./employee');

class Engineer extends Employee{
  constructor(github) {
    this.github = github

    super(name, id, email) 
        this.name = name;
        this.id = id;
        this.email = email;
  }
}

module.exports = Engineer;
