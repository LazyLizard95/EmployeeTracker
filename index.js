const inquirer = require('inquirer');
const db = require('./config/connection');
const cTable = require('console.table');

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

function viewAll(sql) {
    sql = `SELECT * FROM departments`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.table(rows);
        }
        returnMain()
    })
}

function viewRoles(sql) {
    sql = `SELECT roles.id, roles.title, roles.salary, departments.name
    AS department
    FROM roles
    LEFT JOIN departments
    ON roles.department_id = departments.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Here are the roles: ");
            console.table(rows);
        }
        returnMain();
    })
}

function viewAllEmployees(sql) {
    sql = `SELECT employees.id, employees.first_name, employees.last_name, employees.role_id, employees.manager_id, departments.name
    AS department
    FROM employees
    LEFT JOIN departments
    ON employees.department_id = departments.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Here are the employees: ");
            console.table(rows);
        }
        returnMain();
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

function returnMain() {
    inquirer.
        prompt([{
            type: "confirm",
            name: 'confirm',
            message: 'Return to main menu?'
        }]).then(data => {
            if (data.confirm === true) {
                startApp();
            } else { viewAll() }
        })

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