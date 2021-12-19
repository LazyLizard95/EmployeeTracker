const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');
const viewAll = require('./commands/viewAll');
const viewAllEmployees = require('./commands/viewAllEmployees');
const viewRoles = require('./commands/viewRoles');
const addDepartment = require('./commands/addDepartment');
const addRole = require('./commands/addRole');
const addEmployee = require('./commands/addEmployee');
const updateEmployee = require('./commands/updateEmployee');

function startApp() {
    console.log('Welcome!')
    inquirer
        .prompt([{
            type: "list",
            name: "nav",
            message: "Please choose an option from the menu",
            choices: ["View all departments", new inquirer.Separator(), "View all roles", new inquirer.Separator(), "View all employees", new inquirer.Separator(), "Add derpartment", new inquirer.Separator(), "Add role", new inquirer.Separator(), "Add employee", new inquirer.Separator(), "Update employee role", new inquirer.Separator()]
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
                    addDepartment(sql, params);
                    break;
                case "Add role":
                    addRole(sql, params);
                    break;
                case "Add employee":
                    addEmployee(sql, params);
                    break;
                case "Update employee role":
                    updateEmployee(sql, params);
                    break;
                default:
                    console.log("Case not found");
                    break;

            }
        })
}

function returnMain() {
    inquirer.
        prompt([{
            type: "confirm",
            name: 'confirm',
            message: 'Return to main menu?'
        }]).then(data => {
            if (data.confirm === true) {
                startApp();
            } else { console.log("Program terminated. CRTL + C to close. Goodbye") }
        })

}

startApp();


module.exports = returnMain;




