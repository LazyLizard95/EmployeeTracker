const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');
const viewAll = require('./commands/viewAll');
const viewAllEmployees = require('./commands/viewAllEmployees');
const viewRoles = require('./commands/viewRoles');

function startApp() {
    console.log('Welcome!')
    inquirer
        .prompt([{
            type: "list",
            name: "nav",
            message: "Please choose an option from the menu",
            choices: ["View all departments", new inquirer.Separator(), "View all roles", new inquirer.Separator(), "View all employees", new inquirer.Separator(), "Add derpartment", new inquirer.Separator(), "Add role", new inquirer.Separator(), "Add employee", new inquirer.Separator(), "Update employee role"]
        }]).then(data => {
            let sql;
            let params;
            switch (data.nav) {
                case "View all departments":
                    viewAll(sql);
                    break;
                case "View all roles":
                    viewRoles(sql);
                    break;
                case "View all employees":
                    viewAllEmployees(sql);
                    break;
                case "Add derpartment":
                    addDepartment(sql);
                    break;
                case "Add role":
                    addRole(sql);
                    break;
                case "Add employee":
                    addEmployee(sql);
                    break;
                case "Update employee":
                    updateEmployee(sql);
                    break;
                default:
                    console.log("Case not found");
                    break;

            }
        })
}

function addDepartment(sql) {

}

function addRole(sql) {

}

function addEmployee(sql) {

}

function updateEmployee(sql) {

}




//Data.department insert into roles
//data.role insert into r
//data.

startApp();


module.exports = startApp;




