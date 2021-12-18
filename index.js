const inquirer = require('inquirer');
const path = require('path');
const db = require('./config/connection');
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
                    addDepartment();
                    break;
                case "Add role":
                    addRole();
                    break;
                case "Add employee":
                    addEmployee();
                    break;
                case "Update employee":
                    updateEmployee();
                    break;
                default:
                    console.log("Case not found");
                    break;

            }
        })
}

function viewAll(){
    console.table(['derpartments'], employee_roster);
    inquirer.
        prompt([{
            type: "confirm",
            name: 'confirm',
            message: 'Return to main menu?'
        }]).then(data =>{
            if(data.confirm === true){
                startApp();
            }else{viewAll()}
        })
    
}

function viewRoles(){

}

function viewAllEmployees(){

}

function addDepartment(){

}

function addRole(){

}

function addEmployee(){

}

function updateEmployee(){

}

//Data.department insert into roles
//data.role insert into r
//data.

startApp();







// ([{
//     type: "list",
//     name: "derpartment",
//     message: "What derpartment do you belong to?",
//     choices: [new inquirer.Separator(), "Design", new inquirer.Separator(), "Production", new inquirer.Separator(), "Development", new inquirer.Separator(), "Release", new inquirer.Separator(), "Sales", new inquirer.Separator(), "Legal"]
// },
// {
//     type: "list",
//     name: "role",
//     message: `What is your role in your department?`
//     choices: [new inquirer.Separator()]  
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