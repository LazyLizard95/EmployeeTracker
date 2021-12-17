const inquirer = require('inquirer');
const path = require('path');
const db = require('config/connection');
const cTable = require('console.table');
function startApp() {
    inquirer
        .prompt([{
            type: "list",
            name: "nav",
            choices: ["View all departments", new inquirer.Separator(), "View all roles", new inquirer.Separator(), "View all employees", new inquirer.Separator(), "Add derpartment", new inquirer.Separator(), "Add role", new inquirer.Separator(), "Add employee", new inquirer.Separator(), "Update employee role"]
        }]).then(data => {
            switch(data.choices){
                case "View all departments":
                    viewAll();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "View all employees":
                    viewAllEmployees();
                    break;
                case "Add derpartment":
                    //function
                    break;
                case "Add role":
                    //function
                    break;
                case "Add employee":
                    //function
                    break;
                case "Update employee":
                    //function
                    break;
                default:
                    console.log("Case not found");
                    break;

            }
        })
}

function viewAll(){
//somelogic
    startApp();
}

function viewRoles(){

}

function viewAllEmployees(){

}


//Data.department insert into roles
//data.role insert into r
//data.

startApp();

console.table([
    {
      name: ,
      age: 10
    }, {
      name: 'bar',
      age: 20
    }
  ]);





// ([{
//     type: "list",
//     name: "derpartment",
//     message: "What derpartment do you belong to?",
//     choices: [new inquirer.Separator(), "Design", new inquirer.Separator(), "Production", new inquirer.Separator(), "Development", new inquirer.Separator(), "Release", new inquirer.Separator(), "Sales", new inquirer.Separator(), "Legal"]
// },
// {
//     type: "input",
//     name: "role",
//     message: `What is your role in your department?`
// },
// {
//     type: "input",
//     name: "firstName",
//     message: "What is your first name?"
// },
// {
//     type: "input",
//     name: "lastName",
//     message: `What is your last name?`
// }
// ])