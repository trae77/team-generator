const inquirer = require(`inquirer`);
const fs = require('fs');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);

const Engineer = require('./engineer');
const Manager = require('./manager');
const Intern = require('./intern');


Managerteam = [];
Engineerteam = [];
Internteam = [];



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
        const manager1 =  new Manager(data.manager, data.id, data.email, data.officenumber )
        Managerteam.push(manager1);
        switch (data.teammember) {
            case "engineer": 
                engineer()
                break;
            case "intern": 
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
        const engineer1 = new Engineer(data.engineer,data.engineerid,data.engineeremail,data.username)
        Engineerteam.push(engineer1)
        switch (data.teammember) {
            case "engineer": 
                engineer()
                break;
            case "intern": 
                intern()
                break;
            default: "none"
                makefile()
        }
       
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
        const intern1 = new Intern(data.intern,data.internid,data.internemail,data.school)
        Internteam.push(intern1);
        switch (data.teammember2) {
            case "engineer": 
                engineer()
                break;
            case "intern": 
                intern()
                break;
            default: "none"
                makefile()
        }
  

})
}

function Managert(){
    let html = ""
    for (let index = 0; index < Managerteam.length; index++) {
       let element = Managerteam[index].name ;
       let element1 = Managerteam[index].id ;
       let element2 = Managerteam[index].email ; 
       let element3 = Managerteam[index].officenumber ;
     html+= `<div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element}</h5>
          <p class="card-text"> ${element1} .</p>
          <p class="card-text"> ${element2} .</p>
          <p class="card-text">${element3}</small></p>
        </div>
      </div>`
    }
   return html;
}    
function Engineert(){
    let html = ""
    for (let index = 0; index < Engineerteam.length; index++) {
   
       let element = Engineerteam[index].name ;
       let element1 =Engineerteam[index].id ;
       let element2 = Engineerteam[index].email ; 
       let element3 = Engineerteam[index].github ;
      
         html += `  <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element}</h5>
          <p class="card-text"> ${element1} .</p>
          <p class="card-text"> ${element2} .</p>
          <p class="card-text">${element3}</p>
        </div>
      </div>`
   
    }
     return html;
   
   
}    
function Internt(){
    let html = ""
    for (let index = 0; index < Internteam.length; index++) {
       let element =  Internteam[index].name ;
       let element1 = Internteam[index].id ;
       let element2 =  Internteam[index].email ; 
       let element3 =  Internteam[index].school ;
      html +=` <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${element}</h5>
          <p class="card-text"> ${element1} .</p>
          <p class="card-text"> ${element2} .</p>
          <p class="card-text">${element3}</p>
        </div>
      </div>`
    }
   return html;
}    

function makefile() {
    console.log(Managerteam);
    console.log(Engineerteam);
    console.log(Internteam);
     let template =  `<!doctype html>
     <html lang="en">
       <head>
         <!-- Required meta tags -->
         <meta charset="utf-8">
         <meta name="viewport" content="width=device-width, initial-scale=1">
     
         <!-- Bootstrap CSS -->
         <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
         <link rel="stylesheet" href=./style.css>
         <title>Team Generator</title>
       </head>
       <body>
         <h1>Team Generator</h1>
        
        manager ${Managert()}


  

       engineer  ${Engineert()}



       intern  ${Internt()}

       
         <!-- Optional JavaScript; choose one of the two! -->
     
         <!-- Option 1: Bootstrap Bundle with Popper -->
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
     
         <!-- Option 2: Separate Popper and Bootstrap JS -->
         <!--
         <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
         <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
         -->
       </body>
     </html> `
     fs.writeFile("index.html", template, (err) => {
        if(err){console.log(err)}
        console.log("success")
    })
};


questions()
// make html with empty body , append to body from template 




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

