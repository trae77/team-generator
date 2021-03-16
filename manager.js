const Employee = require('./employee');

class Manager extends Employee {
  constructor(officenumber) {
   this.officenumber = officenumber

    super(name, id, email) 
        this.name = name;
        this.id = id;
        this.email = email;
  }
}
module.exports = Manager;
