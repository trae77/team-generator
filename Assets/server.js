const inquirer = require(`inquirer`);
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const Engineer = require('./engineer');
const Manager = require('./manager');
const Intern = require('./intern');




function questions() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'Who is the manager of your project?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'what is their employee id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'what is there email address?',
        },
        {
            type: 'input',
            name: 'officenumber',
            message: 'what is there office number?',
        },

        {
            type: 'list',
            name: 'teammember',
            message: 'Please select any new team members',
            choices: [
                "engineer",
                "intern",
                "none",
            ]
        },

    ]).then((data) => {
        switch (data.teammember) {
            case x: "engineer"
                engineer()
                break;
            case y: "intern"
                intern()
                break;
            default: "none"
                makefile()
        }
    }
    )
}

// switch cases for engineer and intern with seperate functions to make them


function engineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineer',
            message: 'Who is the engineer of your project?',
        },
        {
            type: 'input',
            name: 'engineerid',
            message: 'what is their employee id?',
        },
        {
            type: 'input',
            name: 'engineeremail',
            message: 'what is there email address?',
        },
        {
            type: 'input',
            name: 'username',
            message: 'what is there github username?',
        },
        {
            type: 'list',
            name: 'teammember',
            message: 'Please select any new team members',
            choices: [
                "engineer",
                "intern",
                "none",
            ]
        },

    ]).then((data) => {
        switch (data.teammember) {
            case x: "engineer"
                engineer()
                break;
            case y: "intern"
                intern()
                break;
            default: "none"
                makefile()
        }
        makefile()
    })
}

function intern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intern',
            message: 'Who is the intern of your project?',
        },
        {
            type: 'input',
            name: 'internid',
            message: 'what is their employee id?',
        },
        {
            type: 'input',
            name: 'internemail',
            message: 'what is there email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'what is there school?',
        },
        {
            type: 'list',
            name: 'teammember2',
            message: 'Please select any new team members',
            choices: [
                "engineer",
                "intern",
                "none",
            ]
        },

    ]).then((data) => {
        switch (data.teammember2) {
            case engineer: "engineer"
                engineer()
                break;
            case intern: "intern"
                intern()
                break;
            default: "none"
                makefile()
        }
  

})
}



questions()

function makefile() {

}
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

