// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const inquirer = require('inquirer');
const fs = require("fs")
const express = require('express');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("conencted")



// team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated


// TODO: Create a function to write README file
function writeToFile() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "what is the team managers name employee id email address and office number?",
      },
    {
        type: "checkbox",
        name: "intern or engineer",
        message: "what badges do you want?",
        choices: ["intern", "engineer",]
      },
     

    ]).then(data => {
      console.table(data)
      var list = []
      for (let i = 0; i < data.length; i++) {
      

      }
      
      fs.writeFile("README.md", template, (err) => {
        if (err) {
          throw err
        }
      })
    })
};




// TODO: Create a function to initialize app
function init() {

  writeToFile()
}

// Function call to initialize app
init();




